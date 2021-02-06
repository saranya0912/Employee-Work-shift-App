package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "usercollection")
public class Employee {

	@Id
	private long id;
	private String sun;
	private String mon;	
	private String tue;	
	private String wed;	
	private String thu;	
	private String fri;	
	private String sat;
	private String totalEmployees;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	public String getSun() {
		return sun;
	}
	public void setSun(String sun) {
		this.sun = sun;
	}
	public String getMon() {
		return mon;
	}
	public void setMon(String mon) {
		this.mon = mon;
	}
	public String getTue() {
		return tue;
	}
	public void setTue(String tue) {
		this.tue = tue;
	}
	public String getWed() {
		return wed;
	}
	public void setWed(String wed) {
		this.wed = wed;
	}
	public String getThu() {
		return thu;
	}
	public void setThu(String thu) {
		this.thu = thu;
	}
	public String getFri() {
		return fri;
	}
	public void setFri(String fri) {
		this.fri = fri;
	}
	public String getSat() {
		return sat;
	}
	public void setSat(String sat) {
		this.sat = sat;
	}
	public String getTotal_employee() {
		return totalEmployees;
	}

	public void setName(String totalEmployees) {
		this.totalEmployees = totalEmployees;
	}

	public Employee(long id, String sun, String mon, String tue, String wed, String thu, String fri, String sat, String totalEmployees) {
		super();
		this.id = id;
		this.sun = sun;
		this.mon = mon;
		this.tue = tue;
		this.wed = wed;
		this.thu = thu;
		this.fri = fri;
		this.sat = sat;
		this.totalEmployees = totalEmployees;

	}
	
}
