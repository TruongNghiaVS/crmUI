import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUp, setDown } from '../../redux/Demo/action'

function Login(params) {
  const { number } = useSelector(state => state.numberReducer);
  const dispatch = useDispatch();

  const handelSub = (number) => {
    dispatch(setDown(number));
  }

  const handelPlus = (number) => {
    dispatch(setUp(number));
  }

  return (
		<>
      <main>
        <h2>Welcome to the loginpage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
      <hr />
      <button onClick={() => handelSub(number)}>- </button>
      <span> {number} </span>
      <button onClick={() => handelPlus(number)}> +</button>
    </>
	);
}

export default Login;