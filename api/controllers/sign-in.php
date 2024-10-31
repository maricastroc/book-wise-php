<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inputData = json_decode(file_get_contents("php://input"), true);
    
    $email = $inputData['email'] ?? '';
    $password = $inputData['password'] ?? '';

    $data = [
        'email' => $email,
        'password' => $password,
    ];

    $rules = [
        'email' => ['required'],
        'password' => ['required'],
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

    $query = $database->query("SELECT * FROM users WHERE email = :email", User::class, ['email' => $email]);
    $user = $query->fetch();

    if ($user) {
        if (!password_verify($password, $user->password)) {
            http_response_code(401);
            echo json_encode([
                'status' => 'error',
                'message' => 'Incorrect e-mail or password.'
            ]);
            exit();
        }

        $token = bin2hex(random_bytes(16));
        
        echo json_encode([
            'status' => 'success',
            'message' => 'Login successful!',
            'token' => $token,
            'user_id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'avatar_url' => $user->avatar_url
        ]);
        
        exit();
    } else {
        http_response_code(401);
        echo json_encode([
            'status' => 'error',
            'message' => 'Incorrect e-mail or password!'
        ]);
        exit();
    }
}
