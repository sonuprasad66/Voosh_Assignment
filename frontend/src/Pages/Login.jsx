import React, { useEffect, useState } from "react";
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
import { userLogin } from "../Redux/Auth/action";

export const Login = () => {
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
    dispatch(userLogin(data)).then((res) => {
      if (res.payload.status == "success") {
        localStorage.setItem("token", res.payload.token);
        toast({
          title: res.payload.message,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        navigate("/addorder");
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
            Login
          </Heading>
          <FormControl isRequired>
            <FormLabel>Phone Number </FormLabel>
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
              "Login"
            )}
          </Button>
        </form>
      </Box>
    </>
  );
};
