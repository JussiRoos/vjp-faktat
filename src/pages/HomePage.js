// HomePage.js
import React, { useState } from 'react';
import { SimpleGrid, Flex } from '@chakra-ui/react';
import Kortti from "../components/kortti";
import Nappi from '../components/nappi';
import getFact from '../lib/getFact';


function HomePage() {
  const [kortit, setKortit] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const addKortti = async () => {
    const id = idCounter;
    setIdCounter(idCounter + 1);
    setKortit(oldKortit => [...oldKortit, { id, fact: null, loading: true }]);
    const newFact = await getFact();
    setKortit(oldKortit => oldKortit.map(kortti => kortti.id === id ? { ...kortti, fact: newFact, loading: false } : kortti));
  };

  const removeKortti = (id) => {
    setKortit(oldKortit => oldKortit.filter(kortti => kortti.id !== id));
  };

  return (
    <>
      <Flex justifyContent='center' alignItems='center' p={4}>
        <Nappi onClick={addKortti} />
      </Flex>
      
      <SimpleGrid p={2} spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
        {kortit.map(kortti => (
          <Kortti id={kortti.id} fact={kortti.fact} loading={kortti.loading} onRemove={removeKortti} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default HomePage;