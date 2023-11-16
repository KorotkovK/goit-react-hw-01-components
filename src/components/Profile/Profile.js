import {
	Avatar,
	Card,
	Description,
	CardWrap,
	Statistic,
	StatisticItem,
	Span
} from './Profile.styled'

export const Profile = ({ user: { username, tag, location, avatar, stats: { followers, views, likes } } }) => {
	return (
		<Card>
			<CardWrap>
				<Avatar src={avatar} alt={username} />
				<Description type="username">{username}</Description>
				<Description>@{tag}</Description>
				<Description>{location}</Description>
			</CardWrap>
			<Statistic>
				<StatisticItem>
					<Span>Followers</Span>
					<Span type="number">{followers}</Span>
				</StatisticItem>
				<StatisticItem>
					<Span>Views</Span>
					<Span type="number">{views}</Span>
				</StatisticItem>
				<StatisticItem>
					<Span>Likes</Span>
					<Span type="number">{likes}</Span>
				</StatisticItem>
			</Statistic>
		</Card>
	);
};