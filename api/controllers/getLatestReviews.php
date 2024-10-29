<?php

global $database;

$reviews = $database->query(
    "SELECT 
        ratings.*, 
        books.image_url AS book_image_url, 
        books.author AS book_author, 
        books.title AS book_title, 
        users.name AS user_name, 
        users.avatar_url AS user_avatar_url
    FROM ratings
    JOIN books ON ratings.book_id = books.id
    JOIN users ON ratings.user_id = users.id
    ORDER BY ratings.created_at DESC
    LIMIT 8"
)->fetchAll(PDO::FETCH_ASSOC);

echo json_encode([
    'reviews' => $reviews
]);