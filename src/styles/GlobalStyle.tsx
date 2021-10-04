import { pxToRem } from '@/util/styleUtils';
import React, { ReactElement } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const GlobalStyledComponent = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color:${({ theme }) => theme.color.backgroundGray};
}

body * {
  box-sizing: border-box;
}

body *::before {
  box-sizing: border-box;
}

body *::after {
  box-sizing: border-box;
}

:focus {
  outline:3px solid ${({ theme }) => theme.color.white}; 
  outline-offset: ${pxToRem(2)};
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover,
a:focus,
a:active {
  text-decoration: none;
}


ul{
  margin: 0;
  padding-left: 0;
  list-style: none;
}

button {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
`;

export default function GlobalStyle(): ReactElement {
  return (
    <>
      <Normalize />
      <GlobalStyledComponent />
    </>
  );
}
