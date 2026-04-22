<?php

namespace App\Http\Controllers;

use App\CalidadModels\EquiposCatalogo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use \App\Http\Helpers\Utilidades;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\Auth;

class SalidaResguardoController extends Controller
{
  //

  public function getLotes(Request $request)
  {
    try
    {
      $lotes = \App\LoteAlmacen::join('articulos AS a', 'a.id', 'lote_almacen.articulo_id')
        ->join('stocks AS s', 's.id', 'lote_almacen.stocke_id')
        ->join('proyectos AS p', 'p.id', 's.proyecto_id')
        ->where(function ($query) use ($request)
        {
          $query->Where('a.descripcion', 'LIKE', '%' . $request->des . '%')
            ->orWhere('a.nombre', 'LIKE', '%' . $request->des . '%')
            ->orWhere('a.codigo', 'LIKE', '%' . $request->des . '%');
        })
        ->where('lote_almacen.cantidad', '>', '0')
        ->select(
          'lote_almacen.*',
          'a.descripcion',
          'a.nombre',
          'a.codigo',
          'a.marca',
          "a.id as a_id_calib",
          'a.unidad',
          'p.nombre_corto'
        )
        ->get();

      return response()->json($lotes);
    }
    catch (\Throwable $e)
    {
      Utilidades::errors($e);
    }
  }

  public function Guardar(Request $request)
  {
    try
    {
      DB::beginTransaction();

      // SalidasResguardo
      // Partidas
      //3 para salidas a resguardo en tipo
      $id = Auth::user();

      $salida = \App\SalidasResguardo::where('proyecto_id', $request->proyecto)
        ->where('fecha', $request->fecha)
        ->where('empleado_solicita_id', $request->empleado)
        ->first();
      if (isset($salida) == false)
      {
        // code...
        $salida = new \App\SalidasResguardo();
        $salida->fecha = $request->fecha;
        $salida->folio = $this->generarFolio($request->proyecto);
        $salida->proyecto_id = $request->proyecto;
        $salida->tiposalida_id = 3;
        $salida->empleado_entrega_id = $request->empleado_entrega_id;
        $salida->empleado_solicita_id = $request->empleado;
        $salida->supervisores_proyectos_id = $this->getSupervisor($request->proyecto_id);
        Utilidades::auditar($salida, $salida->id); 
        $salida->save();
      }

      // return response()->json($request->data);

      foreach ($request->data as $key => $value)
      {
        ////////////////////////////
        /*** Movimientos ***/
        $partidas = \App\Partidas::where('lote_id', $value['id'])->where('tiposalida_id', '3')
          ->where('salida_id', $salida->id)->first();

        if (isset($partidas) == true)
        {
          $partidas->cantidad = $partidas->cantidad + $value['cantidad'];
          $partidas->update();
        }
        else
        {
          $partidas = new \App\Partidas();
          $partidas->salida_id = $salida->id;
          $partidas->tiposalida_id = 3;
          $partidas->lote_id = $value['id'];
          $partidas->cantidad = $value['cantidad'];
          $partidas->save();
        }

        $tipo_salida_nombre = "Resg";

        $lote_almacen = \App\LoteAlmacen::where('id', '=', $partidas->lote_id)->first();
        $cantidadresta = $lote_almacen->cantidad - $value['cantidad'];
        $lote_almacen->cantidad = $cantidadresta;
        Utilidades::auditar($lote_almacen, $lote_almacen->id, 2);
        $lote_almacen->update();

        $stokearticulo = \App\StockArticulo::where('articulo_id', '=', $lote_almacen->articulo_id)
          ->where('stocke_id', '=', $lote_almacen->stocke_id)->first();
        $cantidadrestastoke = $stokearticulo->cantidad - $value['cantidad'];
        $stokearticulo->cantidad = $cantidadrestastoke;
        Utilidades::auditar($stokearticulo, $stokearticulo->id, 2);
        $stokearticulo->update();

        $existencias = \App\Existencia::where('id_lote', '=', $lote_almacen->lote_id)
          ->where('articulo_id', '=', $lote_almacen->articulo_id)->first();
        if ($existencias == null)
        {
          return response()->json(new Response(500, "Artículo sin existencias en el lote indicado", 0, false));
        }
        $cantidadrestaexistencia = $existencias->cantidad - $value['cantidad'];
        $existencias->cantidad = $cantidadrestaexistencia;
        Utilidades::auditar($existencias, $existencias->id, 2);
        $existencias->update();

        $stok_request = DB::table('stocks')->where('proyecto_id', $request->proyecto)->first();
        $stocks = \App\Stock::where('id', '=', $stokearticulo->stocke_id)->first();
        $stk_id = 0;
        if ($stok_request->id != $stocks->id)
        {
          $stk_id = $stok_request->id;
          $proyectos = \App\Proyecto::where('id', '=', $stok_request->proyecto_id)->first();
        }
        else
        {
          $stk_id = $stocks->id;
          $proyectos = \App\Proyecto::where('id', '=', $stocks->proyecto_id)->first();
        }

        // Movimiento
        $hoy = date("Y-m-d");
        $hora = date("H:i:s");
        $movimiento = new \App\Movimiento();
        $movimiento->cantidad = $value['cantidad'];
        $movimiento->fecha = $hoy;
        $movimiento->hora = $hora;
        $movimiento->tipo_movimiento = 'Salida ';
        $movimiento->folio = 'Salida-' . $lote_almacen->articulo_id . ' a ' . $tipo_salida_nombre;
        $movimiento->proyecto_id = $proyectos->id;
        $movimiento->lote_id =  $lote_almacen->id;
        $movimiento->stocke_id =  $stk_id;
        $movimiento->almacene_id = $lote_almacen->almacene_id;
        $movimiento->stand_id = ($lote_almacen->stand_id == 'null') ? null : $lote_almacen->stand_id;
        $movimiento->nivel_id = ($lote_almacen->nivel_id == 'null') ? null : $lote_almacen->nivel_id;
        $movimiento->articulo_id = $lote_almacen->articulo_id;
        Utilidades::auditar($movimiento, $movimiento->id, 2);
        $movimiento->save();

        // Actualizar equipo de calibración
        $equipocalib = EquiposCatalogo::where("articulo_id", $lote_almacen->articulo_id)->first();
        if ($equipocalib != null)
        {
          $equipocalib->condicion = 2; // En resguardo
          $equipocalib->update();
        }
      }

      /////////////////////////////////

      DB::commit();
      return Status::Success();
    }
    catch (\Throwable $e)
    {
      DB::rollBack();
      Utilidades::errors($e);
    }
  }

