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
  public $cover_url;
  public $average_rating;
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
    $book->cover_url = $item['cover_url'];
    $book->average_rating = $item['average_rating'];
    $book->ratings = $item['ratings'];

    return $book;
  }

  public function getAverageRating(): int
  {
    $database = new Database(config('database'));

    $rates = $database->query(
      query: "SELECT rate FROM ratings WHERE book_id = :book_id",
      params: ['book_id' => $this->id]
    )->fetchAll();

    if (empty($rates)) {
      return 0;
    }

    $totalRate = array_reduce($rates, function ($carry, $item) {
      return $carry + $item['rate'];
    }, 0);

    return round($totalRate / count($rates));
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
