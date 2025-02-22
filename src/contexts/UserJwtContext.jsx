
import { useState } from "react";
import PropTypes from "prop-types";
import { defaultUserJwtData, UserJwtContext } from "../hooks/useUserJwtData";

export function UserJwtProvider({children}){
	let [userJwtData, setUserJwtData] = useState(defaultUserJwtData);

	return(
		<UserJwtContext.Provider value={[userJwtData, setUserJwtData]}>
			{children}
		</UserJwtContext.Provider>
	)
}

UserJwtProvider.propTypes = {
	children: PropTypes.ReactNode
}