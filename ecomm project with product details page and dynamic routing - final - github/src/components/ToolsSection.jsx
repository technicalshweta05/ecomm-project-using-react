import { FaArrowRight } from "react-icons/fa";

export default function ToolsSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              Useful Tools
              <br />
              to{" "}
              <span className="text-indigo-600">
                Help You Build
              </span>
              <br />
              <span className="text-indigo-600">
                Faster.
              </span>
            </h1>

            <p className="text-gray-500 text-xl mt-10 leading-9 max-w-xl">
              It's never been easier to build beautiful websites that
              convey your message and tell your story.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-12">

              <button className="flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 duration-300 text-white px-8 py-4 rounded-lg text-lg font-medium">

                Try It Free

                <FaArrowRight />

              </button>

              <button className="bg-gray-100 hover:bg-gray-200 duration-300 text-gray-600 px-8 py-4 rounded-lg text-lg font-medium">

                Learn More

              </button>

            </div>

          </div>

          {/* Right Image */}

          <div>

            <img
              src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Tools"
              className="rounded-2xl shadow-xl w-full"
            />

          </div>

        </div>

      </div>
    </section>
  );
}