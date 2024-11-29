import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "motion/react"

function Work() {


   const [images, setImages] = useState(
      [
         {url: "https://cdn.prod.website-files.com/62df9251ae9124976626bcc8/62ebbe78f5b5cf388bac8281_CMS%20Load%20More%20385px-p-800.png",
            top: "50%",
            left: "50%",
            isActive: true
         },
   
         {url: "https://cdn.prod.website-files.com/62df9251ae9124d9d726bcb9/6310b49a50601adc5fc662a6_Sequence%2001194%201-p-500.png",
            top: "56%",
            left: "44%",
            isActive: false
        },
   
         {url: "https://cdn.prod.website-files.com/62df9251ae9124976626bcc8/63218e6fb8128813ad9df905_62ea98750d0985e0f9e1f889_Image-Magnifier-p-800.png",
          top: "45%",
          left: "56%",
          isActive: true
       },
   
         {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8c8de92be5a9bdae6f1_Layout%20Land%20-%2016%209%20(A)-p-500.webp",
            top: "60%",
            left: "53%",
            isActive: false
         },
   
         {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8b035ffab0e6b77c5f5_Maniv%20-%2016%209%20(A)-p-500.webp", 
           top:"43%",
           left: "40%",
           isActive: true
         },
   
         {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d669e8dd55fff91862e4_Weglot%20Like%20Magic%20-%2016%209%20(A).webp",
         top: "65%" ,
         left: "55%",
         isActive: false
        },
   
        {url: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/bcgp-169.webm",
           top: "58%" ,
           left: "49%",
           isActive: true
          },
     ])

   const {scrollYProgress} = useScroll();

   scrollYProgress.on("change", (data) => {
      function imagesShow(arr){
          setImages((prev) =>
            prev.map((item, index) => 
               arr.indexOf(index) === -1 
               ? {...item, isActive: false}
               : {...item, isActive:true}
            )
          );
      }


      switch(Math.floor(data*100)){
         case 0:
            imagesShow([]);
            break;
         case 1:
            imagesShow([0]);
            break;
         case 2:
            imagesShow([0,1]);
            break;
         case 3:
            imagesShow([0,1,2]);
            break;
         case 4:
            imagesShow([0,1,2,3]);
            break;

         case 6:
            imagesShow([0,1,2,3,4]);
            break;
         case 8:
            imagesShow([0,1,2,3,4,5]);
            break;
      }
   })

  return (
    <div className='-mt-28 ml-20 w-full'>
        <div className='mt-[5] ml-6 relative max-w-screen-xl mx-auto text-center'>
           <h1 className='text-[40vw] leading-none font-medium select-none tracking-tight'>work</h1>
           <div className='absolute top-0 w-full h-full'>
               {images.map((elem, index) => (
                  elem.isActive && (
                   <img key={index}
                   className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]' 
                   src={elem.url}
                    style={{top: elem.top, left: elem.left}}
                    alt="" />
               ))
                
               )}
           </div>
        </div>
    </div>
  )
}

export default Work
