import { Box, Text, Stack, VStack, HStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";

import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiNextdotjs, SiMysql, SiMongodb } from "react-icons/si";
import { FaReact, FaNode, FaGitAlt } from "react-icons/fa";

export const StackIcons = () => {
  return (
    <Box px={{base:8,md:16,lg:30}}>
      <VStack>
        <Text fontSize={"2xl"} fontWeight={"bold"} justifyContent={"center"} mt={10}>
          Stack
        </Text>
      </VStack>
      <HStack justifyContent={"center"} gap={10} flexWrap={'wrap'} mb={4}>
        <Icon
          as={IoLogoJavascript}
          color={"#F9F8E6"}
          bgColor="black"
          h={8}
          w={8}
        />
        <Icon as={SiTypescript} color={"black"} h={8} w={8} />
        <Icon as={FaReact} color={"black"} h={8} w={8} />
        <Icon as={SiNextdotjs} color={"black"} h={8} w={8} />
        <Icon as={FaNode} color={"black"} h={8} w={8} />
        <Icon as={SiMysql} color={"black"} h={8} w={8} />
        <Icon as={SiMongodb} color={"black"} h={8} w={8} />
        <Icon as={FaGitAlt} color={"black"} h={8} w={8} />
      </HStack>
    </Box>
  );
};
