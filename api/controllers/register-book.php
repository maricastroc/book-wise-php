<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!$user) {
        http_response_code(403);
        echo json_encode(['status' => 'error', 'message' => 'Unauthorized']);
        exit();
    }

    $validations = [];
    $rules = [
        'title' => ['required', 'min:3'],
        'author' => ['required'],
        'summary' => ['required'],
        'publishing_year' => ['required', 'min:4', 'max:4'],
        'pages_number' => ['required'],
    ];

    $validation = Validation::validate($rules, $_POST);
    $validations = $validation->validations;

    if (empty($_FILES['cover_url']['tmp_name'])) {
        $validations['cover_url'] = 'Book cover is required.';
    } elseif ($_FILES['cover_url']['error'] !== UPLOAD_ERR_OK) {
        $validations['cover_url'] = 'Failed to upload image.';
    } else {
        $imageFileType = strtolower(pathinfo($_FILES['cover_url']['name'], PATHINFO_EXTENSION));
        $allowedTypes = ['jpg', 'jpeg', 'png', 'gif'];
        if (!in_array($imageFileType, $allowedTypes)) {
            $validations['cover_url'] = 'Only JPG, JPEG, PNG & GIF files are allowed.';
        }
    }

    if (!empty($validations)) {
        echo json_encode([
            'status' => 'error',
            'validations' => $validations
        ]);
        exit();
    }

    $dir = "data/books/images/";
    
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }

    $newFileName = md5(rand());
    $image = $dir . $newFileName . '.' . $imageFileType;

    if (move_uploaded_file($_FILES['cover_url']['tmp_name'], $image)) {
        $title = htmlspecialchars($_POST['title']);
        $author = htmlspecialchars($_POST['author']);
        $summary = htmlspecialchars($_POST['summary']);
        $publishing_year = htmlspecialchars($_POST['publishing_year']);
        $pages_number = htmlspecialchars($_POST['pages_number']);

        $database->query(
            query: "INSERT INTO books (user_id, title, author, summary, publishing_year, pages_number, cover_url) 
                    VALUES (:user_id, :title, :author, :summary, :publishing_year, :pages_number, :image)",
            class: Rating::class,
            params: [
                'user_id' => $user->id,
                'title' => $title,
                'author' => $author,
                'summary' => $summary,
                'publishing_year' => $publishing_year,
                'pages_number' => $pages_number,
                'image' => $image,
            ]
        );

        echo json_encode([
            'status' => 'success',
            'message' => 'Book successfully registered!'
        ]);
    } else {
        echo json_encode([
            'status' => 'error',
            'message' => 'Failed to upload image.'
        ]);
    }

    exit();
}

