import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './config/firebase.js';


const app = express();
const port = 2549;

//Oject Arry
app.use(cors());
app.use(bodyParser.json());


const myShops = [
    {
    shopId: 100,
    shopName: "Adidas",
    shopType: "Fashion",
    shopLoc: { lat: 100 , lon: 150 },
    shopStatus: true
    },
    {
     shopId: 200,
    shopName: "Bata",
    shopType: "Shoes",
    shopLoc: { lat: 180 , lon: 190 },
    shopStatus: true
    },
    {
    shopId: 300,
    shopName: "Nike",
    shopType: "Clothes",
    shopLoc: { lat: 130 , lon: 290 },
    shopStatus: true
    }
];

// http: //localhost:2549/
app.get('/', (req, res) => {
    res.send('<h1>Web Programming in 2/2569.</h1>');
}); 

// GET: http://localhost:2549/api/shops/
app.get('/api/shops', async(req, res) => { 
 try {
    const snapshot = await db
    .collection("shops_10048")
    .orderBy("shopName", "desc")
    .get();

    const shops =  snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    }));

    res.json(shops);

 } catch (error) {
    res.statusCode(500).json(
        {
            message: "FAILED: การอ่านข้อมูล shops มีปัญหากรุณาตรวจสอบ",
            error: error.message
        }
    );
 }
});


// Route สำหรับการ Read ข้อมูลจากฐานข้อมูลด้วย id
// GET : http://localhos:2549/api/shops/1
app.get('/api/shops/:id', async (req, res) => { 
try {
      const doc = await db
          .collection("shops_10048")
          .doc(req.params.id)
          .get();

      res.json(
        {
          id: doc.id,
          ...doc.data()
        }
      );
    } catch (error) {
      res.status(500).json(
        {
          message: "FAILED: การอ่านข้อมูล shops ด้วยรหัสร้านค้า (shopId) มีปัญหา กรุณาตรวจสอบ",
          error: error.message
        }
      );
    }});


app.get('/shops{/:shopId}', (req, res) => {
   const {shopId} = req.params;
   res.set('Content-type', 'application/json');
   
   if(isNaN(shopId)) {
        res.send(myShops);
   }else{
    const shopItem = myShops.filter(
        shop =>  {return  shop.shopId === Number(shopId)}
    );
    res.send(shopItem[0]);
   }
    //res.set('Content-type', 'application/json');
 /*  const ShopItems = myShops.map(
        shop => {
            `
            <b> Shop ID: ${myShops.shopId}
            <br/><b>Shop Name:${myShops.shopName}
            <br/><b>Shop Type:${myShops.shopType}
            <br/><b>Shop loc::${myShops.shopLoc.lat}, Lon = ${myShops.shopLoc.lon}
            <br/><b>Shop Status:${myShops.shopStatus}
           
            `
         });
 */      
   
    let myText ='';
    myText+= '<h1>Shop infromation:<h1/><hr/>';
    myText+= `<b> Shop ID: ${myShops.shopId}`;
    myText+= `<br/><b>Shop Name:${myShops.shopName}`;
    myText+= `<br/><b>Shop Type:${myShops.shopType}`;
    myText+= `<br/><b>Shop loc::${myShops.shopLoc.lat}, Lon = ${myShops.shopLoc.lon}`;
    myText+= `<br/><b>Shop Status:${myShops.shopStatus}`;
    
    res.set('Content-type', 'text/html');
    res.send(myText);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}...`)

});
