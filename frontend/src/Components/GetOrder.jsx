import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Heading,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProfile } from "../Redux/Auth/action";
import { getOrder } from "../Redux/Order/action";
import { EditOrder } from "./EditOrder";

export const GetOrder = () => {
  const dispatch = useDispatch();

  const order = useSelector((state) => state.OrderReducer.order);

  console.log(order);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getOrder());
  }, []);

  return (
    <>
      <Box
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        p={5}
        w={"80%"}
        m={"40px auto"}
      >
        {order.length > 0 ? (
          <>
            {/* <Heading textAlign={"center"} color={"blue"} mt={"10px"}>
              Your Order
            </Heading> */}
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Sub Total</Th>
                    <Th>Phone Number</Th>
                    <Th>Edit Order</Th>
                    <Th>Delete Order</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {order?.map((item) => (
                    <>
                      <Tr>
                        <Td>{item.sub_total}</Td>
                        <Td>{item.phone_number}</Td>
                        <Td>
                          <EditOrder />
                        </Td>
                        <Td>
                          <Button colorScheme={"red"}>Delete</Button>
                        </Td>
                      </Tr>
                    </>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <>
            <Link to="/addorder">
              <Image
                w={"100%"}
                h={"500px"}
                src="https://cdn.dribbble.com/users/1555425/screenshots/4811660/no_order_found.jpg"
                alt="GIF"
              />
            </Link>
          </>
        )}
      </Box>
    </>
  );
};
