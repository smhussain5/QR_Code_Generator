import React, { useState } from 'react';
import {
  ChakraProvider,
  FormControl,
  Input,
  theme,
  Image,
  Card,
  Flex,
  Container,
  SimpleGrid,
  Box,
  Heading,
  Spacer,
  Link
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const [input, setInput] = useState('')

  return (
    <ChakraProvider theme={theme}>
      <Container maxWidth={'1280px'} height={'100vh'} margin={'0'} padding={'0'}>
        <SimpleGrid row={2}>
          <Box boxShadow={'base'} width={'100%'} height={'4rem'} px={'2rem'}>
            <Flex direction={'row'} align={'flex-end'} justify={'center'}>
              <Link my={'auto'} href='https://github.com/smhussain5' target='_blank'>
                <Image src='./SH_LOGO.png' width={'3rem'} height={'auto'} />
              </Link>
              <Spacer />
              <ColorModeSwitcher />
            </Flex>
          </Box>
          <Box padding={'4rem'}>
            <Flex direction={'column'} align={'center'} justify={'center'}>
              <Card align={'center'} padding={'2rem'}>
                <Flex direction={'column'} align={'center'} gap={'0.5rem'}>
                  <FormControl>
                    <Flex direction={'column'} align={'center'} gap={'0.5rem'}>
                      <Heading margin={'0.5rem'} size={'md'}><Link color={'blue.400'} href='https://en.wikipedia.org/wiki/QR_code' target='_blank'>QUICK RESPONSE</Link> CODE GENERATOR</Heading>
                      <Input value={input} onChange={e => setInput(e.target.value)} type='text' placeholder='Insert text here...' />
                    </Flex>
                  </FormControl>
                  <Image border={'2px'} borderColor={'gray.400'} margin={'0.5rem'} boxSize={'10rem'} src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input === '' ? 'Example' : input}`} />
                </Flex>
              </Card>
            </Flex>
          </Box>
        </SimpleGrid>
      </Container>
    </ChakraProvider >
  );
}

export default App;