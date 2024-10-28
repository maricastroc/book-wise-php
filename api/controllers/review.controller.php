<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $user_id = $_REQUEST['user_id'];
  $book_id = $_REQUEST['book_id'];

  $rules = [
      'rating' => ['required', 'min:1', 'max:5'],
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
      query: "INSERT INTO ratings (user_id, book_id, rating, review) 
              VALUES (:user_id, :book_id, :rating, :review)",
      class: Rating::class,
      params: [
          'user_id' => $user_id,
          'book_id' => $book_id,
          'rating' => $_POST['rating'],
          'review' => $_POST['review'],
      ]
  );

  echo json_encode([
      'status' => 'success',
      'message' => 'Review successfully registered!'
  ]);
  exit();
}