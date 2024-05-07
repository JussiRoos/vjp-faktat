import { Box, Flex, Text, useColorMode } from '@chakra-ui/react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from '@chakra-ui/react'


function Navbar() {
    const { colorMode } = useColorMode();


  return (
    <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.700'} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'center'} direction={'column'}>
        <Breadcrumb separator='-'>
            <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='/about'>About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='mailto:jussi.roos@aalto.fi'>Contact</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <Text>© Jussi Roos 2024</Text>
      </Flex>
    </Box>
  );
}

export default Navbar;