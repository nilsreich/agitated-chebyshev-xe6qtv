import { time } from "console";
import React from "react";
export function Result({ data }: any) {

  const d = new Date();
  let currentHour = d.getHours();

  let dateDay0 = d.getDate();
  let datedayName0 = new Intl.DateTimeFormat("de-DE", {weekday: "long" }).format(d)
  let datemonthName0 = new Intl.DateTimeFormat("de-DE", {month: "long" }).format(d)

  const d1 = new Date(d);
  d1.setDate(d1.getDate() + 1)
  let dateDay1  = d1.getDate();
  let datedayName1 = new Intl.DateTimeFormat("de-DE", {weekday: "long" }).format(d1)
  let datemonthName1 = new Intl.DateTimeFormat("de-DE", {month: "long" }).format(d1)

  const d2 = new Date(d);
  d2.setDate(d1.getDate() + 1)
  let dateDay2 = d2.getDate();
  let datedayName2 = new Intl.DateTimeFormat("de-DE", {weekday: "long" }).format(d2)
  let datemonthName2 = new Intl.DateTimeFormat("de-DE", {month: "long" }).format(d2)

  let day1: any[] = [];
  let day2: any[] = [];
  let day3: any[] = [];
  data?.forecast?.forecastday[0].hour.map((hour: any, index:number) => {
    index>currentHour-2? day1.push({ temp_c: Math.round(hour.temp_c), 
      time: hour.time.slice(11), 
      wind_kph: Math.round(hour.wind_kph), 
      precip_mm: Math.ceil(hour.precip_mm), 
      chance_of_rain: hour.chance_of_rain}):null;
  });
  data?.forecast?.forecastday[1].hour.map((hour: any, index:number) => {
    day2.push({ temp_c: Math.round(hour.temp_c),
       time: hour.time.slice(11),
       wind_kph: Math.round(hour.wind_kph), 
       precip_mm: Math.ceil(hour.precip_mm), 
       chance_of_rain: hour.chance_of_rain});
  });
  data?.forecast?.forecastday[2].hour.map((hour: any, index:number) => {
    day3.push({ temp_c: Math.round(hour.temp_c), 
      time: hour.time.slice(11), 
      wind_kph: Math.round(hour.wind_kph), 
      precip_mm: Math.ceil(hour.precip_mm), 
      chance_of_rain: hour.chance_of_rain});
  });
  return (
    <main className="mx-auto w-4/5">
      <div className="block gap-28 xl:flex xl:justify-between">
        <div className="grow">
          <div className="sticky top-0 py-4 text-xl dark:bg-black">{`${datedayName0}, ${dateDay0}.${datemonthName0}`}</div>
          <div className="flex text-center w-full">
            <div className="w-1/5text-neutral-700">Uhrzeit</div>
            <div className="w-1/5text-neutral-700">Temperatur</div>
            <div className="w-1/5text-neutral-700">Regenwahrscheinlichkeit</div>
            <div className="w-1/5text-neutral-700">Regen in ml</div>
            <div className="w-1/5text-neutral-700">Windgeschwindigkeit</div>
          </div>
          {day1.map((time) => {
            return (
              <div key={Math.random()} className={
                time.time.substring(2, -1) === currentHour.toString()
                  ? "flex text-center text-white py-2 bg-neutral-900"
                  : "flex text-center text-white py-2 "
              }>
                <div className="w-1/5 py-2">{time.time}</div>
                <div className="w-1/5 py-2">{time.temp_c}</div>
                <div className="w-1/5 py-2">{time.chance_of_rain}</div>
                <div className="w-1/5 py-2">{time.precip_mm}</div>
                <div className="w-1/5 py-2">{time.wind_kph}</div>
              </div>
            );
          })
          }
        </div>
        <div className="grow">
          <div className="sticky top-0 py-4 text-xl dark:bg-black">{`${datedayName1}, ${dateDay1}.${datemonthName1}`}</div>
          <div className="flex text-center ">
            <div className="grow text-neutral-700">time</div>
            <div className="grow text-neutral-700">temp</div>
            <div className="grow text-neutral-700">rain</div>
            <div className="grow text-neutral-700">ml</div>
            <div className="grow text-neutral-700">wind</div>
          </div>
          {day2.map((time) => {
            return (
              <div key={Math.random()} className={ "flex text-center text-white py-2 "
              }>
                <div className="grow py-2">{time.time}</div>
                <div className="grow py-2">{time.temp_c}</div>
                <div className="grow py-2">{time.chance_of_rain}</div>
                <div className="grow py-2">{time.precip_mm}</div>
                <div className="grow py-2">{time.wind_kph}</div>
              </div>
            );
          })
          }
        </div>
        <div className="grow">
          <div className="sticky top-0 py-4 text-xl dark:bg-black">{`${datedayName2}, ${dateDay2}.${datemonthName2}`}</div>
          <div className="flex text-center ">
            <div className="grow text-neutral-700">time</div>
            <div className="grow text-neutral-700">temp</div>
            <div className="grow text-neutral-700">rain</div>
            <div className="grow text-neutral-700">ml</div>
            <div className="grow text-neutral-700">wind</div>
          </div>
          {day3.map((time) => {
            return (
              <div key={Math.random()} className={"flex text-center text-white py-2 "
              }>
                <div className="grow py-2">{time.time}</div>
                <div className="grow py-2">{time.temp_c}</div>
                <div className="grow py-2">{time.chance_of_rain}</div>
                <div className="grow py-2">{time.precip_mm}</div>
                <div className="grow py-2">{time.wind_kph}</div>
              </div>
            );
          })
          }
        </div>
      </div>
    </main>
  );
}
