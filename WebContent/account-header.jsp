<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
 	<header>
            <div class="container">
                <div class="header">
                    <a href="/" class="logo">
                        ${user.accountname} - Snapshot
                        <!--<img src="./images/logo.svg" alt="logo"/>-->
                    </a>
                    <ul class="header-menu">
                        <li class="account-item">
                            Hi, ${user.name}
                            <span class="account-img">
                                <a href="Login?action=logout">Logout</a>
                            </span>
                        </li>
                    </ul>
                </div>
        
            </div>
        </header>