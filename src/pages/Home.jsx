import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      Hello
      <Link to='/me'>Go to me page</Link>
    </div>
  );
};

export default Home;
