package com.karanbhalla.ecommerce.config;

import com.karanbhalla.ecommerce.entity.Product;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

public class MyDataRestConfig implements RepositoryRestConfigurer {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        HttpMethod[] theUnsupportedActions={HttpMethod.DELETE,HttpMethod.POST,HttpMethod.PUT};

        //disable http methods for products
        config.getExposureConfiguration().forDomainType(Product.class).withItemExposure(((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions)))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions)));

    }
}
