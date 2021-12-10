package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Joueur;
import com.example.demo.repositorys.JoueurRepository;


@Service
public class JoueurService {
	 @Autowired
	    private JoueurRepository joueurrepository;

	    public Joueur saveJoueur(Joueur joueur) {
	        return joueurrepository.save(joueur);
	    }

	    public List<Joueur> saveJoueurs(List<Joueur> joueurs) {
	        return joueurrepository.saveAll(joueurs);
	    }

	    public List<Joueur> getJoueurs() {
	        return joueurrepository.findAll();
	    }

	    public Joueur getJoueurById(int id) {
	        return joueurrepository.findById(id).orElse(null);
	    }
/*
	    public Equipe getEquipeByName(String nom) {
	        return equiperepository.findByName(nom);
	    } */

	    public String deleteJoueur(int id) {
	    	joueurrepository.deleteById(id);
	        return "product removed !! " + id;
	    }

	    public Joueur updateJoueur(Joueur joueur) {
	    	Joueur existingProduct = joueurrepository.findById(joueur.getId()).orElse(null);
	        existingProduct.setNom(joueur.getNom());
	       existingProduct.setDate(joueur.getDate());
	       
	        return joueurrepository.save(existingProduct);
	    }
}
