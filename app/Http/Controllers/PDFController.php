<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;

class PDFController extends Controller
{
    public function getPDF(){

        $name = 'Juan Banana';
        $pdf = PDF:: loadView('PDF_Example', compact('name'));

        return $pdf->stream('prueba.pdf');

        // por que funciona en  downloas y no stream?
        

    }
}
