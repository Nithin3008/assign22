import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEvent } from "../Redux/eventsRedux";

const EventsUi = ({ data, edit, form }) => {
  const dispatch = useDispatch();
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

        <button
          onClick={() => dispatch(deleteEvent(data._id))}
          className="bg-red-500 p-2 text-white rounded text-lg "
        >
          Delete
        </button>
        <button
          className="bg-red-500 p-2 text-white rounded text-lg ml-2"
          onClick={() => {
            edit(data);
            form();
          }}
        >
          Edit
        </button>
      </li>
    </>
  );
};

export default EventsUi;
