import { FaQuoteRight } from "react-icons/fa";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      designation: "CEO of Something",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80", 
      review:
        '"This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!"',
    },
    {
      id: 2,
      name: "Jane Doe",
      designation: "CTO of Business",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2547&q=80", 
      review:
        '"Thanks for creating this service. My life is so much easier. Thanks for making such a great product."',
    },
    {
      id: 3,
      name: "John Smith",
      designation: "Creator of Stuff",
      image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1256&q=80", 
      review:
        '"Packed with awesome content and exactly what I was looking for. I would highly recommend this to anyone."',
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="relative text-center">

          <p className="uppercase text-purple-600 font-bold tracking-wide text-xl">
            Don't Just Take Our Word For It
          </p>

          <h2 className="mt-4 text-5xl lg:text-6xl font-extrabold text-gray-900">
            See what others are saying
          </h2>

          <div className="w-2/5 h-[2px] bg-purple-100 mx-auto mt-8"></div>

          <FaQuoteRight className="hidden lg:block absolute right-16 top-0 text-7xl text-gray-200" />

        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-20">

          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`px-8 ${
                index !== 2 ? "lg:border-r border-gray-200" : ""
              }`}
            >
              {/* User */}
              <div className="flex items-center gap-5">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-xl text-gray-500 mt-1">
                    {item.designation}
                  </p>
                </div>

              </div>

              {/* Review */}
              <p className="mt-10 text-gray-500 text-2xl leading-10">
                {item.review}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}