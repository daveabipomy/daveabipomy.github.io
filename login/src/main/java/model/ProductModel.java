package model;

import java.util.ArrayList;
import java.util.List;


public class ProductModel{
    public List<Product> getProductDBS() {
        return productDBS;
    }

    public void setProductDBS(List<Product> productDBS) {
        this.productDBS = productDBS;
    }

    List<Product> productDBS = new ArrayList();

   public ProductModel(){
        productDBS.add(new Product("1","couch","coach1.jpg",120));
        productDBS.add(new Product("2","couch1","coach2.jpg",210));
    }



}
