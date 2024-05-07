// Kortti.jsx
import React from 'react';
import { Card, CardHeader, CardBody, Heading, Text, Flex, Box } from '@chakra-ui/react'
import { CloseButton } from '@chakra-ui/react'
import { SkeletonText } from '@chakra-ui/react'

function Kortti({ id, fact, loading, onRemove }) {
  if (loading) {
    return (
      <Card boxShadow='xl'>
        <CardHeader>
          <Heading size='md'>FACT</Heading>
        </CardHeader>
        <CardBody>
          {/* <Spinner size='xl' />  */}
          {/* <Text>Loading...</Text> */}
          <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
        </CardBody>
      </Card>
    );
  }

  return (
    <Card boxShadow='xl'>
      <CardHeader>
        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Box>
              <Heading size='md'>FACT</Heading>
            </Box>
          </Flex>
          <CloseButton size='md' onClick={() => onRemove(id)} />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{fact}</Text>
      </CardBody>
    </Card>
  );
}

export default Kortti;