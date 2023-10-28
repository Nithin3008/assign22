import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteVolunteer } from "../Redux/volunteerRedux";
const VolunteerSummaryUi = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <li className="border-4 list-none w-2/4 m-auto space-y-2 p-2 my-2">
      <p>
        <span className="font-medium text-xl">Name : </span>
        {data.name}
      </p>
      <p>
        <span className="font-medium text-xl">Contact : </span>
        {data.contact}
      </p>

      <p>
        <span className="font-medium text-xl">skills : </span>
        {data.skills}
      </p>
      <p>
        <span className="font-medium text-xl">Availability : </span>
        {data.availability ? "Yes" : "No"}
      </p>
      <p>
        <span className="font-medium text-xl">Area of Interest : </span>
        {data.areasOfInterest}
      </p>
      <p>
        <span className="font-medium text-xl">Events : </span>
        {data.events.map((val) => (
          <span key={val}>{val},</span>
        ))}
      </p>
    </li>
  );
};

export default VolunteerSummaryUi;
