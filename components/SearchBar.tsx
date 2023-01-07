"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";

type FetchParameters = Parameters<typeof fetch>;
const fetcher = (...args: FetchParameters) =>
  fetch(...args).then((res) => res.json());

type SearchbarProps = {
  weather: (results: any) => void;
  getData: (toggle: boolean) => void;
};

export const SearchBar = ({ weather, getData }: SearchbarProps) => {
  const [city, setCity] = useState<string | null>(null);
  const [input, setInput] = useState<string>("");

  const { data, error, isLoading } = useSWR(
    city != null
      ? `https://api.weatherapi.com/v1/forecast.json?key=05ed2d02153645fe86b113616230701&q=${city}&days=3&aqi=no&alerts=no`
      : null,
    fetcher
  );

  const fetchData = async () => {
    if (input != "" && input != city) {
      setCity(() => input);
    } else return;
  };

  useEffect(() => {
    weather(data);
  }, [data]);

  useEffect(() => {
    getData(isLoading)
  }, [isLoading]);

  return (

  <div class="mx-auto flex w-4/5 max-w-2xl items-center my-4 group border border-neutral-900 rounded focus-within:border-white">
    <div class="p-3 text-neutral-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    </div>
    <input
        placeholder="Gib einen Ort ein"
        className="w-full bg-transparent p-2 text-2xl focus:outline-none "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />          <button
      className="p-3 text-neutral-600"
      onClick={fetchData}
    >
      Search
    </button>
  </div>

  );
};
