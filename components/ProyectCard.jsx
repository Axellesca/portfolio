import { Box, Stack, VStack, Text, Heading,Button } from "@chakra-ui/react";
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
      {/* Agruparlos en Stack o VStack, HStack */}
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
        _hover={{ shadow: "xl" }}
        flexWrap={'wrap'}
      >
        <div fontSize={12} fontWeight={"light"} color={'gray.600'}>
          {stack}
        </div>
        <Heading fontSize="xl" justifyContent={"center"}>
          {name}
        </Heading>
        <Image src={imgPreview} width="1100px" height="400px" />
        <div mt={4}>{infoProyect}</div>
        <a href={linkDeploy} target="_blank">
          <Button colorScheme={'blue'}>
            Deploy
          </Button>
        </a>
        <a href={linkGithub} target="_blank">
          <Button colorScheme={'red'}>
            Github
          </Button>
        </a>
      </Box>
    </a>
  );
};
