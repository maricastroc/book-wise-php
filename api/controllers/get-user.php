<?php

global $database;

$userId = trim($_GET['user_id'] ?? '');

$user = $database->query(
  query: "SELECT * FROM users WHERE id = :user_id",
  class: User::class,
  params: ['user_id' => $userId]
)->fetch();

if (!$user) {
  http_response_code(400);
  echo json_encode([
      'status' => 'error',
      'message' => 'User not found.'
  ]);
  exit();
}

echo json_encode($user);
