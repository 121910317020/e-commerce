package com.handmade.ecommerce.dao;

import com.handmade.ecommerce.entity.OrderDetail;
import com.handmade.ecommerce.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface OrderDetailDao extends CrudRepository<OrderDetail, Integer> {
    public List<OrderDetail> findByUser(User user);

    public List<OrderDetail> findByOrderStatus(String status);
}
