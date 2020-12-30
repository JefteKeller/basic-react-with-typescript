import { useEffect, useState } from "react";
import api from "./services/api";

import User from "./components/User";

import logo from "./logo.svg";
import "./App.css";

interface IUsersList {
	name: string;
	email: string;
}

const App = () => {
	const [usersList, setUsersList] = useState<IUsersList[]>([]);

	const getUsers = async () => {
		const usersResponse = await api.get<IUsersList[]>("/users");
		setUsersList(usersResponse.data);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div>
					<h2>Users</h2>
					{usersList.map((user, index) => {
						return <User key={index} user={user} />;
					})}
				</div>
			</header>
		</div>
	);
};

export default App;
