<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inputData = json_decode(file_get_contents("php://input"), true);
    
    $userId = (int)($_POST['user_id'] ?? 0);

    $query = $database->query("SELECT * FROM users WHERE id = :id", User::class, ['id' => $userId]);
    
    $user = $query->fetch();

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
        http_response_code(400);
        echo json_encode([
            'status' => 'error',
            'message' => $validations
        ]);
        exit();
    }

    // Define o diretório para salvar a imagem
    $dir = "../public/data/books/images/";
    
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }

    // Gera um novo nome de arquivo
    $newFileName = md5(rand()) . '.' . $imageFileType; // Garante que a extensão da imagem seja mantida
    $imagePath = $dir . $newFileName; // Caminho completo do arquivo

    // Move a imagem para o diretório especificado
    if (move_uploaded_file($_FILES['cover_url']['tmp_name'], $imagePath)) {
        // Define o caminho relativo para o banco de dados
        $coverUrl = 'data/books/images/' . $newFileName;

        // Captura outros dados
        $title = htmlspecialchars($_POST['title']);
        $author = htmlspecialchars($_POST['author']);
        $summary = htmlspecialchars($_POST['summary']);
        $publishing_year = htmlspecialchars($_POST['publishing_year']);
        $pages_number = htmlspecialchars($_POST['pages_number']);
        $created_at = htmlspecialchars($_POST['created_at']);

        // Insere os dados no banco de dados
        $database->query(
          query: "INSERT INTO books (user_id, title, author, summary, publishing_year, pages_number, cover_url, created_at) 
                  VALUES (:user_id, :title, :author, :summary, :publishing_year, :pages_number, :cover_url, :created_at)",
          class: Rating::class,
          params: [
              'user_id' => $user->id,
              'title' => $title,
              'author' => $author,
              'summary' => $summary,
              'publishing_year' => $publishing_year,
              'pages_number' => $pages_number,
              'cover_url' => $coverUrl, // Use o caminho relativo aqui
              'created_at' => $created_at,
          ]
      );

        http_response_code(200);
        echo json_encode([
            'status' => 'success',
            'message' => 'Book successfully registered!'
        ]);
    } else {
        http_response_code(400);
        echo json_encode([
            'status' => 'error',
            'message' => 'Failed to upload image.'
        ]);
    }

    exit();
}
