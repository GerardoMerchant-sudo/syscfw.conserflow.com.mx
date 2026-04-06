<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Reporte de proveedores</title>
</head>

<body>

    <table class="borde">
        <tr>
            <td class="borde" colspan="12" style="color: #0070c0;">
                <b>CONSERFLOW S.A. DE C.V.</b>
            </td>
        </tr>
        <tr>
            <td rowspan="3" colspan="2"></td>
            <td class="borde" rowspan="3" colspan="8">
                <b>CATÁLOGO DE PROVEEDORES</b>
            </td>
            <td>CÓDIGO</td>
            <td>PCO-02/F-02</td>
        </tr>
        <tr>
            <td>REVISIÓN</td>
            <td>02</td>
        </tr>
        <tr>
            <td>EMISIÓN</td>
            <td>14.DIC.24</td>
        </tr>
        <tr>
            <td></td>
        </tr>
        <thead>
            <tr>
                <th style="background-color : #0070C0; color:white" width="40"><b>No.</b></th>
                <th style="background-color : #0070C0; color:white" width="40"><b>RAZÓN SOCIAL</b></th>
                <th style="background-color : #0070C0; color:white" width="35"><b>NOMBRE COMERCIAL</b></th>
                <th style="background-color : #0070C0; color:white" width="16"><b>RFC</b></th>
                <th style="background-color : #0070C0; color:white" width="40"><b>SUMINISTRA</b></th>
                <th style="background-color : #0070C0; color:white" width="25"><b>DIRECCIÓN</b></th>
                <th style="background-color : #0070C0; color:white" width="30"><b>CONTACTO</b></th>
                <th style="background-color : #0070C0; color:white" width="20"><b>TELÉFONO</b></th>
                <th style="background-color : #0070C0; color:white" width="30"><b>CORREO ELECTRÓNICO</b></th>
                <th style="background-color : #0070C0; color:white" width="25"><b>PÁGINA</b></th>
                <th style="background-color : #0070C0; color:white" width="25"><b>CRÉDITO</b></th>
                <th style="background-color : #0070C0; color:white" width="10"><b>CATEGORÍA DEL PROVEEDOR</b></th>

        </thead>
        <tbody>
            @foreach($proveedores as $i=> $proveedor)
            <tr>
                <td>{{$i+1}}</td>
                <td>{{$proveedor["razon_social"]}}</td>
                <td>{{$proveedor["nombre"]}}</td>
                <td>{{$proveedor["rfc"]}}</td>
                <td>{{$proveedor["giro"]}}</td>
                <td>{{$proveedor["direccion"]}}</td>
                <td>{{$proveedor["contacto"]}}</td>
                <td>{{$proveedor["telefono"]}}</td>
                <td>{{strtolower($proveedor["correo"])}}</td>
                <td>{{strtolower($proveedor["pagina"])}}</td>
                <td>{{ $proveedor["limite_credito"] > 0 ? 'SI' : 'NO' }}</td>
                @if($proveedor["total_evaluacion"]==null)
                <td>SIN EVALUACIÓN</td>
                @elseif($proveedor["total_evaluacion"]>=54)
                <td>APROBADO</td>
                @elseif($proveedor["total_evaluacion"]>=36 && $proveedor["total_evaluacion"]<=53) <td>CONDICIONADO</td>
                    @else
                    <td>NO APTO</td>
                    @endif
            </tr>
            @endforeach
        </tbody>
    </table>

</body>

</html>