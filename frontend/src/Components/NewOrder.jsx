import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../Redux/Auth/action";
import { addOrder } from "../Redux/Order/action";
import { useNavigate } from "react-router-dom";

export const NewOrder = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    dispatch(addOrder(data)).then((res) => {
      console.log(res);
      if (res.payload.status == "success") {
        toast({
          title: res.payload.message,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        navigate("/getorder");
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

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <>
      <Box
        w={"30%"}
        p={5}
        m={"50px auto"}
        rounded={5}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Heading size={"50px"} textAlign={"center"}>
            Add Order
          </Heading>
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
              "Add Order"
            )}
          </Button>
        </form>
      </Box>
    </>
  );
};
