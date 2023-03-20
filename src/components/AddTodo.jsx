import React, { useState } from "react";
import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";

const AddTodo = ({ addTodo }) => {
  const toast = useToast();
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!content){
      toast({
        title: 'No Content',
        
        status: 'error',
        duration: '2000',
        isClosable: true,
      })
    }
    const todo ={
      id: nanoid(),
      body: content,
    }
    addTodo(todo);
    setContent(" ");

  };
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <HStack mt="8">
          <Input
            variant="filled"
            placeholder="learning chakra ui with todo app"
            defaultValue={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <Button colorScheme="pink" px="8" type="submit">
            Add Todo
          </Button>
        </HStack>
      </form>
    </>
  );
};

export default AddTodo;
