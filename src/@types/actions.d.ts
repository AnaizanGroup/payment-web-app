export interface Actions {
	user: any;
	setUser: (arg: string) => void;
	userTokens: any;
	setAuthTokens: (args: any) => void;
	registerUser: (
		firstname: string,
		lastname: string,
		country: string,
		phone: string,
		email: string,
		password: string,
		isDone: (x: boolean) => void
	) => void;
	loginUser: (
		email: string,
		password: string,
		isDone: (x: boolean) => void
	) => void;
	logoutUser: () => void;
}
