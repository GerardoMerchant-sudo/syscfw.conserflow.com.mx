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
            font-size: 15px;
            font: Arial, sans-serif;    
        }
        .membrete-top {
            position: absolute;
            width: 100%;
            height: 3.5cm;       
        }
        .membrete-top img {
            width: 100%;
            height: 100%
        }

        .logo{
            position: absolute;
            top: 1.1cm;
            left: 2cm;
        }
        .logo img{
            width: 216px;
        }

        .leyenda{
            position:absolute;
            top: 1cm;
            right: 1.27cm;
            font-size: 14px;
            text-align: right;
            color:white;
        }
        
        .membrete-bottom {
            position: absolute;
            width: 100%;
            bottom: -2cm;
            height: 5cm;
        }
        .doc {
            position: absolute;
            bottom: 1.5cm;
            font-size: 10px;
            left: 2cm;
            color: white;
        }
 

        .membrete-bottom img {
        width: 100%;
            height: 100%;
        }

        .content {
            position: relative;
            padding-top: 4.1cm;
            padding-left: 2cm;
            padding-right: 1cm;
            padding-bottom: 4.5cm;
        }


    </style>
</head>
<body>
    <div class="membrete-top">
        <img src="{{ public_path('img/membrete3.png') }}" alt="membrete">
    </div>

    <div class="logo">
        <img src="{{ public_path('img/conserflow.png') }}" alt="logo">
    </div>

    <div class="leyenda">
        <strong style="font-size: 15px;">Conserflow SA de CV</strong><br>
        <span style=" font-family: Arial; font-style: italic;">Calle Mezquite 5, col. Santa Clara<br>
        Santiago Miahuatlán, Puebla CP: 75820<span>
    </div>

    <div class="membrete-bottom">
        <img src="{{ public_path('img/membrete3.png') }}">
    </div>

    <div class="doc">
        CÓDIGO: PCO-02/F-04<br>
        REVISIÓN: 01<br>
        EMISIÓN: 02.JUN.22<br>
    
    </div>
    <p style="right: 2cm"> Página 1 de 1</p>


    <div class="content">
        <span style="margin-top: 30px;">{{$name}}</span>
        <br>
        <p style="margin-bottom: 30px;">Estimado proveedor,</p>

        <p>
            Le informamos que, de acuerdo con nuestros lineamientos internos, se realizó la Evaluación y/
            Reevaluación de Proveedores. Las categorías que fueron evaluadas, son las siguientes:
        </p>

          <p style="margin-top:25px; margin-left:25px;">
            a) Atención telefónica / correo electrónico<br>
            b) Atención comercial<br>
            c) Servicio de Administración y Facturación<br>
            d) Producto y servicio
        </p>

        <p>Los resultados se clasifican de acuerdo los siguientes parámetros:</p>

        <table style="margin-top:30px; margin-left:15px;">
            <tr>
                <td >54 a 72 puntos</td>
                <td style="text-align:center">APROBADO</td>
                <td >Figurará como primera opción para asignar órdenes
                    de compra</td>
            </tr>
            <tr>
                <td>36 a 53 puntos</td>
                <td style="text-align:center">CONDICIONADO</td>
                <td>No figurará como primera opción para asignar
                    órdenes de compra</td>
            </tr>
            <tr>
                <td>18 a 35 puntos</td>
                <td style="text-align:center">NO APTO</td>
                <td>No figurará como opción para asignar órdenes de
                compra.</td>
            </tr>
        </table>
        <p style="margin-top:30px;">
            <strong style="color:#0070C0">Empresa Evaluada</strong> ha obtenido un valor de
            <strong style="color:#0070C0">94 puntos (APROBADO)</strong>por lo cual <strong style="color:#0070C0">figurando como
            primera opción para asignar órdenes de compra.</strong>
        </p>

        <p>De acuerdo con los resultados obtenidos, se identificaron algunas las siguientes <strong style="color:#0070C0">oportunidades<br>de mejora:</strong>
            <ul style="list-style-type: none;">
                <li>
                    1.
                </li>
            </ul>
        </p>
        <p style="margin-top;35px;">
            Sin otro particular a que hacer referencia, en nombre de CONSERFLOW S.A. de C.V. le
            agradecemos su colaboración, esperando seguir con una exitosa relación comercial.
            Por favor no duden en contactarme si tienen alguna duda o comentario sobre los resultados. 
        </p>
        <p style ="margin-top:35px;">
            Atentamente,<br>
            <strong>(Autor)</strong><br>
            <strong>Equipo de Compras</strong>
        </p>
    </div>

</body>
</html>