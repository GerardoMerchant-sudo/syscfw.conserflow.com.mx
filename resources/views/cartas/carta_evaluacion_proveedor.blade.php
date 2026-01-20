<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Evaluación de Proveedores</title>

    <style>
        @page {
            margin: 0;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 12px;
            color: #000;
        }

        /* ===== MEMBRETE SUPERIOR ===== */
        .membrete-top {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 4.5cm;
        }

        .membrete-top img {
            width: 100%;
            height: 100%;
        }

        .logo {
            position: fixed;
            top: 1.4cm;
            left: 1.27cm;
        }

        .logo img {
            width: 180px;
        }

        .leyenda {
            position: fixed;
            top: 1.3cm;
            right: 1.27cm;
            text-align: right;
            font-size: 11px;
            line-height: 1.4;
        }

        /* ===== MEMBRETE INFERIOR ===== */
        .membrete-bottom {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3.8cm;
        }

        .membrete-bottom img {
            width: 100%;
            height: 100%;
        }

        /* ===== CONTENIDO ===== */
        .content {
            padding-top: 5.3cm;
            padding-left: 1.27cm;
            padding-right: 1.27cm;
            padding-bottom: 4.2cm;
        }

        p {
            text-align: justify;
            margin: 0 0 10px 0;
            line-height: 1.4;
        }

        /* ===== TABLA ===== */
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 10px 0 15px 0;
        }

        td {
            padding: 6px;
            vertical-align: top;
        }

        .col-puntos {
            width: 20%;
        }

        .col-estado {
            width: 20%;
            font-weight: bold;
            text-align: center;
        }

        .col-descripcion {
            width: 60%;
        }

        .azul {
            color: #0070C0;
            font-weight: bold;
        }

        ul {
            margin: 5px 0 0 0;
            padding-left: 15px;
        }
    </style>
</head>
<body>

    <!-- MEMBRETE SUPERIOR -->
    <div class="membrete-top">
        <img src="{{ public_path('img/menbrete_cfw.png') }}">
    </div>

    <div class="logo">
        <img src="{{ public_path('img/conserflow.png') }}">
    </div>

    <div class="leyenda">
        <strong>Conserflow S.A. de C.V.</strong><br>
        Calle Mezquite 5, Col. Santa Clara<br>
        Santiago Miahuatlán, Puebla<br>
        C.P. 75820
    </div>

    <!-- MEMBRETE INFERIOR -->
    <div class="membrete-bottom">
        <img src="{{ public_path('img/menbrete_cfw.png') }}">
    </div>

    <!-- CONTENIDO -->
    <div class="content">

        <p><strong>{{ $proveedor['nombre'] }}</strong></p>

        <p>Estimado proveedor,</p>

        <p>
            Le informamos que, de acuerdo con nuestros lineamientos internos, se realizó la Evaluación y
            Reevaluación de Proveedores. Las categorías que fueron evaluadas, son las siguientes:
        </p>

        <p>
            a) Atención telefónica / correo electrónico<br>
            b) Atención comercial<br>
            c) Servicio de Administración y Facturación<br>
            d) Producto y servicio
        </p>

        <p>Los resultados se clasifican de acuerdo con los siguientes parámetros:</p>

        <table>
            <tr>
                <td class="col-puntos">54 a 72 puntos</td>
                <td class="col-estado">APROBADO</td>
                <td class="col-descripcion">
                    Figurará como primera opción para asignar órdenes de compra
                </td>
            </tr>
            <tr>
                <td>36 a 53 puntos</td>
                <td class="col-estado">CONDICIONADO</td>
                <td>
                    No figurará como primera opción para asignar órdenes de compra
                </td>
            </tr>
            <tr>
                <td>18 a 35 puntos</td>
                <td class="col-estado">NO APTO</td>
                <td>
                    No figurará como opción para asignar órdenes de compra
                </td>
            </tr>
        </table>

        <p>
            <span class="azul">Empresa Evaluada</span> ha obtenido un valor de
            <span class="azul">94 puntos (APROBADO)</span>, por lo cual
            <span class="azul">figurará como primera opción para asignar órdenes de compra.</span>
        </p>

        <p>
            De acuerdo con los resultados obtenidos, se identificaron las siguientes
            <span class="azul">oportunidades de mejora:</span>
        </p>

        <ul>
            <li>1.</li>
        </ul>

        <p>
            Atentamente,<br>
            <strong>(Autor)</strong><br>
            <strong>Equipo de Compras</strong>
        </p>

    </div>

</body>
</html>
