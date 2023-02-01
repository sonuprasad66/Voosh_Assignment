import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProfile } from "../Redux/Auth/action";
import { deleteOrder, getOrder } from "../Redux/Order/action";
import { EditOrder } from "./EditOrder";

export const GetOrder = () => {
  const dispatch = useDispatch();

  const order = useSelector((state) => state.OrderReducer.order);

  const handleDelete = (id) => {
    dispatch(deleteOrder(id))
      .then((res) => {
        dispatch(getOrder());
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

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
                          <EditOrder id={item._id} />
                        </Td>
                        <Td>
                          <Button
                            colorScheme={"red"}
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete
                          </Button>
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
