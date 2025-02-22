// Prop to determine if this is login or registration 

import { useState } from "react";
import PropTypes from "prop-types";
import { useUserJwtContext } from "../contexts/UserJwtContext";

// actionType should be either "login" or "register"
export function UserForm({actionType}) {
	let [email, setEmail] = useState("");
	let [password, setPassword] = useState("");

	let [userJwtData, setUserJwtData] = useUserJwtContext();


	async function submitForm(event){
		event.preventDefault();

		console.log(`About to send a ${actionType} request containing ${email}, ${password} to the API.`);

		// 1. Figure out where we are making a request to
		let targetUrl = "";
		if (actionType == "register"){
			targetUrl = "https://auth.bigfootds.dev/v1/users/public/register";
		} else {
			targetUrl = "https://auth.bigfootds.dev/v1/users/public/login";
		}

		// 2. Prepare the data to send as the fetch body data
		let bodyDataToSend = JSON.stringify({email: email, password: password});
		console.log(bodyDataToSend);

		// 3. Create and configure the fetch request
		let response = await fetch(
			targetUrl, 
			{
				method: "POST",
				headers: {
					"Content-Type":"application/json"
				},
				body: bodyDataToSend
			}
		);

		// 4. Parse the response from the API
		let bodyData = await response.json();
		console.log("Body data received from API is:\n" + JSON.stringify(bodyData, null, 4));

		// 5. Save the response data to global state
		setUserJwtData({
			accessToken: bodyData.accessToken,
			refreshToken: bodyData.refreshToken
		});
		console.log("UserJwtData is now set to:\n" + JSON.stringify(userJwtData, null, 4));
	}

	return(
		<form onSubmit={(event) => submitForm(event)}>
			<label htmlFor="userEmail">Email:</label>
			<input 
				type="email" 
				name="userEmail" 
				id="userEmail" 
				value={email}
				onChange={(event) => {
					setEmail(event.target.value);
				}}
			/>

			<label htmlFor="userPassword">Password</label>
			<input 
				type="password" 
				name="userPassword" 
				id="userPassword" 
				value={password}
				onChange={(event) => {
					setPassword(event.target.value);
				}}
			/>

			<button type="submit">{actionType.toLocaleUpperCase()}</button>
		</form>
	)
}

UserForm.propTypes = {
	actionType: PropTypes.string
}