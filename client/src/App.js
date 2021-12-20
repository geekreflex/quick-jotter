import { GoogleLogin } from 'react-google-login';
import { googleAuth } from './features/userSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const handleLogin = async (response) => {
    const payload = { token: response.tokenId };
    dispatch(googleAuth(payload));
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
