import { WobbleCard } from "@/components/ui/wobble-card";
import { Link, useLocation } from "react-router-dom";

export function EventDetails() {
  const location = useLocation();
  const data = location.state.data;
  console.log(data);

  return (
    <div className="">
      <WobbleCard
        containerClassName={`hidden md:block col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-no-repeat bg-cover`}
        header_image={data.header_image}
      >
        <div className="max-w-2xl">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {data.header}
          </h2>
          <p className="mt-4 text-base/6 text-neutral-200">
            {data.programming_bootcamp.description}
          </p>
        </div>
      </WobbleCard>
      <div className="grid gap-5 xl:grid-flow-col mt-5 ">
        <WobbleCard
          className="md:overflow-scroll scrollbar-hide "
          containerClassName="2xl:col-span-12 h-full md:h-[40rem] bg-white border-2 border-indigo-500 bg-grid-black/[0.1]"
        >
          <div className="max-w-4xl">
            <h2 className="text-6xl font-bold ">{data.header}</h2>
            <p className="p-5 max-w-2xl text-clip font-medium">
              {data.programming_bootcamp.description}
            </p>
            <img
              src={data?.programming_bootcamp?.bootcamp_image}
              alt=""
              className="h-72 w-full rounded-xl"
            />
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Overview
              </h3>
              <p className="text-gray-700 mb-6">
                {data.programming_bootcamp.overview.content}
              </p>

              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                What You’ll Learn
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                {data?.programming_bootcamp?.what_you_learn?.topics?.map(
                  (elem, i) => (
                    <li key={i}>
                      {elem.title} : {elem.description}
                    </li>
                  )
                )}
              </ul>

              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Why Attend
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>
                  Expert Instruction: Our experienced instructors will guide you
                  through each step, ensuring you grasp key concepts and
                  techniques.
                </li>
              </ul>

              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Schedule
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>9:00 AM - 10:00 AM: Registration & Welcome Breakfast</li>
                <li>
                  10:00 AM - 12:00 PM: Morning Session - HTML & CSS Basics
                </li>
                <li>12:00 PM - 1:00 PM: Lunch Break (provided)</li>
                <li>
                  1:00 PM - 3:00 PM: Afternoon Session - JavaScript Essentials &
                  Web App Development
                </li>
                <li>3:00 PM - 3:15 PM: Coffee Break</li>
                <li>3:15 PM - 5:00 PM: Project Work & Debugging Techniques</li>
                <li>5:00 PM - 6:00 PM: Wrap-Up & Networking Happy Hour</li>
              </ul>

              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Success Stories
              </h3>
              <p className="text-gray-700 mb-6">
                Hear from previous participants who have taken their first steps
                into the tech world through our bootcamp. Their stories
                highlight the impact of our intensive learning experience and
                the doors it has opened for them.
              </p>

              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Enrollment
              </h3>
              <p className="text-gray-700 mb-6">
                Spaces are limited to ensure a personalized learning experience.
                Secure your spot today by registering online. Our team is here
                to assist you with any questions and ensure you’re prepared for
                an exciting day of learning.
              </p>

              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h3>
              <p className="text-gray-700 mb-6">
                For more information, reach out to us at [email address] or call
                us at [phone number]. Stay updated by following us on social
                media.
              </p>

              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Join Us
              </h3>
              <p className="text-gray-700">
                Don’t miss this opportunity to kickstart your coding journey.
                Register now for our one-day intensive programming bootcamp and
                take the first step towards mastering programming skills. We
                look forward to seeing you there!
              </p>
            </div>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="bg-white h-[40rem] border-purple-500 border-2 bg-grid-black/[0.1]">
          <div className="p-2 rounded-lg ml-4">
            <h3 className=""></h3>
            <button className=" text-3xl font-semibold  mb-4 px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
              Event Details
            </button>

            <div className="mb-6">
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Event Type:</span> One-Day
                Intensive Programming Bootcamp
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Event Date:</span> [Insert Date
                Here]
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Event Time:</span> 9:00 AM -
                6:00 PM
              </p>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Registration Fee:</span> $99
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Total Seats:</span> 50
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Seats Booked:</span> 30
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Remaining Seats:</span> 20
              </p>
            </div>

            <div>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Total Price:</span> $99 per
                participant
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Payment Methods:</span> Credit
                Card, PayPal
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Refund Policy:</span> Full
                refund available up to 7 days before the event.
              </p>
            </div>
            <Link to="/payments" className="mt-2">
              <button className="px-12 w-full py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
                Book Now
              </button>
            </Link>
          </div>
        </WobbleCard>
      </div>
    </div>
  );
}
