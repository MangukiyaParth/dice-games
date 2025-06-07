import React from 'react';
import { Metadata } from 'next';
import GameDetails from '@/component/gameDetails';
import gameData from '@/lib/games.json';
 
export const metadata: Metadata = {
    title: 'Games',
};
export default async function Home(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const game_name = decodeURIComponent(params.id);
    const currGameData = gameData.filter((game)=> game.title === game_name);
    const game_data = currGameData[0];

    const shuffled = [...gameData].sort(() => 0.5 - Math.random());
    const similar = shuffled.slice(0, 6);
    
    const shuffled2 = [...gameData].sort(() => 0.5 - Math.random());
    const guess = shuffled2.slice(0, 8);
    return (
        <GameDetails game={game_data} similar={similar} guess={guess} />
    );
}
