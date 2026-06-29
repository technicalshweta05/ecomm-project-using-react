import logo from "../../assets/images/logo.svg"; 

export default function Footer() {
  return (
    <footer className="bg-white mt-10 border border-gray-200 rounded-t-xl">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Flowbite Logo"
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-3xl font-semibold text-black">
              Flowbite
            </h2>
          </div>

          {/* Footer Links */}
          <ul className="flex flex-wrap justify-center gap-8 text-gray-600 font-medium">
            <li>
              <a
                href="#"
                className="hover:underline transition-all duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:underline transition-all duration-300"
              >
                Privacy Policy
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:underline transition-all duration-300"
              >
                Licensing
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:underline transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Bottom Text */}
        <div className="text-center text-gray-500 text-lg">
          © 2023{" "}
          <span className="font-medium text-gray-600">
            Flowbite™
          </span>
          . All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}