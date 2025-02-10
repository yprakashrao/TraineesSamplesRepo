package com.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;


import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import DB.DBConnect;

@WebServlet("/store")
public class StoreServlet extends HttpServlet {

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
		{
			String fullname = req.getParameter("fullname");
			String dob = req.getParameter("dob");
			String email = req.getParameter("email");
			String mobno = req.getParameter("mobno");
			String password = req.getParameter("password");
			String address = req.getParameter("address");
			String gender = req.getParameter("gender");

			String sql = "insert into registerdata(fullname,dob,email,mobno,password,address,gender) values(?,?,?,?,?,?,?)";

			try {
				Connection con = DBConnect.getConn();
				PreparedStatement pst = con.prepareStatement(sql);

				pst.setString(1, fullname);
				pst.setString(2, dob);
				pst.setString(3, email);
				pst.setString(4, mobno);
				pst.setString(5, password);
				pst.setString(6, address);
				pst.setString(7, gender);
				pst.executeUpdate();
				res.sendRedirect("Appointment.jsp?msg=yes");
			} catch (Exception e) {
				res.sendRedirect("Appointment.jsp?msg=no");
				e.printStackTrace();
			}
		}

	}
}
