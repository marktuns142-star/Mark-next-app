import { Suspense } from "react";
import { shops } from "./component/shopItem";
import Loading from "./component/Loading";
import ShopList from "./component/ShopList";


export default async function ShopPage () {
        
      let  shops = {};
      try { 
          const resData = await fetch(`http://localhost:2549/shops/`);
          
          if(!resData.ok){
            throw new Error(`Network response was not ok`);
          }
          shops = await resData.json();
          console.log(shops);

      }catch(error){
          console.log(`Error fetching data: ${error}`);
      } 

    return (
        <div className="max-w-3xl- mx-auto mt-6">

            <h1 className="text-3xl font-bold">
                 shop List
            </h1>

            <Suspense fallback= {<Loading />}>
                <ShopList data={shops} />
            </Suspense>

        </div>
    ); 
};