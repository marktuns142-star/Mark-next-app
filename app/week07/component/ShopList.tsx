"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UserProfile from "./UserProfile";
import LoginButton from "./Login";
import LogoutButton from "./Logout";

export default function ShopList({ data }) {
    
    let storedUser="";
    if (typeof window !== 'undefined'){
        storedUser = localStorage.getItem("user");
    }
    
    const [keyword, setKeyword] = useState("");
    const router = useRouter();

    // กรองข้อมูลร้านค้าจากคำค้นหา
    const filterShops = data.filter((item) => {
        const searchTxt = keyword.toLowerCase();
        return item.shopName.toLowerCase().includes(searchTxt);
    });

    // ฟังก์ชันลบร้านค้า
    const handleDelete = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this shop?");
        if (!confirmed) return;

        try {
            const response = await fetch(`http://localhost:2549/api/shops/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Failed to delete Shop");
            }
            // Refresh page
            router.refresh();
        } catch (error) {
            alert(error.message);
        }
    };

    // ฟังก์ชันเช็คสถานะ
    const isActive = (act) => {
        if (act) return <span style={{ color: "green" }}>Open</span>;
        return <span style={{ color: "red" }}>Close</span>;
    };

    return (
        <div className="max-w-3xl ma-auto p-6">
            {/* ส่วนหัว: แสดงข้อมูลผู้ใช้และปุ่ม Login / Logout */}
            <div className="flex justify-between items-center mb-6 p-4 border rounded-lg bg-gray-50">
                <UserProfile />
                
                    {storedUser ? <LogoutButton /> : <LoginButton />}
                
            </div>

            {/* ส่วนค้นหา */}
            <div className="mb-6">
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Search shop..."
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* แสดงจำนวนที่ค้นพบ */}
            <div className="mb-4 text-gray-600">
                Found {filterShops.length} shop(s)
            </div>

            {/* ปุ่มเพิ่มร้านค้า */}
            <div className="flex justify-between items-center mb-4">
                <Link
                    href="/week07/new"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                    + Add New
                </Link>
            </div>

            {/* รายการร้านค้า */}
            <div className="space-y-4">
                {filterShops.map((shop) => (
                    <div key={shop.shopId || shop.id} className="border rounded-lg p-4">
                        <h2 className="font-semibold">{shop.shopName}</h2>
                        <p>Open Status: {isActive(shop.shopStatus)}</p>
                        
                        {/* ปุ่มจัดการร้านค้า */}
                        <div className="mt-3 space-x-2">
                            <Link
                                href={`/week07/${shop.id}`}
                                className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                View Detail
                            </Link>
                            <Link
                                href={`/week07/${shop.id}/edit`}
                                className="inline-block bg-yellow-500 text-white px-3 py-2 rounded-lg"
                            >
                                Update
                            </Link>
                            <button
                                onClick={() => handleDelete(shop.id)}
                                className="inline-block bg-red-500 text-white px-3 py-2 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}