import { Flex, Spinner, Stack, Text } from "@chakra-ui/react";

import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../App";
import ProductItem from "./ProductItem.tsx";

export type Product = {
    id: string;
    name: string;
};

export type ProductListResponse = {
    success: boolean;
    data: Product[];
}

const ProductList = () => {
    const { data: response, isLoading } = useQuery<ProductListResponse>({
        queryKey: ["products"],
        queryFn: async () => {
            try {
                const res = await fetch(BASE_URL + "/products");
                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.error || "Something went wrong");
                }
                return data || [];
            } catch (error) {
                console.log(error);
            }
        },
    });

    console.log("products response", response)

    const products = response?.data;

    return (
        <>
            <Text
                fontSize={"4xl"}
                textTransform={"uppercase"}
                fontWeight={"bold"}
                textAlign={"center"}
                my={2}
                bgGradient='linear(to-l, #0b85f8, #00ffff)'
                bgClip='text'
            >
                Products List
            </Text>
            {isLoading && (
                <Flex justifyContent={"center"} my={4}>
                    <Spinner size={"xl"} />
                </Flex>
            )}
            {!isLoading && products?.length === 0 && (
                <Stack alignItems={"center"} gap='3'>
                    <Text fontSize={"xl"} textAlign={"center"} color={"gray.500"}>
                        No products available! 😭
                    </Text>
                    <img src='/go.png' alt='Go logo' width={70} height={70} />
                </Stack>
            )}
            <Stack gap={3}>
                {products?.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </Stack>
        </>
    );
};
export default ProductList;
