<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Snapshot - Login</title>
    <link rel="stylesheet" href="./style/style.css"/>
    <script src="./js/main.js"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div class="page-wrapper">
    <div class="content-wrap">
        <div class="welcome-page">
            <div class="welcome-container login-container welcome-container--center">
                <div class="welcome-head">
                    <div class="head-image">
                        <a href="#" class="logo">Snapshot</a>
                    </div>
                </div>
                <div class="welcome-body">
                	<div style="color: red;">${error}</div>
	                <form action="Login" method="post">
	                    <div class="column-scheduler">
	                        <div class="form-field form-field--full">
	                            <input class="input" type="text" name="email" placeholder="Login">
	                        </div>
	                        <div class="form-field form-field--full">
	                            <input class="input" type="password" name="password" placeholder="Password">
	                        </div>
	                       	<input type="hidden" name="action" value="login">
	                        <div class="form-field form-field--full">
	                            <button class="btn-modal btn-submit">Submit</button>
	                        </div>
	                    </div>
	                 </form>
                </div>

            </div>
        </div>
            <%@ include file="footer.jsp" %> 
    </div>
</div>



<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
</body>
</html>