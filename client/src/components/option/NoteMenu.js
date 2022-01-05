import styled from 'styled-components';

const NoteMenu = () => {
  return (
    <Wrap>
      <MenuList>
        <Item>Delete Note</Item>
        <Item>Add Note To Favorite</Item>
        <Item>Archive</Item>
        <Item>Duplicate Note</Item>
      </MenuList>
    </Wrap>
  );
};

const Wrap = styled.div``;
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  cursor: pointer;
`;
const Item = styled.div`
  padding: 5px 20px;
  font-size: 14px;
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

export default NoteMenu;
