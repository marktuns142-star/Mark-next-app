"use client";

//import Todolist02 from "./m";
import { dataItem02} from "../data2/dataItem02";
import Footer from "../components2/footer2";
import Header from "../components2/header2";
import { myPets } from "../data2/todoList02";
import ToDoFrom11 from "./components11/ToDoFrom11";
import { useState } from "react";


export default function ToDoList02(){
    
    const toDoList02 = [dataItem02]
    const [Tasks, setTasks] = useState(toDoList02);
    const [numOfTask, setNoft] = useState(Tasks.length);
    const [status, setStatus] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [editingTask,setEditingTask] = useState(null);
       
    const resetEditingTask = () => setEditingTask(null);


    const addTask = (name, detail,type, supplier) => {
    const newTask ={
        id: Tasks.length+1,
        title: name,
        desc: detail,  
        type: type,
        supplier: supplier,
    };
}
    const updateTask = (id,name, detail, type, supplier ) => {
        setTasks(
            Tasks => Tasks.map(
                t => t.id === id ? 
               { ...t,
            name: name,
            detail: detail,
            type: type,
            supplier: supplier  
            } : t
        )); 
        setEditingTask(null);
    } 
    const onDelete = (id) => {
        const updateTasks = Tasks.filter(
            item => item.id != id 
        );
        setTasks(updateTasks);
    }



    console.log(`Name: ${name} `);
     
    const tmp = toDoList02.map((item,index) =>
         <>
         <div className="mx-25  w-full max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow-md text-black" key={index}>
           
           <p className="text-sm text-gray-600 flex items-center mb-2 font-medium">
                         <p>รายการสมุนไพรในระบบ</p>
                        
            </p>
            <p>ชื่อสมุนไพร:</p>
            <p>ประเภท </p>
            <p>ผู้ผลิต:</p>
            <p>ดำเนินการ:<button onClick={(e) => onDelete(id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button> </p>
        

           </div>
          
         </>
       );
      return (
             <>
             <Header/>
          <main className=" bg-[#63b3ed] flex items-center justify-center px-4 py-10 h-screen  ">
         <div className="w-full max-w-md rounded-[28px]  overflow-hidden shadow-[0_35px_60px_-15px_rgba(15,23,42,0.35)] bg-white transition-shadow duration-300 hover:shadow-[0_40px_80px_-20px_rgba(15,23,42,0.4)]">
             <div className="p-6 border border-gray-200 rounded-[28px]">
                 <div className="mb-4">
                     <p className="text-sm text-gray-600 flex items-center mb-2 font-medium">
                         เพิ่มข้อมูลสมุนไพร 
                         
                        </p>    
         <ToDoFrom11
                            addTask={addTask}
                            editingTask = {editingTask}
                            updateTask= {updateTask}
                            resetEditingTask= {resetEditingTask}
        />
         
        </div>
                     </div>
                 </div>
           {tmp}
           
           </main>
         <div>
        
         </div>
         <Footer />
         </>
       );
     
     }