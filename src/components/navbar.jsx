import { Box, Flex, Text, useColorMode } from '@chakra-ui/react';

import Toggle from './toggle';

function Navbar() {
  const { colorMode } = useColorMode();

  return (
    <Box bg={colorMode === 'light' ? 'gray.300' : 'gray.600'} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize={'2xl'}>Random facts</Text>
        <Toggle />
      </Flex>
    </Box>
  );
}

export default Navbar;