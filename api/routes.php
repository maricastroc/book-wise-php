<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$path = parse_url($_SERVER['REQUEST_URI'])['path'];
$controller = trim($path, '/') ?: 'index';

$routes = [
    'get-books' => 'controllers/get-books.php',
    'sign-in' => 'controllers/sign-in.php',
    'get-latest-ratings' => 'controllers/get-latest-ratings.php',
    'sign-up' => 'controllers/sign-up.php',
    'get-popular-books' => 'controllers/get-popular-books.php',
    'get-categories' => 'controllers/get-categories.php',
];

if (array_key_exists($controller, $routes)) {
    require $routes[$controller];
    exit();
} else {
    http_response_code(404);
    echo json_encode(["message" => "Controller not found."]);
    exit();
}
