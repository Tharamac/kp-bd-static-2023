import { Button, CircularProgress, Divider, Fade, Grow, IconButton, Modal } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { Alegreya_Sans_SC, Old_Standard_TT, Mali } from 'next/font/google'
import useSWR, { mutate } from 'swr';
import { DateTime } from 'luxon';
import InfiniteScroll from 'react-infinite-scroll-component';
import RefreshIcon from '@mui/icons-material/Refresh';
import Link from 'next/link';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Logo } from '@/svg/Logo';

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { LeftNav } from '@/svg/LeftNav';
import { BadgeBody } from '@/svg/badge/body';
import { CowSwissBottom } from '@/svg/badge/bottom/cowswiss';
import { CowSwissTop } from '@/svg/badge/top/cowswiss';
import { TapirTop } from '@/svg/badge/top/tapir';
import { TapirBottom } from '@/svg/badge/bottom/tapir';
import { BananaTop } from '@/svg/badge/top/banana';
import { BananaBottom } from '@/svg/badge/bottom/banana';
import { HamhamTop } from '@/svg/badge/top/hamham';
import { HamhamBottom } from '@/svg/badge/bottom/hamham';
import { HeartTop } from '@/svg/badge/top/heart';
import { HeartBottom } from '@/svg/badge/bottom/heart';
import Form from './form';
import { CardPattern, WishEntry, WishEntryDto } from '@/models/wish-entry';
import Banner from './banner';
import WishCardModal from './modal-carousel';
import { getStyle } from '@/models/card-pattern';
import WishCard from './wish-card';
import WishCardModalCarousel from './modal-carousel';
import Emoji from '@/component.tsx/emoji';
import Marquee from "react-fast-marquee";
//

const oldStandard = Old_Standard_TT({ weight : '400', subsets : ['latin'] })
const alegreya = Alegreya_Sans_SC({ weight : '400', subsets : ['latin'] })
const mali = Mali({ weight : '400', subsets : ['latin'] })


