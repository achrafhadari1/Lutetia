import React, { useState } from "react";

export const Schedule = ({ schedule }) => {
  const [activeDay, setActiveDay] = useState(schedule[0].day);

  return (
    <div className="w-full border-b-2 bg-gray-200 text-black">
      <div className=" text-white  p-8 w-5/6 m-auto">
        <div className="text-5xl font-bold mb-8 text-black">Schedule</div>
        <div className="flex mb-8">
          {schedule.map(({ day, date }) => (
            <div
              key={day}
              className={`p-4 cursor-pointer w-1/4 text-center text-black ${
                activeDay === day ? "effect-schedule" : "bg-grey-200"
              }`}
              onClick={() => setActiveDay(day)}
            >
              <div className="text-3xl">{day}</div>
              <div className="text-xl">{date}</div>
            </div>
          ))}
        </div>
        <div className=" schedule-res-1 flex w-full gap-4">
          {schedule
            .find(({ day }) => day === activeDay)
            .sessions.map((session, index) => (
              <div key={index} className="bg-black p-4  text-center">
                <div className="text-4xl">{session.time}</div>
                <div className="text-xl">({session.ends})</div>
                <div className="text-2xl">{session.type}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
