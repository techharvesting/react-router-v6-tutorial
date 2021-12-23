import { useEffect } from 'react';
import { useParams } from 'react-router';

const User = () => {
  const { username } = useParams();
  useEffect(() => {
    console.log(username);
  }, []);
  return <div>Welcome to the user page, this is the profile of {username}</div>;
};

export default User;
