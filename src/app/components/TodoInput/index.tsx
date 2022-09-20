import styled from 'styled-components';
import * as React from 'react';


const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;
`;

export default function TodoInput({
  setTodoList,
}: {
  setTodoList:(todo:ITodoItem) => void;
}) {
  const [content,setContent] = React.useState<string>('');
  return(
    <Box>
      <Input placeholder="할 일을 입력해주세요" value={content} onChange={e => setContent(e.target.value)} onKeyPress={e => {
        if (content === '') return;
        if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
        setTodoList({
          id: '0',
          content: content,
          completed: false,
          enditing:false,
        })
        setContent('');
      }}></Input>
    </Box>
  );
}