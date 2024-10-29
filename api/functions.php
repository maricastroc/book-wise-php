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

function calculateAverageRate(array $rates): int {
  if (count($rates) === 0) {
      return 0;
  }

  $totalRates = 0;
  foreach ($rates as $rate) {
      $totalRates += $rate->rate;
  }

  return round($totalRates / count($rates));
}
