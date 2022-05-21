import styled from 'styled-components';

const List = styled.ul`
  font-family: 'Georgia', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.36;
  letter-spacing: 0.2em;

  color: #fff;
  background-color: transparent;
  border: none;
`;

const Item = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  & p {
    margin-left: 15px;
  }
`;

export { List, Item };
