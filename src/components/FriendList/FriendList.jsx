import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import FriendListItem from './FriendListItem';
const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map((friend) => (
                <li key={friend.id} className="item">
                    <span className={`status ${friend.isOnline ? 'online' : 'offline'}`}></span>
                    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p className="name">{friend.name}</p>
                </li>
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default FriendList;
