import { Link } from "react-router-dom";
import analylitics from "./img/analylitics-icon.png";
import imgbanner from "./img/image-banner.png";
import graph from "./img/graph.png";
import apple from "./img/apple-11 1.png";
import google from "./img/google-2015 1.png";
import slack from "./img/slack-2 1.png";
import spotify from "./img/spotify-1 1.png";
import company from "./img/Group 13.png";
import share from "./img/share.png";
import offline from "./img/offline.png";
import track from "./img/track.png";
import kanban from "./img/kanaban.png";
import reward from "./img/reward.png";
import country from "./img/century.png";
import video from "./img/video-thumbnail.png";
import logs from "./img/logo.svg";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
function Salon() {
  const Nav = (
    <nav className="px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">
            <img className="h-9" src={logs} alt="" />
          </Link>
        </div>
        <div className="space-x-8 hidden lg:block">
          <Link to="#" className="text-lg font-semibold text-black">
            Home
          </Link>
          <Link to="#" className="text-lg hover:font-semibold hover:text-black">
            Features
          </Link>
          <Link to="#" className="text-lg hover:font-semibold hover:text-black">
            Showcase
          </Link>
          <Link to="#" className="text-lg hover:font-semibold hover:text-black">
            Pricing
          </Link>
        </div>
        <div>
          <Link
            to="/signin"
            className="bg-gray-100 text-lg py-2 px-10 rounded-3xl hover:font-semibold hover:text-black hidden md:block"
          >
            Back to home
          </Link>
        </div>
      </div>
    </nav>
  );
  const Banner = (
    <div className="banner lg:mt-10 md:mt-24 mt-5 lg:px-20 md:px-40 px-12 md:text-center lg:text-left text-left">
      <div className="flex justify-around space-x-8">
        <div className="flex-1 flex items-center">
          <div className="space-y-8 pr-4">
            <h1 className="lg:leading-tight md:leading-tight leading-tight lg:text-5xl font-black md:text-5xl text-4xl">
              Manage Payroll Like an Expert
            </h1>
            <p className="lg:text-md md:text-lg text-gray-600">
              Payna is helping you to set up the payroll without required any
              finance skills or knowledge before.
            </p>
            <button className="bg-blue-600 py-3 px-8 text-sm rounded-3xl text-white">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-2 md:hidden hidden lg:block p-10">
          <div className="relative">
            <div>
              <img src={imgbanner} className="rounded-3xl" alt="" />
            </div>
            <div className="w-[213px] bg-white rounded-2xl items-center absolute top-10 -right-20 drop-shadow-xl">
              <div className="flex px-2 py-4 space-x-2 items-center">
                <img className="h-10 w-10" src={analylitics} alt="" />
                <div>
                  <h4 className="font-semibold text-gray-800">Bulk Export</h4>
                  <p className="text-sm text-gray-600">Real-time report</p>
                </div>
              </div>
            </div>
            <div className="w-[213px] h-fit bg-white drop-shadow-xl rounded-3xl items-center absolute inset-y-1/3 -left-20">
              <div className="flex px-4 py-2 space-x-2 items-center">
                <img className="h-10 w-10" src={analylitics} alt="" />
                <div>
                  <h4 className="font-semibold text-gray-800">Analytics</h4>
                  <p className="text-sm text-gray-600">Real-time report</p>
                </div>
              </div>
              <div className="flex justify-center">
                <img className="pb-4" src={graph} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const services = (
    <section className="mt-32 space-y-8 lg:px-20 md:px-12 px-12">
      <div className="text-center space-y-2">
        <h5 className="text-sm font-semibold text-red-400 uppercase">
          Our Services
        </h5>
        <h2 className="text-3xl font-bold text-black">Services We Offer</h2>
        <p className="py-4 text-gray-500">
          Explore the range of services we provide to meet your business needs.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 grid-rows-2 justify-items-center">
        {/* Service 1: Data Analysis */}
        <div className="w-[300px] bg-white rounded-2xl items-center py-2">
          <div className="flex px-2 py-4 space-x-4">
            <img className="h-12 w-12" src={share} alt="Data Analysis" />
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 text-md">
                Data Analysis
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Harness the power of data for informed decision-making.
              </p>
            </div>
          </div>
        </div>

        {/* Service 2: Lead Tracking */}
        <div className="w-[300px] bg-white rounded-2xl items-center py-2">
          <div className="flex px-2 py-4 space-x-4">
            <img className="h-12 w-12" src={track} alt="Lead Tracking" />
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 text-md">
                Lead Tracking
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Keep track of leads and prospects effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Service 3: Offline Access */}
        <div className="w-[300px] bg-white rounded-2xl items-center py-2">
          <div className="flex px-2 py-4 space-x-4">
            <img className="h-12 w-12" src={offline} alt="Offline Access" />
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 text-md">
                Offline Access
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Access your tools and data without an internet connection.
              </p>
            </div>
          </div>
        </div>

        {/* Service 4: Kanban Boards */}
        <div className="w-[300px] bg-white rounded-2xl items-center py-2">
          <div className="flex px-2 py-4 space-x-4">
            <img className="h-12 w-12" src={kanban} alt="Kanban Boards" />
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 text-md">
                Kanban Boards
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Organize your work visually with kanban boards.
              </p>
            </div>
          </div>
        </div>

        {/* Service 5: Rewards Program */}
        <div className="w-[300px] bg-white rounded-2xl items-center py-2">
          <div className="flex px-2 py-4 space-x-4">
            <img className="h-12 w-12" src={reward} alt="Rewards Program" />
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 text-md">
                Rewards Program
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Motivate your team with our rewards program.
              </p>
            </div>
          </div>
        </div>

        {/* Service 6: Global Reach */}
        <div className="w-[300px] bg-white rounded-2xl items-center py-2">
          <div className="flex px-2 py-4 space-x-4">
            <img className="h-12 w-12" src={country} alt="Global Reach" />
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 text-md">
                Global Reach
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Connect with partners and clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  const contact = (
    <section className="appointment-section">
      <div className="md:flex md:flex-row flex-row justify-start gap-3 space-y-6">
        <div className="flex-1 md:p-10 flex justify-items-start">
          <img src={video} className="rounded-3xl" alt="Video Thumbnail" />
        </div>
        <div className="flex-1 flex justify-center items-center text-center md:text-left">
          <div className="space-y-2">
            <h5 className="text-sm font-semibold text-red-400 uppercase">
              Schedule an Appointment
            </h5>
            <h2 className="text-3xl font-bold text-black">
              Book Your Appointment
            </h2>
            <p className="py-4 text-gray-500">
              Your time is valuable. Please select a date and time for your
              appointment.
            </p>
            <div className="relative text-gray-700">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker label="Select Date and Time for Your Appointment" />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  return (
    <div className="bg-white mx-auto max-w-7xl">
      {Nav}
      {/* banner */}
      {Banner}
      {services}
      {contact}
    </div>
  );
}

export default Salon;
