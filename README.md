
# Fullstack Product Inventory

A fullstack webapp simulating an e-commerce site with the ability to list, add and delete products. The rendering of the components is done without any conditional statements using concepts, such as **Polymorphic Dispatch** and **Dynamic Keys Bindings**.
## Demo

Link to site [here](https://fullstack-product-inventory.000webhostapp.com/).

## Features

- List all products
- Mass Delete multiple items
- Responsive Design
- Form validation
- Dynamic Component Rendering


## Tech Stack

**Client:** React, SCSS

**Server:** PHP


## Screenshots

![Product-List-Screenshot](https://user-images.githubusercontent.com/108615200/210180839-788ed184-d367-4d1c-a359-e6e082c5998c.png)<br /><br />
![Product-Add-Screenshot](https://user-images.githubusercontent.com/108615200/210180847-7c02248a-5c6a-4bb9-844c-25de4b9147f2.png)



## API Reference

#### Get all products

```
  GET /backend/load
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :----------------------------------|
| `None`    | `string` | Returns a list of all the products |

#### Save product

```
  GET /backend/save
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Product data`| `JSON` | Saves product in database if `id` doesn't already exist  |


#### Delete product

```
  GET /backend/delete/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Deletes products from the database with matched Ids |

