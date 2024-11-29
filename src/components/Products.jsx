import React, { useState } from 'react'
import Product from './Product';
import { motion } from 'motion/react';

function Products() {

    var products = [
        {
            title: "arqitel",
            description: "Arqu Executive is and its employee continue  to receive orders for customers and customers that get orders for customers that",
            live:true, 
            case:true
        },
        {
            title: "Cula",
            description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live:true, 
            case:true
        },
        {
            title: "Layout Land",
            description: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
            live:true, 
            case:true
        },
        {
            title: "TTR",
            description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live:true, 
            case:true
        },
        {
            title: "YIR 2024",
            description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
            live:true, 
            case:false
        },
        {
            title: "Yahoo!",
            description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            live:true, 
            case:true
        },
        {
            title: "Rainfall",
            description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live:true, 
            case:true
        },
    ];
 
    const [pos, setPos] = useState();
    const mover = (val)=>{
      setPos(val*23);
    }

  return (
    <div className=' bg-zinc-900 mt-20 relative'>
        {products.map((val, index) => (
            <Product key={index} val={val} mover={mover} count={index}/>
        ))}
        <div className='absolute top-10 w-full h-full pointer-events-none'>
            <motion.div
             initial={{y: pos, x: "-50%"}}
             animate={{y: pos+`rem`}}
             transition={{ease: [0.76,0,0.24,1], duration: 0.3}}
              className='hover:bg-blue-200 window absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden'>
                <video autoPlay muted loop src="https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm"></video>
              <motion.div
                     animate={{y: -pos+`rem`}}
                     transition={{ease: [0.76,0,0.24,1], duration: .3}}
                     className='w-full h-full bg-sky-100'>
                <video autoPlay muted loop src="https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4">
            </video></motion.div>
              <motion.div 
                   animate={{y: -pos+`rem`}}
                   transition={{ease: [0.76,0,0.24,1], duration: .3}}
                   className='w-full h-full bg-sky-300'>
                    <video autoPlay muted loop src="https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4"></video>
            </motion.div>

              <motion.div 
                   animate={{y: -pos+`rem`}}
                   transition={{ease: [0.76,0,0.24,1], duration: .3}}
                   className='w-full h-full bg-sky-400'>
                     <video autoPlay muted loop src="https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm"></video>
                   </motion.div>

              <motion.div 
                   animate={{y: -pos+`rem`}}
                   transition={{ease: [0.76,0,0.24,1], duration: .3}}
                   className='w-full h-full bg-sky-500'>
                 <video autoPlay muted loop src="https://cdn.refokus.com/website/Maniv-Compressed.mp4"></video>
              </motion.div>

              <motion.div 
                   animate={{y: -pos+`rem`}}
                   transition={{ease: [0.76,0,0.24,1], duration: .3}}
                   className='w-full h-full bg-sky-600'>
                 <video autoPlay muted loop src="https://cdn.refokus.com/website/YIR%20website%202022%204_3_VP9.webm"></video>
              </motion.div>

              <motion.div 
                   animate={{y: -pos+`rem`}}
                   transition={{ease: [0.76,0,0.24,1], duration: .3}}
                   className='w-full h-full bg-sky-700'>
                     <video autoPlay muted loop src="https://cdn.refokus.com/website/2022/videos/yahoo.webm"></video>
                   </motion.div>

              <motion.div 
                   animate={{y: -pos+`rem`}}
                   transition={{ease: [0.76,0,0.24,1], duration: .3}}
                   className='w-full h-full bg-sky-800'>
                     <video autoPlay muted loop src="https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm"></video>
                   </motion.div>

            </motion.div>
        </div>
    </div>
  );
}

export default Products
