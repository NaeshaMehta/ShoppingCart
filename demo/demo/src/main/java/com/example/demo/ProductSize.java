package com.example.demo;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "`Product_Size`")
public class ProductSize {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "var_id")
    @JsonIgnore
    private ProductVariation variation;

    private String size;
    private double price;

    public Long getId() { return id; }
    public ProductVariation getVariation() { return variation; }
    public String getSize() { return size; }
    public double getPrice() { return price; }

    public void setId(Long id) { this.id = id; }
    public void setVariation(ProductVariation variation) { this.variation = variation; }
    public void setSize(String size) { this.size = size; }
    public void setPrice(double price) { this.price = price; }
}