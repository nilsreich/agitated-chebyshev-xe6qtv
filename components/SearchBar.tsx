"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";

type FetchParameters = Parameters<typeof fetch>;
const fetcher = (...args: FetchParameters) =>
  fetch(...args).then((res) => res.json());

type SearchbarProps = {
  weather: (results: any) => void;
};

export const SearchBar = ({ weather }: SearchbarProps) => {
  const [city, setCity] = useState<string | null>(null);
  const [input, setInput] = useState<string>("");

  const { data, error, isLoading } = useSWR(
    city != null
      ? `https://api.weatherapi.com/v1/forecast.json?key=05ed2d02153645fe86b113616230701&q=${city}&days=1&aqi=no&alerts=no`
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

  return (
    <div className="flex items-center justify-center py-8">
      <div className="rounded-l border-l border-t border-b p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      </div>

      <input
        placeholder="Gib einen Ort ein"
        className="border-t border-b bg-transparent p-2 focus:outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="rounded-r border-r border-t border-b p-2"
        onClick={fetchData}
      >
        Search
      </button>
    </div>
  );
};
