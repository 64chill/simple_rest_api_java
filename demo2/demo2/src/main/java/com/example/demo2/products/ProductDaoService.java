package com.example.demo2.products;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ProductDaoService {

    private static int countProducts = 8;
    private static List<Product> productList=new ArrayList<>();

    static{

        productList.add(new Product(1, "Shampoo 1","This is an excellant shampoo",29.31 , 15) );
        productList.add(new Product(2, "Sunglasses","Unbranded sunglasses that are just right for you",5.39 , 131) );
        productList.add(new Product(3, "Headphones","Headphones description here....",11.99 , 1) );
        productList.add(new Product(4, "Watch","100% brand new and high quality.",56.0 , 23) );
        productList.add(new Product(5, "USB stick","This is an excellant shampoo",29.31 , 12) );
        productList.add(new Product(6, "Shoes","Lorem ipsum dolor sit amet, consectetur adipiscing elit",29.31 , 13) );
        productList.add(new Product(7, "Boots","sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",29.31 , 77) );
        productList.add(new Product(8, "Sneekers","Excepteur sint occaecat cupidatat non proident",29.31 , 155) );

    }

    // _______________________ get_AllProducts _________________________________________________________________  1
    public List<Product> get_AllProducts(){
        return productList;
    }

    // _______________________ get_UniqueProduct _______________________________________________________________  2
    public Product get_UniqueProduct( int in_id){
        for (Product p: productList){
            if(p.getId() == in_id){
                return p;
            }
        }
        return null;
    }

    // _______________________ get_sumOfSoldProducts ___________________________________________________________  3
    public int get_sumOfSoldProducts(){
        int sumOfSoldProducts = 0;
        for( Product p: productList){
            sumOfSoldProducts += p.getQuantitySold();
        }
        return sumOfSoldProducts;
    }

    // _______________________ get_incomeSum __________________________________________________________________  4
    public double get_incomeSum(){
        double incomeSum = 0;
        for( Product p: productList){
            incomeSum += p.getQuantitySold() * p.getPrice() ;
        }
        return incomeSum;
    }

    // _______________________ update_ProductPrice ____________________________________________________________  5
    public Product update_ProductPrice( int in_id, double in_price){
        for (Product p: productList){
            if(p.getId() == in_id){
                p.setPrice(in_price);
                return p;
            }
        }
        return null;
    }

    // _______________________ add_Product ____________________________________________________________________  6
    public Product add_Product(Product in_product){
        Integer numberNextInt = this.productList.get(countProducts-1).getId() +1;
        in_product.setId(numberNextInt);
        in_product.setQuantitySold(0);
        productList.add(in_product);
        countProducts++;
        return in_product;
    }

    // _______________________ delete__Product _________________________________________________________________  7
    public boolean delete__Product(int in_id){
        for (Product p: productList){
            if(p.getId() == in_id){
                productList.remove(p);
                countProducts--;
                return true;
            }
        }
        return false;
    }
}

