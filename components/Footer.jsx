import {MdContactPage, MdOutlineContactPage} from 'react-icons/md';
import {AiOutlineGithub,AiFillLinkedin,AiOutlineLinkedin, AiOutlineMail, AiFillMail} from 'react-icons/ai';
import {TbBrandGithub} from 'react-icons/tb';
import { Box, Icon, Stack } from '@chakra-ui/react';



export const Footer = () => {
    return (
        <Box>
            <Stack display={"flex"} flexDirection={"row"} flexWrap={"wrap"} justifyContent={"space-evenly"} alignItems={"flex-end"}>
                {/* <br></br> */}
                {/*Hacer Button para descargar CV*/}
                {/* <Box>
                    <Icon w={50} h={50}>
                        <MdContactPage/>
                    </Icon>
                </Box> */}
                <Box /* w={"50px"} h={"50px"} */>
                    <Icon w={50} h={50}>
                        <AiFillMail/>
                    </Icon>
                </Box>
                <Box /* w={"50px"} h={"50px"} */>
                    <a href="https://linkedin.com/in/axel-lescano" target="_blank" rel="noopener noreferrer">
                        <Icon w={50} h={50}>
                            <AiFillLinkedin/>
                        </Icon>
                    </a>
                </Box>
                <Box /* w={"50px"} h={"50px"} */>
                    <a href="https://github.com/Axellesca" target="_blank" rel="noopener noreferrer">
                        <Icon w={50} h={50}>
                            <AiOutlineGithub/>
                        </Icon>
                    </a>
                </Box>
            </Stack>
        </Box>
    )
}
