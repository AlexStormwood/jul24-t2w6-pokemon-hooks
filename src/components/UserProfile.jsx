import { useUserJwtContext } from "../contexts/UserJwtContext";
import { jwtDecode } from "jwt-decode";

export function UserProfile(){
	let [userJwtData] = useUserJwtContext();


	if (userJwtData.accessToken){
		return (
			<div>
				<h2>{userJwtData.accessToken}</h2>
				<h2>{jwtDecode(userJwtData.accessToken).sub}</h2>
			</div>
		)
	} else {
		return(
			<div>
				<p>Please log in or create an account!</p>
			</div>
		)
	}

}