  public function getSupervisor($id)
  {
    $supervisor = DB::table('supervisores_proyectos')
      ->where('proyecto_id', $id)
      ->where('activo', '1')
      ->first();

    return isset($supervisor) == false ? 0 : $supervisor->id;
  }

  public function generarFolio($id)
  {
    // str_pad($folio->consecutivo, 3, "0", STR_PAD_LEFT)
    $d = DB::table('salidasresguardo')->where('proyecto_id', $id)->get();
    $folio = str_pad((count($d) + 1), 4, "0", STR_PAD_LEFT);

    return $folio;
  }

  //listo no mover
  public function getEncabezados()
  {
    try
    {
      $data = DB::table('salidasresguardo AS sr')
        ->join('proyectos AS p', 'p.id', 'sr.proyecto_id')
        ->leftJoin('empleados AS e', 'e.id', 'sr.empleado_solicita_id')
        ->where('sr.activo', 1)
        ->whereNotNull('sr.empleado_solicita_id')
        ->select(
          DB::raw("CONCAT(e.nombre,' ',e.ap_paterno,' ',e.ap_materno) AS empleado_solicita"), 
          'e.id',
          'sr.empleado_solicita_id')
        ->whereNotNull('sr.empleado_solicita_id')
        ->groupBy('sr.empleado_solicita_id','e.id', 'e.nombre', 'e.ap_paterno', 'e.ap_materno')
        ->get();

      return response()->json($data);
    }
    catch (\Throwable $e)
    {
      Utilidades::errors($e);
    }
  }

