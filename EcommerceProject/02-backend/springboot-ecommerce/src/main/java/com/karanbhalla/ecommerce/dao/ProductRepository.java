package com.karanbhalla.ecommerce.dao;

import com.karanbhalla.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
