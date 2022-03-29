import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Home(params) {
  const { number } = useSelector(state => state.numberReducer);

  return (
		<>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <p>Number: {number}</p>
      </main>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
    </>
	);
}

export default Home;