  public function getPartidas($id)
  {
    try
    {

      $partida = DB::table('partidas AS p')
        ->join('salidasresguardo AS sr', 'sr.id', 'p.salida_id')
        ->join('proyectos AS pr', 'pr.id', 'sr.proyecto_id')
        ->join('lote_almacen AS la', 'la.id', 'p.lote_id')
        ->join('articulos AS a', 'la.articulo_id', 'a.id')
        ->select('p.*', 'a.descripcion', 'sr.fecha', 'pr.nombre_corto')
        ->where('p.tiposalida_id', '3')
        ->where('sr.activo', 1)  // <-- agregar
        ->where('sr.empleado_solicita_id', $id)
        ->whereColumn('p.cantidad',">","p.cantidad_retorno")
        ->get();
      return response()->json($partida);
    }
    catch (\Throwable $e)
    {
      Utilidades::errors($e);
    }
  }

  public function EliminarP($id)
{
    try
    {
        DB::beginTransaction();

        // Obtener la partida con sus relaciones necesarias
        $partida = \App\Partidas::findOrFail($id);

        // Solo se puede eliminar si no tiene retornos registrados
        if ($partida->cantidad_retorno > 0)
        {
            return response()->json([
                "status" => false,
                "error"  => "No se puede eliminar una partida que ya tiene retornos registrados."
            ]);
        }

        // Obtener lote_almacen para revertir cantidades
        $loteAlmacen = \App\LoteAlmacen::findOrFail($partida->lote_id);

        // 1. Restaurar cantidad en lote_almacen
        $loteAlmacen->cantidad += $partida->cantidad;
        Utilidades::auditar($loteAlmacen, $loteAlmacen->id, 2);
        $loteAlmacen->update();

        // 2. Restaurar cantidad en stock_articulos
        $stockArticulo = \App\StockArticulo::where('articulo_id', $loteAlmacen->articulo_id)
            ->where('stocke_id', $loteAlmacen->stocke_id)
            ->firstOrFail();
        $stockArticulo->cantidad += $partida->cantidad;
        Utilidades::auditar($stockArticulo, $stockArticulo->id, 2);
        $stockArticulo->update();

        // 3. Restaurar cantidad en existencias
        $existencias = \App\Existencia::where('id_lote', $loteAlmacen->lote_id)
            ->where('articulo_id', $loteAlmacen->articulo_id)
            ->first();
        if ($existencias != null)
        {
            $existencias->cantidad += $partida->cantidad;
            Utilidades::auditar($existencias, $existencias->id, 2);
            $existencias->update();
        }

        // 4. Registrar movimiento de reversión
        $salida = \App\SalidasResguardo::findOrFail($partida->salida_id);
        $proyectos = \App\Proyecto::findOrFail($salida->proyecto_id);

        $movimiento = new \App\Movimiento();
        $movimiento->cantidad       = $partida->cantidad;
        $movimiento->fecha          = date("Y-m-d");
        $movimiento->hora           = date("H:i:s");
        $movimiento->tipo_movimiento = 'Entrada';
        $movimiento->folio          = 'Cancelacion-Resg-' . $loteAlmacen->articulo_id;
        $movimiento->proyecto_id    = $proyectos->id;
        $movimiento->lote_id        = $loteAlmacen->id;
        $movimiento->stocke_id      = $loteAlmacen->stocke_id;
        $movimiento->almacene_id    = $loteAlmacen->almacene_id;
        $movimiento->stand_id       = ($loteAlmacen->stand_id == 'null') ? null : $loteAlmacen->stand_id;
        $movimiento->nivel_id       = ($loteAlmacen->nivel_id == 'null') ? null : $loteAlmacen->nivel_id;
        $movimiento->articulo_id    = $loteAlmacen->articulo_id;
        Utilidades::auditar($movimiento, $movimiento->id, 2);
        $movimiento->save();

        // 5. Revertir condición del equipo de calibración si aplica
        $equipocalib = EquiposCatalogo::where("articulo_id", $loteAlmacen->articulo_id)->first();
        if ($equipocalib != null)
        {
            $equipocalib->condicion = 1; // Activo
            $equipocalib->update();
        }

        // 6. Eliminar la partida
        $partida->delete();

        // 7. Si el encabezado ya no tiene partidas, eliminarlo también
        $partidasRestantes = \App\Partidas::where('salida_id', $salida->id)
            ->where('tiposalida_id', 3)
            ->count();
        if ($partidasRestantes === 0)
        {
            $salida->delete();
        }

        DB::commit();
        return response()->json(["status" => true]);
    }
    catch (\Throwable $e)
    {
        DB::rollBack();
        Utilidades::errors($e);
    }
}

