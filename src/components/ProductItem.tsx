import {Flex, Stack, Text} from "@chakra-ui/react";
import { Product } from "./ProductList";

const TodoItem = ({ product }: { product: Product }) => {

	return (
		<Flex gap={2} alignItems={"center"}>
			<Flex
				flex={1}
				alignItems={"center"}
				border={"1px"}
				borderColor={"gray.600"}
				p={2}
				borderRadius={"lg"}
				justifyContent={"space-between"}
			>
				<Stack>
					<Text
						color="green.200"
						textDecoration="none"
					>
						ID = {product.id}
					</Text>

					<Text
						color="green.200"
						textDecoration="none"
					>
						Title = {product.title}
					</Text>

				</Stack>

			</Flex>
		</Flex>
	);
};
export default TodoItem;
