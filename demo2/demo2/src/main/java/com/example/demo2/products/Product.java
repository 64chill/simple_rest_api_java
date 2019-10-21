package com.example.demo2.products;

public class Product {
    private String name;
    private Integer quantitySold;
    private String description;
    private Double price;
    private int id;

    // ________________________________ Product ________________________________________________________________________
    public Product(int id, String name,String description,  Double price,  Integer quantitySold) {
        this.id = id;
        this.name = name;
        this.quantitySold = quantitySold;
        this.description = description;
        this.price = price;
    }

    /* *****************************************************************************************************************

        GETTERS AND SETTERS

    ***************************************************************************************************************** */

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getQuantitySold() {
        return quantitySold;
    }

    public void setQuantitySold(Integer quantitySold) {
        this.quantitySold = quantitySold;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
