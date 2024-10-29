<?php

$path = parse_url($_SERVER['REQUEST_URI'])['path'];

$controller = trim($path, '/') ?: 'index';


if ($controller === 'api/book') {
    require "controllers/book.controller.php"; 
    getBookById();
    exit();
}

if ($controller === 'api/login') {
    require "controllers/login.controller.php"; 
    exit();
}

if ($controller === 'api/latest-reviews') {
    require "controllers/latest-reviews.controller.php";
    getLatestReviews();
    exit();
}

if ($controller === 'api/register-user') {
    require "controllers/register-user.controller.php"; 
    exit();
}

require "controllers/{$controller}.controller.php";