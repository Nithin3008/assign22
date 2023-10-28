import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VolunteerUi from "../components/VolunteerUi";
import { fetchEvents } from "../Redux/eventsRedux";
import {
  addVolunteer,
  fetchVolunteers,
  updateVolunteer,
} from "../Redux/volunteerRedux";
const Volunteer = () => {
  const dispatch = useDispatch();
  const eventsList = useSelector((state) => state.events.events);
  const volunteerList = useSelector((state) => state.volunteers.volunteers);
  const [displayForm, setDisplay] = useState(false);
  const [displayForm1, setDisplay1] = useState(false);
  console.log(eventsList, volunteerList);
  const events = useSelector((state) => state.events.events);

  function getEventsForm(event) {
    event.preventDefault();
    const selectedEvents = Array.from(
      event.target.events.selectedOptions,
      (option) => option.value
    );
    const data = {
      name: event.target.volunteername.value,
      contact: event.target.contact.value,
      skills: event.target.skills.value,
      availability: event.target.availability.value,
      areasOfInterest: event.target.intrests.value,
      events: selectedEvents,
    };
    console.log(data);
    dispatch(addVolunteer(data));
    setDisplay(!displayForm);
  }
  useEffect(() => {
    dispatch(fetchEvents());
    dispatch(fetchVolunteers());
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
    dispatch(updateVolunteer(editData));
    setDisplay1(!displayForm1);
  }

  function editName(event) {
    const editVolunteerData = { ...editData, name: event.target.value };
    setEditData(editVolunteerData);
  }
  function editContact(event) {
    const editVolunteerData = { ...editData, contact: event.contact.value };
    setEditData(editVolunteerData);
  }
  function editAvailability(event) {
    const editVolunteerData = { ...editData, availability: event.target.value };
    setEditData(editVolunteerData);
  }
  function editSkills(event) {
    const editVolunteerData = { ...editData, skills: event.target.value };
    setEditData(editVolunteerData);
  }

  function editIntrests(event) {
    const editVolunteerData = {
      ...editData,
      areasOfInterest: event.target.value,
    };
    setEditData(editVolunteerData);
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
            id="volunteername"
            type="text"
          ></input>
          <label>Contact </label>
          <input
            className="border-2 border-gray-400"
            required
            id="contact"
            type="number"
          ></input>
          <label>Skills</label>
          <input
            className="border-2 border-gray-400"
            required
            id="skills"
            type="text"
          ></input>
          <label> Availability:</label>
          <select id="availability">
            <option value="">Select</option>
            <option value={false}>Not Available</option>
            <option value={true}>Available</option>
          </select>
          <label>Area of Intrest</label>
          <input
            className="border-2 border-gray-400"
            name="intrests"
            type="text"
          />
          <label>Events: </label>
          <select id="events" multiple>
            <option value="">Select</option>
            {events.map((event) => (
              <option value={event.name}>{event.name}</option>
            ))}
          </select>
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
            id="volunteername"
            type="text"
            value={editData.name}
            onChange={editName}
          ></input>
          <label>Contact </label>
          <input
            className="border-2 border-gray-400"
            required
            id="contact"
            type="number"
            value={editData.contact}
            onChange={editContact}
          ></input>
          <label>Skills</label>
          <input
            className="border-2 border-gray-400"
            required
            id="skills"
            type="text"
            value={editData.skills}
            onChange={editSkills}
          ></input>
          <label> Availability:</label>
          <select
            id="availability"
            onChange={editAvailability}
            value={editData.availability}
          >
            <option value="">Select</option>
            <option value={false}>Not Available</option>
            <option value={true}>Available</option>
          </select>

          <label>Area of Intrest</label>
          <input
            className="border-2 border-gray-400"
            name="volunteerRequired"
            type="text"
            value={editData.areasOfInterest}
            onChange={editIntrests}
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
      <ul>
        {volunteerList?.map((val) => (
          <VolunteerUi
            key={val._id}
            data={val}
            edit={newEditData}
            form={editForm}
          ></VolunteerUi>
        ))}
      </ul>
      <div className="text-center">
        <button
          className="bg-blue-500 p-2 text-white rounded text-lg mt-2"
          onClick={() => setDisplay((s) => !s)}
        >
          Add Volunteer
        </button>
      </div>
    </>
  );
};

export default Volunteer;
