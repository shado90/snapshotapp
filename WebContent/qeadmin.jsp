<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="com.snapshot.mainpages.enums.MetricEnum" %>  
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
	  			req_id = event.target.id;
	  			$.post('QEAdminHome', {
		            'request_id' : req_id.substr(3),
		            'qe' : $('#qe').find(":selected").text(),
		            'eta' : $('#date_' + req_id).val(),
		            'author' : "Ankur",
		            'action' : "assign"
			     }, function(requestData) {
			    	 location.reload();
			     });
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
                    <a href="/" class="logo">
                        Snapshot
                        <!--<img src="./images/logo.svg" alt="logo"/>-->
                    </a>
                    <ul class="header-menu">
                        <li class="account-item">
                            Hi, Robert!
                            <span class="account-img">
                                <img src="./images/ava.png" alt="avatar"/>
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
					<label for="name-subject"> Select Region</label>   
					<select name="impact" class="sumoselect" >
						<option value="High">West Coast</option>
						<option value="High">East Coast</option>
						<option value="Medium">EMEA</option>
						<option value="Low">APAC</option>
					</select> 
					<label for="name-subject">Sort by status</label>   
					<select name="impact" class="sumoselect" >
						<option value="High">Unassigned</option>
						<option value="High">Assigned</option>
						<option value="Medium">Completed</option>
					</select> 
                        <table class="table">
                            <thead>
                            <tr>
                                <th>Account</th>
                                <th>File</th>
                                <th>Password</th>
                                <th>Instructions</th>
                                <th>Metrics to be Tested</th>
                                <th>QE</th>
                                <th>ETA</th>
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
		                                    ${rowData.instructions}
		                                </td>
		                                 <td>
		                                  ${rowData.metrics}
		                                </td>
		                                <td>
		                                    <select name="qe" class="sumoselect" id="qe">
		                                    	<c:forEach var="qe" items="${qeNames}">
						    						<option value="${qe}">${qe}</option>
						    					</c:forEach>
		                                    </select>
		                                </td>
		                                <td>
                                            <!--<span class="date-icon">-->
												<!--<input type="date" name="date" id="date_${rowData._id}">-->
											<!--</span>-->
                                            <div class="date-picker-block">
                                                <a class="input-button picker-date" title="toggle" data-toggle></a>
                                                <input type='text' name="date" id="date_${rowData._id}" class='date-picker'  placeholder="dd/mm/yyyy" data-input/>
                                            </div>
                                        </td>
		                                <td>
		                                    <div class="cases-btn-group">
		                                        <button class="cases-btn btn-submit" id="${rowData._id}">Assign</button>
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
				<input type="hidden" name="author" value="ankur">
			
				<div class="form-field mt-30">
			            <div class="button-group button-group-right">
			               <button class="btn-modal btn-submit-cancel" >Submit Cancellation</button>
			               <button class="btn-modal btn-cancel" >Cancel</button>
			    </div>
			    </div>
			</form>
        </div>
    </div>
    
    <script>
	var cancelButton = document.getElementsByClassName("cases-btn--cancel")[0];
	
	cancelButton.addEventListener('click', function() {
		modalCancelHTML.style.display = "block"; 
	})
    </script>




    <footer>
        <div class="container">
            <span class="copyright">© Hack, 2017. All rights reserved</span>
        </div>
    </footer>
</div>

</body>
</html>