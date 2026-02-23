<meta name="viewport" content="width=device-width, initial-scale=1.0" />
@extends('layouts.app2')
<div class="py-5">
	<div class="container pt-5">
		<div class="row justify-content-center">
			<div class="col-xl-5">
				<div class="card" style="border: none;">
					<div class="card-body p-0">
						<div class="row no-gutters">
							<div class="col">
								<div class="mx-2 my-2">
								@include('plantilla.flash')
								</div>
								<div class="p-5">
                                <div class="mb-4 text-center">
                                    <img class="img-logo" src="{{ asset('img/conserflow.png') }}">
                                    <h3 class="mt-3 fw-bold text-primary">Bienvenido</h3>
                                    <p class="text-muted">Ingresa tus credenciales</p>
                                </div>

                                <form action="{{ route('login') }}" method="POST">
                                    @csrf
                                    <div class="form-floating mb-3">
										<input 
										type="text" 
										required 
										name="name_user"
										id="name_user"
										class="form-control  rounded-pill"
										placeholder="Tu usuario">
                                        <label for="name_user">Usuario</label>
                                    </div>
                                    <div class="form-floating mb-4">
										<input 
										type="password" 
										required 
										name="password"
										id="password"
										class="form-control  rounded-pill"
										placeholder="Pasdword">
										<label id="password">Contraseña</label>
                                    </div>
                                    <div class="d-grid gap-2">
                                        <button type="submit"
                                                class="btn btn-primary btn-lg rounded-pill btn-shadow">
                                            Ingresar
                                        </button>
                                    </div>
                                </form>
                            </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	body
	{
		background-image: url(img/fondo.jpg);
		/* background-image: url(img/1357.jpeg); */
		background-size: cover;
		height: 100vh;
		background-repeat: no-repeat;
	}

.login-card {
        background: rgba(255, 255, 255, 0.95);
        border: none;
        transition: all 0.3s ease;
    }

    .login-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    }

    .img-logo {
        height: 80px;
    }

    .btn-shadow {
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
    }

    .btn-shadow:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    }

    .form-control:focus {
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }


</style>
