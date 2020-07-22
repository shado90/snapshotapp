<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="com.snapshot.mainpages.enums.PlatformEnum" %>   
<%@include file="header.jsp" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add Platform</title>
  <link rel="stylesheet" href="./style/style.css"/>
 <script src="js/jquery.validate.js"></script>
 <script src="js/additional-methods.js"></script> 
  <script src="js/custom.js"></script>
 <script>
 $(function(){
	  $.get('ConvivaPlugins', {
          action: "getNames"
     }, function(platformData) {	
    	 var array = JSON.stringify(platformData).substr(1).replace(/\"/g, "").split(",");
    	 for (var i = 0; i < array.length; i++) {
    		 $('select.sumoselect')[0].sumo.add(array[i]);
    	 }
    	 $("#pluginselect").addClass('sumoselect');
   });
	  var closeAddPlatform1 = document.getElementsByClassName('closeAddPlatform1');
  	for (var i = 0; i < closeAddPlatform1.length; i++) {
  		closeAddPlatform1[i].onclick = function() {
				 $("#texModalHTML1").hide();
      	}
  	}
  	
	  var clickedElement = null;
			 $("#ads1,#notes1,#limitations1,#special_test_cases1").on("click",  function(event){
				 $(".modal-body").hide();
				 $("#texModalHTML1").show();
				 clickedElement = event.target.id;
				 $("#focus_head1").html(event.target.name.charAt(0).toUpperCase() + event.target.name.slice(1));
				 $("#txtarea_focus1").val($("#"+clickedElement).val());
				 $("#"+clickedElement).off("click");
			 });
			 
			 $("#txtarea_save1").on("click",  function(event){
				 $("#"+clickedElement).val('');
				 $("#"+clickedElement).val($("#txtarea_focus1").val());
				 $("#texModalHTML1").hide();
				 $("#txtarea_focus1").val('');
				 $(".modal-body").show();
			});
	  
 });
 
 </script>
<body>
	<div class="modal-body">
		<form action="Platform" method="post" id="platformform">
			<div class="column-scheduler">
 					  <div class="form-field">
              			<label for="name-subject">Name</label>
             			 <input class="input" type="text" id="name-subject" name="name" placeholder="Roku, iOS, etc">
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Content Type</label>
             			 <input class="input" type="text" id="name-subject" name="content_type" placeholder="Linear, Live Linear etc">
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Player Name</label>
             			 <input class="input" type="text" id="name-subject" name="player_name" placeholder="brightscript, avplayer etc">
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Streaming Protocol</label>
             			 <input class="input" type="text" id="name-subject" name="streaming_protocol" placeholder="HLS, etc">
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Player Version</label>
             			 <input class="input" type="text" id="name-subject" name="player_version">
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Conviva Plugin</label>
		                <select name="conviva_plugin" class="sumoselect" id="pluginselect" form="platformform">
		                	<option value="" >Select a plugin</option>
		                </select>
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Ads</label>
             			 <textarea name="ads" placeholder="adtype, advendor, ad insertion" id="ads1"></textarea>
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Notes</label>
             			 <textarea name="notes" id="notes1"></textarea>
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Limitations</label>
             			 <textarea name="limitations" id="limitations1"></textarea>
            		  </div>
            		  <div class="form-field">
              			<label for="name-subject">Special Test Cases</label>
             			 <textarea name="special_test_cases" id="special_test_cases1"></textarea>
            		  </div>
            		  <div class="form-field">
              			
            		  </div>
            		  	
			<input type="hidden" name="action" value="register">
			
              <div class="button-group button-group-right">
                <button class="btn-modal btn-submit">Submit</button>
              </div>
        
          </div>
      	</form>
      </div>
      
     <div id="texModalHTML1" class="modal">
      <div class="modal-content txtarea_modal">
        <span class="close" id="closeAddPlatform1">&times;</span>
        <div class="modal-head">
          <h2 id="focus_head1"></h2>
        	<div>
    		<textarea class="form-control col-xs-12" rows="15" cols="50" id="txtarea_focus1"></textarea>
    		<div class="button-group button-group-right" style="padding-top: 20px;">
    			<button class="btn-modal btn-submit" id="txtarea_save1" type="submit">Save</button>
    		</div>
        </div>
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
      
	      
    <!-- Include all compiled plugins (below), or include individual files as needed -->
   