import React from 'react';
import user from '/IT/goit-react-hw-01-components/src/data/user.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import StatsData from '/IT/goit-react-hw-01-components/src/data/data.json';
import friendsData from '/IT/goit-react-hw-01-components/src/data/friends.json';
import FriendList from './FriendList/FriendList';
import transactions from '/IT/goit-react-hw-01-components/src/data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={StatsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
