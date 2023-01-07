import React from "react";
export function Result({ data }: any) {
  const d = new Date();
  let currentHour = d.getHours();
  let mydata: any[] = [];
  data?.forecast?.forecastday[0].hour.map((hour: any) => {
    mydata.push(hour);
  });

  return (
    <main className="mx-auto w-4/5 ">
      <button onClick={() => console.log(mydata)}>test</button>
      <div className="text-xl">{data?.location?.name || "Ort"}</div>
      <table className="table-auto w-full text-center">
        <thead>
          <tr>
            <th>time</th>
            <th>temp</th>
            <th>rain</th>
          </tr>
        </thead>
        <tbody>
          {data?.forecast?.forecastday[0].hour.map((hour: any) => (
            <tr
              key={Math.random()}
              className={
                hour.time.slice(11).substring(2, -1) === currentHour.toString()
                  ? "bg-neutral-900"
                  : ""
              }
            >
              <td>{hour.time.slice(11)}</td>
              <td>{hour.temp_c}</td>
              <td>{hour.rain}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
