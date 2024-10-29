<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user_id = $_REQUEST['user_id'];
    $book_id = $_REQUEST['book_id'];

    $rules = [
        'rate' => ['required', 'min:1', 'max:5'],
        'review' => ['required'],
    ];

    $validation = Validation::validate($rules, $_POST);

    if (!empty($validation->validations)) {
        echo json_encode([
            'status' => 'error',
            'validations' => $validation->validations
        ]);
        exit();
    }

    $database->query(
        query: "INSERT INTO ratings (user_id, book_id, rate, review) 
                VALUES (:user_id, :book_id, :rate, :review)",
        class: Rating::class,
        params: [
            'user_id' => $user_id,
            'book_id' => $book_id,
            'rate' => $_POST['rate'],
            'review' => $_POST['review'],
        ]
    );

    echo json_encode([
        'status' => 'success',
        'message' => 'Rating successfully registered!'
    ]);
    exit();
    }