import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

function App() {
  const handleLogin = async (response) => {
    const res = await fetch(`http://localhost:7000/api/auth/google`, {
      method: 'POST',
      body: JSON.stringify({
        token: response.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    console.log(data);
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
