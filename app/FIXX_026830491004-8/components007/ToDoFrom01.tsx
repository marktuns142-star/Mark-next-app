"use client"

import { useState, useEffect } from "react"

export default function ToDoFrom({ addTask, editingTask, updateTask, resetEditingTask }) {

    const [name, setname] = useState('');
    const [det, setdet] = useState('');
    const [sup, setsup] = useState('');
    const [taskStatus, setTaskStatus] = useState('');

    useEffect(() => {

        if (editingTask) {
            const { name, status, det, sup } = editingTask;
            setname(name)
            setdet(det)
            setsup(sup)
            setTaskStatus(status)

        } else {
            setname('');
            setdet('')
            setsup('')
            setTaskStatus('');

        }
    }, [editingTask]);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim()) return;
        if (editingTask) {
            updateTask(editingTask.id, name, taskStatus, det, sup);
        } else {
            addTask(name, taskStatus, det, sup);
        }
        handleCancel;
    }

    const handleCancel = (e) => {
        setname('');
        setdet('')
        setsup('')
        setTaskStatus('');
        resetEditingTask();
    }

    return (
        <form onSubmit={handleSubmit}>

            {/* ฟอร์มเพิ่มข้อมูล */}
            <div className="m-3 p-6 bg-white rounded-xl shadow-md">

                <h3 className="text-lg font-semibold text-gray-900 mb-5">
                    เพิ่มข้อมูลสัตว์เลี้ยง
                </h3>

                {/* ชื่อสมุนไพร */}
                <div className="flex items-center">
                    <label className="text-sm font-medium text-slate-700 shrink-0">
                        ชื่อน้องหมา:
                    </label>

                    <input
                        type="text"
                        placeholder="Enter task..."
                        className="w-full ms-4 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-content focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                </div>

                <div className="mt-5">

                    {/* รายละเอียด */}
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                        วันเกิด:
                    </label>

                    <input
                        type="text"
                        placeholder="Enter detail..."
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-content focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        value={det}
                        onChange={(e) => setdet(e.target.value)}
                    />

                </div>

                <div className="mt-5">

                    {/* ผู้ผลิต */}
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                        หมาพันธุ์อ่าไร:
                    </label>

                    <input
                        type="text"
                        placeholder="Enter suppiler..."
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-content focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        value={sup}
                        onChange={(e) => setsup(e.target.value)}
                    />

                </div>
                {/* ปุ่ม */}
                <div className="flex mt-5 gap-2 justify-center">

                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-sm transition"
                    >
                        {editingTask ? 'update task' : 'เพิ่มข้อมูลสัตว์'}
                    </button>

                    <button
                        className="bg-slate-600 hover:bg-slate-700 text-white px-5 py-2 rounded-lg shadow-sm transition"
                        onClick={handleCancel}
                    >
                        เคลียร์
                    </button>

                </div>

            </div>


           

        </form>
    );
}