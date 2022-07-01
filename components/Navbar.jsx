import {Stack,Box,Button,Text} from '@chakra-ui/react'

export const Navbar = () => {
  return (
    <Stack mt={"40px"} display="flex" direction={"row"} justifyContent={"space-around"}>
      <Box>
        <Text fontSize={"24px"}>
          Axel Lescano
        </Text>
        <Text>Frontend Developer</Text>
      </Box>
      <Box>
        <Button>
          Info/Exp
        </Button>
      </Box>
      <Box>
        <Button>
          Proyectos
        </Button>
      </Box>
      <Box>
        <Button>
          Contacto
        </Button>
      </Box>
    </Stack>
  )
}
