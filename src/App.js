// App.js
import React from 'react';
import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import "@fontsource/kanit";

import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const theme = extendTheme({
  fonts: {
    body: "Kanit, system-ui, sans-serif",
    heading: "Kanit, system-ui, serif",
    mono: "Menlo, monospace",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" minHeight="100dvh">
        <Navbar />
        <Flex flex="1" direction="column" overflow="auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Flex>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;