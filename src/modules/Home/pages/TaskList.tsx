import { useState, useContext } from 'react';
import { useTasks, useTasksDispatch } from './TasksContext.js';
import { Input } from '@/components/ui/input.js';
import { Button } from '@/components/ui/button.js';

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <div className="flex w-full flex-start items-center space-x-2 gap-4">
          <Input
            value={task.text}
            onChange={e => {
              dispatch({
                type: 'changed',
                task: {
                  ...task,
                  text: e.target.value
                }
              });
            }} 
          />
          <Button onClick={() => setIsEditing(false)}>
            Save
          </Button>
        </div>
        
      </>
    );
  } else {
    taskContent = (
      <>
        <div className="flex w-full flex-start items-center space-x-2 gap-4">
          {task.text}
          <Button onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        </div>
      </>
    );
  }
  return (
    <label>
      <div className="flex w-full flex-start items-center space-x-2 gap-4">
        <Input
          type="checkbox"
          checked={task.done}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                done: e.target.checked
              }
            });
          }}
        />
        {taskContent}
        <Button onClick={() => {
          dispatch({
            type: 'deleted',
            id: task.id
          });
        }}>
          Delete
        </Button>
      </div>
    </label>
  );
}
