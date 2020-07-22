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
              <a href="#" class="logo">Fox - Snapshot</a>
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
    				width: 90%;
    				margin: 0 auto;">
    	<p><i><b>Summary:</b> This build contains a total of 4 issues potentially impacting 3 metrics with 1 blocker issue - VPF</i></p>
    	<p><i><b>QE Comments:</b> Note that the build tested was 1.24 which is lower than 1.25</i></p>
		<p><i><b>Customer Comments:</b> Issue no 4 and 5 cannot be fixed.</i></p>
       	<div>   
       		<select name="results" class="sumoselect" id="results" style="
    				width: 20%;
    				margin: 0 auto;
    				padding: 10px">
					<option value="issues">Issues</option>
					<option value="observations">Observations</option>
			</select>
       	</div>
       
            <div class="container">
                <div class="grid-wrapper">
                    <div class="grid grid-snapshot grid-cases">
                        <table class="table" id="issues">
                        	<caption>                           			<div><p class="logo" style="font-size:20px">4th Validation results for Roku - 15th March</p></div>
                        	</caption>
                            <thead>
                            <tr>
                                <th style="width:300px">Metric (Impact)</th>
                                <th>Summary</th>
								<th style="width:420px">Customer Comments</th>
                            </tr>
                            </thead>
                            <tbody>
                  				<tr>		
							             <td>
							             	<b style="color:red">Video Start Failure (3)</b>
                                    		<span class="account-platform" style="font-size: 12px;">Impacts VST, EBVS</span>
                                		</td>
		                                <td><i>(VOD & Live)<i>Even though error was reported on the screen, it was not reported to Conviva. Even though error was reported on the screen, it was not reported to Conviva. 
											<a href="#" class="link">Link</a> 
		                                	<a href="#" class="link">More info</a></td>
										<td><div class="cust_comment">
											<textarea placeholder="Please click here to add comments" style="border:none;"></textarea>
										</div></td>
                            		</tr>
                            		<tr>		
							             <td>
							             	<b style="color:blue">>Exit before Video Start (1)</b>
                                    		<span class="account-platform" style="font-size: 12px;">Impacts VST, VSF</span>
                                		</td>
		                                <td>(VOD)Multiple EBVS reported when session fails with VSF.
											<a href="#" class="link">Link</a>
		                                	<a href="#" class="link">More info</a></td>
										<td><div class="cust_comment">
											<textarea placeholder="Please click here to add comments" style="border:none;"></textarea>
										</div></td>
                            		</tr>
                            		<tr>		
							             <td>
							             	<b style="color:blue">Attempts (2)</b>
                                    		<span class="account-platform" style="font-size: 12px;">Impacts VST, EBVS</span>
                                		</td>
		                                <td>Playing one  creates multiple conviva sessions. 
											<a href="#" class="link">Link</a>
		                                	<a href="#" class="link">More info</a></td>
										<td><div class="cust_comment">
											<textarea placeholder="Please click here to add comments" style="border:none;"></textarea>
										</div></td>
                            		</tr>
                            </tbody>
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
								<tr>		
							             <td>
							             	<b>Attempts</b>
                                    		<span class="account-platform" style="font-size: 12px;">Impacts VST, EBVS</span>
                                		</td>
		                                <td>1 out of 5, video doesnt load on the screen and we had to manually delete
											<a href="#" class="link">Touchstone LInk</a>
		                                	<a href="#" class="link">More info</a></td>
										<td><div class="cust_comment">
											<textarea placeholder="Please click here to add comments" style="border:none;"></textarea>
										</div></td>
                            		</tr>
                            		<tr>		
							             <td>
							             	<b>No impact</b>
                                		</td>
		                                <td>1 out of 5, video doesnt load on the screen and we had to manually delete
											<a href="#" class="link">Touchstone LInk</a>
		                                	<a href="#" class="link">More info</a></td>
										<td><div class="cust_comment">
											<textarea placeholder="Please click here to add comments" style="border:none;"></textarea>
										</div></td>
                            		</tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <select class="sumoselect" style="width:20%">
	        	<option>4th Iteration</option>
				<option>3rd Iteration</option>
				<option>2nd Iteration</option>
				<option>1st Iteration</option>
        </select>
        </section>
      </div>
    </div>
    
    <div id="modaldesc" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
         <div class="modal-head">
          <h2>Cancel Request</h2>
        </div>
				<div><p><b>Test case:</b>  Reproduce Video Start Failures</div>
				<div><p>We notice that when we play the VOD video with DAI enabled, we notice that a small play state is reported before the pre-roll begins to play. This is because attachPlayer() call is made before the pre-roll ads begins to play. Hence VST, EBVS and VSF will be under reported. VSF metrics would end up being reported as VPF.</p></div>
        </div>
    </div>
    

	<script>
	document.querySelectorAll('.cases-btn--cancel').forEach(function(item) {
  	  item.addEventListener('click', function() {
        	modalCancelHTML.style.display = "block"; 
  	  });
	});
	
	$(function(){
		 $(".link").on("click",  function(event){
			    event.stopPropagation();
				$("#modaldesc").show();
		 });
	});
    </script>
    
  </body>
</html>