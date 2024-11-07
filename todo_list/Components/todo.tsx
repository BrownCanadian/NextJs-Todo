// Todo.tsx
import React from 'react';

interface TodoProps {
  id: number;
  title: string;
  desc: string;
  mongoId: string;
  complete: boolean;
  deleteTodo: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ id, title, desc, mongoId, complete, deleteTodo}) => {
    return (
        <tr className="bg-gray-200 border-b border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-slate-800 whitespace-nowrap dark:text-white">
            {id+1}
          </th>
          <td className="px-6 py-4">
            {title}
          </td>
          <td className="px-6 py-4">
            {desc}
          </td>
          <td className="px-6 py-4">
            {complete ? "complete" : "incomplete"}
          </td>
          <td>
            <button onClick={()=>{deleteTodo(mongoId)}} className="bg-green-500 w-[16px] w-auto text-white py-2 px-4 ml-4 rounded-md">Done</button>
    
          </td>
        </tr>
      );
    };

export default Todo;
