<?php

global $database;

$userIdFilter = $_GET['user_id'] ?? null;

if (!$userIdFilter) {
    http_response_code(403);
    echo json_encode(['status' => 'error', 'message' => 'Unauthorized']);
    exit();
}

$query = "
    SELECT 
        SUM(books.pages_number) AS total_pages,
        book_categories.category_name,
        COUNT(book_categories.category_name) AS category_count,
        (SELECT COUNT(DISTINCT books.author)
         FROM ratings
         JOIN books ON ratings.book_id = books.id
         WHERE ratings.user_id = :user_id) AS unique_authors_count,
        (SELECT COUNT(*)
         FROM ratings
         WHERE ratings.user_id = :user_id) AS ratings_count
    FROM ratings
    JOIN books ON ratings.book_id = books.id
    JOIN book_categories ON books.id = book_categories.book_id
    WHERE ratings.user_id = :user_id
    GROUP BY book_categories.category_name
    ORDER BY category_count DESC
    LIMIT 1";

$params = ['user_id' => $userIdFilter];

// Executa a consulta
$result = $database->query($query, null, $params)->fetch(PDO::FETCH_ASSOC);

if ($result) {
    $response = [
        'total_pages_read' => $result['total_pages'],
        'most_read_category' => $result['category_name'],
        'category_read_count' => $result['category_count'],
        'unique_authors_count' => $result['unique_authors_count'],
        'ratings_count' => $result['ratings_count']
    ];
    echo json_encode($response);
} else {
    echo json_encode(['status' => 'error', 'message' => 'No ratings found for this user']);
}
