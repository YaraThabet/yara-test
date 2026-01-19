import {
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Image,
  Pill,
  Text,
  Title,
} from "@mantine/core";

import { useGetAllProducts } from "../hooks/useGetAllProducts";
import { useDeleteProduct } from "../hooks/useDeleteProduct";
import { Link, useNavigate } from "@tanstack/react-router";
// import { Product } from "../entities/Product";
export const Products = () => {
  
  
  const { isEmpty, productWithDiscountHigherThan10 , productWithDiscountLowerThan10 } = useGetAllProducts();

 const {deleteProduct, isSuccess} = useDeleteProduct({
  onSuccess: () => {
    console.log("Product deleted successfully");
  },
});

  if(isSuccess){
    return null;
  }
  if(isEmpty){
    <Text>No Products Found</Text> 
  }
  // const navigate = useNavigate()
  return (
    <Grid>
      <Title >productWithDiscountHigherThan10% </Title>
      {productWithDiscountHigherThan10.map((product) => {
        return (
          <Link to="/ptoduct/$productId" params={{productId: product.id }}>
          <Grid.Col span={4} key={product.id}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={product.image} height={160} alt="yara" />
              </Card.Section>
              {product.isAvailable && <Pill>Available</Pill>}
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{product.name}</Text>
                <Badge color="pink">On Sale</Badge>
              </Group>

              <Text size="sm" c="dimmed">
                {product.discountPercentage}
              </Text>

              <Button color="blue" fullWidth mt="md" radius="md">
                Order Now
              </Button>
               <Button color="red" fullWidth mt="md" radius="md" onClick={() => deleteProduct(product.id)}>
                Delete
              </Button>
            </Card>
          </Grid.Col>
          </Link>
        );
      })}
      <Title>productWithDiscountLowerThan10% </Title>
       {productWithDiscountLowerThan10.map((product) => {
        return (
      
          <Grid.Col span={4} key={product.id}  onClick={() => navigate({ to:"/ptoduct/$productId", params:{}})}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={product.image} height={160} alt="yara" />
              </Card.Section>
              {product.isAvailable && <Pill>Available</Pill>}
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{product.name}</Text>
                <Badge color="pink">On Sale</Badge>
              </Group>

              <Text size="sm" c="dimmed">
                {product.discountPercentage}
              </Text>

              <Button color="blue" fullWidth mt="md" radius="md">
                Order Now
              </Button>
               <Button color="red" fullWidth mt="md" radius="md" onClick={() => deleteProduct(product.id)}>
                Delete
              </Button>
            </Card>
          </Grid.Col>
        
        );
      })}
    </Grid>

  );
};
