<?php

function dd(...$dump)
{
  dump($dump);

  exit();
}

function dump(...$dump)
{
  echo '<pre>';

  var_dump($dump);

  echo '</pre>';
}

function flash()
{
  return new Flash;
}

function config($key = null) {
  $config = require 'config.php';

  if ($key !== null) {
    return $config[$key];
  }

  return $config;
}

function auth() {
  if (!isset($_SESSION['auth'])) {
    return null;
  }

  return $_SESSION['auth'];
}

function calculateAverageRating(array $ratings): int {
  if (count($ratings) === 0) {
      return 0;
  }

  $totalRating = 0;
  foreach ($ratings as $rating) {
      $totalRating += $rating->rating;
  }

  return round($totalRating / count($ratings));
}
