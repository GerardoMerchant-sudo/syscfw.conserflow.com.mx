<?php

use Illuminate\Support\Facades\Route;

Route::group(["middleware" => "auth"], function ()
{
    // Articulos
    Route::get("almacen/articulos/obtener", "ArticuloController@ObtenerArticulosServer");
    Route::get("almacen/entradas/ocpendientes", "Almacen\EntradasRestantesController@OCPendientes");

    // Reportes
    Route::get("almacen/reportes/retornosgeneral", "EntradaSalidaController@ReporteRetornos");
    Route::get("almacen/ep/reporte", "EntradasPendientesController@Reporte");

    // Partidas Salida
    Route::get("almacen/salidas/partidasserver/{id}", "PartidasSalidasController@ObtenerPartidasServer");

    // Reportes Contabilidad
    Route::get("alamcen/reportes/inventariocontabilidad/{anio}/{mes}", "Almacen\ReportesContabilidadController@Salidas");
    Route::get("alamcen/reportes/existenciascontabilidad/{anio}/{mes}", "Almacen\ReportesContabilidadController@Existencias");

    // Entradas
    Route::get("almacen/entradas/{id}", "EntradaController@obtenerocs");

    //mantenimiento 
    Route::resource("maintenance","Maintenance\MaintenanceRequestController");
    Route::get("maintenance/export/{id}","Maintenance\MaintenanceRequestController@ExportRequestM");
    Route::post("maintenance/responsible", "Maintenance\MaintenanceRequestController@addMaintenance");
    Route::get('maintenance/binnacle/export',  'Maintenance\MaintenanceRequestController@exportBinnacleExcel');
    Route::get('/mantenimiento/stats', 'Maintenance\MaintenanceRequestController@stats');
    Route::get('employee/', 'Maintenance\MaintenanceRequestController@employee');
    
    //loow
    Route::resource("toolsLow", "Maintenance\ToolLowController");
    Route::get("loow/export/{id}","Maintenance\ToolLowController@exportPDFLoow");
});
