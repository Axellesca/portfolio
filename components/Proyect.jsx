import { Box, Text, HStack, VStack, Grid, GridItem } from "@chakra-ui/react";
import { ProyectCard } from "./ProyectCard";
import ProyectCardNew from "./ProyectCardNew";

// Colocar los Proyectos como un Array de objetos, colocar nombre,id=index o crear un id con uuid o alguna libreria, linkDeploy y linkGithub, stack=lenguajes y frameworks utilizados, infoProyecto, imgPrevisualizacion.
const proyectos = [
  {
    id: 1,
    name: "Portfolio",
    linkDeploy: "https://github.com/Axellesca",
    linkGithub: "https://github.com/Axellesca/portfolio",
    stack: "NextJS - Chakra UI",
    infoProyect: "Portfolio para muestra personal de proyectos",
    imgPreview: "/favicon.ico",
  },
  {
    id: 2,
    name: "Search Img",
    linkDeploy: "https://imagenes-ts-axellesca.vercel.app/",
    linkGithub: "https://github.com/Axellesca/imagenes-ts",
    stack: "React + Typescript - TailWindCSS",
    infoProyect: "Buscador de imagenes utilizando la api de Pixabay",
    imgPreview: "/vercel.svg",
  },
  {
    id: 3,
    name: "Asdd",
    linkDeploy: "https://imagenes-ts-axellesca.vercel.app/",
    linkGithub: "https://github.com/Axellesca/imagenes-ts",
    stack: "asdasd",
    infoProyect: "asdasdasdddddddddddddddddddddddddddddddddddddddddddddd",
    imgPreview: "/vercel.svg",
  },
  {
    id: 4,
    name: "Asdd",
    linkDeploy: "https://github.com/Axellesca/imagenes-ts",
    linkGithub: "https://github.com/Axellesca/imagenes-ts",
    stack: "asdasd",
    infoProyect:
      "asdasdasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    imgPreview: "/vercel.svg",
  },
];

export const Proyect = () => {
  return (
    <Box>
      <VStack>
        <Text fontWeight={"bold"} fontSize={"3xl"} mt={10}>
          Proyectos
        </Text>
      </VStack>
      {/* <Grid templateColumns={'repeat(3,1fr)'} gap={6} px={4}> */}
      <HStack
        justifyContent={{ base: "space-evenly", md: "center" }}
        gap={16}
        p={10}
        wrap={"wrap"}
      >
        {proyectos.map((proy) => (
          // <ProyectCard
          //   key={proy.id}
          //   name={proy.name}
          //   linkDeploy={proy.linkDeploy}
          //   linkGithub={proy.linkGithub}
          //   stack={proy.stack}
          //   infoProyect={proy.infoProyect}
          //   imgPreview={proy.imgPreview}
          // />
          <ProyectCardNew
            key={proy.id}
            name={proy.name}
            linkDeploy={proy.linkDeploy}
            linkGithub={proy.linkGithub}
            stack={proy.stack}
            infoProyect={proy.infoProyect}
            imgPreview={proy.imgPreview}
          />
        ))}
      </HStack>
      {/* </Grid> */}
    </Box>
  );
};
