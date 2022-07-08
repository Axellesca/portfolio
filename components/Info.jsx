import { Box, Text, Stack } from "@chakra-ui/react";

export const Info = () => {
  return (
    <Box px={8} mt={10}>
      <Text fontWeight={"bold"} fontSize={'2xl'}>Sobre Mí</Text>
      <Text>
        Frontend Developer Trainee/Jr en constante aprendizaje
        <br></br>Cursé la
        tecnicatura en Desarrollo de Software además de realizar cursos en
        plataformas online. <br></br>Me Apasiona programar y aprender cosas nuevas.
      </Text>
      <Text as={"em"} color={"gray"}>
        De Santa Fe capital, Argentina
      </Text>
    </Box>
  );
};
