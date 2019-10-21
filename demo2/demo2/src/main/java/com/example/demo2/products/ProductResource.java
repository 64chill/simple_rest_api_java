package com.example.demo2.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ProductResource {
    @Autowired
    private ProductDaoService service;
    // _______________________ /api/products ____________________________________________________________
    @GetMapping(path = "/api/products")
    public List<Product> res_get_ListAllProducts() {
        return service.get_AllProducts();
    }


    // _______________________ /api/product/{p_id} ________________________________________________________
    @GetMapping(path = "/api/product/{p_id}")
    public ResponseEntity res_get_ListUniqueProduct(@PathVariable int p_id) {

        Product resProduct = service.get_UniqueProduct(p_id);

        if (null == resProduct) {
            return new ResponseEntity("No PRODUCT found with that ID " + p_id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(resProduct, HttpStatus.OK);
    }

    // _______________________ /api/product/sold-products-sum _________________________________________________
    @GetMapping(path = "/api/products/sold-products-sum")
    public ResponseEntity res_get_IntSoldProductsSum() {
        Integer soldSum = service.get_sumOfSoldProducts();
        return new ResponseEntity(soldSum, HttpStatus.OK);
    }

    // _______________________ /api/products/income-sum _________________________________________________________
    @GetMapping(path = "/api/products/income-sum")
    public ResponseEntity res_get_DoubleIncomeSum() {
        Double incomeSum = service.get_incomeSum();
        return new ResponseEntity(incomeSum, HttpStatus.OK);
    }

    // _______________________ /api/product/update/price ________________________________________________________
    @PutMapping("/api/product/update/price")
    public ResponseEntity res_update_ProductPrice(@RequestBody Product req_product) {
        Product resProduct = service.update_ProductPrice(req_product.getId(), req_product.getPrice());
        if (null == resProduct) {
            return new ResponseEntity("No PRODUCT found for ID " + req_product.getId(), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(resProduct, HttpStatus.OK);
    }

    // _______________________ /api/product/add ____________________________________________________________
    @PostMapping("/api/product/add")
    public ResponseEntity res_add_Prodcut(@RequestBody Product req_product) {
        Product res_product = service.add_Product(req_product);
        if (null == res_product) {
            return new ResponseEntity("Ops something went wrong", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(res_product ,HttpStatus.OK);
    }

    // _______________________ /api/product/delete __________________________________________________________
    @DeleteMapping ("/api/product/delete")
    public ResponseEntity res_deleteTodo (@RequestBody int in_id) { //  Product req_product
        boolean boolean_response = service.delete__Product(in_id); // req_product.getId()
        if (boolean_response == false) {
            return new ResponseEntity("No Product found for ID " +in_id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity("success" ,HttpStatus.OK);
    }


}
