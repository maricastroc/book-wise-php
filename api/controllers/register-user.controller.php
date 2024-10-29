<?php
dump($_POST);
$data = [
    'name' => $_POST['name'] ?? '',
    'email' => $_POST['email'] ?? '',
    'password' => $_POST['password'] ?? '',
];

$rules = [
    'name' => ['required'],
    'email' => ['required', 'unique:users'],
    'password' => ['min:8', 'max:30', 'strong'],
];

$validation = Validation::validate($rules, $data);
$validations = $validation->validations;

if (empty($_FILES['avatar_url']['tmp_name']) || $_FILES['avatar_url']['error'] !== UPLOAD_ERR_OK) {
    $validations['avatar_url'] = 'User avatar is required or failed to upload.';
} else {
    $imageFileType = strtolower(pathinfo($_FILES['avatar_url']['name'], PATHINFO_EXTENSION));
    $allowedTypes = ['jpg', 'jpeg', 'png', 'gif'];

    if (!in_array($imageFileType, $allowedTypes)) {
        $validations['avatar_url'] = 'Only JPG, JPEG, PNG & GIF files are allowed.';
    }
}

if (!empty($validations)) {
    echo json_encode([
        'status' => 'error',
        'validations' => $validations
    ]);
    exit();
}

$dir = "data/users/images/";
if (!is_dir($dir)) {
    mkdir($dir, 0755, true);
}

$newFileName = uniqid('avatar_', true) . '.' . $imageFileType;
$imagePath = $dir . $newFileName;

if (move_uploaded_file($_FILES['avatar_url']['tmp_name'], $imagePath)) {
    $database->query(
        query: "INSERT INTO users (email, password, name, avatar_url) VALUES (:email, :password, :name, :avatar_url)",
        params: [
            'email' => $data['email'],
            'password' => password_hash($data['password'], PASSWORD_DEFAULT),
            'name' => $data['name'],
            'avatar_url' => $imagePath
        ]
    );

    echo json_encode([
        'status' => 'success',
        'message' => 'User successfully registered!'
    ]);
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Failed to upload user avatar.'
    ]);
}

exit();
?>