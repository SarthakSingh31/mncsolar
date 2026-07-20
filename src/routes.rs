use axum::extract::State;
use axum::http::{header, StatusCode};
use axum::response::{Html, IntoResponse, Response};

use crate::{data, AppState};
use serde_json::{json, Value};

pub struct AppError(handlebars::RenderError);

impl From<handlebars::RenderError> for AppError {
    fn from(e: handlebars::RenderError) -> Self {
        AppError(e)
    }
}

impl IntoResponse for AppError {
    fn into_response(self) -> Response {
        eprintln!("template render error: {}", self.0);
        (StatusCode::INTERNAL_SERVER_ERROR, "internal server error").into_response()
    }
}

fn base_ctx(title: &str, description: &str, active: &str) -> Value {
    json!({
        "title": title,
        "description": description,
        "nav": data::nav_items(active),
        "contact": data::contact(),
        "service_areas": data::service_areas(),
    })
}

type PageResult = Result<Html<String>, AppError>;

pub async fn home(State(hb): State<AppState>) -> PageResult {
    let mut ctx = base_ctx(
        "MNC Solar - Solar Solutions for Jharkhand & Bihar",
        "MNC Solar provides reliable solar solutions across Jharkhand and Bihar. On-grid, off-grid, and hybrid systems from 2 KW to 100 KW. PMSG Govt of Bihar approved vendor. ISO 9001:2015 certified.",
        "/",
    );
    ctx["stats"] = data::stats();
    ctx["services"] = data::services();
    Ok(Html(hb.render("pages/home", &ctx)?))
}

pub async fn why_solar(State(hb): State<AppState>) -> PageResult {
    let ctx = base_ctx(
        "Why Go Solar? | MNC Solar",
        "Discover the financial, environmental, and technical case for solar energy. Learn how a 5 KW solar plant can save you ₹60 lakh over 30 years. PMSG Govt of Bihar approved vendor. ISO 9001:2015 certified.",
        "/why-solar",
    );
    Ok(Html(hb.render("pages/why-solar", &ctx)?))
}

pub async fn why_mnc_solar(State(hb): State<AppState>) -> PageResult {
    let ctx = base_ctx(
        "Why MNC Solar | MNC Solar",
        "Discover why MNC Solar is Jharkhand & Bihar's trusted solar partner — proven expertise, 200+ installations. PMSG Govt of Bihar approved vendor. ISO 9001:2015 certified.",
        "/why-mnc-solar",
    );
    Ok(Html(hb.render("pages/why-mnc-solar", &ctx)?))
}

pub async fn services(State(hb): State<AppState>) -> PageResult {
    let mut ctx = base_ctx(
        "Solar Services | MNC Solar",
        "On-grid, off-grid, hybrid, and institutional solar solutions from 2 KW to 100 KW. Professional installation across Jharkhand and Bihar. PMSG Govt of Bihar approved vendor. ISO 9001:2015 certified.",
        "/services",
    );
    ctx["services"] = data::services();
    Ok(Html(hb.render("pages/services", &ctx)?))
}

pub async fn contact(State(hb): State<AppState>) -> PageResult {
    let ctx = base_ctx(
        "Contact Us | MNC Solar",
        "Get in touch with MNC Solar for solar installation in Jharkhand and Bihar. Call +91 9643805595 or visit our office in Patna. PMSG Govt of Bihar approved vendor. ISO 9001:2015 certified.",
        "/contact",
    );
    Ok(Html(hb.render("pages/contact", &ctx)?))
}

pub async fn sitemap() -> Response {
    let base = data::base_url();
    let urls: String = data::NAV_ITEMS
        .iter()
        .map(|(href, _)| {
            let path = if *href == "/" { "" } else { href };
            format!("  <url><loc>{base}{path}</loc></url>\n")
        })
        .collect();
    let body = format!(
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n{urls}</urlset>\n"
    );
    ([(header::CONTENT_TYPE, "application/xml")], body).into_response()
}

pub async fn robots() -> Response {
    let base = data::base_url();
    let body = format!("User-agent: *\nAllow: /\nSitemap: {base}/sitemap.xml\n");
    ([(header::CONTENT_TYPE, "text/plain")], body).into_response()
}
