mod abrir_enlace;
mod apagar_encender;
mod estado_inicio;
mod servicios_genericos;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            servicios_genericos::obtener_servicios_genericos,
            apagar_encender::administrar_servicio_generico,
            estado_inicio::obtener_tipo_inicio_servicio,
            estado_inicio::cambiar_tipo_inicio_servicio,
            abrir_enlace::abrir_enlace
        ])
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