  public function RetornoResguardo(Request $request)
  {
    try
    {
      DB::beginTransaction();

      $partidas_b = DB::table('partidas AS p')
        ->join('lote_almacen AS la', 'la.id', 'p.lote_id')
        ->join('stocks AS s', 's.id', 'la.stocke_id')
        ->select('la.*', 's.proyecto_id', 'p.salida_id AS salidaId', 'p.tiposalida_id AS tipoSalida')
        ->where('p.id', $request->id)->first();

      // echo $request->articulo;
      $validos = $request->cantidad - $request->cantidad_defectuoso;
      $aux_articulo = $partidas_b->articulo_id;

      $fecha = date('Y-m-d');
      $SalidaRetorno = \App\SalidaRetorno::where('proyectoId', $partidas_b->proyecto_id)
        ->where('fecha', $fecha)->first();

      if (isset($SalidaRetorno) == false)
      {
        $SalidaRetorno = new \App\SalidaRetorno();
        $SalidaRetorno->fecha = $fecha;
        $SalidaRetorno->comentarios = 'Retorno Resguardo';
        $SalidaRetorno->tipo_retorno = 3;
        $SalidaRetorno->estado = 1;
        $SalidaRetorno->proyectoId = $partidas_b->proyecto_id;
        Utilidades::auditar($SalidaRetorno, $SalidaRetorno->id);
        $SalidaRetorno->save();
      }
      //Guardar partida
      $partidaRetorno = new \App\PartidasRetorno();
      $partidaRetorno->articulo_id = $partidas_b->articulo_id;
      $partidaRetorno->cantidad_entrada = $request->cantidad;
      $partidaRetorno->cantidad_defectuoso = $request->cantidad_defectuoso;
      $partidaRetorno->proyecto_id = $partidas_b->proyecto_id;
      $partidaRetorno->salida_id = $partidas_b->salidaId;
      $partidaRetorno->tipo_salida = $partidas_b->tipoSalida;
      $partidaRetorno->salida_retorno_id = $SalidaRetorno->id;
      $partidaRetorno->partida_id = $request->id;
      $partidaRetorno->save();
      // Aumentar en almacen
      // Actualizar cantidad en partida
      $partidaActualizar = \App\Partidas::findOrFail($request->id);
      $partidaActualizar->cantidad_retorno += $request->cantidad;
      Utilidades::auditar($partidaActualizar, $partidaActualizar->id);
      $partidaActualizar->save();

      // Verificar cantidad entrada con salida

      // if($partidaActualizar->cantidad_retorno>$partidaActualizar->cantidad)
      // {
      //     DB::rollback();
      //     return response()->json(["status"=>false,"error"=>"Cantidad de retorno excedida"]);
      //     // throw new Exception("Cantidad de retorono excedida");
      // }

      // Actualizar lote_almacen
      $loteAlmacen = \App\LoteAlmacen::findOrFail($partidas_b->id);
      $loteAlmacen->cantidad += $validos;
      Utilidades::auditar($loteAlmacen, $loteAlmacen->id);
      $loteAlmacen->save();

      // existencias
      $existencias = \App\Existencia::where('id_lote', $partidas_b->lote_id)->first();
      $existencias->cantidad += $request->cantidad;
      Utilidades::auditar($existencias, $existencias->id);
      $existencias->save();

      // Movimientos

      $movimiento = new \App\Movimiento();
      $movimiento->cantidad = $request->cantidad;
      $movimiento->fecha = date("Y-m-d");
      $movimiento->hora = date("h:i:s");
      $movimiento->tipo_movimiento = "Retorno";
      $movimiento->folio = "RT-0" . $request->id . "-" . $partidas_b->articulo_id;
      $movimiento->proyecto_id = $partidas_b->proyecto_id;
      $movimiento->lote_id = $partidas_b->id;
      $movimiento->stocke_id = $partidas_b->stocke_id;
      $movimiento->almacene_id = $partidas_b->almacene_id;
      $movimiento->stand_id = $partidas_b->stand_id;
      $movimiento->nivel_id = $partidas_b->nivel_id;
      $movimiento->articulo_id = $partidaRetorno->articulo_id;
      Utilidades::auditar($movimiento, $movimiento->id);
      $movimiento->save();

      //Stock articulos
      $stock = \App\StockArticulo::where("stocke_id", "=", $partidas_b->stocke_id)
        ->where("articulo_id", "=", $partidas_b->articulo_id)
        ->firstOrFail();

      $stock->cantidad += $validos;
      Utilidades::auditar($stock, $stock->id);
      $stock->save();

      // Actualizar equipo de calibración
      $equipocalib = EquiposCatalogo::where("articulo_id", $partidas_b->articulo_id)->first();
      if ($equipocalib != null)
      {
        $equipocalib->condicion = 1; // Activo
        $equipocalib->update();
      }
      $partidaActualizar->empleado_recibe_id = $request->empleado_recibe_id;
      $partidaActualizar->fecha_devolucion = $request->fecha_devolucion;
      $partidaActualizar->save();
      DB::commit();

      //Actualizar cantidad en almacen
      return response()->json(["status"      => true]);
    }
    catch (\Throwable $e)
    {
      DB::rollBack();
      Utilidades::errors($e);
    }
  }


