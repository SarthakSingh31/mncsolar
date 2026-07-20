# MNC Solar website

Marketing site for MNC Solar, written in Rust. An [axum](https://github.com/tokio-rs/axum)
server renders [handlebars](https://github.com/sunng87/handlebars-rust) templates and
serves static assets.

## Layout

- `src/` — server code (`main.rs` bootstrap/router, `routes.rs` page handlers,
  `templates.rs` template registry, `data.rs` shared site data)
- `templates/` — handlebars templates: `layout.hbs` base layout, `partials/`
  (header, footer, banner, accordion, icons), `pages/` (one per route)
- `static/` — stylesheet, JS, fonts, favicon (served under `/static`, 1h cache)
- `public/` — photos, videos, and business PDFs (served at the site root, 1w cache)

## Running

```sh
cargo run                      # dev
cargo build --release          # release binary at target/release/mncsolar
```

The binary loads `templates/`, `static/`, and `public/` relative to the current
working directory — run it from the repo root.

Environment variables:

- `PORT` — listen port (default 8080)
- `SITE_BASE_URL` — base URL used in sitemap.xml/robots.txt (default `https://mncsolar.com`)
- `MNC_DEV=1` — reload templates from disk on every request (dev only; note that
  templates/partials *added* while running still require a restart)
