package com.correriadelivery.CorreriaDelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.correriadelivery.CorreriaDelivery.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
