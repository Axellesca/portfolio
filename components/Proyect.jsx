import { Box, Text, HStack, VStack } from "@chakra-ui/react";
import { ProyectCard } from "./ProyectCard";

// Colocar los Proyectos como un Array de objetos, colocar nombre,id=index o crear un id con uuid o alguna libreria, linkDeploy y linkGithub, stack=lenguajes y frameworks utilizados, infoProyecto, imgPrevisualizacion.
const proyectos = [
  {
    id: 1,
    name: "Portfolio",
    linkDeploy: "https://github.com/Axellesca",
    linkGitHub: "https://wwww.github.com/Axellesca/portfolio",
    stack: "NextJS - Chakra UI",
    infoProyect: "Portfolio para muestra personal de proyectos",
    imgPreview: "/favicon.ico",
  },
  {
    id: 2,
    name: "Search Img",
    linkDeploy: "https://imagenes-ts-axellesca.vercel.app/",
    linkGitHub: "https://github.com/Axellesca/imagenes-ts",
    stack: "React + Typescript - TailWindCSS",
    infoProyect: "Buscador de imagenes utilizando la api de Pixabay",
    imgPreview: "/vercel.svg",
  },
  {
    id: 3,
    name: "Asdd",
    linkDeploy: "dddd",
    linkGitHub: "dddasd",
    stack: "asdasd",
    infoProyect: "asdasdasd",
    imgPreview: "/vercel.svg",
  },
  {
    id: 4,
    name: "Asdd",
    linkDeploy: "dddd",
    linkGitHub: "dddasd",
    stack: "asdasd",
    infoProyect: "asdasdasd",
    imgPreview: "/vercel.svg",
  },
];

export const Proyect = () => {
  return (
    <Box>
      <VStack>
        <Text fontWeight={"bold"} fontSize={"3xl"}>
          Proyectos
        </Text>
      </VStack>
      <HStack justifyContent={"center"} gap={16} p={10}>
        {proyectos.map((proy) => (
          <ProyectCard
            key={proy.id}
            name={proy.name}
            linkDeploy={proy.linkDeploy}
            linkGitHub={proy.linkGitHub}
            stack={proy.stack}
            infoProyect={proy.infoProyect}
            imgPreview={proy.imgPreview}
          />
        ))}
      </HStack>
    </Box>
  );
};