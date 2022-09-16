<?php

class Dvd extends Product 
{
    private $size;

    public function getValues() 
    {
        $sql = "SELECT * FROM products AS p, product_dvd AS dvd
                WHERE p.sku = dvd.sku";
        $stmt = $this->connect()->query($sql);
        $result = $stmt->fetchAll();

        return $result;
    }

    public function setValues($data) 
    {
        $this->sku = $data['sku'];
        $this->name = $data['name'];
        $this->price = $data['price'];
        $this->size = $data['size'];
        $type = $data['type'];

        $sql = "INSERT INTO products(sku,name,price,type)
                VALUES(?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$this->sku,$this->name,$this->price,$type]);
        
        $sql = "INSERT INTO product_dvd(sku,size)
                VALUES(?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$this->sku,$this->size]);

        echo "Entry_successful";
    }
}