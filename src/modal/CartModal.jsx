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
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction } from "../store/cart-slice";

export default function CartModal() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const closeModal = () => {
    dispatch(cartAction.emptyCart());
  };
  return (
    <>
      <Button
        width="full"
        bg="black"
        color="white"
        _hover="none"
        borderRadius="0px"
        onClick={onOpen}
      >
        CHECKOUT
      </Button>

      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody mt="10px">
            <Heading fontWeight="md" textAlign="center">
              Thank you for shopping with us!
            </Heading>
          </ModalBody>

          <ModalFooter justifyContent="center" my="10px">
            <Link to="../">
              <Button
                bg="black"
                color="white"
                _hover="none"
                borderRadius="0px"
                onClick={closeModal}
              >
                GO TO HOME PAGE
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
