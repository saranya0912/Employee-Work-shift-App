package com.example.demo.controllers;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Employee;
import com.example.demo.repositories.EmployeeRepository;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class EmployeeController {
	@Autowired
	public EmployeeRepository employeeRepository;
	@GetMapping(value="/all")
	public List<Employee> getAllEmployees(){
		
		return employeeRepository.findAll();
	}
	
	@PostMapping(value="/create")
	public String createEmployee(@RequestBody Employee employee) {
		Employee insertedEmployee = employeeRepository.insert(employee);
		return "Employee created"+ insertedEmployee.getTotal_employee();
	}
}
