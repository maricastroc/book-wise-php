<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  global $database;

$userId = $_POST['user_id'] ?? null;

if (!$userId) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'User ID is required.'
    ]);
    exit();
}

$data = [
    'name' => $_POST['name'] ?? '',
    'email' => $_POST['email'] ?? '',
    'password' => $_POST['password'] ?? '',
];

$rules = [
    'name' => ['required'],
    'email' => ['required'],
];

if (!empty($data['password'])) {
    $rules['password'] = ['min:8', 'max:30', 'strong'];
}

$validation = Validation::validate($rules, $data);
$validations = $validation->validations;

$avatarUrl = null;
if (!empty($_FILES['avatar_url']['tmp_name']) && $_FILES['avatar_url']['error'] === UPLOAD_ERR_OK) {
    $imageFileType = strtolower(pathinfo($_FILES['avatar_url']['name'], PATHINFO_EXTENSION));
    $allowedTypes = ['jpg', 'jpeg', 'png', 'gif'];

    if (!in_array($imageFileType, $allowedTypes)) {
        $validations['avatar_url'] = 'Only JPG, JPEG, PNG & GIF files are allowed.';
    } else {
        $dir = "../public/data/users/images/";
        if (!is_dir($dir)) {
            mkdir($dir, 0755, true);
        }

        $newFileName = uniqid('avatar_', true) . '.' . $imageFileType;
        $imagePath = $dir . $newFileName;

        if (move_uploaded_file($_FILES['avatar_url']['tmp_name'], $imagePath)) {
            $avatarUrl = 'data/users/images/' . $newFileName;
        } else {
            http_response_code(500);
            echo json_encode([
                'status' => 'error',
                'message' => 'Failed to upload avatar.'
            ]);
            exit();
        }
    }
}

if (!empty($validations)) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => $validations
    ]);
    exit();
}

$currentUserStatement = $database->query(
  query: "SELECT password FROM users WHERE id = :id",
  params: ['id' => $userId]
);

$currentUser = $currentUserStatement->fetch(); // Fetch the data as an associative array

if (!$currentUser) {
  http_response_code(404);
  echo json_encode([
      'status' => 'error',
      'message' => 'User not found.'
  ]);
  exit();
}

$oldPasswordHash = $currentUser['password'];

if (!empty($data['password']) && !password_verify($_POST['old_password'] ?? '', $oldPasswordHash)) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'Your current password is incorrect.'
    ]);
    exit();
}

$updateFields = [
    'name' => $data['name'],
    'email' => $data['email'],
];

if (!empty($data['password'])) {
    $updateFields['password'] = password_hash($data['password'], PASSWORD_DEFAULT);
}

if ($avatarUrl) {
    $updateFields['avatar_url'] = $avatarUrl;
}

$updateQuery = "UPDATE users SET name = :name, email = :email";

if (isset($updateFields['password'])) {
    $updateQuery .= ", password = :password";
}

if (isset($updateFields['avatar_url'])) {
    $updateQuery .= ", avatar_url = :avatar_url";
}

$updateQuery .= " WHERE id = :id";
$params = array_merge($updateFields, ['id' => $userId]);

$database->query(query: $updateQuery, params: $params);

$currentUserStatement = $database->query(
    query: "SELECT id, name, email, avatar_url FROM users WHERE id = :id",
    params: ['id' => $userId]
);

$updatedUser = $currentUserStatement->fetch();

http_response_code(200);

echo json_encode([
    'status' => 'success',
    'message' => 'User updated successfully!',
    'user' => $updatedUser
]);

exit();
}