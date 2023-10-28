import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchEvents } from "../Redux/eventsRedux";
import { fetchVolunteers } from "../Redux/volunteerRedux";
import EventsSummaryUi from "../components/EventsSummary";
import VolunteerSummaryUi from "../components/VolunteerSummary";
const Summary = () => {
  const dispatch = useDispatch();
  const eventsList = useSelector((state) => state.events.events);
  const volunteerList = useSelector((state) => state.volunteers.volunteers);
  useEffect(() => {
    dispatch(fetchEvents());
    dispatch(fetchVolunteers());
  }, [dispatch]);
  return (
    <div>
      <h1 className="text-2xl">Summary of Events</h1>
      <ul>
        {eventsList.map((val) => (
          <EventsSummaryUi key={val._id} data={val}></EventsSummaryUi>
        ))}
      </ul>
      <h1 className="text-2xl">Summary of Volunteer</h1>
      <ul>
        {volunteerList?.map((val) => (
          <VolunteerSummaryUi key={val._id} data={val}></VolunteerSummaryUi>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
