import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import validation from "../../container/Hoc/ValidationRules";
import GlobalContext from "../../context/GlobalContext";
import {userService} from'../../services/CommonServices';



const Login = (props) => {

	const[email, set_email]=useState('');
	const[password, set_password]=useState('');
    var loginData=useContext(GlobalContext)
	let hsitory=useHistory()

	useEffect(() => {
        validation();
    }, []);

	function login(event) {
		event.preventDefault();
		if(email.trim() == "") {
			alert("Kindly enter email.");
			return false;
		}
		if(password.trim() == "") {
			alert("Kindly enter password.");
			return false;
		}
		else{
		var formData = {
			"email" : email,
			"password" : password
		}
        
		userService.loginApi(formData).then(response=>{
			
            if(response.status===200){
				loginData.set_token(response.data.data.user.secretId)
				loginData.set_first_name(response.data.data.user.firstName)
				loginData.set_last_name(response.data.data.user.lastName)
				loginData.set_email(response.data.data.user.email)
				loginData.set_is_logged_in("true")
				
				sessionStorage.setItem('token', response.data.data.user.secretId)
				sessionStorage.setItem('first_name', response.data.data.user.firstName)
				sessionStorage.setItem('last_name', response.data.data.user.lastName)
				sessionStorage.setItem('email', response.data.data.user.email)
				sessionStorage.setItem('is_logged_in', "true")
				hsitory.push('/dashboard')
				
           	} else{
               	alert(response);
           	}
       	}).catch(function(err){
			   console.log({err})
			// alert(err.response.data.message);
		})
	}
    	
	}
	


	return (
    <div class="container">
		<div class="login_form_outer">
			<div class="login_form">
				<h2>Sign In</h2>
				<div class="form-group">
					<label>Username or Email</label>
					<input type="text" value={email} onChange={(event) => {set_email(event.target.value);}} placeholder="" class="form-control for_username" />
				</div>
				<div class="form-group">
					<label>Password</label>
					<input type="password" value={password} onChange={(event) => {set_password(event.target.value);}} placeholder="" class="form-control" />
				</div>
				<a href="" class="blue_btn" onClick={login}>Sign In</a>
			</div>
			<img src="images/shadow.png" alt="" class="shadow" />
		</div>
	</div>
    );
};
export default Login;