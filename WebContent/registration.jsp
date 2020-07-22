<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="header.jsp" %> 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Snapshot</title>
    <link rel="stylesheet" href="./style/style.css"/>
     <script src="js/jquery.validate.js"></script>
 <script src="js/additional-methods.js"></script> 
</head>
<body>

<div class="page-wrapper">
    <div class="content-wrap">
        <div class="welcome-page">
            <div class="welcome-container registration-container">
                <div class="welcome-head">
                    <div class="head-image">
                        <a href="#" class="logo">Snapshot</a>
                    </div>
                </div>
                <div class="welcome-body">
	                <form action="Registration" method="post" id="registrationform">
                    <div class="column-scheduler">
                        <div class="form-field">
                            <label for="">Name</label>
                            <input class="input" type="text" name="name">
                        </div>
                        <div class="form-field">
                            <label for="">Account</label>
							<select name="accountname" class="sumoselect">
						    		<option value="na">Select an Account</option>							
		                         <c:forEach var="name" items="${account_names}">
						    		<option value="${name}">${name}</option>
						    	  </c:forEach>
		                    </select>
                        </div>

                        <div class="form-field">
                            <label for="">Email</label>
                            <input class="input" type="text" name="email">
                        </div>
                        <div class="form-field">
                            <label for="">Password</label>
                            <input class="input" type="password" name="password">
                        </div>
                        <div class="form-field">
                            <label for="urole">Role</label>
                            <select name="role" id="urole" class="sumoselect">
                                <option value="user">Select a role</option>
                                <option value="qeadmin">QE Admin</option>
                                <option value="qe">QE</option>
                                <option value="sc">SC</option>
                                <option value="admin">Admin</option>
                                <option value="pm">PM</option>
								<option value="ie">IE</option>
                            </select>
                        </div>
						<input type="hidden" name="action" value="register">
                        <!--submit-->
			 			  <div class="form-field form-field--full button-group button-group-right">
	                            <button class="btn-modal btn-submit">Submit</button>
	                        </div>                        	
                        </div>
					 </form>
					 	                            <button class="btn-modal btn-cancel" id="modalAddAccount"> New Account</button>
					 
                </div>

            </div>
        </div>
            <%@ include file="footer.jsp" %> 
    </div>
</div>

<!--modal-->
    <div id="modaladdAccountHTML" class="modal">
      <div class="modal-content">
        <span class="close" id="closeaddAccount">&times;</span>
        <div class="modal-head">
          <h2>New Account</h2>
        </div>
        <form action="Registration" method="post" id="registeraccount">
             <div class="column-scheduler">
	       		 <div class="form-field">
	                  <label for="">Create account</label>
	                  <input class="input" type="text" name="name">
	             </div>
	             <div class="form-field">
	                  <label for="">IE</label>
	                 <select name="ie" class="sumoselect">
						   <option value="na">Select IE</option>							
		                      <c:forEach var="name" items="${ies}">
						    		<option value="${name}">${name}</option>
						      </c:forEach>
		             </select>
	             </div>
	             <div class="form-field">
	                  <label for="">PM</label>
	                  <select name="pm" class="sumoselect">
						   <option value="na">Select PM</option>							
		                       <c:forEach var="name" items="${pms}">
						    		<option value="${name}">${name}</option>
						    	</c:forEach>
		               </select>
	             </div>
				 <input type="hidden" name="action" value="accountregister">
	             <div class="form-field button-group-right">
	                            <button class="btn-modal btn-submit" id="submit-button">Submit</button>
	             </div> 
            </div>
           </form>
        </div>
    </div>
    
    <script>
	var addAccount = document.getElementById('modalAddAccount');
	var spanaddAccount = document.getElementById("closeaddAccount");
	addAccount.onclick = function() {
		modaladdAccountHTML.style.display = "block";
	}
	spanaddAccount.onclick = function() {
		modaladdAccountHTML.style.display = "none";
	}
	
	 $('#registrationform').validate({ 
		 rules: {
   		  	 name: {
                 required: true,
             },
             email: {
                 required: true,
             },
             password: {
                 required: true,
             }
		 }
	 });
	 
	 $('#registeraccount').validate({ 
		 rules: {
   		  	name: {
                 required: true,
             },
		 }
	 });
    
    </script>
        
</body>
</html>