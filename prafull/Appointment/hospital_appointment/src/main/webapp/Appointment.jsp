<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Appointment</title>
</head>
<body>
	<form action="store" method="post">

		<div class="name">
			<label class="form-label">Full Name</label> <input type="text"
				required name="fullname" class="form-control">
		</div>


		<div class="dob">
			<label class="form-label">DOB</label> <input type="date" required
				name="dob" class="form-control">
		</div>


		<div class="email">
			<label class="form-label">Email</label> <input type="text" required
				name="email" class="form-control">
		</div>

		<div class="mobno">
			<label class="form-label">Mob No</label> <input type="text" required
				name="mobno" class="form-control">
		</div>

		<div class="password">
			<label class="form-label">Password</label> <input required
				name="password" type="password" class="form-control">
		</div>

		<div class="address">
			<label class="form-label">Address</label> <input required
				name="address" type="text" class="form-control">
		</div>

		<div class="gender">
			<label class=form-label>Gender</label> <input type="radio"
				name="gender" class="form-control">Male <input type="radio"
				name="gender" class="form-control">Female
		</div>
		<input type="submit" value="submit">
	</form>

	<%
	String msg = request.getParameter("msg");
	if ("yes".equals(msg)) {
	%>
	<h3>appointment booked</h3>
	<%
	}
	if ("no".equals(msg)) {
	%>
	<h3>something went wrong</h3>
	<%
	}
	%>
</body>
</html>