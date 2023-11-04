import { LeftNav } from "@/svg/LeftNav"
import { Box, IconButton, Link, Typography, makeStyles } from "@mui/material"
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useRef } from "react"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import Carousel from 'react-material-ui-carousel'
// import { Carousel } from "@material-tailwind/react";
import { Paper, Button } from '@mui/material'
import WishFullCard from "./wish-modal-card"
import { CardPattern, getStyle } from "@/models/card-pattern"
import { WishEntry } from "@/models/wish-entry"
import { DateTime } from "luxon"


// const oldStandard = Old_Standard_TT({ weight : '400', subsets : ['latin'] })
// const alegreya = Alegreya_Sans_SC({ weight : '400', subsets : ['latin'] })
// const mali = Mali({ weight : '400', subsets : ['latin'] })
export type Dimension = {
    width: number,
    height: number
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function Banner({dimensions}: {dimensions: Dimension}) {
    const banners = [
        {
          id: "dee279c3-351e-46a2-b20b-77315dcfade0",
          name: "baku-voice-pack",
          url: "https://shop.realic.net/products/2023-bakus-birthday-voice-pack",
          imgURL: "/img/banner/20230809140056-8f8f5e75-3f69-4daf-9894-16205c7efd5c.png",
          order: 1
        },
        {
          id: "aa5dfb0e-64e3-4c28-8d85-a66672d5dcc1",
          name: "baku-live",
          url: "https://www.youtube.com/watch?v=HLhFqdDP2Dc",
          imgURL: "/img/banner/20230808184450-17682c2b-8c3e-4111-a047-0beb7fc945d4.jpeg",
          order: 2
        },
        // {
        //   id: "dee279c3-351e-46a2-b20b-77315dcfade0",
        //   name: "#กินไก่กินฝัน",
        //   url: "https://twitter.com/search?q=%23%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%81%E0%B9%88%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B8%9D%E0%B8%B1%E0%B8%99",
        //   imgURL: "/img/banner/20230807150850-18a3b265-5351-40e0-a0df-992d3bd6d0b8.png",
        //   order: 3
        // },
        {
          id: "b9e5882d-67b5-4a05-bbaa-3a71557b4077",
          name: "follow-baku",
          url: "https://www.youtube.com/@Baku_ARP",
          imgURL: "/img/banner/20230726021134-165d3268-14f1-4791-9d2e-f172ecc0de45.jpeg",
          order: 4
        },
        {
          id: "e1a8437e-5eff-4f76-b0d4-4f40d274f199",
          name: "HBD",
          url: null,
          imgURL: "/img/banner/20230728134429-593e3436-1fb4-44df-bb59-6050a28af6d5.png",
          order: 5
        },
        {
          id: "aa90961a-cfb0-422c-b7ea-50474a71235e",
          name: "cafe-project",
          url: "https://twitter.com/Dreamerism89/status/1678434817464213504",
          imgURL: "/img/banner/20230726021035-26ce881e-3bf5-4f37-91d1-b87fb94cd8ba.jpeg",
          order: 6
        },
        {
          id: "5fae0719-5365-4baa-bc3e-4a8cbe5cb7e4",
          name: "menu",
          url: "https://twitter.com/Dreamerism89/status/1682369217700708353",
          imgURL: "/img/banner/20230726021102-06402db1-af7f-402e-8cc1-011f7123d012.jpeg",
          order: 7
        }
      ]

      const swiperRef = useRef<SwiperClass | null>(null);

      var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World! Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!Probably the most random thing you have ever seen!"
        }
    ]

    const style = getStyle(CardPattern.bikini)

    return (


      <div 
      // className={`rounded-none justify-self-center flex-col relative overflow-hidden flex h-full w-full max-w-[1400px] min-[425px] text-black/50 bg-[${style.backgroundColor}] border-[20px] border-[${style.borderColor}]`}
      >
        <Carousel autoPlay={false} animation="slide"  indicators={false} className="w-full h-full"
        >
            {
                items.map( (item, i) => <WishFullCard key={"edfewdsdf"} data={
                  new WishEntry(
                  {  
                    id: "hyuguygugyyug",
                    senderName: "sdsadsadsa",
                    message: "dsdasdsadsadsa",
                    pattern: CardPattern.bikini,
                    createdDate: DateTime.now()
                  })
                }/> )
            }
        </Carousel>
  </div>
    )
    // return (

        
         
    //       <div className='min-[1901px]:w-full sm:w-[1900px] w-full relative'>  
    //       {/* แบนเนอร์หลัก */}
    //       {/*<img className='absolute min-w-[1046px] top-0 left-[50% -translate-x-[50%]] -z-[2]' src='/img/WebHBDBaku.png'/>*/}
    //       <IconButton disableRipple className='hover:bg-transparent absolute z-[2] text-white top-[50%] lg:right-[calc(50%-450px)] sm:right-[calc(50%-280px)] min-[425px]:right-[20px] right-[0px] p-0 -translate-y-[50%] translate-x-[50%] w-[100px] h-[100px]' onClick={() => swiperRef.current?.slideNext()}>
    //         <div className='p-0 w-full h-full flex items-center justify-start'>
    //           <LeftNav className='md:w-16 md:h-16 min-[425px]:w-12 w-10 min-[425px]:h-12 h-10 z-[1] rotate-180'/>
    //         </div>
    //       </IconButton>
    //       <IconButton disableRipple className=' hover:bg-transparent absolute z-[2] text-white top-[50%] lg:left-[calc(50%-450px)] sm:left-[calc(50%-280px)] min-[425px]:left-[20px] left-[0px] p-0 -translate-y-[50%] -translate-x-[50%] w-[100px] h-[100px]' onClick={() => swiperRef.current?.slidePrev()}>
    //         <div className='p-0 w-full h-full flex items-center justify-end'>
    //           <LeftNav className='md:w-16 md:h-16 min-[425px]:w-12 w-10 min-[425px]:h-12 h-10 z-[1]'/>
    //         </div>
    //       </IconButton>
    //       <Swiper onSwiper={(swiper:SwiperClass) => { swiperRef.current = swiper }} slidesPerView={ dimensions.width >= 640 ? 3 : 1 } spaceBetween={0} centeredSlides={true}>
    //         {banners.map( banner => <SwiperSlide key={banner.id} className='aspect-video '>
    //           {({ isActive, isPrev, isNext }) => (
    //             <div>
    //               { banner.url && <Link className={`${isActive ? '' : 'brightness-50'} ${(isPrev || isNext || isActive) ? 'opacity-100' : 'opacity-0'} transition`} href={banner.url} target='_blank'>
    //                 <img src={banner.imgURL} className={`transition ease-linear sm:rounded-[50px] w-full object-cover aspect-video ${(isActive)? '' : 'scale-75'}`}/>
    //               </Link>}
    //               { !banner.url && <div className={`${isActive ? '' : 'brightness-50'} ${(isPrev || isNext || isActive) ? 'opacity-100' : 'opacity-0'} transition`}>
    //                 <img src={banner.imgURL} className={`transition ease-linear sm:rounded-[50px] w-full object-cover aspect-video ${(isActive)? '' : 'scale-75'}`}/>
    //               </div>}
    //             </div>
    //           )} 
    //         </SwiperSlide> )}
    //       </Swiper>
    //     </div>
    // )
}

function Item(props: { item: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined } })
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}