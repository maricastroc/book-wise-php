<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$path = parse_url($_SERVER['REQUEST_URI'])['path'];
$controller = trim($path, '/') ?: 'index';

$routes = [
    'getBooks' => 'controllers/getBooks.php',
    'signIn' => 'controllers/signIn.php',
    'getLatestRatings' => 'controllers/getLatestRatings.php',
    'authenticateUser' => 'controllers/authenticateUser.php',
    'getPopularBooks' => 'controllers/getPopularBooks.php',
];

if (array_key_exists($controller, $routes)) {
    require $routes[$controller];
    exit();
} else {
    http_response_code(404);
    echo json_encode(["message" => "Controller not found."]);
    exit();
}
