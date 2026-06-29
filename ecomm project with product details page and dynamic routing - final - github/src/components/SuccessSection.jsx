import {
  FaMicrochip,
  FaCube,
  FaShieldAlt,
} from "react-icons/fa";

export default function SuccessSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <div>

            <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Jam-packed with all the tools you need to succeed!
            </h2>

            <p className="mt-8 text-2xl text-gray-400 leading-10 max-w-xl">
              It's never been easier to build a business of your own.
              Our tools will help you with the following:
            </p>

            {/* Features */}

            <div className="mt-14 space-y-10">

              {/* Feature 1 */}

              <div className="flex items-center gap-6">

                <div className="text-pink-500 text-4xl">
                  <FaMicrochip />
                </div>

                <h3 className="text-3xl font-semibold text-gray-600">
                  Faster Processing and Delivery
                </h3>

              </div>

              {/* Feature 2 */}

              <div className="flex items-center gap-6">

                <div className="text-yellow-500 text-4xl">
                  <FaCube />
                </div>

                <h3 className="text-3xl font-semibold text-gray-600">
                  Out of the Box Tracking and Monitoring
                </h3>

              </div>

              {/* Feature 3 */}

              <div className="flex items-center gap-6">

                <div className="text-green-500 text-4xl">
                  <FaShieldAlt />
                </div>

                <h3 className="text-3xl font-semibold text-gray-600">
                  100% Protection and Security for Your App
                </h3>

              </div>

            </div>

          </div>

          {/* Right Image */}

          <div className="flex justify-center">

            <img
              src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
              alt="Success Illustration"
              className="w-full max-w-xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}