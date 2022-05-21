import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 90px;
  height: 40px;

  font-family: 'Georgia', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.12;
  letter-spacing: 0.2em;

  color: #000;

  background-color: transparent;
  border: 2px solid #ff0000;
  border-radius: 6px;

  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export { Wrapper, Button };
