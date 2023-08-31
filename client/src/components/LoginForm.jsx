import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';



export default function LoginForm(props) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [userData, setUserData] = useState({
    _id: '',
    email: '',
    password: '',

  });

  const [login, {error}] =useMutation()

  const {state, dispatch} = useLogin();

  const handleChange = (event) => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    setShowError(false);
    setShowSuccess(false);

    try {
      const {data} = await login({
        variables: {...formState}
      });
      console.log(data);
      const token = data?.login.token || '';
      const user = data?.login.user || {};
      console.log(data?.login.token);
      console.log(data?.login.user);
      setShowSuccess(true);
      setUserData(user);

      Auth.setToken(token);
      dispatch({type: 'LOGIN', payload: {
        token: token,
        user: user,
      }});
      
      return navigate("/");
    } catch (err) {
      console.error(err);
      setShowError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
       name = "email"
        type = "email"
        placeholder = "email@test.com"
        value = {formState.email}
        onChange = {handleChange}
      />
      <input
        name = "password"
        type = "password"
        value={formState.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
      {showError ? (
        <h4>There was an error logging in. Check your credentials.</h4>
      ) : (
        <></>
      )}
      {showSuccess ? (
        <h4>Success! You are logged in.</h4>
      ) : (
        <></>
      )}
    </form>
  );
}


