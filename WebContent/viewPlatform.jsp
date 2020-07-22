<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="com.snapshot.mainpages.enums.PlatformEnum" %>   
<%@include file="header.jsp" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>View Platform</title>
 <link rel="stylesheet" href="./style/style.css"/>
 <script src="js/jquery.validate.js"></script>
 <script src="js/additional-methods.js"></script>
</head>
<body>
	<script>
	 $(function(){
		 var clickedElement = null;
		 $("#ads,#notes,#limitations,#special_test_cases").on("click",  function(event){
			 $(".modal-body").hide();
			 $("#texModalHTML").show();
			 clickedElement = event.target.id;
			 $("#focus_head").html(event.target.id);
			 $("#txtarea_focus").val($("#"+clickedElement).val());
			 $("#"+clickedElement).off("click");
		 });
		 
		 $("#txtarea_save").on("click",  function(event){
			 $("#"+clickedElement).val('');
			 $("#"+clickedElement).val($("#txtarea_focus").val());
			 $("#texModalHTML").hide();
			 $("#txtarea_focus").val('');
			 $(".modal-body").show();
		});
		 
		 $(document).on("click",  function(event){
			 $("#modalhead").html("<b>" + event.target.innerHTML + "</b>");
		        $.get('Platform', {
		               platform_id : event.target.id,
		               action: "getPlatform"
		        }, function(platformData) {
		        	var textareas = ["ads","notes","limitations","special_test_cases"];
		        	
		        	for (key in platformData){
		        		if(textareas.indexOf(key.toString())>-1)
		        			$("#" + key.toString()).append(platformData[key]);
		        		else
		        			$("input[name=" + key.toString() + "]").val(platformData[key]);
		        	}
		        });
		 });
		 
		var deletePlatform = document.getElementById("delete");
		deletePlatform.onclick = function() {
			 $.get('Platform', {
	               platform_id : $("input[name='platform_id']").val(),
	               action : "delete"
	        }, function(platformData) {
	        	Window.location.href("/Snapshot/index.jsp");
	        });
		}
	 });
		
	</script>
	
	<div class="modal-body">
		<form action="Platform" method="post" id="platformform">
			<div class="column-scheduler">
 					  <div class="form-field">
              			<label for="name-subject">Name</label>
             			 <input class="input" type="text" id="name-subject" name="name">
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Content Type</label>
             			 <input class="input" type="text" id="name-subject" name="content_type" >
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Player Name</label>
             			 <input class="input" type="text" id="name-subject" name="player_name" >
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Streaming Protocol</label>
             			 <input class="input" type="text" id="name-subject" name="streaming_protocol">
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Player Version</label>
             			 <input class="input" type="text" id="name-subject" name="player_version">
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">App Version</label>
             			 <input class="input" type="text" id="name-subject" name="app_version" value="NA" readonly>
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Conviva Plugin</label>
		               <input class="input" type="text" id="name-subject" name="conviva_plugin" value="dummy" readonly>
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Conviva Plugin Version</label>
             			 <input class="input" type="text" id="name-subject" name="conviva_plugin_version" value="NA" readonly>
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Ads</label>
             			 <textarea name="ads" id="ads"></textarea>
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Notes</label>
             			 <textarea name="notes" id="notes"></textarea>
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Limitations</label>
             			 <textarea name="limitations" id="limitations"></textarea>
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Special Test Cases</label>
             			 <textarea name="special_test_cases" id="special_test_cases"></textarea>
            		  </div>
            		  <div class="form-field">
              			
            		  </div>
            		  	
				<input type="hidden" name="action" value="update">
				<input type="hidden" name="platform_id">
			
              <div class="button-group button-group-right">
				<button class="btn-modal btn-cancel" id="delete">Delete</button>
                <button class="btn-modal btn-cancel">Cancel</button>
                <button class="btn-modal btn-submit" type="submit">Update</button>
              </div>
        
          </div>
      	</form>
      </div>
      
      <div id="texModalHTML" class="modal">
      <div class="modal-content txtarea_modal">
        <span class="close" id="closeAddPlatform">&times;</span>
        <div class="modal-head">
          <h2 id="focus_head"></h2>
        </div>
    		<textarea class="form-control col-xs-12" rows="15" cols="50" id="txtarea_focus"></textarea>
    		<div class="button-group button-group-right" style="padding-top: 20px;">
    			<button class="btn-modal btn-submit" id="txtarea_save" type="submit">Save</button>
    		</div>
        </div>
    </div>
      
      <script>
      $('#platformform').validate({ // initialize the plugin
          rules: {
        		  name: {
	                  required: true,
	              },
	              content_type: {
	                  required: true,
	              },
	              player_name: {
	                  required: true,
	              },
	              streaming_protocol: {
	                  required: true,
	              },
	              player_version: {
	                  required: true,
	              },
	              conviva_plugin: {
	                  required: true,
	                  notEqualTo: "select",
	              },
	              ads: {
	                  required: true,
	              },
	              notes: {
	                  required: true,
	              },
	              limitations: {
	                  required: true,
	              },
	              special_test_cases: {
	                  required: true,
	              },
	              
              
          }
      });
      
      </script>