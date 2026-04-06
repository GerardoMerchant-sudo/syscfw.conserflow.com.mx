<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;
use App\Http\Helpers\Utilidades;

class Status
{
    public static function success($nombre = "", $data = [])
    {
        return response()->json([
            'status' => true,
            $nombre => $data
        ], 200);
    }

    //error con excepción 500
    public static function Error($exception, $mensaje = "procesar la solicitud")
    {
        //log del error
        Log::error('[STATUS ERROR]',[
            'Mensaje'   => $mensaje,
            'error'     => $exception->getMessage(),
            'line'      => $exception->getLine(),
            'file'      => $exception->getFile()
        ]);

        Utilidades::errors($exception);

        return response()->json([
            'status'    => false,
            'message'   => 'Error al ' . $mensaje
        ], 500);
    }

    //error con excepcion 400

    public static function Error2($mensaje, $code = 400)
    {
        return response()->json([
            'status'    =>   false,
            'message'   =>  $mensaje
        ],  $code);
    }
}