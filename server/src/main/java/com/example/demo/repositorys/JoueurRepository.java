package com.example.demo.repositorys;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Joueur;



public interface JoueurRepository extends JpaRepository<Joueur,Integer>{
	//Equipe findByName(String nom);
}