export default function Page() {
  //state variable with setState func
  const [lastSwap, setLastSwap] = useState<DateTime>(DateTime.now())
  const [now, setNow] = useState<DateTime>(DateTime.now())
  const [openEye, setOpenEye] = useState(true)
  const pageSize = 10
  const swapTime = 5
  const [open, setOpenModal] = useState(false) // open modal
  
  const [modalData, setModalData] = useState<WishEntry>() // show  modal data
  const [dataIndex, setModalDataIndex] = useState<number>(0) // show  modal data ind
  const [page, setPage] = useState(1)
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

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

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    // Update Every Second
    const interval = setInterval(() => {
      setNow(DateTime.now())
    }, 1000)

    window.addEventListener("resize", handleResize);
    handleResize()
    
    return () => {
      window.removeEventListener('resize', handleResize)
      if(interval){
        clearInterval(interval);
      }
    }
  },[])

  useEffect(()=>{
    setLastSwap(DateTime.now())
  }, [openEye])

  useEffect(()=>{
    if(lastSwap.diffNow(['seconds']).seconds < (swapTime*-1)){
      setOpenEye(!openEye)
    }
  }, [now])


  const swiperRef = useRef<SwiperClass | null>(null);


  const { data: wishData, error: wishPostError, isLoading: wishPostIsLoading, isValidating: wishPostIsValidating, mutate: postMutate } = useSWR('/data.json', async (url) => {
    console.log("load data")
    setPage(0)
    const res = await fetch(url)
    if(!res.ok){
        return {
            data : [],
            total : 0
        }
    }
    setPage(1)
    const result = await res.json() as { data: WishEntryDto[], total: number }
    const wishingList: WishEntry[] = result.data.map((wish, index) => WishEntry.fromDto(wish))
    const postResult = {
      data: wishingList as WishEntry[],
      total: result.total
    }
    return postResult
  },{
    revalidateOnMount : true,
    revalidateOnFocus : false
  })

  return (
    <div className='flex flex-col w-full items-center'>
      <div className={`flex flex-col min-h-screen w-full overflow-x-hidden z-[1] pt-6 pb-16 gap-4 text-[#000000] items-center`}>
        <div className='flex flex-col w-full items-center relative bg-[#F7C6AF]'>
          {/*แอนิเมชั่้นตาคุณบากุ*/}
          {/*
          <div className='hover:cursor-pointer' onClick={() => {setOpenEye(!openEye)}}>
            <div className={openEye ? '' : 'hidden'}>
              <img className='hover:cursor-pointer min-[260px]:w-[260px] w-full' src={'/img/baku_head.png'} alt={'baku-bd-chibi'}/>
            </div>
            <div className={openEye ? 'hidden' : ''}>
              <img className='hover:cursor-pointer min-[260px]:w-[260px] w-full' src={'/img/baku_head_open.png'} alt={'baku-bd-chibi'}/>
            </div>
          </div>
            {/* ตัวอักษร */}
          <img className='top-0 left-[50% -translate-x-[50%]] md:mt-5 mt-12 w-auto max-h-[400px]' src='/img/banner/banner-transparent.gif'/>
             </div> 
        <Marquee speed={160}>
           <div className='w-full h-fit flex flex-row gap-2 text-black top-0 z-[1] p-2 text-[60px] text-black justify-center items-center'><b>อวยพรคัมภีร์ได้ที่นี่ <Emoji symbol="👇🏻" ></Emoji><Emoji symbol="👇🏻" ></Emoji><Emoji symbol="👇🏻" ></Emoji></b></div>
        </Marquee>
       
       {/*   <div className='relative w-full sm:h-[150px] min-[500px]:h-[130px] min-[425px]:h-[100px] h-[80px]'>
             <Fade in={true} className='text-center absolute -translate-x-[50%] left-[50%] flex flex-col w-full h-fit'>
              <h1 className=''>
              
                <span className={`${mali.className} sm:text-[58px] min-[500px]:text-[48px] min-[425px]:text-[40px] text-[30px]`}>Happy 24th birthday, คัมภีร์!</span>
                <span className={`${mali.className} sm:text-3xl min-[500px]:text-2xl min-[425px]:text-xl text-base`}>November 29th, 2023</span>
              </h1>
            </Fade> 
          </div>*/}
       
  

      
        <div className='w-full'>
          <Form mutateFunction={postMutate}></Form>
        </div>

   {/* แบนเนอร์หลัก */}
         
  
        {/* <div className='min-[1901px]:w-full sm:w-[1900px] w-full relative'>
          <IconButton disableRipple className='hover:bg-transparent absolute z-[2] text-white top-[50%] lg:right-[calc(50%-450px)] sm:right-[calc(50%-280px)] min-[425px]:right-[20px] right-[0px] p-0 -translate-y-[50%] translate-x-[50%] w-[100px] h-[100px]' onClick={() => swiperRef.current?.slideNext()}>
            <div className='p-0 w-full h-full flex items-center justify-start'>
              <LeftNav className='md:w-16 md:h-16 min-[425px]:w-12 w-10 min-[425px]:h-12 h-10 z-[1] rotate-180'/>
            </div>
          </IconButton>
          <IconButton disableRipple className=' hover:bg-transparent absolute z-[2] text-white top-[50%] lg:left-[calc(50%-450px)] sm:left-[calc(50%-280px)] min-[425px]:left-[20px] left-[0px] p-0 -translate-y-[50%] -translate-x-[50%] w-[100px] h-[100px]' onClick={() => swiperRef.current?.slidePrev()}>
            <div className='p-0 w-full h-full flex items-center justify-end'>
              <LeftNav className='md:w-16 md:h-16 min-[425px]:w-12 w-10 min-[425px]:h-12 h-10 z-[1]'/>
            </div>
          </IconButton>
          <Swiper onSwiper={(swiper:SwiperClass) => { swiperRef.current = swiper }} slidesPerView={ dimensions.width >= 640 ? 3 : 1 } spaceBetween={0} centeredSlides={true}>
            {banners.map( banner => <SwiperSlide key={banner.id} className='aspect-video '>
              {({ isActive, isPrev, isNext }) => (
                <div>
                  { banner.url && <Link className={`${isActive ? '' : 'brightness-50'} ${(isPrev || isNext || isActive) ? 'opacity-100' : 'opacity-0'} transition`} href={banner.url} target='_blank'>
                    <img src={banner.imgURL} className={`transition ease-linear sm:rounded-[50px] w-full object-cover aspect-video ${(isActive)? '' : 'scale-75'}`}/>
                  </Link>}
                  { !banner.url && <div className={`${isActive ? '' : 'brightness-50'} ${(isPrev || isNext || isActive) ? 'opacity-100' : 'opacity-0'} transition`}>
                    <img src={banner.imgURL} className={`transition ease-linear sm:rounded-[50px] w-full object-cover aspect-video ${(isActive)? '' : 'scale-75'}`}/>
                  </div>}
                </div>
              )} 
            </SwiperSlide> )}
          </Swiper>
        </div> */}
        

      
        <WishCardModalCarousel data={wishData?.data[dataIndex]!} order={{
          current: dataIndex,
          total: wishData?.total as number
        }} onChangeIndex={
          (add) => {
            const length = wishData?.total as number
            const nextIndex = dataIndex + add
            if (nextIndex >= length)
              setModalDataIndex(0)
            else if (nextIndex < 0)
              setModalDataIndex(length - 1)
            else setModalDataIndex(nextIndex)
          }
        }

          open={open} handleClose={
            () => {
              setOpenModal(false)
            }
          } />

        {/* <Marquee speed={160}> */}
            <div className='w-full h-[100px] flex flex-row gap-2 text-black top-0 z-[1] m-2 text-[60px] text-black justify-center items-center font-semibold'>Kamอวยพรทั้งหมด <Emoji symbol="👇🏻" ></Emoji><Emoji symbol="👇🏻" ></Emoji><Emoji symbol="👇🏻" ></Emoji></div>
        {/* </Marquee> */}

        {!wishPostError && !wishPostIsLoading && <div className='w-full container '>
          <InfiniteScroll
            dataLength={pageSize*page < (wishData?.total as number) ? pageSize*page : (wishData?.total as number)} //This is important field to render the next data
            next={async () => {
              await new Promise(r => setTimeout(r, 1000));
              setPage(page+1)
            }}
            hasMore={pageSize*page < (wishData?.total as number)}
            loader={<div className="xl:col-span-3 md:col-span-2 h-fit p-8 flex justify-center">
                <CircularProgress />
            </div>}
            className="w-full grid xl:grid-cols-3 md:grid-cols-2 gap-4 px-4 min-[341px]:py-4 pt-4 pb-12 items-center h-full justify-center"
          >
            {wishData?.data.slice(0,pageSize*page).map((post, index) => (
              <Grow key={post.id} in timeout={1000}>
               <div className={`rounded-md justify-self-center flex-col relative overflow-hidden flex h-full w-full max-w-[425px] text-black/50`} >
                <WishCard data={post} onOpenModal={
                () => {
                  console.log(`checked ${index}`)
                  setModalDataIndex(index)
                  setOpenModal(true)
                }
              } /></div>
              </Grow>
            ))}
          </InfiniteScroll>
        </div>}
        { wishPostIsLoading && <div className="w-full h-fit p-8 flex justify-center">
          <CircularProgress className='' />
        </div>}
        { wishPostError && (!wishPostIsLoading || !wishPostIsValidating) && <div className="w-full h-fit p-8 flex flex-col items-center gap-2">
          เกิดความผิดพลาดในระบบ กรุณาลองใหม่
          <Button onClick={() => postMutate()} variant="outlined" className={`w-fit text-[22px] bg-[#E4CFFF] text-[#4E4670] rounded-[55px] ${alegreya.className} normal-case px-[22px] py-[12px] min-h-0 leading-none border-2 border-[#4E4670]`}>retry <RefreshIcon/></Button>
        </div>}
      </div>
      {/*headbar ช่องทางติดตาม

        todo:: ทำให้ body เลื่อนลงมาขนาดเท่ากับ ขนาดความสูงของ headbar
      */}
      <div className='w-full h-fit flex flex-row gap-2 fixed top-0 bg-[#FA8128] z-[1] p-2 text-white justify-center items-center'>
        <Link className="flex min-[431px]:flex-row flex-col items-center gap-1" href={"https://discord.gg/p2fY7N4Mcb"} target="_blank">
            <FontAwesomeIcon className="text-[24px] aspect-square" icon={faDiscord} />
            <span className="min-[431px]:text-xl text-xs text-center">ดิสคอร์ดแฟนคลับของคัมภีร์</span>
        </Link>
        <Divider className="bg-white" orientation="vertical" flexItem />
        <div className='h-full justify-center items-center flex sm:flex-row flex-col min-[341px]:flex-none flex-1 sm:gap-2'>
          <span className="sm:text-base text-xs text-center">ติดตาม <b className='underline'>Kamphee SoAlone</b> ได้แล้วที่</span>
          <div className='min-[341px]:flex grid grid-cols-3 min-[341px]:gap-2'>
         
            <Link className='flex items-center' href={"https://t.co/nCV3vocXPv"} target="_blank">
                <YouTubeIcon className="text-3xl"/>
            </Link>
            <Link className='flex items-center' href={"https://twitter.com/KampheeA"} target="_blank">
                <TwitterIcon className="text-3xl"/>
            </Link>
            {/* <Link className='flex items-center' href={"https://www.facebook.com/Baku.ARP"} target="_blank">
                <FontAwesomeIcon className="text-[24px] aspect-square" icon={faFacebook} />
            </Link>
            <Link className='flex items-center' href={"https://www.tiktok.com/@baku_arp"} target="_blank">
                <FontAwesomeIcon className="text-[24px] aspect-square" icon={faTiktok} />
            </Link> */}
            <Link className='flex items-center p-1' href={"https://vtuberthaiinfo.com/talent/kamphee"} target="_blank">
                <Logo className="w-[26px] h-[26px]"/>
            </Link>

            <Link className='flex items-center shrink-0' href={"https://twitter.com/Autumnia888"} target="_blank">
                <img src="img\autumniaent.jpg" className="w-[36px] rounded-full"/>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

