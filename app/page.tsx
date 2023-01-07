'use client'
import { Result } from "./../components/Result";
import { SearchBar } from "./../components/SearchBar";
import { useState } from "react";
import { Loading } from '../components/Loading'

export default function Page() {
  const [data, setData] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  const getWeather = (results: any) => {
    setData(results)
  }

  const fetching = (toggle: boolean) => {
    setIsFetching(toggle)
  }

  return (
    <div className=" bg-white text-black dark:bg-black dark:text-white">
      <SearchBar weather={getWeather} getData={fetching} />
      {isFetching ? <Loading /> : <Result data={data} />}
    </div>
  );
}
