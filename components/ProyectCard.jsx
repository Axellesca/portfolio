import {
  Box,
  Stack,
  VStack,
  HStack,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const ProyectCard = ({
  name,
  linkDeploy,
  linkGithub,
  stack,
  infoProyect,
  imgPreview,
}) => {
  return (
    <Link href={linkDeploy} target="_blank" rel="noreferrer" passHref>
      {/* Agruparlos en Stack o VStack, HStack */}
      <VStack
        p={5}
        shadow="md"
        borderWidth="1px"
        bgColor={"#F9F8E6"}
        cursor={"pointer"}
        w={80}
        h={80}
        display={"flex"}
        justifyContent={"center"}
        rounded={"lg"}
        _hover={{ shadow: "xl" }}
        flexWrap={"wrap"}
      >
        <Box fontSize={12} fontWeight={"light"} color={"gray.600"}>
          {stack}
        </Box>
        <Heading fontSize="xl" justifyContent={"center"}>
          {name}
        </Heading>
        <Image src={imgPreview} width="1100px" height="400px" />
        <div mt={4}>{infoProyect}</div>
        <HStack>
          <a href={linkDeploy} target="_blank" rel=" noreferrer">
            <Button colorScheme={"blue"}>Deploy</Button>
          </a>
          <a href={linkGithub} target="_blank" rel="noopener noreferrer">
            <Button colorScheme={"red"}>Github</Button>
          </a>
        </HStack>
      </VStack>
    </Link>
  );
};
