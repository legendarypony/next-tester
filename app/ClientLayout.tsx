// components/ClientLayout.tsx
"use client";

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default ClientLayout;
