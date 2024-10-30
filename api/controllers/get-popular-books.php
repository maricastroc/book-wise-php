<?php

global $database;

$booksWithRatings = $database->query(
    "SELECT 
        b.id AS book_id, 
        b.title, 
        b.author, 
        b.summary, 
        b.cover_url, 
        b.pages_number, 
        b.publishing_year, 
        b.created_at, 
        COUNT(r.id) AS total_ratings,
        AVG(r.rate) AS average_rating
    FROM books b
    LEFT JOIN ratings r ON b.id = r.book_id
    GROUP BY b.id
    ORDER BY total_ratings DESC
    LIMIT 8"
)->fetchAll(PDO::FETCH_ASSOC);

$popularBooks = [];

foreach ($booksWithRatings as $book) {
    $bookId = $book['book_id'];

    $popularBooks[$bookId] = [
        'id' => $bookId,
        'title' => $book['title'],
        'author' => $book['author'],
        'summary' => $book['summary'],
        'cover_url' => $book['cover_url'],
        'pages_number' => $book['pages_number'],
        'publishing_year' => $book['publishing_year'],
        'created_at' => $book['created_at'],
        'average_rating' => $book['average_rating'] ? (float) $book['average_rating'] : null,
        'total_ratings' => (int) $book['total_ratings'],
        'ratings' => [],
        'categories' => []
    ];
}

$ratings = $database->query(
    "SELECT 
        r.id AS rating_id, 
        r.user_id, 
        r.book_id, 
        r.review, 
        r.rate, 
        r.created_at,
        u.id AS user_id,
        u.name AS user_name,
        u.avatar_url AS user_avatar_url,
        u.email AS user_email
    FROM ratings r
    JOIN users u ON r.user_id = u.id
    WHERE r.book_id IN (" . implode(',', array_keys($popularBooks)) . ")
    ORDER BY r.created_at DESC"
)->fetchAll(PDO::FETCH_ASSOC);

foreach ($ratings as $rating) {
    $bookId = $rating['book_id'];
    
    $popularBooks[$bookId]['ratings'][] = [
        'id' => $rating['rating_id'],
        'review' => $rating['review'],
        'rate' => (float) $rating['rate'],
        'created_at' => $rating['created_at'],
        'user' => [
            'id' => $rating['user_id'],
            'email' => $rating['user_email'],
            'name' => $rating['user_name'],
            'avatar_url' => $rating['user_avatar_url']
        ]
    ];
}

$categories = $database->query(
    "SELECT 
        bc.book_id, 
        c.id AS category_id, 
        c.name AS category_name
    FROM book_categories bc
    JOIN categories c ON bc.category_id = c.id
    WHERE bc.book_id IN (" . implode(',', array_keys($popularBooks)) . ")"
)->fetchAll(PDO::FETCH_ASSOC);

foreach ($categories as $category) {
    $bookId = $category['book_id'];
    
    $popularBooks[$bookId]['categories'][] = [
        'id' => $category['category_id'],
        'name' => $category['category_name']
    ];
}

$popularBooks = array_values($popularBooks);

echo json_encode($popularBooks);
