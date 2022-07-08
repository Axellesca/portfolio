import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Box,
  Button,
  Lorem,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { MdContactPage, MdOutlineContactPage } from "react-icons/md";

export const ButtonModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      {''}
      <Icon onClick={onOpen} w={50} h={50} cursor={'pointer'}>
        <MdContactPage/>
      </Icon>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>CV</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Colocar IMAGEN DEL CV ACA */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic sint
            quidem omnis distinctio quae, perspiciatis commodi earum, deserunt
            odit sed nulla totam! Sint voluptatibus fugiat saepe delectus fugit
            asperiores illo?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Descargar CV</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
