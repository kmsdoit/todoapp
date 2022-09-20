import TodoInput from 'app/components/TodoInput';
import TodoItem from 'app/components/TodoItem';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background: white;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0, 0.18);
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const TodoList = styled.div``;

// const TodoItem = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 15px 25px;
//   width: 100%;
//   font-size: 1.2em;
//   border-bottom: 1px solid #eee;
// `;

const TodoCheck = styled.input`
  margin-right: 15px;
`;

export function HomePage() {

  const [todoList,setTodoList] = React.useState<ITodoItem[]>([
    {
      id : '1',
      content: '1번째 todo',
      completed:true,
      enditing : false,
    },
    {
      id : '2',
      content: '2번째 todo',
      completed:false,
      enditing : false,
    },
    {
      id : '3',
      content: '3번째 todo',
      completed:false,
      enditing : true,
    },
  ]);

  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="Todo Main App" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>할 일</Title>
          <TodoInput setTodoList={(todo:ITodoItem) => setTodoList([todo,...todoList])}></TodoInput>
          <TodoList>
            {
              todoList.map((todo) => <TodoItem todo={todo}/>)
            }
          </TodoList>
        </Box>
      </Wrapper>
    </>
  );
}
