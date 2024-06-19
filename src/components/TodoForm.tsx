import { useState } from "react";
import { ITodos } from "../static/todos.interface";

import { Box, Button, Input, Text, Center } from "@chakra-ui/react";

function TodoForm({
  todos,
  setTodos,
  count,
}: {
  todos: ITodos[];
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
  count: number;
}) {
  const [input, setInput] = useState<string>("");

  const addTask = () => {
    if (input) {
      const checkDups = todos.filter(
        (i) => i.task.toLocaleLowerCase() === input.toLocaleLowerCase()
      );
      if (checkDups.length > 0) {
        alert("Task has been added");
      } else {
        const newArr: ITodos[] = [...todos, { task: input, isChecked: false }];
        setTodos(newArr);
      }
    }
  };

  return (
    <Box>
      <Text fontSize="24px" fontWeight="bold" textAlign="center" >
        Done: {count}
      </Text>
      <Text mb="0.25rem" fontSize="15px">
        Add to do
      </Text>
      <Input
        onChange={(e) => setInput(e.target.value)}
        placeholder="What's in your mind?"
        sx={{
          "::placeholder": {
            textAlign: "center",
          },
        }}
      />
      <Center>
        <Button mt="0.5rem" backgroundColor="#91DDCF" onClick={() => addTask()}>
            ADD TASK
        </Button>
      </Center>
    </Box>
  );
}

export default TodoForm;
