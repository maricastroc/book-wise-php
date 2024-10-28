<?php

$path = parse_url($_SERVER['REQUEST_URI'])['path'];

$controller = trim($path, '/') ?: 'index';


if ($controller === 'api/book') {
    require "controllers/book.controller.php"; 
    getBookById(); // Chame a função que obtém um livro por ID
    exit(); // Saia após a resposta do livro
}

if ($controller === 'api/login') {
    require "controllers/login.controller.php"; 
    exit(); // Saia após a resposta do livro
}

if ($controller === 'api/register-user') {
    require "controllers/register-user.controller.php"; 
    exit(); // Saia após a resposta do livro
}

// Para outras rotas, carregue o controlador correspondente
require "controllers/{$controller}.controller.php";