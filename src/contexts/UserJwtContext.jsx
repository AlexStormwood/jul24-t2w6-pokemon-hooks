
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { defaultUserJwtData, UserJwtContext } from "../hooks/useUserJwtData";
import { useLocalStorage } from "react-use";

export function UserJwtProvider({children}){
	let [userJwtData, setUserJwtData] = useState(defaultUserJwtData);
	let [jwtsPersisted, setJwtsPersisted] = useLocalStorage('jwts', defaultUserJwtData);

	useEffect(() => {
		setJwtsPersisted(userJwtData);
	}, [setJwtsPersisted, userJwtData]);

	useEffect(() => {
		setUserJwtData(jwtsPersisted);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return(
		<UserJwtContext.Provider value={[userJwtData, setUserJwtData]}>
			{children}
		</UserJwtContext.Provider>
	)
}

UserJwtProvider.propTypes = {
	children: PropTypes.ReactNode
}