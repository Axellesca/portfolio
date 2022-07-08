import { Box, Stack, VStack, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";

export const ProyectCard = ({
  name,
  linkDeploy,
  linkGithub,
  stack,
  infoProyect,
  imgPreview,
}) => {
  return (
    <a href={linkDeploy} target="_blank" rel="noreferrer">
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        bgColor={"#F9F8E6"}
        w={80}
        h={80}
        display={"flex"}
        justifyContent={"center"}
        rounded={"lg"}
        _hover={{ shadow: "dark-lg" }}
      >
        <Heading fontSize="xl" justifyContent={"center"}>
          {name}
        </Heading>
        <Text mt={4}>{infoProyect}</Text>
        <Image src={imgPreview} width="1100px" height="400px" />
      </Box>
    </a>
  );
};
