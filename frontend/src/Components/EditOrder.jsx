import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Spinner,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const EditOrder = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <>
      <Button onClick={onOpen} colorScheme={"green"}>
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Update Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Sub Total</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter Sub Total"
                  name="sub_total"
                  onChange={handleChange}
                />

                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="number"
                  placeholder="Enter Phone Number"
                  name="phone_number"
                  onChange={handleChange}
                />
              </FormControl>

              <Button type="submit" w={"full"} mt={3} colorScheme={"blue"}>
                {/* {isLoading ? (
                  <>
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="md"
                    />
                  </>
                ) : (
                  "Update Order"
                )} */}
                Update Order
              </Button>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
