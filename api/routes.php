<?php
$path = parse_url($_SERVER['REQUEST_URI'])['path'];
$controller = trim($path, '/') ?: 'index';

$routes = [
    'get-books' => 'controllers/get-books.php',
    'sign-in' => 'controllers/sign-in.php',
    'get-latest-ratings' => 'controllers/get-latest-ratings.php',
    'sign-up' => 'controllers/sign-up.php',
    'get-popular-books' => 'controllers/get-popular-books.php',
    'get-categories' => 'controllers/get-categories.php',
    'register-book' => 'controllers/register-book.php',
    'get-user-ratings' => 'controllers/get-user-ratings.php',
    'get-user-reading-info' => 'controllers/get-user-reading-info.php',
    'post-book-rating' => 'controllers/post-book-rating.php',
    'get-user' => 'controllers/get-user.php',
    'edit-user' => 'controllers/edit-user.php',
];

if (array_key_exists($controller, $routes)) {
    require $routes[$controller];
    exit();
} else {
    http_response_code(404);
    echo json_encode(["message" => "Controller not found."]);
    exit();
}
