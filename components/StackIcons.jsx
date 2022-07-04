import { Box, Text, Stack, VStack, HStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";

import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export const StackIcons = () => {
  return (
    <Box>
      <VStack>
        <Text fontWeight={"bold"} justifyContent={"center"}>
          Stack
        </Text>
      </VStack>
      <HStack justifyContent={"center"} gap={20}>
        <Icon
          as={IoLogoJavascript}
          color={"white"}
          bgColor="black"
          h={8}
          w={8}
        />
        <Icon as={SiTypescript} color={"black"} h={8} w={8} />
        <Icon as={FaReact} color={"black"} h={8} w={8} />
      </HStack>
    </Box>
  );
};
