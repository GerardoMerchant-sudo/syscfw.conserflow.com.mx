<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @page {
            margin: 0; /* Quita márgenes de la página */
        }
        body {
            margin: 0;
            padding: 0;
            font:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;    
        }
        .membrete-top {
            position: absolute;
            width: 100%;
            height: 4.7cm;       
        }
        .membrete-top img {
            width: 100%;
            height: 100%
        }

        .logo{
            position: absolute;
            top: 1.4cm;
            left: 1.27cm;
        }
        .logo img{
            width: 200px;
        }

        .leyenda{
            position:absolute;
            top: 1cm;
            right: 1.27cm;
            font-size: 14px;
            text-align: right;
        }
        
        .membrete-bottom {
            position: absolute;
            width: 100%;
            bottom: -2cm;
            height: 5cm;
        }

        .membrete-bottom img {
        width: 100%;
            height: 100%;
        }

        .content {
            position: relative;
            padding-top: 5.1cm;
            padding-left: 1.27cm;
            padding-right: 1.27cm;
            padding-bottom: 4.5cm;
        }

        
    </style>
</head>
<body>
    <div class="membrete-top">
        <img src="{{ public_path('img/menbrete_cfw.png') }}" alt="membrete">
    </div>

    <div class="logo">
        <img src="{{ public_path('img/conserflow.png') }}" alt="logo">
    </div>

    <div class="leyenda">
        <strong>Conserflow S.A de C.V.</strong><br>
        calle Mezquite 5, col. Santa Clara<br>
        Santiago Miahuatlán,<br> Puebla CP 75820
    </div>

    <div class="membrete-bottom">
        <img src="{{ public_path('img/menbrete_cfw.png') }}">
    </div>

    <div class="content">
        <p><strong>{{$name}}</strong></p>

        <p>Estimado proveedor,</p>

        <p>
            Le informamos que, de acuerdo con nuestros lineamientos internos, se realizó la Evaluación y/
            Reevaluación de Proveedores. Las categorías que fueron evaluadas, son las siguientes:
        </p>

          <p>
            a) Atención telefónica / correo electrónico<br>
            b) Atención comercial<br>
            c) Servicio de Administración y Facturación<br>
            d) Producto y servicio
        </p>

        <p>Los resultados se clasifican de acuerdo los siguientes parámetros:</p>

        <table>
            <tr>
                <td width="20%">54 a 72</td>
                <td width="20%" style="text-aling:center"><strong>APROBADO</strong></td>
                <td width="60%">Figurará como primera opción para asignar órdenes
                    de compra</td>
            </tr>
            <tr>
                <td>36 a 53</td>
                <td><strong>CONDICIONADO</strong></td>
                <td>No figurará como primera opción para asignar
                    órdenes de compra</td>
            </tr>
            <tr>
                <td>18 a 35</td>
                <td><strong>NO APTO</strong></td>
                <td>No figurará como opción para asignar órdenes de
                compra.</td>
            </tr>
        </table>
         <p>
            <strong style="color:#0070C0">Empresa Evaluada</strong> ha obtenido un valor de
            <strong style="color:#0070C0">94 puntos (APROBADO)</strong>por lo cual <strong style="color:#0070C0">figurando como
            primera opción para asignar órdenes de compra.</strong>
        </p>

        <p>De acuerdo con los resultados obtenidos, se identificaron algunas las siguientes <strong style="color:#0070C0"> oportunidades<br>de mejora:</strong>
            <ul style="list-style-type: none;">
                <li>
                    1.
                </li>
            </ul>
        </p>

        <p>
            Atentamente,<br>
            <strong>(Autor)</strong><br>
            <strong>Equipo de Compras</strong>
        </p>
    </div>

</body>
</html>