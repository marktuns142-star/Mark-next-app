"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import { dataItem, appendItem } from "../data/dataItem";
import { useState } from "react";
import ToDoList from "../week03/page";
import ToDoFrom from "./components/ToDoFrom";
import Modal from "./components/Modal";


export default function toDoList(){
     
    const toDoList = [...dataItem, ...appendItem]
    const [Tasks, setTasks] = useState(toDoList);
    const [numOfTask, setNoft] = useState(Tasks.length);
    const [status, setStatus] = useState(null);
    const [open, setOpen] = useState(false);

    const filteredTasks = 
     status == null ? Tasks
     : Tasks.filter(
        (item) => item.status == status
     );

    let name = "Thanakron Laingprom";
    const major = "เทคโนโลยีสารสนเทศ (Information Techonology)";
    let classYear = 2;
    let classSec = "ทส.ท.";
    let active = true;


    const isActive = (act: boolean) => {
    if (act)
    return <span style={{ color: "green"}}>กำลังศึกษาอยู่</span>;
    return <span style={{ color: "rad"}}>ไม่ได้เป็นนักศึกษาแล้วนะ</span>;
  }
 const addTask = (tietle, status) => {
    const newTask ={
        id: Tasks.length+1,
        title: tietle,
        desc: "รายละเอียดของงานที่เพิ่ม",
        date_added: "13/08/2569",
        author: "Thanakron",
        status: status

    };
    
    setTasks([...Tasks, newTask]);
    setNoft (Tasks.length+1);
 }
  
    console.log(`Name: ${name} `);
    console.log(`Major: ${major} `); 


    const onEdit = (t) => {
        alert(`งานที่คุณต้องการแก้ไข ${t}`);
    }
    const onDelete = (id) => {
        alert(`คุณต้องการข้อมูล รหัสงาน ${id}?`)
    }
    
    
    
    const tmp = filteredTasks.map((item,index) => {
    const {id, title, desc, author, date_added, status} = item;
    const [selectedTask, setSelectedTask] = useState(null);
    
    return (<div className="mx-25  w-full max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow-md text-black" key={id}>
      หัวข้อ {title}
      คำอธิบาย {desc}
      วันที่ {date_added}
      ผู้เขียน {author}
      สถานะ {isActive(status)}
      
    <div className="flex gap-2 mt-2">
   
    <Modal 
    open={Boolean(selectedTask)} 
     onClose={() => setSelectedTask(null)}>
     {selectedTask && (
    <div className="p-4 flex flex-col gap-2 text-black">
      <p><strong>หัวข้อ:</strong> {selectedTask.title}</p>
      <p><strong>คำอธิบาย:</strong> {selectedTask.desc}</p>
      <p><strong>วันที่:</strong> {selectedTask.date_added}</p>
      <p><strong>ผู้เขียน:</strong> {selectedTask.author}</p>
      <p><strong>สถานะ:</strong> {isActive(selectedTask.status)}</p>
    </div>
    )}
    </Modal>
    {/* View */}
    <button 
    onClick={() => setSelectedTask(item)} 
    className="bg-emerald-500 text-white px-3 py-1 rounded">
    View
    </button>

    {/* Edit */}
    <button onClick={(e) => onEdit(item)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>

    {/* Delete */}
    <button onClick={(e) => onDelete(id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
    </div>
    </div>);
     
    
});
 return (
        <>
        <Header/>
     <main className=" bg-[#63b3ed] flex items-center justify-center px-4 py-10 h-screen  ">
    <div className="w-full max-w-md rounded-[28px]  overflow-hidden shadow-[0_35px_60px_-15px_rgba(15,23,42,0.35)] bg-white transition-shadow duration-300 hover:shadow-[0_40px_80px_-20px_rgba(15,23,42,0.4)]">
        <div className="p-6 border border-gray-200 rounded-[28px]">
            <div className="mb-4">
                <p className="text-sm text-gray-600 flex items-center mb-2 font-medium">
                    TO DO LIST 007
                    
                </p>
                <div className="text-gray-900 font-bold text-xl space-y-1 ">
                    <p>ชื่อ: {name}</p>
                    <p>สาขา: {major}</p>
                    <p>ชั้นปี: {classYear}</p>
                    <p>สถานะ: {isActive(active)}</p>

                </div>
                 </div>
                <ToDoFrom addTask={addTask}/>

            <div className="text-black bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">งานที่ต้องทำ{numOfTask} x รายการ{}</div>
        <div>
            <button className="text-black bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={addTask}>เพิ่มงาน</button>
        </div>
        <div>
            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5" onClick={() => setStatus(null)}> [A]All</button>
            <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-full" onClick={() => setStatus(true)}> [C]Completed</button>
            <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-full" onClick={() => setStatus(false)}>[P]Pending</button>
        </div>
        </div>
    </div>
        <div className="space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tmp}
        </div>
      </main>
    <div>
   
    </div>
    <Footer />
    </>
  );

}