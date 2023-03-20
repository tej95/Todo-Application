import { Heading, VStack, IconButton , useColorMode} from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import {FaSun, FaMoon} from 'react-icons/fa'

function App() {
  
  const initialTodos = [
    {
      id: 1,
      body: "get bread",
    },
    {
      id: 2,
      body: "get butter",
    },
  ];
  const [todos, setTodos] = useState(()=>JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {

   localStorage.setItem('todos',JSON.stringify( todos));
  
    
    }
   ,[]);
  
  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo =>{ return todo.id !=id});
    setTodos(newTodos);
  }
  const addTodo = (todo)=>{
    setTodos([...todos,todo]);
  };
  const {colorMode, toggleColorMode} = useColorMode();

 
  return (
    <>
    <VStack p={4}>
      <IconButton icon={colorMode==='light'?<FaMoon/>:<FaSun/>} isRound="true" size="lg" alignSelf="flex-end" onClick={toggleColorMode}></IconButton>
    <Heading mb="8" fontWeight="extrabold" size="2xl" bgGradient="linear(to-r,pink.500 , pink.300 , blue.500)" bgClip="text">Todo Application</Heading>
    <Todo todos={todos} deleteTodo={deleteTodo}/>
    <AddTodo addTodo={addTodo}></AddTodo>
    </VStack>
    </>

  );
}

export default App;
