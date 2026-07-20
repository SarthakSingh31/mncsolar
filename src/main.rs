mod data;
mod routes;
mod templates;

use std::sync::Arc;

use axum::http::{header, HeaderValue};
use axum::routing::get;
use axum::Router;
use tower::ServiceBuilder;
use tower_http::compression::CompressionLayer;
use tower_http::services::ServeDir;
use tower_http::set_header::SetResponseHeaderLayer;

pub type AppState = Arc<handlebars::Handlebars<'static>>;

#[tokio::main]
async fn main() {
    let state: AppState = Arc::new(templates::registry());

    // /static (css/js/fonts) changes with deploys: cache for an hour.
    // public/ (photos, videos, PDFs) is immutable in practice: cache for a week.
    let static_files = ServiceBuilder::new()
        .layer(SetResponseHeaderLayer::if_not_present(
            header::CACHE_CONTROL,
            HeaderValue::from_static("public, max-age=3600"),
        ))
        .service(ServeDir::new("static"));
    let public_files = ServiceBuilder::new()
        .layer(SetResponseHeaderLayer::if_not_present(
            header::CACHE_CONTROL,
            HeaderValue::from_static("public, max-age=604800"),
        ))
        .service(ServeDir::new("public"));

    let app = Router::new()
        .route("/", get(routes::home))
        .route("/why-solar", get(routes::why_solar))
        .route("/why-mnc-solar", get(routes::why_mnc_solar))
        .route("/services", get(routes::services))
        .route("/contact", get(routes::contact))
        .route("/sitemap.xml", get(routes::sitemap))
        .route("/robots.txt", get(routes::robots))
        .nest_service("/static", static_files)
        .fallback_service(public_files)
        .layer(CompressionLayer::new())
        .with_state(state);

    let port: u16 = std::env::var("PORT")
        .ok()
        .and_then(|p| p.parse().ok())
        .unwrap_or(8080);
    let listener = tokio::net::TcpListener::bind(("0.0.0.0", port))
        .await
        .expect("failed to bind");
    println!("listening on http://0.0.0.0:{port}");

    axum::serve(listener, app)
        .with_graceful_shutdown(async {
            tokio::signal::ctrl_c().await.ok();
        })
        .await
        .expect("server error");
}
