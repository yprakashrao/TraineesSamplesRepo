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
<title>show</title>
<style type="text/css">
 table {
  border:1px solid Black;
 }
</style>
</head>
<body>
<table>
<tr>
<th>ID</th>
<th>Name</th>
<th>DOB</th>
<th>Email</th>
<th>Mo.No</th>
<th>Password</th>
<th>Address</th>
<th>Gender</th>
<th>Update</th>
<th>Delete</th>
</tr>
<% 
  Connection con = DBConnect.getConn();
  Statement st = con.createStatement();
  String sql = "select * from registerdata";
  ResultSet rs = st.executeQuery(sql);
  
  while(rs.next()){
%>

<tr>
<td><%=rs.getInt(1) %></td>
<td><%=rs.getString(2) %></td>
<td><%=rs.getString(3) %></td>
<td><%=rs.getString(4) %></td>
<td><%=rs.getString(5) %></td>
<td><%=rs.getString(6) %></td>
<td><%=rs.getString(7) %></td>
<td><%=rs.getString(8) %></td>
<td><a href="update.jsp?id=<%=rs.getString("id")%>">update</a></td>
<td><a href="delete?id=<%=rs.getString("id")%>">delete</a></td>
</tr>
<% } %>
</table>
</body>
</html>