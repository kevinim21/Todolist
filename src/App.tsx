import { useState } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import TodoList from "./components/TodoList.tsx";
import TodoForm from "./components/TodoForm.tsx";
import { ITodos } from "./static/todos.interface.tsx";

function App() {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [count, setCount] = useState<number>(0);
  return (
    <Container p="2em" mt="2em" borderWidth="2px" border="solid" borderRadius="2em">
      <Box>
        <Text mb="2rem" fontSize="27px" fontWeight="bold" textAlign="center">
          To Do List
        </Text>
      </Box>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        count={count}
        setCount={setCount}
      />
      <TodoForm todos={todos} setTodos={setTodos} count={count} />
    </Container>
  );
}

export default App;
