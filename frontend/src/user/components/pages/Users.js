import React from 'react';
import UsersItem from '../UserItem';
import UsersList from '../UsersList';

const Users = () => {
   const USERS = [
               {
                  id: 'u1',
                  name: 'Brian Lapuste',
                  image: 'https://media-exp1.licdn.com/dms/image/C5603AQFBGxWho1kryQ/profile-displayphoto-shrink_800_800/0/1653687712712?e=1661385600&v=beta&t=n5Yqb3WXQc3OfmhuA8IC3iG-z6g9VHuLcefUKZ7dzMs',
                  places: 3
               }
            ];


   return <UsersList items={USERS}/>;
};

export default Users;