interface IUsersList {
	name: string;
	email: string;
}

interface Props {
	user: IUsersList;
}

const User: React.FunctionComponent<Props> = ({ user, children }) => {
	return (
		<div>
			<strong>Nome: </strong>
			{user.name} <br />
			<strong>E-mail: </strong>
			{user.email} <br /> <br />
			{children}
		</div>
	);
};

export default User;
