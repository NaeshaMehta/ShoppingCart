package com.example.demo;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "`Products`")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String image;
    private String description;
    private String category;

    @OneToMany(mappedBy = "product")
    private List<ProductVariation> variations;

    public Long getId() { return id; }
    public String getName() { return name; }
    public String getImage() { return image; }
    public String getDescription() { return description; }
    public String getCategory() { return category; }
    public List<ProductVariation> getVariations() { return variations; }

    public void setId(Long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setImage(String image) { this.image = image; }
    public void setDescription(String description) { this.description = description; }
    public void setCategory(String category) { this.category = category; }
    public void setVariations(List<ProductVariation> variations) { this.variations = variations; }
}