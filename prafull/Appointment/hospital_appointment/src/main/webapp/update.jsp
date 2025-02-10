<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="DB.DBConnect"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<%
int id = Integer.parseInt(request.getParameter("id"));
String sql = "select * from registerdata where id=" + id;
Connection conn = DBConnect.getConn();
Statement st = conn.createStatement();
ResultSet rs = st.executeQuery(sql);

while (rs.next()) {
%>
<body>
	<form method="post" action="update">

		<input type="text" name="id" value="<%=rs.getInt("id")%>"> <br>
		Name:<br> <input type="text" name="fullname"
			value="<%=rs.getString("fullname")%>"> <br> Dob:<br>
		<input type="text" name="dob" value="<%=rs.getString("dob")%>">
		<br> Email:<br> <input type="email" name="email"
			value="<%=rs.getString("email")%>"> <br> Mo.No:<br>
		<input type="mobno" name="mobno" value="<%=rs.getString("mobno")%>">
		<br> Password:<br> <input type="password" name="password"
			value="<%=rs.getString("password")%>"> <br> Address:<br>
		<input type="text" name="address" value="<%=rs.getString("address")%>">
		<br> Gender:<br> <input type="gender" name="gender"
			value="<%=rs.getString("gender")%>"> <br> <br> <input
			type="submit" value="submit">
	</form>
</body>
<%
}
%>
</html>