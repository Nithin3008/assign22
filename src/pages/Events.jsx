import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addEvent,
  fetchEvents,
  deleteEvent,
  updateEvent,
} from "../Redux/eventsRedux";
const Events = () => {
  const dispatch = useDispatch();
  const eventsList = useSelector((state) => state.events.events);
  const [displayForm, setDisplay] = useState(false);
  const [displayForm1, setDisplay1] = useState(false);
  console.log(eventsList);
  function getEventsForm(event) {
    event.preventDefault();
    const data = {
      name: event.target.eventname.value,
      date: event.target.date.value,
      location: event.target.location.value,
      description: event.target.description.value,
      volunteerRequired: event.target.volunteerRequired.value,
    };
    console.log(data);
    dispatch(addEvent(data));
    setDisplay(!displayForm);
  }
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);
  function editForm() {
    setDisplay1(!displayForm1);
  }
  const [editData, setEditData] = useState({});
  function newEditData(data) {
    setEditData(data);
  }
  function updateEventForm(event) {
    event.preventDefault();
    console.log(editData);
    dispatch(updateEvent(editData));
    setDisplay1(!displayForm1);
  }

  function editName(event) {
    const newName = { ...editData, name: event.target.value };
    setEditData(newName);
  }
  function editDate(event) {
    const editEventData = { ...editData, date: event.date.value };
    setEditData(editEventData);
  }
  function editLocation(event) {
    const editEventData = { ...editData, location: event.target.value };
    setEditData(editEventData);
  }
  function editDescription(event) {
    const editEventData = { ...editData, description: event.target.value };
    setEditData(editEventData);
  }

  function editVolunteerRequired(event) {
    const editEventData = {
      ...editData,
      volunteerRequired: event.target.value,
    };
    setEditData(editEventData);
  }

  return (
    <>
      <div
        style={{
          display: displayForm ? "block" : "none",
        }}
        className="fixed hidden inset-0 overflow-auto bg-black bg-opacity-40 z-50"
      >
        <form
          onSubmit={(e) => {
            getEventsForm(e);
            e.target.reset();
          }}
          className="p-6 flex flex-col text-xl rounded-lg bg-white w-fit mt-36 mx-auto space-y-2 space-x-2 "
        >
          <label>Name</label>
          <input
            className="border-2 border-gray-400"
            required
            id="eventname"
            type="text"
          ></input>
          <label>Date </label>
          <input
            className="border-2 border-gray-400"
            required
            id="date"
            type="date"
          ></input>
          <label>Location</label>
          <input
            className="border-2 border-gray-400"
            required
            id="location"
            type="text"
          ></input>
          <label>Description</label>
          <input
            className="border-2 border-gray-400"
            required
            id="description"
            type="text"
          ></input>
          <label>Volunteers Required</label>
          <input
            className="border-2 border-gray-400"
            name="volunteerRequired"
            type="text"
          />
          <button
            className="border-2 p-2 bg-blue-500 border-blue-500 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
        <button
          className="border-2 p-2 bg-red-500 border-red-500 rounded-md"
          onClick={() => setDisplay(!displayForm)}
        >
          Cancel
        </button>
      </div>
      <div
        style={{
          display: displayForm1 ? "block" : "none",
        }}
        className="fixed hidden inset-0 overflow-auto bg-black bg-opacity-40 z-50"
      >
        <form
          onSubmit={(e) => {
            updateEventForm(e);
            e.target.reset();
          }}
          className="p-6 flex flex-col text-xl rounded-lg bg-white w-fit mt-36 mx-auto space-y-2 space-x-2 "
        >
          <label>Name</label>
          <input
            className="border-2 border-gray-400"
            required
            id="eventname"
            type="text"
            value={editData.name}
            onChange={(e) => editName(e)}
          ></input>
          <label>Date </label>
          <input
            className="border-2 border-gray-400"
            required
            id="date"
            type="date"
            value={editData.date}
            onChange={(e) => editDate(e)}
          ></input>
          <label>Location</label>
          <input
            className="border-2 border-gray-400"
            required
            id="location"
            type="text"
            value={editData.location}
            onChange={(e) => editLocation(e)}
          ></input>
          <label>Description</label>
          <input
            className="border-2 border-gray-400"
            required
            id="description"
            type="text"
            value={editData.description}
            onChange={(e) => editDescription(e)}
          ></input>
          <label>Volunteers Required</label>
          <input
            className="border-2 border-gray-400"
            name="volunteersRequired"
            type="text"
            value={editData.volunteerRequired}
            onChange={(e) => editVolunteerRequired(e)}
          />
          <button
            className="border-2 p-2 bg-blue-500 border-blue-500 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
        <button
          className="border-2 p-2 bg-red-500 border-red-500 rounded-md"
          onClick={() => setDisplay1(!displayForm1)}
        >
          Cancel
        </button>
      </div>
      {/* <ul>
        {patientsList?.patients.map((val) => (
          <PatientsUi
            key={val._id}
            data={val}
            edit={newEditData}
            form={editForm}
          ></PatientsUi>
        ))}
      </ul> */}
      <div className="text-center">
        <button
          className="bg-blue-500 p-2 text-white rounded text-lg mt-2"
          onClick={() => setDisplay((s) => !s)}
        >
          Add Item
        </button>
      </div>
    </>
  );
};

export default Events;
