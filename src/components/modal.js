import React, {useState} from 'react';
import { Dialog, Box, Text, TextInput, Flex, Button } from '@primer/components';
import { InfoIcon } from '@primer/styled-octicons';

export default function({ show, toggleModal,saveToken }) {
  const [token, setToken] = useState('');

  return (
  <Dialog isOpen={show} onDismiss={toggleModal}>
    <Dialog.Header alignItems='center'>
      <InfoIcon mr={2} />
      <Text>Enter your personal token</Text>
    </Dialog.Header>
    <Box p={3} justifyContent="center">
      {/* <Text>Please try another one</Text> */}
      <Flex mt={3} justifyContent="center">

      <TextInput
        onChange={(event) => {
        event.persist();
        setToken(event.target.value);
      }}
      aria-label="Personal Access Token" name="Personal Access Token" placeholder="Personal Access Token"  autoComplete="Personal Access Token" />
      </Flex>

    </Box>
    <Box p={3}>
            <Flex mt={3} justifyContent="flex-end">
              <Button onClick={() =>{
                saveToken(token);
              }}>Save</Button>
            </Flex>
          </Box>
  </Dialog>
  );
};
