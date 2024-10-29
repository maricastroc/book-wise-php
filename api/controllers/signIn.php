<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inputData = json_decode(file_get_contents("php://input"), true);
    
    $email = $inputData['email'] ?? '';
    $password = $inputData['password'] ?? '';

    $validations = [];
    
    $data = [
        'email' => $email,
        'password' => $password,
    ];

    $rules = [
        'email' => ['required'],
        'password' => ['min:8'],
    ];

    $validation = Validation::validate($rules, $data);
    $validations = $validation->validations;

    if (!empty($validations)) {
        echo json_encode([
            'status' => 'error',
            'validations' => $validations
        ]);
        exit();
    }

    $query = $database->query("SELECT * FROM users WHERE email = :email", User::class, ['email' => $email]);
    $user = $query->fetch();

    if ($user) {
        if (!password_verify($password, $user->password)) {
            echo json_encode([
                'status' => 'error',
                'message' => 'Incorrect e-mail or password!'
            ]);
            exit();
        }

        $token = bin2hex(random_bytes(16));
        
        echo json_encode([
            'status' => 'success',
            'message' => 'Login successful!',
            'token' => $token,
            'user_id' => $user->id,
            'user_id' => $user->id,
            'name' => $user->name,
            'avatar_url' => $user->avatar_url
        ]);
        
        exit();
    } else {
        echo json_encode([
            'status' => 'error',
            'message' => 'Incorrect e-mail or password!'
        ]);
        exit();
    }
}
