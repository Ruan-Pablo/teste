<?php
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Verificação de autenticação
    if ($username == 'admin' && $password == 'senha123') {
        echo 'Login bem-sucedido!';
    } else {
        echo 'Usuário ou senha inválidos!';
    }
?>
