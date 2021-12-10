package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Equipe;
import com.example.demo.services.EquipeService;
@RestController
@CrossOrigin
public class EquipeRestController {

    @Autowired
    private EquipeService equipeservice;

    @PostMapping("/addEquipe")
    public Equipe addEquipe(@RequestBody Equipe product) {
        return equipeservice.saveEquipe(product);
    }

    @PostMapping("/addEquipes")
    public List<Equipe> addEquipes(@RequestBody List<Equipe> Equipes) {
        return equipeservice.saveEquipes(Equipes);
    }

    @GetMapping("/equipes")
    public List<Equipe> findAllProducts() {
        return equipeservice.getEquipes();
    }

    @GetMapping("/equipeById/{id}")
    public Equipe findEquipeById(@PathVariable int id) {
        return equipeservice.getEquipeById(id);
    }

    /*
    @GetMapping("/equipe/{name}")
    public Equipe findEquipeByName(@PathVariable String nom) {
        return equipeservice.getEquipeByName(nom);
    }
    */

    @PutMapping("/update")
    public Equipe updateProduct(@RequestBody Equipe product) {
        return equipeservice.updateEquipe(product);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteEquipe(@PathVariable int id) {
        return equipeservice.deleteEquipe(id);
    }
}
