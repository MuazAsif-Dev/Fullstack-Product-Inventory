<?php

class Furniture extends Product 
{
    private $height;
    private $width;
    private $length;

    public function getValues() 
    {
        $sql = "SELECT * FROM products AS p, product_furniture AS furniture
                WHERE p.sku = furniture.sku";
        $stmt = $this->connect()->query($sql);
        $result = $stmt->fetchAll();

        return $result;
    }

    public function setValues($data) 
    {
        $this->sku = $data['sku'];
        $this->name = $data['name'];
        $this->price = $data['price'];
        $this->height = $data['height'];
        $this->width = $data['width'];
        $this->length = $data['length'];
        $type = $data['type'];

        $sql = "INSERT INTO products(sku,name,price,type)
                VALUES(?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$this->sku,$this->name,$this->price,$type]);
        
        $sql = "INSERT INTO product_furniture(sku,height,width,length)
                VALUES(?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$this->sku,$this->height,$this->width,$this->length]);

        echo "Entry_successful";
    }
}