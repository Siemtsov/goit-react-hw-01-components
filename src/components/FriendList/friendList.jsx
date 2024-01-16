import React from 'react';
import FriendListItem from './friendListItem/friendListItem';
import { List } from './friendList.styled';

const FriendList = ({ friends }) => (
  <List>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </List>
);
export default FriendList;