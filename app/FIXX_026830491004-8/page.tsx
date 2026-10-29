"use client";
import Header from "./components01/header01";
import Footer from "./components01/footer01";
import { useState } from "react";
import { myPets } from "./data01/myPets";
import ToDoFrom from "./components007/ToDoFrom01";

export default function HerbHome() {

    const DataItem = [...myPets];

    const [tasks, setTasks] = useState(DataItem);
    const [numOFTasks, setNoft] = useState(tasks.length);
    const [status, setStatus] = useState(null);
    const [open, setOpen] = useState(false);
    const [selected, setSelectedTask] = useState(null);
    const [editingtask, setEditingTask] = useState(null);

    const reseteditingTask = () => setEditingTask(null);

    const filteredTasks =
        status == null
            ? tasks
            : tasks.filter((item) => item.status == status);

    let name = "Thanakron Laingprom";
    const major = "เทคโนโลยีสารสนเทศ (Information Techonology)";
    let classYear = 2;
    let classSec = "ทส.ท.";
    let active = true;
    let className = "026830491004-8"

    const Statusfriut = (act: boolean) => {
        if (act)
            return (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
                    มีน้องหมาในร้าน
                </span>
            );

        return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800 border border-rose-200">
                ไม่มีน้องหมาในร้าน
            </span>
        );
    }

    const isActive = (act: boolean) => {
        if (act)
            return (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
                    กำลังศึกษาอยู่
                </span>
            );

        return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800 border border-rose-200">
                ไม่ได้เป็นนักศึกษาแล้วนะ
            </span>
        );
    }

    // แก้ให้รับข้อมูลครบตามที่ฟอร์มส่งมา
    const addTask = (name, status, detail, supplier) => {
        const newTask = {
            id: tasks.length + 1,
            name: name,
            type: status,
            supplier: supplier,
            detail: detail,
            status: true
        };

        setTasks([...tasks, newTask]);
        setNoft(tasks.length + 1);
    }

    console.log(`Name: ${name} `);
    console.log(`Major: ${major} `);

    const onEdit = (t) => {
        setEditingTask(t);
    }

    const updateTask = (id, title, status) => {
        setTasks(
            Tasks => Tasks.map(
                t => t.id === id ?
                    {
                        ...t,
                        title: title,
                        status: status
                    } : t
            )
        );

        setEditingTask(null);
    }

    const onDelete = (id) => {
        const updateTasks = tasks.filter(
            item => item.id != id
        );

        setTasks(updateTasks);
    }


    const tmp = filteredTasks.map((item, index) => {

        const {
            id,
            name,
            type,
            supplier,
            detail,
            status
        } = item;

        return (
            <div
                className="w-full bg-white/90 backdrop-blur-md border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
                key={id}
            >

                <div className="space-y-3">

                    <div className="flex justify-between items-start gap-2 border-b border-slate-100 pb-3">

                        <h3 className="font-bold text-slate-800 text-lg leading-snug">
                            {name}
                        </h3>

                        {Statusfriut(status)}

                    </div>


                    <div className="text-sm space-y-1.5 text-slate-600">

                        <p className="flex justify-between">
                            <span className="font-medium text-slate-400">
                                หมาพันธุ์:
                            </span>

                            <span className="font-medium text-slate-700">
                                {supplier}
                            </span>
                        </p>


                        <div className="mt-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">

                            <p className="text-slate-400 text-xs font-medium mb-0.5">
                                วันเกิด:
                            </p>

                            <p className="text-slate-600 text-xs leading-relaxed">
                                {detail}
                            </p>

                        </div>

                    </div>

                </div>


                <div className="flex justify-end mt-4 pt-3 border-t border-slate-100">

                    <button
                        onClick={(e) => onDelete(id)}
                        className="w-full bg-rose-50 hover:bg-rose-500 text-rose-600 hover:text-white font-medium px-4 py-2 rounded-xl transition-all duration-200 text-sm shadow-xs active:scale-95 flex items-center justify-center gap-1"
                    >
                        Delete
                    </button>

                </div>

            </div>
        );

    });


    return (
        <>
            <Header />

            <main className="bg-gradient-to-br from-sky-100 via-sky-50 to-blue-100 min-h-screen px-4 py-12">

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">

                    {/* Form Section */}
                    <div className="w-full lg:w-96 shrink-0 lg:sticky lg:top-8">

                        <div className="bg-white/80 backdrop-blur-md border border-white/60 rounded-3xl p-6 shadow-xl shadow-slate-200/50">

                            <div className="mb-5 border-b border-slate-100 pb-4">

                                <span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-2.5 py-1 rounded-md mb-2">
                                    ประวัติข้อมูลส่วนตัว
                                </span>

                                <div className="text-slate-800 space-y-1.5 text-sm font-medium">

                                    <p className="text-lg font-bold text-slate-900">
                                        {name}
                                    </p>

                                    <p className="text-slate-500 text-xs">
                                        {major}
                                    </p>

                                    <div className="flex items-center justify-between pt-1 text-xs text-slate-600">

                                        <span>
                                            ชั้นปีที่ {classYear} ({classSec})
                                        </span>

                                        {isActive(active)}

                                    </div>

                                </div>

                            </div>


                            <ToDoFrom
                                addTask={addTask}
                                editingTask={editingtask}
                                updateTask={updateTask}
                                resetEditingTask={reseteditingTask}
                            />

                        </div>

                    </div>


                    {/* Cards List Section */}
                    <div className="w-full flex-1">
<br></br>
                        {/* หัวข้อรายการสมุนไพร */}
                        <div className="w-full flex justify-center mb-5">

                            <div className="px-8 py-3 bg-white/80 backdrop-blur-md border border-sky-200 rounded-xl shadow-sm">

                                <h3 className="text-lg font-bold text-slate-700 text-center">
                                    รายการน้องหมาที่มีอยู่  
                                </h3>

                            </div>

                        </div>


                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                            {tmp}

                        </div>

                    </div>

                </div>

            </main>


            <div>
            </div>


            <Footer />

        </>
    );

}