package com.servlet;

import java.sql.Connection;
import java.sql.PreparedStatement;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import DB.DBConnect;

@WebServlet("/update")
public class UpdateServlet extends HttpServlet {
	protected void doPost(HttpServletRequest req, HttpServletResponse res) {
		int id = Integer.parseInt(req.getParameter("id"));
		String fullname = req.getParameter("fullname");
		String dob = req.getParameter("dob");
		String email = req.getParameter("email");
		String mobno = req.getParameter("mobno");
		String password = req.getParameter("password");
		String address = req.getParameter("address");
		String gender = req.getParameter("gender");
		try {
			String sql = "update registerdata set fullname=?, dob=?, email=?,mobno=?,password=?,address=?,gender=? where id=?";
			Connection con = DBConnect.getConn();
			PreparedStatement st = con.prepareStatement(sql);
			st.setString(1, fullname);
			st.setString(2, dob);
			st.setString(3, email);
			st.setString(4, mobno);
			st.setString(5, password);
			st.setString(6, address);
			st.setString(7, gender);
			st.setInt(8, id);
			st.executeUpdate();
			res.sendRedirect("show.jsp");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
