package com.springlearn;

public class Patient {
    private int id;
    private String name;
    private String city;
    
    
	@Override
	public String toString() {
		return "Patient [id=" + id + ", name=" + name + ", city=" + city + "]";
	}
	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Patient(int id, String name, String city) {
		super();
		this.id = id;
		this.name = name;
		this.city = city;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
}
