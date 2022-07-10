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
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { MdContactPage, MdOutlineContactPage } from 'react-icons/md';
import Image from 'next/image';

export const ButtonModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      {''}
      <Icon onClick={onOpen} w={50} h={50} cursor={'pointer'}>
        <MdContactPage />
      </Icon>
      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>CV</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Colocar IMAGEN DEL CV ACA */}
            <Image src="/CV.png" width={'1400px'} height={'2000px'} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button variant="solid" colorScheme={'yellow'}>
              Descargar CV
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
