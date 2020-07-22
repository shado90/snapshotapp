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
  	$(function() {
  		$('select#results').on('change', function (e) {
  			var optionSelected = $("option:selected", this);
		    if(optionSelected.val() === 'observations'){
		    	$("#issues").hide();
		    	$("#observations").show();
		    }  else {
		    	$("#observations").hide();
		    	$("#issues").show();
		    }
  		});
  		
  		 $(".cust_comment").on("click",  function(event){
  			 $($(this)).append(
  				"<button class='btn-modal btn-delete-observation' id='${rowData.observation_id}'>Update</button>"	
  			 );
  		 });
  	});
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
       <section class="content" style="
    				width: 80%;
    				margin: 0 auto;">
       	<div style="
    				width: 20%;
    				margin: 0 auto;
    				padding: 10px">
       		<select name="results" class="sumoselect" id="results">
					<option value="issues">Issues</option>
					<option value="observations">Observations</option>
			</select>
       	</div>
       
            <div class="container">
                <div class="grid-wrapper">
                    <div class="grid grid-snapshot grid-cases">
                        <table class="table" id="issues">
						<caption>Issues</caption>
						<c:forEach var="issues" items="${all_platforms_issues}">
                            <thead>
                            <tr>
                                <th>Metric (Impact)</th>
                                <th>Summary</th>
								<th>Customer Comments</th>
                            </tr>
                            </thead>
                            <tbody>
								<c:forEach var="rowData" items="${issues}">
                  				<tr>		
							             <td>
							             	<b>${rowData.metric}</b>
                                    		<span class="account-platform" style="font-size: 12px;">Impacts ${rowData.impacted_metrics}</span>
                                		</td>
		                                <td>${rowData.summary}</td>
										<td><div class="cust_comment">
											<textarea placeholder="Please click here to add comments" style="border:none;"></textarea>
										</div></td>
                            		</tr>
						         </c:forEach>
                            </tbody>
                            </c:forEach>
                        </table>
                        
                        <table class="table" id="observations" style="display: none;">
							<caption>Observations</caption>
                            <thead>
                            <tr>
                                <th>Metric (Impact)</th>
                                <th>Summary</th>
								<th>Customer Comments</th>
                            </tr>
                            </thead>
                            <tbody>
								<c:forEach var="rowData" items="${observations}">
	                  				<tr>		
								        <td>
								             <b>${rowData.metric}</b>
	                                    	<span class="account-platform" style="font-size: 12px;">Impacts ${rowData.impacted_metrics}</span>
	                                	</td>
			                            <td>${rowData.summary}</td>
										<td><textarea name="custComments"></textarea></td>
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
    
    

	<script>
	document.querySelectorAll('.cases-btn--cancel').forEach(function(item) {
  	  item.addEventListener('click', function() {
        	modalCancelHTML.style.display = "block"; 
  	  });
	});
    </script>
    
  </body>
</html>