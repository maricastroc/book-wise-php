<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$config = require "config.php";

require_once "models/Book.php";
require_once "models/User.php";
require_once "models/Rating.php";
require_once "Flash.php";

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

require_once "functions.php";
require_once "Database.php";
require_once "Validation.php";

require_once "routes.php";

