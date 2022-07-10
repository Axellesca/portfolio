import { Container } from '@chakra-ui/react';

export const Layout = ({ children }) => {
  return (
    <Container maxWidth={'container.ds'} alignContent="center">
      {children}
    </Container>
  );
};
