<?php

abstract class Product extends DbConnect
{
    protected $sku;
    protected $name;
    protected $price;
    
    abstract public function getValues();
    abstract public function setValues($data);

    public function checkSKU($sku)
    {
        $sql = "SELECT * FROM products WHERE sku = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$sku]);

        $found = false;

        if ($stmt->rowCount() > 0) 
        {
            $found = true;
            echo "SKU_Found";
        } 

        return $found;
    }

    public function deleteProduct($sku)
    {
        $sql = "DELETE FROM products WHERE sku = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$sku]);

        echo "Product Deleted";
    }

}