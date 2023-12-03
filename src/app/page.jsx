'use client'
import { useState } from "react";
import axios from "axios";
import Info from "./Info";

export default function Home() {
  const initialData = {
    info: { id: '', name: '', thumb: '' }, 
  };

  const [data, setData] = useState(initialData);

  const getData = async () => {
    
      const url = "https://api.coingecko.com/api/v3/search/trending";
      const res = await axios.get(url);
      console.log(res);
      const newData = res.data.coins;
      console.log(res.data.coins);
    
        const coin = newData[1].item;
        console.log(newData);
        const { id, name, thumb } = coin;
        console.log(coin);

        setData({
          info: { id, name, thumb },
        });
    
  };

  return (
    <main className='h-screen w-full bg-slate-800  text-white flex justify-center items-start pt-24'>
      <div className='flex flex-col gap-y-12 justify-center items-center'>
        <h1 className='text-white font-bold text-4xl'>
          Trending <span className='text-yellow-400'>Cryptocurrency</span>
        </h1>
        <button className="p-3 text-black shadow-lg rounded-lg font-semibold text-xl bg-yellow-400 " onClick={getData}>Get Data</button>
        <Info coin={data.info} />
      </div>
    </main>
  );
}
