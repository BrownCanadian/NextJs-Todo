"use client"
import Todo from "@/Components/todo";
import axios from "axios";
import { set } from "mongoose";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const[formData,setFormData]=useState({
    title:"",
    desc:""
  });

  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    try {
      const res = await axios.get("/api");
      setTodos(res.data.todos);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("An unknown error occurred");
      }
    }
  }

  const deleteTodo = async (id:string) => {
      try {
          const res = await axios.delete(`/api`, {
              params: {
                  mongoId: id
              }
          });
          toast.success(res.data.msg);
          await fetchTodos();
      } catch (err) {
          if (err instanceof Error) {
              toast.error(err.message);
          } else {
              toast.error("An unknown error occurred");
          }
      }
  };
  
  

  useEffect(() => {
    fetchTodos();}, []);

  const onChnageHandler=(e: { target: { name: any; value: string; }; })=>{
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]:value
    })
    console.log(formData);}
  
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try{      
      const res = await axios.post("/api",formData);
      toast.success("Successfully added");
      setFormData({title:"",desc:""});
      await fetchTodos();}
    catch(err){
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("An unknown error occurred");
      }
    }
  }  
    

  return (
    <>
    <ToastContainer theme="dark"/>
    <form onSubmit={onSubmitHandler} className="flex items-start flex-col gap-2 w-[80%] ma-w-[600px] mx-auto">

      <input onChange={onChnageHandler} value={formData.title} type="text" placeholder="Enter title" name="title" className="p-3 py-2 border-2 w-full"></input>
      <textarea onChange={onChnageHandler} value={formData.desc} name="desc" placeholder="Enter description" className="p-3 py-2 border-2 w-full"></textarea>
      <button type="submit" className="bg-orange-500 text-white py-3 p-11 rounded-md">Submit</button>
      
      </form>
      
      

<div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Desc
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
                
            </tr>
        </thead>
        <tbody>
            {
              
                todos.map((item, index) => (
                  <Todo key={index} id={index} title={item.title} desc={item.desc} complete={item.isCompleted} mongoId={item._id} deleteTodo={deleteTodo} fetchTodos={fetchTodos}/>
                ))
              
            }
        </tbody>
    </table>
</div>

      </>
  );
}
