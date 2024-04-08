import {
  Button,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Text,
  Image,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, productAction } from "../store/product-slice";
import { Link } from "react-router-dom";
import { PiHeartStraightLight } from "react-icons/pi";

export default function Products() {
  // const [productId, setProductId] = useState(0);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  // const navigate = useNavigate();

  const buyBtnHandler = async (productId) => {
    
    dispatch(productAction.buyProductBtn(productId));
  };

  const wishListHandler = (productId) => {
    dispatch(productAction.wishListBtn(productId));
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <SimpleGrid p="10px" spacing="6px" minChildWidth="300px">
      {products.length > 0 &&
        products.map((item) => (
          <Card
            maxW="sm"
            kay={item.id}
            border="0.2px solid #7a7a7a"
            borderRadius="unset"
            key={item.id}
          >
            <CardBody>
              <Image src={item.image} alt="picture" boxSize="300px" mb="10px" />
              <Heading
                fontWeight="600"
                size="md"
                justifyItems="center"
                pt="10px"
              >
                {item.title}
              </Heading>
              {/* <Text>{item.description.slice(0, 100) + "..."}</Text> */}
            </CardBody>
            <Divider color="black" />
            <VStack gap="10px" my="10px">
              <HStack gap="16rem">
                <Text fontSize="lg">{`₹ ${Math.round(item.price * 100)}`}</Text>
                <Link to="./wishlist">
                  <PiHeartStraightLight
                    size={30}
                    onClick={() => wishListHandler(item.id)}
                  />
                </Link>
              </HStack>
              <Link to="./product" onClick={() => buyBtnHandler(item.id)}>
              <Button
                colorScheme="blue"
                w="full"
                h="40px"
                bg="black"
                color="white"
                _hover="none"
                borderRadius="unset"
              >
                
                  Buy now
                
              </Button>
              </Link>
            </VStack>
            {/* <Button
                  bg="white"
                  color="black"
                  _hover="none"
                  borderRadius="unset"
                  border="1px solid black"
                  onClick={() => wishListHandler(item.id)}
                >
                  Add to wishlist
                </Button> */}
          </Card>
        ))}
    </SimpleGrid>
  );
}
