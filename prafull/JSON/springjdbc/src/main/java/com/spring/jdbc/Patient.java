package com.spring.jdbc;

public class Patient {
  private int id;
  private String name;
  private String age;
  private String mobno;
  private String gender;
  private String address;
  
public Patient() {
	super();
	
}
public Patient(int id, String name, String age, String mobno, String gender, String address) {
	super();
	this.id = id;
	this.name = name;
	this.age = age;
	this.mobno = mobno;
	this.gender = gender;
	this.address = address;
}
@Override
public String toString() {
	return "Patient [id=" + id + ", name=" + name + ", age=" + age + ", mobno=" + mobno + ", gender=" + gender
			+ ", address=" + address + "]";
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
public String getAge() {
	return age;
}
public void setAge(String age) {
	this.age = age;
}
public String getMobno() {
	return mobno;
}
public void setMobno(String mobno) {
	this.mobno = mobno;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
}
