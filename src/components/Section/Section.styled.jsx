import styled from 'styled-components';

const SectionWrapper = styled.section`
  align-items: center;

  &:not(:last-child) {
    padding-bottom: 30px;
  }
`;

const Title = styled.h2`
  font-family: 'Georgia', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.8;
  letter-spacing: 0.2em;

  margin-bottom: 15px;

  color: #000;
`;

export { SectionWrapper, Title };
