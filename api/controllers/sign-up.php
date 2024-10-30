<?php

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

// Validação do arquivo do avatar
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
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => $validations
    ]);
    exit();
}

// Define o diretório para salvar a imagem
$dir = "../public/data/users/images/";
if (!is_dir($dir)) {
    mkdir($dir, 0755, true);
}

// Gera um novo nome de arquivo para a imagem
$newFileName = uniqid('avatar_', true) . '.' . $imageFileType; // Gera um nome único
$imagePath = $dir . $newFileName; // Caminho completo do arquivo no servidor

// Move a imagem para o diretório especificado
if (move_uploaded_file($_FILES['avatar_url']['tmp_name'], $imagePath)) {
    // Define o caminho relativo que será armazenado no banco de dados
    $avatarUrl = 'data/users/images/' . $newFileName; // Caminho relativo

    // Insere os dados no banco de dados
    $database->query(
        query: "INSERT INTO users (email, password, name, avatar_url) VALUES (:email, :password, :name, :avatar_url)",
        params: [
            'email' => $data['email'],
            'password' => password_hash($data['password'], PASSWORD_DEFAULT),
            'name' => $data['name'],
            'avatar_url' => $avatarUrl // Use o caminho relativo aqui
        ]
    );

    http_response_code(201);
    echo json_encode([
        'status' => 'success',
        'message' => 'User successfully registered!'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Failed to upload user avatar.'
    ]);
}

exit();
?>
