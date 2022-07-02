import {Stack,Box,Button,Text, Icon} from '@chakra-ui/react';
import { MdDarkMode } from 'react-icons/md'

export const Navbar = () => {
  return (
    <Stack mt={"30px"} px={"20px"} display="flex" direction={"row"} justifyContent={"space-around"} alignItems={"flex-end"} flexWrap={"wrap"}>
      {/* Fijarse alignitems para corregir el error de que queden mas arriba que otro*/}
      <Box>
        <Text fontSize={"3xl"}>
          DDDDD DDDDDDDDD
          {/* Axel Lescano */}
          <Text fontSize={"13px"} as={"i"}> Frontend Developer</Text>
        </Text>
      </Box>
      <Box flexGrow={"1"}></Box>
      <Box display={"flex"} justifyContent={"space-around"} flexGrow={"-1"} gap={"10px"}>
        <Box>
          <Button colorScheme={"yellow"} /* colorScheme={"#E8E6D3"} */ color="black" variant={"ghost"}>
            Info/Exp
          </Button>
        </Box>
        <Box>
          <Button colorScheme={"yellow"} /* colorScheme={"#E8E6D3"} */ color="black" variant={"ghost"}>
            Proyectos
          </Button>
        </Box>
        <Box>
          <Button colorScheme={"yellow"} /* colorScheme={"#E8E6D3"} */ color="black" variant={"ghost"}>
            Contacto
          </Button>
        </Box>
        <Box>
          <Button leftIcon={<MdDarkMode/>} colorScheme={"yellow"} /* colorScheme={"#E8E6D3"} */ color="black" variant={"ghost"}>
            Darkmode
            {/* <Icon>
              <MdDarkMode/>
            </Icon> */}
          </Button>
        </Box>
      </Box>
    </Stack>
  )
}

