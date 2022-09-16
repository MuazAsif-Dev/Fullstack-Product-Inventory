<?php

class DbConnect 
{
    private $host = "localhost";
    private $user = "root";
    private $pwd = "";
    private $dbName = "products_db";

    protected function connect() {
        try {
            $dataSourceName = 'mysql:host=' . $this->host . ';dbname=' . $this->dbName;
            $pdo = new PDO($dataSourceName, $this->user, $this->pwd);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            return $pdo;
        } catch (Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }
}