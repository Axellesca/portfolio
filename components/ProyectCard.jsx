import { Box, VStack, HStack, Heading, Button, Link } from "@chakra-ui/react";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

export const ProyectCard = ({
  name,
  linkDeploy,
  linkGithub,
  stack,
  infoProyect,
  imgPreview,
}) => {
  return (
    <Box>
      {/* Agruparlos en Stack o VStack, HStack */}

      <VStack
        p={5}
        shadow="md"
        borderWidth="1px"
        bgColor={"#F9F8E6"}
        // cursor={"pointer"}
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
          <Link href={linkDeploy} target="_blank" rel="noreferrer" isExternal>
            <Button rightIcon={<BiLinkExternal />} colorScheme={"blue"}>
              Deploy
            </Button>
          </Link>
          <Link href={linkGithub} target="_blank" rel="noreferrer" isExternal>
            <Button rightIcon={<AiOutlineGithub />} colorScheme={"red"}>
              Github
            </Button>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};
