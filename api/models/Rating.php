<?php

class Rating {
  public $user_id;
  public $book_id;
  public $id;
  public $review;
  public $rating;
  public $name;
  public $created_at;

  public static function make($item) {
    $rating = new self();

    $rating->user_id = $item['user_id'];
    $rating->book_id = $item['book_id'];
    $rating->created_at = $item['created_at'];
    $rating->id = $item['id'];
    $rating->review = $item['review'];
    $rating->rating = $item['rating'];

    return $rating;
  }
}