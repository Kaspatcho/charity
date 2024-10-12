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
    <div class="container">
        <div class="row justify-content-center pt-3">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header text-center">
                        <h3>Cadastre-se</h3>
                    </div>
                    <div class="card-body">
                        <form action="{{ route('register') }}" method="POST">
                            @csrf
                            <div class="form-group mb-2">
                                <label for="name" class="form-label">Nome: </label>
                                <div class="input-group has-validation">
                                    <input type="text" class="form-control @error('name') is-invalid @enderror"
                                        name="name" id="name" aria-describedby="nameFeedback" required
                                        placeholder="Digite seu nome" autocomplete="name"
                                        value="{{ old('name') }}">
                                    @error('name')
                                        <div id="nameFeedback" class="invalid-feedback">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group mb-2">
                                <label for="email" class="form-label">Email: </label>
                                <div class="input-group has-validation">
                                    <input type="email" class="form-control @error('email') is-invalid @enderror"
                                        name="email" id="email" aria-describedby="emailFeedback" required
                                        placeholder="Digite seu email" autocomplete="email"
                                        value="{{ old('email') }}">
                                    @error('email')
                                        <div id="emailFeedback" class="invalid-feedback">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group mb-2">
                                <label for="password" class="form-label">Senha: </label>
                                <div class="input-group has-validation">
                                    <input type="password" class="form-control @error('password') is-invalid @enderror"
                                        name="password" id="password" aria-describedby="passwordFeedback" required
                                        placeholder="Digite sua senha" autocomplete="new-password">
                                    @error('password')
                                        <div id="passwordFeedback" class="invalid-feedback">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group mb-2">
                                <label for="password_confirmation" class="form-label">Confirma Senha: </label>
                                <div class="input-group has-validation">
                                    <input type="password" class="form-control @error('password_confirmation') is-invalid @enderror"
                                        name="password_confirmation" id="password_confirmation" aria-describedby="p_confirmFeedback" required
                                        placeholder="Confirme sua senha" autocomplete="new-password">
                                    @error('password_confirmation')
                                        <div id="p_confirmFeedback" class="invalid-feedback">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group mb-2">
                                <label for="currency" class="form-label">Moeda</label>
                                <select class="form-select @error('currency') is-invalid @enderror" id="currency"
                                    aria-describedby="currencyFeedback" name="currency">
                                    <option value="" disabled selected>Escolha sua Moeda</option>
                                    <option value="USD">USD - Dolar americano</option>
                                    <option value="EUR">EUR - Euro</option>
                                    <option value="GBP">GBP - Libra Inglesa</option>
                                    <option value="BRL">BRL - Real Brasileiro</option>
                                    <option value="JPY">JPY - Yene Japones</option>
                                </select>

                                @error('currency')
                                    <div id="currencyFeedback" class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                @enderror
                            </div>

                            <div class="d-flex justify-content-center">
                                <button type="submit" class="btn btn-primary btn-block">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-center">
                        <small class="text-muted">Ja tem uma conta? <a href="{{ route('login') }}">Login</a></small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>