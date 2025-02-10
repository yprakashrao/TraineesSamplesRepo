package com.hospital.services;

import java.util.List;

import com.hospital.entity.Patient;

public interface PatientServices {
 
	 public List<Patient> getPatient();

	 public Patient getPatientByID(Long id);
	
	 public Patient addPatient(Patient patient);
	
	 public List<Patient>getSearchPatientsSQL(String first_name , String last_name , String phone);
}
