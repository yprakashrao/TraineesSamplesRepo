
package Com.Practice;

import javax.servlet.*;
import java.io.IOException;
import java.sql.*;
import javax.servlet.http.*;

public class MyServlet extends HttpServlet {
	public void doGet(HttpServletRequest Request, HttpServletResponse response) throws ServletException, IOException {
		
		String name=Request.getParameter("user_name");
		String pasword=Request.getParameter("user_pass");
		String gender=Request.getParameter("user_gender");
		String course=Request.getParameter("user_course");
		String email=Request.getParameter("user_email");
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/student_manage","root","7448");
			Statement st = con.createStatement();
			st.execute("insert into studs values("+name+","+email+","+pasword+","+gender+","+course+")");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}