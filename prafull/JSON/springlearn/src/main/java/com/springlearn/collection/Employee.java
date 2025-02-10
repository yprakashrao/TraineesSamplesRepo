package com.springlearn.collection;

import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

public class Employee {
   private String name;
   private List<String> phones;
   private Set<String> addresss;
   private Properties props;
   
   public Employee() {
	super();
	// TODO Auto-generated constructor stub
}
public Employee(Properties props , String name, List<String> phones, Set<String> addresss, Map<String, String> job) {
	super();
	this.name = name;
	this.phones = phones;
	this.addresss = addresss;
	this.job = job;
	this.props=props;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public List<String> getPhones() {
	return phones;
}
public void setPhones(List<String> phones) {
	this.phones = phones;
}
public Set<String> getAddresss() {
	return addresss;
}
public void setAddresss(Set<String> addresss) {
	this.addresss = addresss;
}
public Map<String, String> getJob() {
	return job;
}
public void setJob(Map<String, String> job) {
	this.job = job;
}
public Properties getProps() {
	return props;
}
public void setProps(Properties props) {
	this.props = props;
}
private Map<String, String> job;
   
}
