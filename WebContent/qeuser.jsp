<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="header.jsp" %>  


<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Snapshot</title>
    <link rel="stylesheet" href="./style/style.css"/>
    <script src="./js/main.js"></script>
  </head>
  <body>
  	<script>
  	$(document).ready(function(){

  		$(".btn-submit").on('click', function(event){
  		    event.preventDefault();
  			req_id = event.target.id.substr(3);
  		    window.location = window.location.origin + '/Snapshot/QEUserResults?request_id=' + req_id;
  		});
  		$(".cases-btn--cancel").on('click', function(event){
  		    event.preventDefault();
  			req_id = event.target.id.substr(3);
  			$("input[name='request_id']").val(req_id);
  		});
  		
  	})
	  	 
  	</script>
 
    <div class="page-wrapper">
      <div class="content-wrap">
        <header>
          <div class="container">
            <div class="header">
              <a href="#" class="logo">Snapshot</a>
              <ul class="header-menu">
                <li class="account-item">Hi, QE User
                  <span class="account-img">
                <img src="assets/images/ava.png" alt="avatar">
              </span>
                </li>
              </ul>
            </div>
          </div>
        </header>
       <section class="content">
            <div class="container">
                <div class="grid-wrapper">
                    <div class="grid grid-snapshot grid-cases">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>Account</th>
                                <th>File</th>
                                <th>Password</th>
                                <th>Instructions</th>
                                <th>Metrics to be Tested</th>
                                <th>
                                    <!--empty-->
                                </th>
                            </tr>
                            </thead>
                            <tbody>
								<c:forEach var="rowData" items="${allQERequests}">
	                  				<tr>		
							             <td>
							             	<b>${rowData.account_name}</b>
                                    		<span class="account-platform">${rowData.platform_name}</span>
                                		</td>
		                                <td><a href="#" class="file-download-link">${rowData.build_submit_type}</a></td>
		                                <td><div class="case-password">${rowData.password}</div></td>
		                                <td>
		                                    <a href="#" class="more-info-link">${rowData.instructions}</a>
		                                </td>
		                                 <td>
		                                    ${rowData.metrics}
		                                </td>
		                                <td>
		                                    <div class="cases-btn-group">
		                                        <button class="cases-btn btn-submit" id="${rowData._id}">Start Validation</button>
		                                        <button class="cases-btn cases-btn--cancel" id="${rowData._id}">Cancel</button>
		                                    </div>
		                                </td>
                            		</tr>
							            
						         </c:forEach>
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </div>
    
    <div id="modalCancelHTML" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
         <div class="modal-head">
          <h2>Cancel Request</h2>
        </div>
			<form action="QEAdminHome" method="post" enctype='multipart/form-data'> 
				<textarea name="cancelRequest"></textarea>      		
				<input type="file" name="cancelFile">
				<input type="hidden" name="request_id">
				<input type="hidden" name="action" value="cancelledcomment">
				<input type="hidden" name="author" value="qe">
			
			
				<div class="form-field mt-30">
			            <div class="button-group button-group-right">
			               <button class="btn-modal btn-submit-cases" >Submit Cancellation</button>
			               <button class="btn-modal btn-cancel" >Cancel</button>
			    </div>
			    </div>
			</form>
        </div>
    </div>

	<script>
	document.querySelectorAll('.cases-btn--cancel').forEach(function(item) {
  	  item.addEventListener('click', function() {
        	modalCancelHTML.style.display = "block"; 
  	  });
	});
    </script>
    
  </body>
</html>