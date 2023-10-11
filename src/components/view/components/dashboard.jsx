import React, { useState } from "react";
import * as FAicons from "react-icons/fa6";
import * as BSicons from "react-icons/bs";
import * as MDicons from "react-icons/md";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import watson from "../components/assets/watson.jpg";
import hope from "../components/assets/hope.jpg";
import interactionPlugin from "@fullcalendar/interaction";

function Dashboard() {
  const events = [
    { title: "Meeting", date: "2023-10-11", time: "12:00:00" },
    { title: "Meeting", date: "2023-10-16", time: "14:30:00" },
    { title: "Appointment", date: "2023-10-16", time: "10:00:00" },
    { title: "Meeting", date: "2023-10-15", time: "09:30:00" },
    { title: "Employee Meeting", date: "2023-10-27", time: "15:45:00" },
    { title: "Meeting", date: "2023-10-29", time: "11:15:00" },
    { title: "Appointment", date: "2023-10-18", time: "16:30:00" },
    { title: "Employee Meeting", date: "2023-10-27", time: "11:30:00" },
    { title: "Appointment", date: "2023-10-26", time: "13:45:00" },
    { title: "Employee Meeting", date: "2023-10-25", time: "08:00:00" },
  ];

  const dashComp = [
    {
      name: "Members",
      icon: <FAicons.FaUsers size={45} />,
      value: "200",
    },
    {
      name: "Sales",
      icon: <BSicons.BsGraphUpArrow size={45} />,
      value: "10,000",
    },
    {
      name: "Today Visitors",
      icon: <MDicons.MdLogin size={45} />,
      value: "10",
    },
    {
      name: "Staff",
      icon: <MDicons.MdAdminPanelSettings size={45} />,
      value: "200",
    },
  ];
  const Stylist = [
    {
      name: "Laurence Javier",
      value: "Hair cut and Hair Styling Artist",
      image: watson,
    },
    {
      name: "Ernest Sacdal",
      value: "Make up Stylist",
      image: hope,
    },
    {
      name: "Rupert Caingal",
      value: "Hair cut and Hair Styling Artist",
      image: watson,
    },
    {
      name: "John ken Talusan",
      value: "Make up Stylist",
      image: hope,
    },
    {
      name: "Ernesto ",
      value: "Hair cut and Hair Styling Artist",
      image: watson,
    },
  ];

  const DashboardComponents = (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 py-6">
      {dashComp.map((item, index) => (
        <div
          key={index}
          className="bg-second p-4 rounded-lg shadow-md flex flex-row  gap-2"
        >
          <div className="mr-2">{item.icon}</div>
          <div className="flex-col">
            <h2 className="text-md font-semibold">{item.name}</h2>
            <p className="text-black text-md mt-1">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

  const openModal = (dateInfo) => {
    const eventsOnSelectedDate = events.filter(
      (event) => event.date === dateInfo.dateStr
    );
    setSelectedDate(dateInfo.dateStr);

    if (eventsOnSelectedDate.length > 0) {
      const eventDetails = eventsOnSelectedDate.map(
        (event) =>
          `Event Title: ${event.title}, Event Start: ${event.date} ${event.time}`
      );
      setSelectedEvent(eventDetails.join("\n"));
    } else {
      setSelectedEvent("No Events on this date");
    }

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const CalendarComponents = (
    <div className="mt-4">
      <h1 className="text-xl font-semibold mb-4">Appointments Schedule</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            interactionPlugin,
          ]}
          initialView="dayGridMonth"
          weekends={true}
          events={events.map((event) => ({
            title: event.title,
            start: `${event.date}T${event.time}`,
          }))}
          eventContent={renderEventContent}
          themeSystem="bootstrap"
          height="auto"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          }}
          dateClick={openModal}
        />
      </div>
    </div>
  );

  const StylistComponent = (
    <div className="md:w-1/3 p-4">
      <div className="mt-8">
        <h2 className="text-sm font-semibold mb-4">Stylist List</h2>
        <div className="flex flex-col flex-wrap gap-4">
          {Stylist.map((stylist, index) => (
            <div
              key={index}
              className="w-30 h-30 bg-gray-100 p-4 rounded-lg shadow-md flex flex-row items-center"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-2">
                <h3 className="text-lg font-semibold">{stylist.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{stylist.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex sm:flex-col md:flex-row">
      <div className="md:w-2/3 p-4">
        {DashboardComponents}
        {CalendarComponents}
      </div>
      {StylistComponent}

      {/* Modal */}
      <div
        className={`fixed z-10 inset-0 overflow-y-auto ${
          isModalOpen ? "block" : "hidden"
        } transition-opacity duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-transform ease-in-out duration-300 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                Events for {selectedDate}
              </h2>
              {selectedEvent.split("\n").map((eventDetail, index) => (
                <p key={index}>{eventDetail}</p>
              ))}
              <button
                onClick={closeModal}
                className="mt-2 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-300 ease-in-out hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default Dashboard;
