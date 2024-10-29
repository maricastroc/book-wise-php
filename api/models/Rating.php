<?php

class Rating {
  public $user_id;
  public $book_id;
  public $review;
  public $rate;
  public $created_at;

  public $user;
  public $book;

  public static function make($item) {
      $rating = new self();

      $rating->user_id = $item['user_id'];
      $rating->book_id = $item['book_id'];
      $rating->created_at = $item['created_at'];
      $rating->review = $item['review'];
      $rating->rate = $item['rate'];

      if (isset($item['user'])) {
          $rating->user = new User();
          $rating->user->id = $item['user_id'];
          $rating->user->name = $item['user_name'];
          $rating->user->avatar_url = $item['user_avatar_url'];
      }

      if (isset($item['book'])) {
          $rating->book = new Book();
          $rating->book->id = $item['book_id'];
          $rating->book->title = $item['book_title'];
          $rating->book->author = $item['book_author'];
          $rating->book->cover_url = $item['book_cover_url'];
      }

      return $rating;
  }
}