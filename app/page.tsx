'use client'
import { Result } from "./../components/Result";
import { SearchBar } from "./../components/SearchBar";
import Button from "../components/Button";
import { useState } from "react";

export default function Page() {
const [data, setData] = useState(null)

const getWeather = (results:any) => {
  setData(results)
}


  return (
    <div className="h-screen bg-white text-black dark:bg-black dark:text-white">
      <SearchBar weather={getWeather}/>
      <Result data={data}/>
    </div>
  );
}
