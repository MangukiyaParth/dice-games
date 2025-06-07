'use client';

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function GameDetails(props: { game: any, similar: any, guess: any }) {
    const gameData = props.game;
    const similarData = props.similar;
    const guessData = props.guess;
    useEffect(() => {
        (window as any).googletag = (window as any).googletag || { cmd: [] };
        const googletag = (window as any).googletag;
        googletag.cmd.push(function () {
            if (Math.random() < 1) {
                const GEO_TARGETS = [
                    "California, US",
                    "Texas, US",
                    "Florida, US",
                    "New York, US",
                    "Pennsylvania, US",
                    "Illinois, US",
                    "Ohio, US",
                    "Georgia, US",
                    "North Carolina, US",
                    "Michigan, US",
                    "Melbourne, AU",
                    "Victoria, AU",
                    "Toronto, CA",
                    "Ottawa, CA",
                    "Wellington, NZ",
                ];
                const geoTarget = GEO_TARGETS[Math.floor(Math.random() * GEO_TARGETS.length)];
                window.geoTarget = geoTarget;
                googletag.pubads().setLocation(geoTarget);
            }
        });

        googletag.cmd.push(function() {
            googletag.defineSlot('/23178317433/kaku_display_01', [[300, 250]], "div-gpt-ad-123456789-1").addService(googletag.pubads());			
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
            if ((window as any).geoTarget) {
                googletag.pubads().setLocation((window as any).geoTarget);
            }
            googletag.display("div-gpt-ad-123456789-1");
        });
        googletag.cmd.push(function() {
            googletag.defineSlot('/23178317433/kaku_display_02', [[300, 250]], "div-gpt-ad-123456789-2").addService(googletag.pubads());			
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
            if ((window as any).geoTarget) {
                googletag.pubads().setLocation((window as any).geoTarget);
            }
            googletag.display("div-gpt-ad-123456789-2");
        });
        googletag.cmd.push(function() {
            googletag.defineSlot('/23178317433/kaku_display_03', [[300, 250]], "div-gpt-ad-123456789-3").addService(googletag.pubads());			
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
            if ((window as any).geoTarget) {
                googletag.pubads().setLocation((window as any).geoTarget);
            }
            googletag.display("div-gpt-ad-123456789-3");
        });
        setTimeout(() => {
            showRewardAd();
        }, 2000);
    }, []);
    
    const showRewardAd = () => {
        if (!window.googletag || !window.googletag.cmd) {
            console.error("Google Ad Manager is not properly initialized.");
            return; 
        }

        window.googletag.cmd.push(function () {
            try {
                const rewardedSlot = window.googletag
                    .defineOutOfPageSlot('/23178317433/kaku_reward', window.googletag.enums.OutOfPageFormat.REWARDED)
                    .addService(window.googletag.pubads());

                window.googletag.enableServices();
                window.googletag.display(rewardedSlot);
                console.log("Attempting to display rewarded ad...");

                window.googletag.pubads().addEventListener("rewardedSlotReady", function (evt: any) {
                    console.log("Rewarded ad ready.");
                    evt.makeRewardedVisible();
                });

                window.googletag.pubads().addEventListener("rewardedSlotClosed", function () {
                    console.log("Ad closed.");
                    window.googletag.destroySlots([rewardedSlot]);
                });
            } catch (error) {
                console.error("Error during ad setup:", error);
            }
        });
    }
    return (
        <div className="flex flex-col w-full h-full mb-5 p-4">
            <div className="flex content-center items-center gap-2">
                <img src={`/`+gameData.title+`_icon.png`} alt={gameData.title} className="w-[100px] rounded-xl inline-block" />
                <div className="flex flex-col inline-block w-100">
                    <span className="text-xl text-black font-semibold hidden md:block">{gameData.title}</span>
                    <div className="grid grid-cols-3 mt-3">
                        <div className="flex flex-col text-center border-r-1">
                            <span className="text-lg text-black font-semibold">{gameData.categories}</span>
                            <span className="text-xs">CATEGORY</span>
                        </div>
                        <div className="flex flex-col text-center border-r-1">
                            <span className="text-lg text-black font-semibold">5</span>
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3 h-3 fill-gray-400 text-gray-400" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3 h-3 fill-gray-400 text-gray-400" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3 h-3 fill-gray-400 text-gray-400" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3 h-3 fill-gray-400 text-gray-400" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3 h-3 fill-gray-400 text-gray-400" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                            </div>
                        </div>
                        <div className="flex flex-col text-center justify-center">
                            AGE
                        </div>
                    </div>
                </div>
            </div>
            <div id="div-gpt-ad-123456789-1" style={{ minWidth: '250px', minHeight: '250px', width: 'fit-content', display: 'flex', justifyContent: 'center' }} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-3 gap-3">
                <div className="flex gap-2 items-center bg-gray-100 py-2 px-4 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-5 h-5" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                    <div className="flex justify-between w-100">
                        <span className="text-black">Last Updated:</span>
                        <span></span>
                    </div>
                </div>
                <div className="flex gap-2 items-center bg-gray-100 py-2 px-4 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor w-5 h-5" aria-hidden="true"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
                    <div className="flex justify-between w-100">
                        <span className="text-black">Platform:</span>
                        <span></span>
                    </div>
                </div>
                <div className="flex gap-2 items-center bg-gray-100 py-2 px-4 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-5 h-5" aria-hidden="true"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
                    <div className="flex justify-between w-100">
                        <span className="text-black">Current Version:</span>
                        <span>{gameData.version}</span>
                    </div>
                </div>
                <div className="flex gap-2 items-center bg-gray-100 py-2 px-4 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package w-5 h-5" aria-hidden="true"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
                    <div className="flex justify-between w-100">
                        <span className="text-black">Size:</span>
                        <span></span>
                    </div>
                </div>
                <div className="flex gap-2 items-center bg-gray-100 py-2 px-4 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-5 h-5" aria-hidden="true"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
                    <div className="flex justify-between w-100">
                        <span className="text-black">Developer:</span>
                        <span>{gameData.developer}</span>
                    </div>
                </div>
                <div className="flex gap-2 items-center bg-gray-100 py-2 px-4 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-5 h-5" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                    <div className="flex justify-between w-100">
                        <span className="text-black">Ratings:</span>
                        <span></span>
                    </div>
                </div>
            </div>
            <span className="text-xl text-black font-semibold mt-5">Get The Game</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 w-full">
                <a className="flex justify-between w-full bg-gray-100 py-2 px-4 rounded-md hover:bg-sky-300 border-2 border-white hover:shadow-md hover:shadow-sky-200 group" href={gameData.url} target='_BLANK'>
                    <span className="text-black group-hover:text-white">Google Play</span>
                    <span className="group-hover:text-white">Link Provided by Google Play</span>
                </a>
                <a className="flex justify-between w-full bg-gray-100 py-2 px-4 rounded-md hover:bg-sky-300 border-2 border-white hover:shadow-md hover:shadow-sky-200 group" href={gameData.iosurl} target='_BLANK'>
                    <span className="text-black group-hover:text-white">App Store</span>
                    <span className="group-hover:text-white">Link Provided by App Store</span>
                </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full mt-5">
                <div className="flex items-center gap-2 text-green-500">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></svg>
                    <span>Verified antivirus</span>
                </div>
                <div className="text-xs">All download links on this website jump to official platforms such as App Store and Google Play. No viruses. No malware.</div>
            </div>
            <div className="flex flex-col bg-gray-50 rounded-md gap-3 w-full mt-5 p-4">
                <div className="text-black font-semibold text-lg">Similar Games</div>
                <div className="py-4 grid grid-cols-3 md:grid-cols-6 gap-5">
                {
                    similarData.map((game: any, index: number)=>{
                        return(	
                            <a key={index} href={`/game/${game.title}`} className="rounded-xl overflow-hidden hover:scale-115 hover:border-4 hover:border-blue-400 duration-300 ease-in-out">
                                <div className="rounded-xl">
                                    <img src={`/${game.title}_icon.png`} className="rounded-xl" />
                                </div>
                                <span className="hidden">{game.title}</span>
                            </a>
                        );
                    })
                }
                </div>
            </div>
            <div id="div-gpt-ad-123456789-2" style={{ minWidth: '250px', minHeight: '250px', width: 'fit-content', display: 'flex', justifyContent: 'center' }} />
            <div className="flex flex-col bg-gray-50 rounded-md gap-3 w-full mt-5 p-4">
                <div className="text-black font-semibold text-lg">DESCRIPTION</div>
                <div className="max-h-[500px] overflow-auto" dangerouslySetInnerHTML={{ __html: gameData.description }}></div>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={'auto'}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                
            >
                <SwiperSlide className='w-auto!'><img src={`/banner/${gameData.title}_1.png`} alt="" className="h-[300px] rounded-xl" onError={(e) => { e.currentTarget.src = '/banner/lazy.png'; }} /></SwiperSlide>
                <SwiperSlide className='w-auto!'><img src={`/banner/${gameData.title}_2.png`} alt="" className="h-[300px] rounded-xl" onError={(e) => { e.currentTarget.src = '/banner/lazy.png'; }} /></SwiperSlide>
                <SwiperSlide className='w-auto!'><img src={`/banner/${gameData.title}_3.png`} alt="" className="h-[300px] rounded-xl" onError={(e) => { e.currentTarget.src = '/banner/lazy.png'; }} /></SwiperSlide>
                <SwiperSlide className='w-auto!'><img src={`/banner/${gameData.title}_4.png`} alt="" className="h-[300px] rounded-xl" onError={(e) => { e.currentTarget.src = '/banner/lazy.png'; }} /></SwiperSlide>
                <SwiperSlide className='w-auto!'><img src={`/banner/${gameData.title}_5.png`} alt="" className="h-[300px] rounded-xl" onError={(e) => { e.currentTarget.src = '/banner/lazy.png'; }} /></SwiperSlide>
                <SwiperSlide className='w-auto!'><img src={`/banner/${gameData.title}_6.png`} alt="" className="h-[300px] rounded-xl" onError={(e) => { e.currentTarget.src = '/banner/lazy.png'; }} /></SwiperSlide>
                <SwiperSlide className='w-auto!'><img src={`/banner/${gameData.title}_7.png`} alt="" className="h-[300px] rounded-xl" onError={(e) => { e.currentTarget.src = '/banner/lazy.png'; }} /></SwiperSlide>
            </Swiper>
            <div className="flex flex-col bg-gray-50 rounded-md gap-3 w-full mt-5 p-4">
                <div className="text-black font-semibold text-lg">Guess You Like</div>
                <div className="py-4 grid grid-cols-2 md:grid-cols-6 gap-5">
                {
                    guessData.map((game: any, index: number)=>{
                        return(	
                            <a key={index} href={`/game/${game.title}`} className="rounded-xl overflow-hidden hover:scale-115 hover:border-4 hover:border-blue-400 duration-300 ease-in-out">
                                <div className="rounded-xl">
                                    <img src={`/${game.title}_icon.png`} className="rounded-xl" />
                                </div>
                                <span className="hidden">{game.title}</span>
                            </a>
                        );
                    })
                }
                </div>
            </div>
            <div id="div-gpt-ad-123456789-3" style={{ minWidth: '250px', minHeight: '250px', width: 'fit-content', display: 'flex', justifyContent: 'center' }} />
        </div>
    );
}
