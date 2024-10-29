<?php

global $database;

$reviews = $database->query(
    "SELECT 
        ratings.*, 
        books.id AS book_id,
        books.cover_url AS book_cover_url, 
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

$formattedRatings = [];

foreach ($reviews as $review) {
    $rating = Rating::make($review);
    
    $rating->user = [
        'id' => $review['user_id'],
        'name' => $review['user_name'],
        'avatar_url' => $review['user_avatar_url']
    ];
    
    $rating->book = [
        'id' => $review['book_id'],
        'title' => $review['book_title'],
        'author' => $review['book_author'],
        'cover_url' => $review['book_cover_url']
    ];
    
    $formattedRatings[] = $rating;
}

echo json_encode($formattedRatings);
