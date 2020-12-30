import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        padding: 0px;
        margin:0px;
    }
`;

export const Container = styled.div`
  margin: auto;
  max-width: 1100px;
  overflow: auto;
  padding: 0 20px;
`;
