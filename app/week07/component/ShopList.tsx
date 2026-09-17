"use client";

import { useState } from "react";
import Link from "next/link";
import { shops } from "./shopItem";

export default function ShopList({ data }) {
    const [keyword, setKeyword] = useState("");
     
    //alert (data)
    const filterShops = data.filter(
        (item) => {
            const searchTxt = keyword.toLowerCase();
            return item.shopName.toLowerCase().includes(searchTxt)

        }
    );

    const isActive = (act: boolean) => {
    if (act)
    return <span style={{ color: "green"}}>Open</span>;
    
    return <span style={{ color: "red"}}>Close</span>;
    };
    return (
        <div className="max-w-3xl ma-auto p-6">
        
         {/* Search */}
         <div className="mb-6">

            <input
            type="text"
            value={keyword}
            onChange={(e) =>
                setKeyword(e.target.value)
            }
            placeholder="Search shop..."
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

        </div>
            <div className="mb-4 text-gray-600">
                 Found {data.length} shop(s)
            </div>
            
            <div className="space-y-4 ">
                {
                    filterShops.map(shop => (
                        <div key={shop.shopId} className="border rounded-lg p-4" >
                          
                            <h2 className="found-semibold">
                            {shop.shopName}
                            </h2>
                            <p>Open Status: 
                                {isActive(shop.shopStatus)}</p>
                            <Link href={`/week07/${shop.shopId}`} className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded">
                            View Datail
                            </Link>
                            
                        </div>
                    ))
                }

            </div>

        </div>
    ); 
    
};