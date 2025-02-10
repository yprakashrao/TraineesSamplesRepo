package com.example;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class InsertData
 */
@WebServlet("/insert")
public class InsertData extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public InsertData() {
		super();
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String date = request.getParameter("Rday");
		String name = request.getParameter("firstname");
		int age = Integer.parseInt(request.getParameter("age"));
		long mobile = Long.parseLong(request.getParameter("mobilenumber"));
		String gender = request.getParameter("gender");
		String address = request.getParameter("address");

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/student_manage", "root", "7448");
			PreparedStatement pst = con.prepareStatement(
					"insert into appointments values(?,?,?,?,?,?)");
			pst.setString(1, date);
			pst.setString(2, name);
			pst.setInt(3, age);
			pst.setLong(4, mobile);
			pst.setString(5, gender);
			pst.setString(6, address);
			
			pst.executeUpdate();
			System.out.println("data entered sucessfully");
			con.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
