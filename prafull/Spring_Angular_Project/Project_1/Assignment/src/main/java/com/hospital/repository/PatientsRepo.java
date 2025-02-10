package com.hospital.repository;

import java.util.List;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hospital.entity.Patient;

public interface PatientsRepo extends JpaRepository<Patient, Long> {

	@Query(value = "SELECT * FROM patient p WHERE p.first_name=?1 and p.last_name=?2 and p.phone=?3", nativeQuery = true)
	Patient findSearchPatientsSQL(String first_name, String last_name, String phone);

}


