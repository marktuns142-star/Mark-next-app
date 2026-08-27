import { Suspense } from "react";
import { shops } from "./component/shopItem";
import Loading from "./component/Loading";
import ShopList from "./component/ShopList";

export default function ShopPage () {

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