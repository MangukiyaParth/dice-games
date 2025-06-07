'use client';

import React, { useEffect } from 'react';
import data from '@/lib/games.json';

declare global {
  interface Window {
	googletag: any;
	geoTarget: any;
  }
}

export default function Home() {
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
		googletag.cmd.push(function() {
			googletag.defineSlot('/23178317433/kaku_display_04', [[300, 250]], "div-gpt-ad-123456789-4").addService(googletag.pubads());			
			googletag.pubads().enableSingleRequest();
			googletag.enableServices();
			if ((window as any).geoTarget) {
				googletag.pubads().setLocation((window as any).geoTarget);
			}
			googletag.display("div-gpt-ad-123456789-4");
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
		<div className="flex flex-col w-full h-full min-h-screen mb-5">
			<div className="p-4 grid grid-cols-3 md:grid-cols-6 gap-5">
				{
					data.flatMap((game, index)=>{
						const items = [
							<a 
								key={`game-${index}`}
								href={`game/${game.title}`} 
								className="rounded-xl overflow-hidden hover:scale-105 hover:border-4 hover:border-blue-400 duration-300 ease-in-out"
							>
								<div className="rounded-xl">
								<img
									src={`/${game.title}_icon.png`}
									alt={game.title}
									width={200}
									height={200}
									className="rounded-xl"
								/>
								</div>
								<span className="hidden">{game.title}</span>
							</a>
						];

						// Add ad after every 9 items (positions 8, 17, 26, etc.)
						if ((index + 1) % 9 === 0) {
							const adNumber = Math.floor((index + 1) / 9);
							if(adNumber < 5){
								items.push(
									<div 
									key={`ad-${index}`}
									className="col-span-3 md:col-span-6" // Spans all columns on md+ screens
									id={`div-gpt-ad-123456789-${adNumber}`}
									style={{ 
										minWidth: '250px',
										minHeight: '250px',
										gridColumn: '1 / -1', // Forces full width
										display: 'flex',
										justifyContent: 'center'
									}}
									/>
								);
							}
						}

						return items;
					})
				}
				
			</div>
        </div>
	);
}
