package com.hospital.controller;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.entity.Patient;
import com.hospital.repository.PatientsRepo;
import com.hospital.services.PatientServices;

@RestController
@CrossOrigin("http://localhost:4200")
public class MyController {
	
	@Autowired
	private PatientServices service;
	
	
	@Autowired
	private PatientsRepo repo;
	
	    Map<String, Object> map = new LinkedHashMap<String, Object>();
	    List<Patient> patients;
	
	@GetMapping("patients")
	public List<Patient> getPatients(){
		return service.getPatient();
	}
	
	@GetMapping("patient/{patient_id}")
	public Patient allpatientByID(@PathVariable("patient_id") long patient_id) {
		return service.getPatientByID(patient_id);
	}

	@PostMapping("add_patient")
		public ResponseEntity<?> addPatient(@RequestBody Patient patient) {
			Map<String, Object> map = new LinkedHashMap<String, Object>(); 
			service.addPatient(patient);
			map.put("status", 1);
			map.put("message", "Record is Saved Successfully!");
			return new ResponseEntity<>(map, HttpStatus.CREATED);
		}
	

	
	   @GetMapping("/existing/{first_name}/{last_name}/{phone}")
	   @ResponseBody
	    public Patient SearchPatientsSQL(@PathVariable Map<String, String> variable) {
		   String first_name = variable.get("first_name");
		   String last_name = variable.get("last_name");
		   String phone = variable.get("phone");
		   Patient patients = repo.findSearchPatientsSQL(first_name, last_name, phone);
		   return patients;
	 }
}






























