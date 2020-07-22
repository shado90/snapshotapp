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
                <table class="table">
                  <thead>
                  <tr>
                    <th>PLATFORMS</th>
                    <th>Roku</th>
                    <th>ios</th>
                    <th>Android</th>
                    <th>PS4</th>
                    <th>Web</th>
                    <th>tvos</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td><b>Validation Date</b></td>
                                                            <td><b>Expected Values</b></td>
                    <td><span class="date">12 Sep<button class="btn-plus" id="modalBtn"><i class="icon icon-plus"></i></button></span></td>
                    <td><span class="date">10 Mar<button class="btn-plus"><i class="icon icon-plus"></i></button></span></td>
                    <td><span class="date">9 Apr<button class="btn-faq"><i class="icon icon-faq"></i></button></span></td>
                    <td><span class="date date--na">NA<button class="btn-plus"><i class="icon icon-plus"></i></button></span></td>
                    <td><span class="date">8 Apr<button class="btn-plus"><i class="icon icon-plus"></i></button></span></td>
                    <td><span class="date">5 Mar<button class="btn-faq"><i class="icon icon-faq"></i></button></span></td>
                  </tr>
                  <tr>
                    <td><b>Metadata</b></td>
                                        <td><b></b></td>
                    <td><button class="btn-status btn-status--empty">Fail</button></td>
                    <td><button class="btn-status btn-status--fail">Fail</button></td>
                    <td><button class="btn-status btn-status--fail">Fail</button></td>
                    <td><span class="status-na">N/A</span></td>
                    <td><button class="btn-status btn-status--fail">Fail</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                  </tr>
                  <tr>
                    <td><b>episodeName</b></td>
					<td><b>format(big_bang_theory_lighting)</b></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--fail">Fail</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                  </tr>
                  <tr>
                    <td><b>episodeNUmber</b></td>
					<td><b>format(so1e02)</b></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--fail" title="e02">Fail</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                  </tr>
                  <tr>
                    <td><b>ad</b></td>
                    <td><b>true/false</b></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--fail" title="none">Fail</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                  </tr>
                  <tr>
                    <td><b>streamurl</b></td>
                                        <td><b>https://att.com/</b></td>
                    
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--fail" title="att.com">Fail</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                  </tr>
                  <tr>
                    <td><b>livestream</b></td>
                                                            <td><b>Linear/NonLinear</b></td>
                  
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--fail" title="false">Fail</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                    <td><button class="btn-status btn-status--passed">Passed</button></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
      <%@ include file="footer.jsp" %>  
     
    </div>
    
    
    
   
  </body>
</html>