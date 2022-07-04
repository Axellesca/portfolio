import { MdContactPage, MdOutlineContactPage } from "react-icons/md";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiFillMail,
} from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { Box, Stack, Text, Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { ButtonModal } from "./ButtonModal";

export const Footer = () => {
  const modalClick = () => {
    console.log("click");
  };

  return (
    <Box>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
        <Text fontWeight={"bold"}>
          {/* XXXXX XXXXXXXX */}
          Contacta Conmigo
        </Text>
      </Box>
      <Stack
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
        alignItems={"flex-end"}
      >
        {/* <br></br> */}
        {/*Hacer Button para descargar CV*/}
        <Box onClick={modalClick}>
          {/* <Icon w={50} h={50}>
                        <MdContactPage/>
                    </Icon> */}
          {/* <Icon as={MdContactPage}/> */}
          <ButtonModal />
        </Box>

        <Box /* w={"50px"} h={"50px"} */>
          <Icon w={50} h={50}>
            <AiFillMail />
          </Icon>
        </Box>
        <Box /* w={"50px"} h={"50px"} */>
          <a
            href="https://linkedin.com/in/axel-lescano"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon w={50} h={50}>
              <AiFillLinkedin />
            </Icon>
          </a>
        </Box>
        <Box /* w={"50px"} h={"50px"} */>
          <a
            href="https://github.com/Axellesca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon w={50} h={50}>
              <AiOutlineGithub />
            </Icon>
          </a>
        </Box>
      </Stack>
    </Box>
  );
};
