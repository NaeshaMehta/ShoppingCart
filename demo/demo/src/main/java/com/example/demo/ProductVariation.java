package com.example.demo;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "`Product_Variation`")
public class ProductVariation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "prod_id")
    @JsonIgnore
    private Product product;

    private String name;
    private String image;

    @OneToMany(mappedBy = "variation")
    private List<ProductSize> sizes;

    public Long getId() { return id; }
    public Product getProduct() { return product; }
    public String getName() { return name; }
    public String getImage() { return image; }
    public List<ProductSize> getSizes() { return sizes; }

    public void setId(Long id) { this.id = id; }
    public void setProduct(Product product) { this.product = product; }
    public void setName(String name) { this.name = name; }
    public void setImage(String image) { this.image = image; }
    public void setSizes(List<ProductSize> sizes) { this.sizes = sizes; }
}