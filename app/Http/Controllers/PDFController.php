<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PDF;

class PDFController extends Controller
{
    public function getPDF(){

        $name = 'Juan Banana';
        $pdf = PDF:: loadView('PDF_Example', compact('name'));

        return $pdf->stream('prueba.pdf');
    }
}
