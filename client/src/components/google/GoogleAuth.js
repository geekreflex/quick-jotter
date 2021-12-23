import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loginWithGoogle } from '../../features/userSlice';
import { GoogleLogo500 } from '../../utils/loadImg';

const GoogleAuth = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = async (response) => {
    const payload = { token: response.tokenId };
    dispatch(loginWithGoogle(payload));
  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        render={(renderProps) => (
          <GoogleAuthBtn
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <img src={GoogleLogo500} />
            Sign In With Google
          </GoogleAuthBtn>
        )}
        onSuccess={handleGoogleLogin}
        onFailure={handleGoogleLogin}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

const GoogleAuthBtn = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: none;
  outline: none;
  height: 50px;
  padding: 0 20px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  }

  img {
    width: 20px;
    margin-right: 10px;
  }
`;

export default GoogleAuth;
