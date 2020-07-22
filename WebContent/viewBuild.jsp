<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="com.snapshot.mainpages.enums.MetricEnum" %>  
<%@include file="header.jsp" %>   
   
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>View Build Request</title>
 <link rel="stylesheet" href="./style/style.css"/>
 <script src="js/jquery.validate.js"></script>
 <script src="js/additional-methods.js"></script>
</head>
<body>

	<script>
	$(".modalViewBuildRequest").on('click', function(event){
		var request_id = event.target.id;
		$.get('NewBuildRequest', {
            'request_id' : request_id,
             'action' : "view"
	     }, function(requestData) {
	    	 for (key in requestData){
	    		 if(key == "metrics" || key == "instructions"){
	    			 $("#" + key.toString()).append(requestData[key]);
	    		 } else if (key == "comments"){
	    			 for (var i = 0; i < requestData.comments.length; i++) {
	    				    var comment = requestData.comments[i];
	    	    			$("#comments").append("<b>" + comment.author + "<b>" + "[" + comment.time + "] - " + comment.comment + "<br>");
	    				}
	    		 } else {
	 	     		$("input[name=" + key.toString() + "]").val(requestData[key]); 
	    		 }
	    	 }
		     $("input[name='request_id']").val(request_id);
	     });
	});
	

	var deletePlatform = document.getElementById("delete");
	deletePlatform.onclick = function() {
		 $.get('NewBuildRequest', {
               request_id : $("input[name='request_id']").val(),
               action : "delete"
        }, function(platformData) {
        	Window.location.href("/Snapshot/index.jsp");
        });
	}
	</script>

	<div class="modal-body">
		<form action="NewBuildRequest" method="post">
		<h2>New Build Request</h2>
			<div class="column-scheduler">
				<div class="form-field" >
				     <label for="name-subject">Build Submit Type</label>
				 	 <input class="input" type="text" name="build_submit_type" readonly>
				 	 <input type="hidden" name="build_url" readonly>
				 	 <input type="hidden" name="file_path" readonly>
            	</div>
				<div class="form-field">
				     <label for="name-subject">Password</label>
				     <input class="input" type="text" name="password" readonly>
            	</div>
            	<div class="form-field">
             		 <label for="name-subject">Instructions</label>
              		<textarea name="instructions" id="instructions" readonly></textarea>
            	</div>
            	<div class="form-field">
             		 <label for="name-subject">Metrics to be tested</label>
              		<textarea name="metrics" id="metrics" readonly></textarea>
            	</div>
            	<div class="form-field">
             		 <label for="name-subject" id="env">Environment -</label>
             		 <input class="input" type="text" name="env" readonly>
            	</div>
            	<div class="form-field">
             		 <label for="name-subject">Player Version -</label>
             		 <input class="input" type="text" name="app_version" readonly>
            	</div>
            	<div class="form-field">
             		 <label for="name-subject">Player Release Date -</label>
             		 <input class="input" type="text" name="build_launch_date" readonly>
            	</div>
            	<div class="form-field">
             		 <label for="name-subject">ETA -</label>
             		 <input class="input" type="text" name="eta" readonly>
            	</div>
            	<div class="form-field">
             		 <label for="name-subject">Comments</label>
              		 <div id="comments" ></div>
            	</div>
            	<div class="form-field">
             		 <label for="name-subject">Add Comments</label>
              		 <textarea name="comments" ></textarea>
            	</div>
			<input type="hidden" name="action" value="update">
			<input type="hidden" name="request_id" >
				 <div class="form-field">
				</div>
            <div class="form-field mt-30">
              <div class="button-group">
                <button class="btn-modal btn-cancel" id="delete">Delete</button>
                <button class="btn-modal btn-submit">Update</button>
              </div>
            </div>
          </div>
      	</form>
      </div>

</body>
</html>