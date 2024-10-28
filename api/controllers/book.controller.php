<?php
function getBookById() {
    global $database;

    $id = intval($_REQUEST['id']);

    $book = $database->query(
        "SELECT * FROM books WHERE id = :id",
        Book::class,
        ['id' => $id]
    )->fetch();

    if (!$book) {
        echo json_encode(['error' => 'Book not found.']);
        return;
    }

    $reviews = $database->query(
        "SELECT * FROM ratings WHERE book_id = :id",
        Rating::class,
        ['id' => $id]
    )->fetchAll();

    echo json_encode([
        'book' => $book,
        'reviews' => $reviews
    ]);
}

