<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        {{ config('app.name') }}
    </title>
    @vite('resources/sass/app.scss')
</head>

<body>
    <div class="container pt-3">
        <div class="row justify-content-center mt-5">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header text-center">
                        <h3>Charity</h3>
                    </div>
                    <div class="card-body">
                        <form action="{{ route('login.auth') }}" method="POST">
                            @csrf
                            <div class="form-group">
                                <label for="email" class="form-label">Email</label>
                                <div class="input-group has-validation">
                                    <input type="email" class="form-control @error('email') is-invalid @enderror" name="email" id="email" aria-describedby="emailFeedback" placeholder="Digite seu email" autocomplete="email" required>
                                    @error('email')
                                        <div id="emailFeedback" class="invalid-feedback">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group mt-2">
                                <label for="password" class="form-label">Senha</label>
                                <div class="input-group has-validation">
                                    <input type="password" class="form-control @error('email') is-invalid @enderror" name="password" id="password" aria-describedby="passwordFeedback" placeholder="Digite sua senha" autocomplete="current-password" required>
                                    @error('password')
                                        <div id="passwordFeedback" class="invalid-feedback">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                </div>
                            </div>

                            <div class="mt-2 d-flex justify-content-center">
                                <button type="submit" class="btn btn-primary btn-block">Login</button>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted">Não tem uma conta? <a href="{{ route('signup') }}">Cadastrar-se</a></small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
