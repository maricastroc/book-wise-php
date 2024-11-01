<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = [
        'review' => $_POST['review'] ?? '',
        'rate' => $_POST['rate'] ?? '',
        'book_id' => $_POST['book_id'] ?? '',
        'user_id' => $_POST['user_id'] ?? '',
        'created_at' => $_POST['created_at'] ?? '',
    ];
    
    $rules = [
        'review' => ['required', 'min:20'],
        'rate' => ['required'],
        'book_id' => ['required'],
        'user_id' => ['required'],
        'created_at' => ['required'],
    ];
    
    $validation = Validation::validate($rules, $data);
    $validations = $validation->validations;
    
    if (!empty($validations)) {
        http_response_code(400);
        echo json_encode([
            'status' => 'error',
            'message' => $validations
        ]);
        exit();
    }
    
    $database->query(
      query: "INSERT INTO ratings (rate, review, created_at, book_id, user_id) VALUES (:rate, :review, :created_at, :book_id, :user_id)",
      params: [
          'rate' => $data['rate'],
          'review' => $data['review'],
          'created_at' => $data['created_at'],
          'book_id' => $data['book_id'],
          'user_id' => $data['user_id'],
      ]
    );
    
    http_response_code(201);
    echo json_encode([
        'status' => 'success',
        'message' => 'Rating successfully registered!'
    ]);
    
    exit();    
}


