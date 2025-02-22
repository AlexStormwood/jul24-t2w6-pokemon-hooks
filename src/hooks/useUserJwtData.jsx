import { createContext, useContext } from "react";


export const defaultUserJwtData = {
	accessToken: "",
	refreshToken: ""
}

export const UserJwtContext = createContext(defaultUserJwtData);

export function useUserJwtContext(){
	return useContext(UserJwtContext);
}
