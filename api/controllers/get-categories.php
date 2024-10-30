<?php

global $database;

$categories = $database->query(
    "SELECT * FROM categories"
)->fetchAll();

echo json_encode($categories);
