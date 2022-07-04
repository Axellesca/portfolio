import { Box, Text, Stack } from "@chakra-ui/react";

export const Info = () => {
  return (
    <Box>
      <Text fontWeight={"bold"}>Sobre Mí</Text>
      <Text>
        Frontend Developer Trainee/Jr en constante aprendizaje, cursé la
        tecnicatura en Desarrollo de Software además de realizar cursos en
        plataformas online. Me Apasiona programar y aprender cosas nuevas.
      </Text>
      <Text as={"em"} color={"gray"}>
        De Santa Fe capital, Argentina
      </Text>
    </Box>
  );
};
