package com.servlet;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.Statement;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import DB.DBConnect;
@WebServlet("/delete")
public class DeleteServlet extends HttpServlet{
  protected void doGet(HttpServletRequest req , HttpServletResponse res) {
	  int id = Integer.parseInt(req.getParameter("id"));
	  try {
			String sql = "delete from registerdata where id="+id;
			
			Connection con = DBConnect.getConn();
			PreparedStatement pst = con.prepareStatement(sql);
			pst.executeUpdate();
			res.sendRedirect("show.jsp");
			
		} catch (Exception e) {
			e.printStackTrace();
		}
  }
}
