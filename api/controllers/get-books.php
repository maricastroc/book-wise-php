<?php

global $database;

$titleFilter = trim($_GET['title'] ?? '');
$authorFilter = trim($_GET['author'] ?? '');
$categoryFilter = $_GET['category_id'] ?? null;

$query = "
    SELECT 
        b.id AS book_id, 
        b.title, 
        b.author, 
        b.summary, 
        b.cover_url, 
        b.pages_number, 
        b.publishing_year, 
        b.created_at
    FROM books b
    LEFT JOIN book_categories bc ON b.id = bc.book_id
    LEFT JOIN categories c ON bc.category_id = c.id
";

$params = [];
$whereClauses = [];

if ($titleFilter) {
    $whereClauses[] = "LOWER(b.title) LIKE LOWER(:title)";
    $params['title'] = "%$titleFilter%";
}

if ($authorFilter) {
    $whereClauses[] = "LOWER(b.author) LIKE LOWER(:author)";
    $params['author'] = "%$authorFilter%";
}

if ($categoryFilter) {
    $whereClauses[] = "bc.category_id = :category_id";
    $params['category_id'] = (int) $categoryFilter;
}

if (!empty($whereClauses)) {
    $query .= " WHERE " . implode(' OR ', $whereClauses);
}

$query .= " GROUP BY b.id ORDER BY b.created_at DESC";

$booksWithRatings = $database->query($query, null, $params)->fetchAll(PDO::FETCH_ASSOC);

$allBooks = [];
foreach ($booksWithRatings as $book) {
    $bookId = $book['book_id'];
    $allBooks[$bookId] = [
        'id' => $bookId,
        'title' => $book['title'],
        'author' => $book['author'],
        'summary' => $book['summary'],
        'cover_url' => $book['cover_url'],
        'pages_number' => $book['pages_number'],
        'publishing_year' => $book['publishing_year'],
        'created_at' => $book['created_at'],
        'average_rating' => null,
        'total_ratings' => 0,
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
    WHERE r.book_id IN (" . implode(',', array_keys($allBooks)) . ")
    ORDER BY r.created_at DESC"
)->fetchAll(PDO::FETCH_ASSOC);

foreach ($ratings as $rating) {
    $bookId = $rating['book_id'];
    $allBooks[$bookId]['ratings'][] = [
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

foreach ($allBooks as &$book) {
    $book['total_ratings'] = count($book['ratings']);
    if ($book['total_ratings'] > 0) {
        $book['average_rating'] = array_sum(array_column($book['ratings'], 'rate')) / $book['total_ratings'];
    }
}

$categories = $database->query(
    "SELECT 
        bc.book_id, 
        c.id AS category_id, 
        c.name AS category_name
    FROM book_categories bc
    JOIN categories c ON bc.category_id = c.id
    WHERE bc.book_id IN (" . implode(',', array_keys($allBooks)) . ")"
)->fetchAll(PDO::FETCH_ASSOC);

foreach ($categories as $category) {
    $bookId = $category['book_id'];
    $allBooks[$bookId]['categories'][] = [
        'id' => $category['category_id'],
        'name' => $category['category_name']
    ];
}

$allBooks = array_values($allBooks);

echo json_encode($allBooks);
