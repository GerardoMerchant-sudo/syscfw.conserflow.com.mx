<!DOCTYPE html>
<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header('Content-Type: text/html');
?>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Sistema">
    <meta name="author" content=""> 
    <meta name="keyword" content="">
    <title>Sistema de Gestion Conserflow</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />

    <!--Evita ver contenido despues de cerrar sesión-->
    <meta http-equiv="Expires" content="0" />
    <meta http-equiv="Pragma" content="no-cache" />
<!-- Bootstrap primero -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Tu plantilla compilada -->
<link href="{{ mix('css/plantilla.css') }}" rel="stylesheet">

<!-- CSS adicional de tablas o overrides -->
<link rel="stylesheet" href="css/tablesfixed.css">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
</head>

<body class="app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden ">
    <div id="app">
        <header class="app-header navbar">
            <button class="navbar-toggler mobile-sidebar-toggler d-lg-none mr-auto" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#" @click="abrirModalModulos()"></a>
            <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
	    <span class="text-danger text-center"></span>
           <ul class="nav navbar-nav ml-auto" style="margin-right: 20px !important;">
                <a class="nav-link nav-link" href="#" @click="abrirModalModulos" style="margin-right:10px">
                    <i class="fas fa-th icon-menu"></i>
                </a>
                <li class="nav-item dropdown fondo rounded-pill " style="list-style: none; margin-right: 10px; width: auto">
                <a class="nav-link dropdown-toggle d-flex align-items-center no-caret" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" style="padding: 5px; transition: all 0.3s; margin-right:5px">
                    <div class="nav-avatar-circle">
                        {{ strtoupper(substr(auth()->user()->name, 0, 1)) }}{{ strtoupper(substr(explode(' ', auth()->user()->name)[1] ?? '', 0, 1)) }}
                    </div>
                    <span class="ml-2 d-md-down-none font-weight-bold" style="color: #2d3748; font-size: 0.95rem; margin-right: 10px;">
                        {{ auth()->user()->name }}
                    </span>
                    <i class="fas fa-chevron-down text-muted" style="font-size: 0.7rem; margin-right: 15px;"></i>
                </a>
            <div class="dropdown-menu dropdown-menu-right profile-card-dropdown">
                <div class="profile-card-header text-center">
                    <div class="user-email-top">{{ auth()->user()->email }}</div>
                    <div class="user-role-label">
                    {{ auth()->user()->puesto->nombre ?? 'USUARIO' }}
                </div>
                    
                    <div class="avatar-display-center">
                        {{ strtoupper(substr(auth()->user()->name, 0, 1)) }}{{ strtoupper(substr(explode(' ', auth()->user()->name)[1] ?? '', 0, 1)) }}
                    </div>
                    
                    <h5 class="user-name-display">{{ auth()->user()->name }}</h5>
                    
                    <form method="POST" action="{{ route('privacidad') }}" target="_blank">
                        {{ csrf_field() }}
                        <button type="submit" class="btn-edit-profile btn btn-primary">
                            <i class="fas fa-user-secret icon-privacidad"></i>
                            <span>Privacidad</span>
                        </button>
                    </form>
                </div>

                <div class="profile-card-footer">
                    <form method="POST" action="{{ route('logout') }}" class="m-0">
                        {{ csrf_field() }}
                        <button class="btn-logout-ux" @click="cerrarSesion()" type="submit">
                            <i class="fas fa-sign-out-alt"></i>
                            <span>Cerrar sesión</span>
                        </button>
                    </form>
                </div>
            </div>
    </li>
            </ul>
        </header>

        <div class="app-body">

            @include('plantilla.sidebar')
            <!-- Contenido Principal -->
            @yield('contenido')
            <!-- /Fin del contenido principal -->
        </div>
    </div>
    <footer class="d-none d-lg-block app-footer fixed-bottom text-right">
        Sistema de Gestion Conserflow &copy; - {{date("Y")}}
    </footer>

    <script src="{{ mix('js/app.js') }}"></script>

    <script src="js/plantilla.js"></script>

    <style>
        .no-caret::after {
    display: none !important;
    content: none !important;
}
        .icon-menu {
            font-size: 1.5rem;
            padding-right: 15px;
            border-right: 1px solid gray;
            line-height: 2rem;
        }
       /* Reset de Bootstrap para el Dropdown */
    .profile-card-dropdown {
        min-width: 280px;
        border: none !important;
        border-radius: 20px !important;
        box-shadow: 0 10px 40px rgba(0,0,0,0.12) !important;
        padding: 0 !important;
        margin-top: 15px !important;
        overflow: hidden;
        border: 1px solid rgba(0,0,0,0.05) !important;

        margin-right: 20px !important;
    }

    /* Avatar pequeño en la barra */
    .nav-avatar-circle {
        width: 38px;
        height: 38px;
        background: #5C92B7; 
        color: #ffffff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.8rem;
    }

    /* Contenido de la tarjeta */
    .profile-card-header {
        padding: 30px 20px;
        background: #fff
    }

    .user-email-top {
        color: #4a5568;
        font-size: 0.9rem;
        margin-bottom: 2px;
    }

    .user-role-label {
        color: #a0aec0;
        font-size: 0.8rem;
        margin-bottom: 20px;
    }

    /* Avatar grande central */
    .avatar-display-center {
        width: 85px;
        height: 85px;
        background: #5C92B7;
        color: #ffffff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        font-weight: 600;
        margin: 0 auto 15px;
    }

    .user-name-display {
        font-weight: 700;
        color: #2d3748;
        margin-bottom: 15px;
        font-size: 1.25rem;
    }

    .btn-edit-profile {
        background: transparent;
        border: none;
        color: #015D94;
        font-weight: 700;
        font-size: 0.85rem;
        letter-spacing: 1px;
        cursor: pointer;
        transition: opacity 0.2s;
    }

    .btn-edit-profile:hover { opacity: 0.7; }

    /* Footer de la tarjeta */
    .profile-card-footer {
        border-top: 1px solid #f1f3f5;
        padding: 15px;
    }

    .btn-logout-ux {
        width: 100%;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #2d3748;
        font-size: 0.95rem;
        padding: 10px;
        transition: background 0.2s;
        border-radius: 12px;
    }

    .btn-logout-ux i {
        margin-right: 15px;
        color: #718096;
        font-size: 1.1rem;
    }

    .btn-logout-ux:hover {
        background: #f8f9fa;
    }

    /* Animación */
    .dropdown.show .profile-card-dropdown {
        animation: cardAppear 0.25s ease-out;
    }
    .fondo{
         background: #e0e9f0;
    }

    @keyframes cardAppear {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    </style>
</body>

</html>
