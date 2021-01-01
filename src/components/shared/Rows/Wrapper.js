import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${({ column }) => (column ? column : '3')},
    1fr
  );
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;

  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(
      ${({ column }) => (column ? column - 1 : '2')},
      1fr
    );
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(
      ${({ column }) => (column ? column - 2 : '1')},
      1fr
    );
  }
`;
