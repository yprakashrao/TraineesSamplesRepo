<%@page import="java.sql.Connection"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Statement"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="com.db.*"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>User data Show</title>
</head>
<body>
	<center><table border="1px">
	    <tr>
		<th>ID</th>
		<th>Full Name</th>
		<th>Email</th>
		<th>Password</th>
		</tr>
		<%
		Connection conn = DBConnect.getConn();
		Statement st = conn.createStatement();
		ResultSet rs = st.executeQuery("select * from user_dtls");

		while (rs.next()) {
		%>  
		<tr> 
		<td><%=rs.getInt(1)%></td>
		<td><%=rs.getString(2)%></td>
		<td><%=rs.getString(3)%></td>
		<td><%=rs.getString(4)%></td>
        </tr>
		<%
		}
		%>
	</table>
</center>
</body>
</html>