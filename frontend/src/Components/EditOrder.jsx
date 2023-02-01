import React, { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { getOrder, updateOrder } from "../Redux/Order/action";
import { useDispatch, useSelector } from "react-redux";

export const EditOrder = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const toast = useToast();
  const isLoading = useSelector((state) => state.OrderReducer.isLoading);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(updateOrder({ id: id, data: data })).then((res) => {
      if (res.payload.status == "success") {
        toast({
          title: res.payload.message,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        dispatch(getOrder());
        onClose();
      } else {
        toast({
          title: res.payload.message,
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    });
  };

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
                {isLoading ? (
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
                )}
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
