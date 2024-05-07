// HomePage.js
import React from 'react';
import { Card, CardHeader, CardBody, Heading, Text, Flex } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'


function HomePage() {

  return (
    <>
      <Flex justifyContent='center' alignItems='center' p={4}>
        <Card boxShadow='xl'>
            <CardHeader>
            <Heading size='md'>About</Heading>
            </CardHeader>
            <CardBody>
                <Text>This is a page by Jussi Roos created for the VJP course in Aalto University. The page is done in react using the <Link href='https://chakra-ui.com' isExternal>Chakra UI<ExternalLinkIcon mx='2px' /></Link> component library.
                This page gets random facts from API Ninjas <Link href='https://api-ninjas.com/api/facts' isExternal>Facts API<ExternalLinkIcon mx='2px' /></Link> and displays them as card styled components.
                The site can be used to find random facts and display multiple of them in a class room environment for example.</Text>
                <br></br>
                <Text>Check the source code from <Link href='https://github.com/JussiRoos/vjp-faktat' isExternal>GitHub<ExternalLinkIcon mx='2px' /></Link></Text>
            </CardBody>
        </Card>
      </Flex>


      
    </>
  );
}

export default HomePage;