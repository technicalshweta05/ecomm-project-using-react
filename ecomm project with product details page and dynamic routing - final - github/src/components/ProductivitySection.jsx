import { FaCheckCircle } from "react-icons/fa";

export default function ProductivitySection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* First Row */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="https://cdn.devdojo.com/images/december2020/productivity.png"
              alt="Boost Productivity"
              className="w-full max-w-md"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Boost Productivity
            </h2>

            <p className="mt-6 text-xl text-gray-600 leading-9">
              Build an atmosphere that creates productivity in your
              organization and your company culture.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-yellow-400 text-2xl" />
                <span className="text-lg text-gray-600">
                  Maximize productivity and growth
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-yellow-400 text-2xl" />
                <span className="text-lg text-gray-600">
                  Speed past your competition
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-yellow-400 text-2xl" />
                <span className="text-lg text-gray-600">
                  Learn the top techniques
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mt-28">

          {/* Left Content */}
          <div>

            <h2 className="text-4xl font-bold text-gray-900">
              Automated Tasks
            </h2>

            <p className="mt-6 text-xl text-gray-600 leading-9">
              Save time and money with our revolutionary services.
              We are the leaders in the industry.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-yellow-400 text-2xl" />
                <span className="text-lg text-gray-600">
                  Automated task management workflow
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-yellow-400 text-2xl" />
                <span className="text-lg text-gray-600">
                  Detailed analytics for your data
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-yellow-400 text-2xl" />
                <span className="text-lg text-gray-600">
                  Some awesome integrations
                </span>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://cdn.devdojo.com/images/december2020/settings.png"
              alt="Automated Tasks"
              className="w-full max-w-md"
            />
          </div>

        </div>

      </div>
    </section>
  );
}