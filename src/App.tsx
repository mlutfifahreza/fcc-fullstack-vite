import { Container, Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import ProductList from "./components/ProductList.tsx";

export const BASE_URL = "http://localhost:8000"

function App() {
    return (
        <Stack h='100vh'>
            <Navbar />
            <Container>
                <TodoForm />
                <ProductList />
            </Container>
        </Stack>
    );
}

export default App;
