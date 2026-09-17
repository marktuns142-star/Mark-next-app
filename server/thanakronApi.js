import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
const port = 2549;

//Oject Arry
app.use((cors));
app.use((bodyParser.json));


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
