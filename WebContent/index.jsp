<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="header.jsp" %>  
<%@ page import="com.snapshot.mainpages.enums.MetricEnum" %>  

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

    <div class="page-wrapper">
      <div class="content-wrap">
       <%@ include file="account-header.jsp" %>  

        <section class="content">
          <div class="container">
            <div class="grid-wrapper">
              <div class="grid grid-snapshot">
                <table class="table table-dark">
                  <tbody>
                   		<c:forEach var="i" begin="0" end="14">
                  			<tr>
                  				<c:forEach var="j" begin="0" end="${fn:length(metrictable)}">
                  					<td><c:out value="${metrictable[j][i]}" escapeXml="false"/></td>
                  				</c:forEach>
							</tr>
          				</c:forEach>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

      </div>
      <%@ include file="footer.jsp" %>  
     
    </div>

	<!--modal-->
    <div id="modalAddPlatformHTML" class="modal">
      <div class="modal-content">
        <span class="close" id="closeAddPlatform">&times;</span>
        <div class="modal-head">
          <h2>New Platform</h2>
        </div>
       		<div id="newPlatform"></div>
        </div>
    </div>
    
      <div id="modalViewPlatformHTML" class="modal">
      <div class="modal-content">
        <span class="close closeViewPlatform">&times;</span>
        <div class="modal-head" id="modalhead">
          <h2></h2>
     	</div>
       		<div id="viewPlatform"></div>
        </div>
    </div>
    
     <div id="modalAddBuildRequestHTML" class="modal">
      <div class="modal-content">
        <span class="close closeNewBuildRequest">&times;</span>
         <div class="modal-head">
          <h2>New Build Request</h2>
        </div>
       		<div id="newBuildRequest"></div>
        </div>
    </div>
    
    <div id="modalViewBuildRequestHTML" class="modal">
      <div class="modal-content">
        <span class="close" id="closeViewNewBuildRequest">&times;</span>
         <div class="modal-head">
          <h2></h2>
        </div>
       		<div id="viewBuildRequest"></div>
        </div>
    </div>
    
     <div id="failedResultHTML" class="modal">
      <div class="modal-content">
        <span class="close" id="closeViewNewBuildRequest">&times;</span>
         <div class="modal-head">
          <h2></h2>
        </div>
        <table class="table table-bordered">
       		<thead>
                            <tr>
                                <th>Metric (Impact)</th>
                                <th>Summary</th>
                            </tr>
                            </thead>
                            <tbody>
								<c:forEach var="rowData" items="${issues}">
                  				<tr>		
							             <td>
							             	<b>${rowData.metric}</b>
                                    		<span class="account-platform" style="font-size: 12px;">Impacts ${rowData.impacted_metrics}</span>
                                		</td>
		                                <td>${rowData.summary}  ${rowData.description}</td>
		                                
		                                <td>
		                               	 <div class="form-field mt-30">
			            				<div class="button-group button-group-right">
			               						<button class="btn-modal btn-delete-issues" id="${rowData.issue_id}">Delete</button>
			    						</div>
			    						</div>
			    						</td>
                            		</tr>
						         </c:forEach>
                            </tbody>
                            </table>
        </div>
    </div>
    
    
    <script>
    
    	var addPlatform = document.getElementById('modalAddPlatform');
    	var spanAddPlatform = document.getElementById("closeAddPlatform");

    	var platformElements = document.getElementsByClassName('modalViewPlatform');
    	for (var i = 0; i < platformElements.length; i++) {
    		platformElements[i].onclick = function() {
        		modalViewPlatformHTML.style.display = "block";
        	}
    	}
    	
    	var newBuildElements = document.getElementsByClassName('modalAddBuildRequest');
    	for (var i = 0; i < newBuildElements.length; i++) {
    		newBuildElements[i].onclick = function() {
    			modalAddBuildRequestHTML.style.display = "block";
        	}
    	}
    	
    	var viewnewBuildElements = document.getElementsByClassName('modalViewBuildRequest');
    	for (var i = 0; i < viewnewBuildElements.length; i++) {
    		viewnewBuildElements[i].onclick = function() {
    			modalViewBuildRequestHTML.style.display = "block";
        	}
    	}
    	
    	var closePlatform = document.getElementsByClassName('closeViewPlatform');
    	for (var i = 0; i < closePlatform.length; i++) {
    		closePlatform[i].onclick = function() {
        		modalViewPlatformHTML.style.display = "none";
        	}
    	}
    	
    	var closeNewBuild = document.getElementsByClassName('closeNewBuildRequest');
    	for (var i = 0; i < closeNewBuild.length; i++) {
    		closeNewBuild[i].onclick = function() {
        		modalViewPlatformHTML.style.display = "none";
        	}
    	}
    	
    	var closeViewNewBuild = document.getElementsByClassName('closeViewNewBuildRequest');
    	for (var i = 0; i < closeViewNewBuild.length; i++) {
    		closeViewNewBuild[i].onclick = function() {
    			modalViewBuildRequestHTML.style.display = "none";
        	}
    	}
    	
    	addPlatform.onclick = function() {
    		modalAddPlatformHTML.style.display = "block";
    	}
    	spanAddPlatform.onclick = function() {
    		modalAddPlatformHTML.style.display = "none";
    	}
    	
    	$(function(){
    		   $("#newPlatform").load("addPlatform.jsp"); 
    		   $("#viewPlatform").load("viewPlatform.jsp"); 
    		   $("#newBuildRequest").load("newBuildRequest.jsp"); 
    		   $("#viewBuildRequest").load("viewBuild.jsp"); 
    	});
    
    </script>
   
  </body>
</html>