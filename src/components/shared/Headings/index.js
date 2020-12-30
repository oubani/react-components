import styled from 'styled-components';
export const Title = styled.h1`
  font-size: 2rem;
  ${({ center }) => center && 'text-align:center;'}
  color: #03071e;
`;

export const Headind = styled.h2`
  font-size: 1.5rem;
  color: #2b2d42;
  ${({ center }) => center && 'text-align:center;'}
`;
