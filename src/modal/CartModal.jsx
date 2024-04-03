import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  ModalContent,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function CartModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button  width="full" bg="black" color="white" _hover="none" borderRadius="0px" onClick={onOpen}>CHECKOUT</Button>

      <Modal size="lg" isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalBody mt="10px">
            <Heading fontWeight="md" textAlign="center">Thank you for shopping with us!</Heading>
          </ModalBody>

          <ModalFooter justifyContent="center" my="10px">
            <Link to="../">
            <Button bg="black" color="white" _hover="none" borderRadius="0px"  onClick={onClose}>
              GO TO HOME PAGE
            </Button>
            </Link>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    // <Box maxW="sm" bg="white">
    //     <Button width="full" bg="black" color="white" _hover="none" borderRadius="0px" onClick={onOpen}>CHECKOUT</Button>
    //     <Modal isOpen={isOpen}>
    //     <ModalOverlay>
    //         <ModalBody>
    //             <Heading>Thank you for shopping with us!</Heading>
    //         </ModalBody>
    //         <ModalFooter>
    //             <Button onClick={onClose}>GO TO HOME PAGE</Button>
    //         </ModalFooter>
    //     </ModalOverlay>
    //     </Modal>
    // </Box>
  );
}