  public function Descargar($id)
  {
    $empleado_id = $id;
    $arreglo = [];
    $empleado = DB::table('empleados AS e')
      ->join('puestos AS p', 'p.id', 'e.puesto_id')
      ->select('e.*', 'p.nombre AS puesto', 'p.area')
      ->where('e.id', $id)
      ->first();

    $salida_resguardo = DB::table('partidas AS p')
    ->join('lote_almacen AS la', 'la.id', 'p.lote_id')
    ->join('articulos AS a', 'a.id', 'la.articulo_id')
    ->join('salidasresguardo AS sr', 'sr.id', 'p.salida_id')
    ->join('proyectos AS pr', 'pr.id', 'sr.proyecto_id')
    ->leftJoin('empleados AS ee', 'ee.id', 'sr.empleado_entrega_id')
    ->leftJoin('empleados AS er', 'er.id', 'p.empleado_recibe_id') 
    ->where('p.tiposalida_id', '3')
    ->where('sr.activo', 1)  
    ->where('sr.empleado_solicita_id', $empleado_id)
    ->select(
      'p.*', 'sr.fecha', 'sr.proyecto_id', 'pr.nombre_corto', 'a.descripcion', 'a.unidad',
      'p.fecha_devolucion', 
      DB::raw("CONCAT(COALESCE(ee.nombre,''),' ',COALESCE(ee.ap_paterno,''),' ',COALESCE(ee.ap_materno,'')) AS nombre_entrega"),
      DB::raw("CONCAT(COALESCE(er.nombre,''),' ',COALESCE(er.ap_paterno,''),' ',COALESCE(er.ap_materno,'')) AS nombre_recibe")
  )
    ->get();

    foreach ($salida_resguardo as $key => $value)
    {
      $retorno = DB::table('partidas_retorno AS pr')
      ->leftJoin('salidas_retorno AS sr', 'sr.id', 'pr.salida_retorno_id')
      ->where('pr.partida_id', $value->id)
      ->select(
        DB::raw('SUM(pr.cantidad_entrada) as total_retorno'),
        DB::raw('MAX(sr.fecha) as fecha_devolucion')
      )
      ->first();

    $arreglo[] = [
        'salida' => $value,
        'retorno' => $retorno,
      ];
    }

    // return response()->json($arreglo);

    // $data = [];
    $pdf = PDF::loadView('pdf.resguardo', compact('arreglo', 'empleado'));
    $pdf->getDomPDF()->set_option("enable_php", true);

    $pdf->setPaper("letter", "portrait");
    return $pdf->stream();
  }
}
