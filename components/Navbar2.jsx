import { Stack, Box, Button, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { MdDarkMode } from 'react-icons/md';

export const Navbar2 = () => {
  return (
    <Stack
      mt={'30px'}
      px={'20px'}
      display="flex"
      direction={'row'}
      justifyContent={'space-around'}
      alignItems={'flex-end'}
      flexWrap={'wrap'}
    >
      {/* Fijarse alignitems para corregir el error de que queden mas arriba que otro*/}
      <Stack alignItems={'center'}>
        <Text fontSize={'3xl'} fontWeight={'bold'}>
          Axel Lescano
          <Stack alignItems={'center'}>
            <Text fontSize={'13px'} as={'i'} fontWeight={'normal'}>
              {' '}
              Frontend Developer
            </Text>
          </Stack>
        </Text>
      </Stack>
      {/* <Box flexGrow={'1'}></Box> */}
      <Stack
        display={'flex'}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-around'}
        // flexGrow={'-1'}
        gap={'10px'}
        flexWrap={'wrap'}
      >
        <Stack>
          <Button
            colorScheme={'yellow'}
            /* colorScheme={"#E8E6D3"} */ color="black"
            variant={'ghost'}
          >
            Info/Exp
          </Button>
        </Stack>
        <Stack>
          <Button
            colorScheme={'yellow'}
            /* colorScheme={"#E8E6D3"} */ color="black"
            variant={'ghost'}
          >
            Proyectos
          </Button>
        </Stack>
        <Stack>
          <Button
            colorScheme={'yellow'}
            /* colorScheme={"#E8E6D3"} */ color="black"
            variant={'ghost'}
          >
            Contacto
          </Button>
        </Stack>
        {/* <Box>
          <Button
            leftIcon={<MdDarkMode />}
            colorScheme={'yellow'}
            color="black"
            variant={'ghost'}
          >
            Darkmode
          </Button>
        </Box> */}

        <Button colorScheme={'yellow'} variant={'ghost'}>
          <Icon as={MdDarkMode} w={8} h={8} color={'black'} />
        </Button>
      </Stack>
    </Stack>
  );
};
