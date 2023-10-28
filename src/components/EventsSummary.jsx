import React from "react";

const EventsSummaryUi = ({ data }) => {
  return (
    <>
      <li className="border-4 list-none w-2/4 m-auto space-y-2 p-2 my-2">
        <p>
          <span className="font-medium text-xl">Name : </span>
          {data.name}
        </p>
        <p>
          <span className="font-medium text-xl">Date : </span>
          {data.date}
        </p>

        <p>
          <span className="font-medium text-xl">Location : </span>
          {data.location}
        </p>
        <p>
          <span className="font-medium text-xl">Description: </span>
          {data.description}
        </p>
        <p>
          <span className="font-medium text-xl">Volunteers Required : </span>
          {data.volunteersRequired}
        </p>
      </li>
    </>
  );
};

export default EventsSummaryUi;
