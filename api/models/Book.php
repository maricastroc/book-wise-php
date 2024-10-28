<?php

class Book
{
  public $user_id;
  public $id;
  public $title;
  public $summary;
  public $author;
  public $pages_number;
  public $publishing_year;
  public $image_url;
  public $ratings;

  public static function make($item)
  {
    $book = new self();

    $book->user_id = $item['user_id'];
    $book->id = $item['id'];
    $book->title = $item['title'];
    $book->summary = $item['summary'];
    $book->author = $item['author'];
    $book->pages_number = $item['pages_number'];
    $book->publishing_year = $item['publishing_year'];
    $book->image_url = $item['image_url'];
    $book->ratings = $item['ratings'];

    return $book;
  }

  public function getAverageRating(): int
  {
    $database = new Database(config('database'));

    $ratings = $database->query(
      query: "SELECT rating FROM ratings WHERE book_id = :book_id",
      params: ['book_id' => $this->id]
    )->fetchAll();

    if (empty($ratings)) {
      return 0;
    }

    $totalRating = array_reduce($ratings, function ($carry, $item) {
      return $carry + $item['rating'];
    }, 0);

    return round($totalRating / count($ratings));
  }

  public function getRatingsQuantity(): int
  {
    $database = new Database(config('database'));

    $ratings = $database->query(
      query: "SELECT rating FROM ratings WHERE book_id = :book_id",
      params: ['book_id' => $this->id]
    )->fetchAll();

    $ratingsQuantity = count($ratings);

    return $ratingsQuantity;
  }
}
