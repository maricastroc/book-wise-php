<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require "models/Book.php";

require "models/User.php";

require "models/Rating.php";

require "Flash.php";

session_start();

require "functions.php";

$config = require "config.php";

require 'Database.php';

require 'Validation.php';

require "routes.php";
