<%--
  Created by IntelliJ IDEA.
  User: Pomi-dave
  Date: 6/13/2019
  Time: 3:48 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <style>
        #content{
            width:800px;
            margin: auto;
            text-align: center;
        }
        #login
        {
            width:400px;
            border:1px solid black;
            background-color: darkgrey;
            margin: auto;
        }
    </style>
</head>
<body>

<div id="content">
<h1>Please Enter the log-in Information Below</h1>
    <div id="login">
<form action='/login' method='POST'>
    <br /><br />
    user name: <input id="username" type='text' name='username'><br /><br />
    password: <input type='password' name='password' /><br /><br />
    <input type='submit' name='submit' value='log-in' /><br /><br />

    <input id="box1" type="checkbox" name="rememberme"  > Remember me<br /><br />
</form><br /><br />
    </div>
</div>
</body>
</html>
