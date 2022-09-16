<?php

class Book extends Product 
{
    private $weight;

    public function getValues() 
    {
        $sql = "SELECT * FROM products AS p, product_book AS book
                WHERE p.sku = book.sku";
        $stmt = $this->connect()->query($sql);
        $result = $stmt->fetchAll();

        return $result;
    }

    public function setValues($data) 
    {
        $this->sku = $data['sku'];
        $this->name = $data['name'];
        $this->price = $data['price'];
        $this->weight = $data['weight'];
        $type = $data['type'];

        $sql = "INSERT INTO products(sku,name,price,type)
                VALUES(?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$this->sku,$this->name,$this->price,$type]);
        
        $sql = "INSERT INTO product_book(sku,weight)
                VALUES(?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$this->sku,$this->weight]);

        echo "Entry_successful";
    }
}