import { Stack, Box, Button, useColorMode } from '@chakra-ui/react';
import { Icon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { MdDarkMode } from 'react-icons/md';
import { FiSun } from 'react-icons/fi';

export const Navbar2 = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
        <Box fontSize={'3xl'} fontWeight={'bold'}>
          Axel Lescano
          <Stack alignItems={'center'}>
            <Box fontSize={'13px'} as={'i'} fontWeight={'normal'}>
              {' '}
              Frontend Developer
            </Box>
          </Stack>
        </Box>
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
            {...(colorMode === 'light'
              ? { colorScheme: 'yellow' }
              : { colorScheme: 'blue' })}
            {...(colorMode === 'light'
              ? { color: 'black' }
              : { color: 'white' })}
            variant={'ghost'}
          >
            Info/Exp
          </Button>
        </Stack>
        <Stack>
          <Button
            {...(colorMode === 'light'
              ? { colorScheme: 'yellow' }
              : { colorScheme: 'blue' })}
            {...(colorMode === 'light'
              ? { color: 'black' }
              : { color: 'white' })}
            variant={'ghost'}
          >
            Proyectos
          </Button>
        </Stack>
        <Stack>
          <Button
            {...(colorMode === 'light'
              ? { colorScheme: 'yellow' }
              : { colorScheme: 'blue' })}
            {...(colorMode === 'light'
              ? { color: 'black' }
              : { color: 'white' })}
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

        <Button
          {...(colorMode === 'light'
            ? { colorScheme: 'yellow' }
            : { colorScheme: 'blue' })}
          variant={'ghost'}
          onClick={toggleColorMode}
        >
          {colorMode === 'light' ? (
            // <Icon as={MdDarkMode} w={8} h={8} color={'blackAlpha.900'} />
            <MoonIcon w={8} h={8} color={'blackAlpha.900'} />
          ) : (
            // <Icon as={FiSun} w={8} h={8} color={'yellow'} />
            <SunIcon w={8} h={8} color={'yellow'} />
          )}
        </Button>
      </Stack>
    </Stack>
  );
};
