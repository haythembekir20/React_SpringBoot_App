package com.example.demo.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Equipe;

public interface EquipeRepository extends JpaRepository<Equipe,Integer>{
	//Equipe findByName(String nom);
}
