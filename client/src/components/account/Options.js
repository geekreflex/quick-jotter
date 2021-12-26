import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logout from '../logout/Logout';

const Options = ({ visible }) => {
  const { user } = useSelector((state) => state.user);

  return (
    <Wrap
      visible={visible}
      className={
        visible
          ? 'animate__animated animate__fadeIn'
          : 'animate__animated animate__fadeOut'
      }
    >
      <UserInfo>
        <Name>{user.name}</Name>
        <Email>{user.email}</Email>
      </UserInfo>
      <Line />
      <Nav>
        <Link to="#">Manage Account</Link>
        <Logout />
      </Nav>
    </Wrap>
  );
};

const Wrap = styled.div`
  min-width: 200px;
  max-width: 100%;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  position: fixed;
  top: 80px;
  right: 20px;
  background-color: #fff;
  z-index: 99999999;
  padding: 10px 0;
  border-radius: 8px;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  transition: all 500ms;

  /* @media only screen and (max-width: 768px) {
    bottom: 0;
    right: 0;
    top: auto;
    width: 100%;
  } */
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eee;
  margin-top: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
const Email = styled.div``;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  a,
  button {
    border: none;
    outline: none;
    text-decoration: none;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    background-color: transparent;
    font-size: 14px;
    padding: 10px 20px;
    cursor: pointer;
    color: #222;

    &:hover {
      background-color: #eee;
    }
  }
`;

export default Options;
