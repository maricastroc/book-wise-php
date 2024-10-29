<?php

global $database;

$search = $_REQUEST['search'] ?? null;

$books = $database->query(
    "SELECT * FROM books WHERE title LIKE :filter",
    Book::class,
    ['filter' => "%$search%"]
)->fetchAll();

$ratings = $database->query(
    "SELECT * FROM ratings",
    Rating::class
)->fetchAll();

echo json_encode([
    'books' => $books,
    'ratings' => $ratings,
    'search' => $search,
]);