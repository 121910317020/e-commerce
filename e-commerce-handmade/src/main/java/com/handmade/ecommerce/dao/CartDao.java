package com.handmade.ecommerce.dao;

import com.handmade.ecommerce.entity.Cart;
import com.handmade.ecommerce.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartDao extends CrudRepository<Cart, Integer> {
    public List<Cart> findByUser(User user);
}
