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
     <script src="js/jquery.validate.js"></script>
 <script src="js/additional-methods.js"></script>
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
  		
  		$(".btn-delete-issues").click(function(event){
  			$.get('QEUserResults', {
  	            'request_id' : "${request_id}",
  	             'action' : "delete",
  	             'id' : event.target.id,
  	           	  'resulttype': 'issue'
  		     }, function(requestData) {
  		     	 location.reload();
  		     });
  		})
  		
  		$(".btn-delete-observation").click(function(event){
  			$.get('QEUserResults', {
  	            'request_id' : "${request_id}",
  	             'action' : "delete",
  	             'id' : event.target.id,
  	             'resulttype': 'observation'
  		     }, function(requestData) {
  		     	 location.reload();
  		     });
  		})
  		
  		$(".btn-send-results").click(function(event){
  			$.post('QEUserResults', {
  	            'request_id' : "${request_id}",
  	             'action' : "sendresults",
  		     }, function(requestData) {
  		     	 location.reload();
  		     });
  		})
  		
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
                
              </span>
                </li>
              </ul>
            </div>
          </div>
        </header>
        
       <section class="content" style="
    				width: 80%;
    				margin: 0 auto;">
       
       
            <div class="container">
                <div class="grid-wrapper">
                	<div class="results-header">
			       		<p>QE Results for <button>Roku</button></p><select name="results" class="sumoselect" id="results">
								<option value="issues">Issues</option>
								<option value="observations">Observations</option>
						</select>
       				</div>
       				<p> Note that JS SDK(2.13.4) used <a href="https://community.conviva.com/site/global/platforms/ios/av_player/index.gsp#limitations">here</a> has following limitations -Rebuffering Ratio, Video Startup Time (VST) and VRT </p>
       				<button style="float:right;">Build Request</button><br>
       				<button style="float:right;">Previous Validation</button>
       				<div id="modalTestedDevice"><a href="#" >Add Tested Device Information</a></div>
                    <div class="grid grid-snapshot grid-cases">
                        <table class="table" id="issues">
                            <thead>
                            <tr>
                                <th><span class='date'>Metric (Impact)<button class="btn-plus" id="modalAddResult"><i class="icon icon-plus"></i></button></span></th>
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
                        
                        <table class="table" id="observations" style="display: none;">
                            <thead>
                            <tr>
                                <th>Metric (Impact)</th>
                                <th>Summary</th>
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
		                                <td>
		                               	 <div class="form-field mt-30">
			            				<div class="button-group button-group-right">
			               						<button class="btn-modal btn-delete-observation" id="${rowData.observation_id}">Delete</button>
			    						</div>
			    						</div>
			    						</td>
                            		</tr>
						         </c:forEach>
                            </tbody>
                        </table>
                    </div>
                </div>
                					<div class="button-group button-group-right">
			               						<button class="btn-modal btn-send-results">Send Results</button>
			    						</div>
            </div>
        </section>
      </div>
    </div>
    
    <div id="modalAddResultHTML" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
         <div class="modal-head">
          <h2>Add Result</h2>
        </div>
			<form action="QEUserResults" method="post" id="issuesform">
			  <div class="column-scheduler">
       			 <div class="form-field">
					<label for="name-subject"> Choose Result type</label>   
					<select name="resultType" class="sumoselect" >
						<option value="Issues">Issues</option>
						<option value="Observations">Observations</option>
					</select> 
				</div>   					  
       			 <div class="form-field">
					<label for="name-subject"> Choose Failed Metric</label>   	
					<c:set var="metrics" value="<%=MetricEnum.values()%>"/>
	            		<select class="sumoselect" name="metric">					
							<c:forEach items="${metrics}" var="metric">
								<option value="${metric}">${metric}</option>
							</c:forEach>             		 
					     </select>	
				</div>
       			 <div class="form-field">
					<label for="name-subject"> Choose Impact</label>   
					<select name="impact" class="sumoselect" >
						<option value="High">High</option>
						<option value="Medium">Medium</option>
						<option value="Low">Low</option>
					</select> 
				</div>
       			 <div class="form-field">
					<label for="name-subject"> Choose Impacted Metrics</label>   	
					<c:set var="metrics" value="<%=MetricEnum.values()%>"/>
	            		<select multiple="multiple" class="sumoselect" name="metrics" data-toggle="select">
						    	<option value="all_metrics">All Metrics</option>
							<c:forEach items="${metrics}" var="metric">
								<option value="${metric}">${metric}</option>
							</c:forEach>  
						</select>
				</div>
				<div class="form-field">
					<label for="name-subject"> Choose Test Case</label>   
					<select name="impact" class="sumoselect" >
						<option value="High">Attempts </option>
						<option value="Medium">VSF Test case</option>
						<option value="Low">VPF Test case</option>
					</select> 
				</div>
       			 <div class="form-field">
					<label for="name-subject"> Summary</label>  
					<textarea name="summary"></textarea>	
				</div>		
       			 <div class="form-field">
					<label for="name-subject"> Detailed Description</label>   	
					<textarea name="description"></textarea>
				</div>
				<input type="hidden" name="request_id" value="${request_id}">
				<input type="hidden" name="action" value="updateResult">
			    <div class="form-field">
				</div>
				<div class="form-field mt-30">
			            <div class="button-group button-group-right">
			               <button class="btn-modal btn-cancel" >Cancel</button>
						   <button class="btn-modal btn-submit-cases btn-submit" >Update result</button>
			    		</div>
			    </div>
			    </div>
			</form>
        </div>
    </div>
    
    <div id="modalTestedDeviceHTML" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
         <div class="modal-head">
          <h2>Tested Device Info</h2>
        </div>
       		<form action="QEUserResults" method="post" id="deviceinfoform">
				<div class="column-scheduler">
       			 <div class="form-field">
       			 	<label for="name-subject" >Device Name</label>
       			 	<input type="text" name="devicename" value="${player_device_info.devicename}">
       			 </div>
       			 <div class="form-field">
       			 	<label for="name-subject" >Device Model</label>
       			 	<input type="text" name="devicemodel" value="${player_device_info.devicemodel}">
       			 </div>
       			 <div class="form-field">
       			 	<label for="name-subject" >OS</label>
       			 	<input type="text" name="os" value="${player_device_info.os}">
       			 </div>
       			 <div class="form-field">
       			 	<label for="name-subject" >OS Version</label>
       			 	<input type="text" name="osversion" value="${player_device_info.osversion}">
       			 </div>
       			 <div class="form-field">
       			 	<label for="name-subject" >Browser Name</label>
       			 	<input type="text" name="browserName" value="${player_device_info.browserName}">
       			 </div>
       			 <div class="form-field">
       			 	<label for="name-subject" >Browser Version</label>
       			 	<input type="text" name="browserVersion" value="${player_device_info.browserVersion}">
       			 </div>
       			 <input type="hidden" name="action" value="addDeviceInfo">
       			 <input type="hidden" name="request_id" value="${request_id}">
       			 <div class="form-field mt-30">
	              <div class="button-group button-group-right">
	                <button class="btn-modal btn-cancel">Cancel</button>
	                <button class="btn-modal btn-submit">Submit</button>
	              </div>
            	</div>
            	</div>
       		</form>
        </div>
    </div>

	<script>
	
	var testedDeviceInfo = document.getElementById("modalTestedDevice");
	var addResult = document.getElementById("modalAddResult");
	testedDeviceInfo.onclick = function() {
		modalTestedDeviceHTML.style.display = "block";
	}
	addResult.onclick = function() {
		modalAddResultHTML.style.display = "block";
	}
	
	$('#deviceinfoform').validate({ // initialize the plugin
        rules: {
        		  devicename: {
	                  required: true,
	              },
	              description: {
	                  required: true,
	              },
        }
    });
	
	$('#issuesform').validate({ // initialize the plugin
        rules: {
        		  summary: {
	                  required: true,
	              },
	              devicemodel: {
	                  required: true,
	              },
	              os: {
	                  required: true,
	              },
	              osversion: {
	                  required: true,
	              },
	              browserName: {
	                  required: true,
	              },
	              browserVersion: {
	                  required: true,
	              }, 
            
        }
    });
    </script>
    
  </body>
</html>