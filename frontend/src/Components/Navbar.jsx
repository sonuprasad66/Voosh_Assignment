import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import * as types from "../Redux/Auth/actionTypes";

export const Navbar = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.AuthReducer.currentUser);

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("token");
    dispatch({ type: types.USER_LOGOUT_SUCCESS });
  };

  return (
    <>
      {token ? (
        <Box
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          p="6"
        >
          <Flex justifyContent={"space-around"} alignItems={"center"}>
            <Heading
              color={"blue.500"}
              fontFamily={"Helvetica"}
              fontWeight={800}
              letterSpacing={0.5}
              as={NavLink}
              to="/addorder"
            >
              Voosh
            </Heading>

            <Flex alignItems={"center"} justifyContent={"center"}>
              <Image
                w={"40px"}
                h={"40px"}
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Profile"
              />
              <Heading size={"md"} ml={1}>
                {currentUser.name}
              </Heading>
            </Flex>

            <Flex gap={1}>
              <Button
                data-testid="home"
                as={NavLink}
                to="/addorder"
                px={7}
                borderRadius={"3xl"}
                colorScheme={"blue"}
              >
                Add Order
              </Button>
              <Button
                data-testid="home"
                as={NavLink}
                to="/getorder"
                px={7}
                borderRadius={"3xl"}
                colorScheme={"blue"}
              >
                My Orders
              </Button>

              <Button
                data-testid="home"
                as={NavLink}
                to="/"
                px={7}
                borderRadius={"3xl"}
                onClick={handleLogout}
                colorScheme={"blue"}
              >
                Logout
              </Button>
            </Flex>
          </Flex>
        </Box>
      ) : (
        <Box boxShadow="xl" p="6">
          <Flex justifyContent={"space-around"} alignItems={"center"}>
            <Heading
              color={"blue.500"}
              fontFamily={"Helvetica"}
              fontWeight={800}
              letterSpacing={0.5}
              as={NavLink}
              to="/"
            >
              Voosh
            </Heading>

            <Flex gap={1}>
              <Button
                data-testid="home"
                as={NavLink}
                to="/"
                px={7}
                borderRadius={"3xl"}
                colorScheme={"blue"}
              >
                Login
              </Button>

              <Button
                data-testid="home"
                as={NavLink}
                to="/signup"
                px={7}
                borderRadius={"3xl"}
                colorScheme={"blue"}
              >
                Signup
              </Button>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
};
