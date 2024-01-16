import React from 'react';
import user from '../components/data/user.json';
import Profile from './Profile/profile';

// import data from '../data/data.json';
// import Statistics from './Statistics/Statistics';

// import friends from '../data/friends.json';
// import FriendList from './FriendList/FriendList';

// import transactions from '../data/transactions.json';
// import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  </>
);