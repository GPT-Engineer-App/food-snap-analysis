import { Box, Button, Container, Flex, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { FaCamera, FaCog, FaHome, FaSearch, FaUser } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="container.md" p={0} h="100vh">
      <Flex direction="column" h="full">
        {/* Header */}
        <Flex justify="space-between" align="center" p={4} boxShadow="sm">
          <Image src="https://images.unsplash.com/photo-1497005367839-6e852de72767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaW1wbGUlMjBsb2dvfGVufDB8fHx8MTcxNTI4ODUwMXww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="40px" />
          <IconButton icon={<FaCog />} aria-label="Settings" size="lg" color="blueViolet" />
        </Flex>

        {/* Main Function Area */}
        <Flex flex={1} direction="column" align="center" justify="center">
          <IconButton icon={<FaCamera />} aria-label="Upload Photo" size="lg" colorScheme="blueViolet" variant="outline" onClick={onOpen} />
        </Flex>

        {/* Footer */}
        <Flex justify="space-around" align="center" p={4} borderTop="1px" borderColor="gray.200">
          <IconButton icon={<FaHome />} aria-label="Home" size="lg" color="gray.500" />
          <IconButton icon={<FaSearch />} aria-label="Discover" size="lg" color="gray.500" />
          <IconButton icon={<FaUser />} aria-label="Profile" size="lg" color="gray.500" />
        </Flex>
      </Flex>

      {/* Modal for Ingredient Details */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ingredient Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Text fontSize="md" color="black">
                Ingredient Name
              </Text>
              <Text fontSize="sm" color="gray.500">
                Detailed information about the ingredient, including dietary benefits or risks.
              </Text>
              <Button colorScheme="blueViolet">Learn More</Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;
