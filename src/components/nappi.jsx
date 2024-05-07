import {Button} from '@chakra-ui/react'

function Nappi({ onClick }) {
  return (
    <Button colorScheme='green' size='lg' onClick={onClick}>Get a new fact!</Button>
  );
}

export default Nappi;