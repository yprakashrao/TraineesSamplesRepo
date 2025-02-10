package com.hospital.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.entity.Patient;
import com.hospital.repository.PatientsRepo;


@Service
public class ServiceImpl implements PatientServices {

	@Autowired
	private PatientsRepo patientdao;

	public ServiceImpl(PatientsRepo patientdao) {
		this.patientdao = patientdao;
	}

	@Override
	public List<Patient> getPatient() {
		return patientdao.findAll();
	}

	@Override
	public Patient getPatientByID(Long id) {
		return patientdao.findById(id).get();
	}


	@Override
	public Patient addPatient(Patient patient) {
		return patientdao.save(patient);
	}

	@Override
	public List<Patient> getSearchPatientsSQL(String first_name, String last_name, String phone) {
		// TODO Auto-generated method stub
		return null;
	}
}
