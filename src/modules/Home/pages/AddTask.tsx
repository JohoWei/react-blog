import { useState, useContext } from 'react';
import { useTasksDispatch } from './TasksContext.js';
import { Input } from '@/components/ui/input.js';
import { Button } from '@/components/ui/button.js';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          placeholder="Add task"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <Button onClick={() => {
          setText('');
          dispatch({
            type: 'added',
            id: nextId++,
            text: text,
          }); 
        }}>Add</Button>
      </div>
    </>
  );
}

let nextId = 3;
