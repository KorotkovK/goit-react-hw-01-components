import { Avatar, ListItem, Name, Marker } from './FriendListItem.styled'


export const FriendListItem = ({
	friendItem: { avatar, name, isOnline } }) => {
	return (
		<ListItem>
			<Marker $status={isOnline}></Marker>
			<Avatar src={avatar} alt={name} />
			<Name>{name}</Name>
		</ListItem>
	);
};