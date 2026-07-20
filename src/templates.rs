use handlebars::{DirectorySourceOptions, Handlebars};

pub fn registry() -> Handlebars<'static> {
    let mut hb = Handlebars::new();
    if std::env::var("MNC_DEV").is_ok() {
        hb.set_dev_mode(true);
    }
    hb.register_templates_directory("templates", DirectorySourceOptions::default())
        .expect("failed to load templates/ (run from the repo root)");
    hb
}
