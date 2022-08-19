import  img1 from "../assets/Pictures/lemon-pie.jpg";
import img2 from "../assets/Pictures/imperial-ruso.jpg";
import img3 from "../assets/Pictures/matilda.jpg";
 import img4 from "../assets/Pictures/torta-clasica.jpg";
export const products = [
    {
        id:1,
        Image: img1,
        product: "Tarta Lemon Pie",
        category:"tarta",
        description:"Masa sablee con relleno de curd de limon",
        price:2000,
        stock:5,
        initial:1,
        config:{
            size:['small','medium','big'],
       }
    },
    {
        id:2,
        Image:img2,
        product: "Torta Imperial",
        category:"torta",
        description:"Bizcochuelo de vainilla, relleno con dulce de leche, merenguitos y crema chantilly",
        price:3200,
        stock:5,
        initial:1,
        config:{
            size:['small','medium','big'],
       }

    },
    {
        id:3,
        Image:img3,
        product: "Torta Matilda",
        category:"torta",
        description:"Bizcochuelo de chocolate, relleno con dulce de leche, mousse de chocolate",
        price:4000,
        stock:5,
        initial:1,
        config:{
            size:['small','medium','big'],
       }

    },
    {
        id:4,
        Image:img4,
        product: "Torta Clasica ",
        category:"torta",
        description:"Bizcochuelo de vainilla, relleno con dulce de leche,  crema chantilly",
        price:3000,
        stock:5,
        initial:1,
        config:{
            size:['small','medium','big'],
       }
        
    }
]