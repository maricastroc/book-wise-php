<?php

class User {
  public $id;
  public $name;
  public $email;
  public $password;
  public $avatar_url;

  public static function make($item) {
    $user = new self();

    $user->id = $item['id'];
    $user->name = $item['name'];
    $user->email = $item['email'];
    $user->password = $item['password'];
    $user->avatar_url = $item['avatar_url'];

    return $user;
  }
}