// Toggle.jsx
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

function Toggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode}
      variant="ghost"
    />
  );
}

export default Toggle;