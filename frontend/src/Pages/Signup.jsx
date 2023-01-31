import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignup } from "../Redux/Auth/action";

export const Signup = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const isLoading = useSelector((state) => state.AuthReducer.isLoading);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userSignup(data)).then((res) => {
      if (res.payload.status == "success") {
        toast({
          title: res.payload.message,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        navigate("/");
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
      <Box
        w="30%"
        m="50px auto"
        p={5}
        rounded={5}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <form id="form" onSubmit={handleSubmit}>
          <Heading textAlign={"center"} size="md">
            Sign Up
          </Heading>
          <FormControl isRequired>
            <FormLabel>User Name </FormLabel>
            <Input
              type="text"
              placeholder="Enter User Name "
              name="name"
              onChange={handleChange}
            />

            <FormLabel>User Phone Number </FormLabel>
            <Input
              type="number"
              placeholder="Enter Phone Number "
              name="phone_number"
              onChange={handleChange}
            />

            <FormLabel>Password </FormLabel>
            <Input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
            />
          </FormControl>

          <Button type="submit" w="full" mt={5} colorScheme="blue">
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
              "Sign Up"
            )}
          </Button>
        </form>
      </Box>
    </>
  );
};
