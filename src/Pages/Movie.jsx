import React, { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { Details } from "../Components/MoviePage/Details/Details";
import { MediaShowcase } from "../Components/MoviePage/Details/MediaSchocase";
import { Director } from "../Components/MoviePage/Director";
import { Header } from "../Components/MoviePage/Header";
import "../Components/MoviePage/MoviePage.css";
import { Schedule } from "../Components/MoviePage/Schedule";
import Footer from "../Components/Footer";
import Newsletter from "../Components/HomePage/Newsletter";

export const Movie = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const scheduleData = [
    {
      day: "20",
      date: "MAY",
      sessions: [
        { time: "14:00 PM", ends: "ends at 15:45", type: "VF" },
        { time: "16:30 PM", ends: "ends at 18:45", type: "VOSTFR" },
        { time: "19:00 PM", ends: "ends at 21:45", type: "VOSTFR" },
      ],
    },
    {
      day: "21",
      date: "MAY",
      sessions: [{ time: "16:00 PM", ends: "ends at 17:45", type: "VOSTFR" }],
    },
    {
      day: "22",
      date: "MAY",
      sessions: [{ time: "18:00 PM", ends: "ends at 19:45", type: "VOSTFR" }],
    },
    {
      day: "23",
      date: "MAY",
      sessions: [{ time: "20:00 PM", ends: "ends at 21:45", type: "VOSTFR" }],
    },
  ];

  const { id } = useParams();
  return (
    <>
      <Header id={id} />
      <Details id={id} />
      <Schedule schedule={scheduleData} />
      <Director id={id} />
      <Newsletter />
      <Footer />
    </>
  );
};
