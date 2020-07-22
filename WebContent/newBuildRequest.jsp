<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="com.snapshot.mainpages.enums.MetricEnum" %>  
<%@include file="header.jsp" %>   
   
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="stylesheet" href="./style/style.css"/>
     <script src="js/jquery.validate.js"></script>
 	<script src="js/additional-methods.js"></script>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/multiple-select/1.2.2/multiple-select.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="//cdnjs.cloudflare.com/ajax/libs/multiple-select/1.2.2/multiple-select.min.js"></script>

<title>New Build Request</title>
</head>
<body>
	<script>
	$(function(){
		 $(".modalAddBuildRequest").on("click",  function(event){
			    event.stopPropagation();
			$("input[name='platform_id']").val(event.currentTarget.id);
		 });
		 
		 $("#validatebutton").on("click",  function(event){
		        event.preventDefault();
			setTimeout(validate, 4000);
		 });
		 
		 function validate(){
				alert("Metadata, VSF, VPF has been validated. This build is conditionally approved.");
				
		 }
	})

		$('select#buildSubmitType').on('change', function (e) {
		    var optionSelected = $("option:selected", this);
		    if(optionSelected.val() === 'upload'){
		    	document.getElementById("fileUpload").click();
		    	$("#fileUpload").change(function(e){ 
		    		if (($("#fileUpload"))[0].files.length > 0) {
			    		var file = ($("#fileUpload"))[0].files[0].name;
			    		$('#buildContent').html(file);
			    	}
		    		$("#fileSubmitText").text("File selected for upload");
			    	$('#buildSubmitType').hide();
		    	});
		    } else if(optionSelected.val() === 'url'){
		    	$("#buildContent").html('<input class="input" type="text" name="build_url">');
		    } else if(optionSelected.val() === 'testflight'){
		    	$("#buildContent").html('Please make sure to send your builds to devices@conviva.com and provide version number in instructions');
		    }
		});
		
	</script>
	
	<div class="modal-body">
		<form action="NewBuildRequest" method="post" enctype='multipart/form-data' id="newbuildrequestform">
			<div class="column-scheduler">
				<div class="form-field">
				    <label for="name-subject" id="fileSubmitText">Select Build Submission Type</label>
					<select name="build_submit_type" id="buildSubmitType">
						<option value="na">Select</option>
						<option value="upload">Upload a File</option>
						<option value="url">Paste an URL</option>
						<option value="testflight">Send build to TestFlight</option>
					</select>
					<input id="fileUpload" type='file' name="uploadfile" hidden/>
					<div id="buildContent"></div>
            	</div>
            	<div class="form-field">
             		 <label for="pass-subject">File Password</label>
              		<input class="input" type="text" name="password">
            	</div>
            	<div class="form-field">
             		 <label for="name-subject">Instructions</label>
             		 <textarea name="instructions"></textarea>
            	</div>
				<div class="form-field">
					<label for="name-subject">Metrics to be tested</label>
            	 	<c:set var="metrics" value="<%=MetricEnum.values()%>"/>
						<select multiple="multiple" class="sumoselect" name="metrics" data-toggle="select">
						    	<option value="all_metrics" select="selected">All Metrics</option>
							<c:forEach items="${metrics}" var="metric">
								<option value="${metric}">${metric}</option>
							</c:forEach>  
						</select>
						<p> Note that if All Metrics option is chosen, other options are ignored and All Metrics would be validated.</p>
                </div>     
            	<div class="form-field">
            	 	<label for="name-subject">Select Environment</label>
            		<select id="envSelect"  class="sumoselect" name="env">
            		     <option value="stage">Staging</option>
            		     <option value="prod">Production</option>
            		</select>
            	</div>
            	<div class="form-field">
             		 <label for="name-subject">App Version</label>
              		<input class="input" type="text" name="app_version">
            	</div>
            	
            	
            	<div class="form-field">
	             	<label for="name-subject">App Release Date</label>
	             	 <div class="date-picker-block">
                        <a class="input-button picker-date" title="toggle" data-toggle></a>
                        <input type='text' name="build_launch_date" class='date-picker'  placeholder="dd/mm/yyyy" data-input style="width: 130%;"/>
                    </div>
            	</div>
            	<div class="form-field">
             		 <label for="name-subject">Notification Emails (seperated by ,)</label>
              		<input class="input" type="text" name="emails">
            	</div>
            	<div class="form-field">
             		 <label for="name-subject">Metadata Touchstone URL</label>
              		<textarea name="metadata"></textarea>
            	</div>
            	<div class="form-field">
             		 <label for="name-subject">VSF Touchstone URL</label>
              		<textarea name="metadata"></textarea>
            	</div>
            	<div class="form-field">
             		 <label for="name-subject">VPF Touchstone URL</label>
              		<textarea name="metadata"></textarea>
            	</div>
            	<div class="form-field">
            	                <button class="btn-modal" id="validatebutton">Validate</button>
            	
            	</div>
			<input type="hidden" name="action" value="register">
			<input type="hidden" name="platform_id">
              <div class="button-group button-group-right">
                <button class="btn-modal btn-cancel">Cancel</button>
                <button class="btn-modal btn-submit" id="submitbutton">Submit</button>
              </div>
          </div>
      	</form>
      </div>
      
      <script>
	      $('#newbuildrequestform').validate({ // initialize the plugin
	          rules: {
	        	  	  buildSubmitType: {
		                  required: true,
		                  notEqualTo: "na",
		              },
		              password: {
		                  required: true,
		              },
		              instructions: {
		                  required: true,
		              },
		              env: {
		                  required: true,
		              },
		              app_version: {
		                  required: true,
		              },
		              build_release_date: {
		                  required: true,
		              },
		              emails: {
		                  required: true,
		              },
		              build_release_date: {
		                  required: true,
		              }, 
	              
	          }
	      });
      
      </script>

</body>
</html>