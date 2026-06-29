const plans = [
  {
    id: 1,
    title: "Basic",
    description:
      "The basic plan is a good fit for smaller teams and startups",
    price: 19,
    featured: false,
  },
  {
    id: 2,
    title: "Plus",
    description:
      "The plus plan is a good fit for medium-size to larger companies",
    price: 39,
    featured: true,
  },
  {
    id: 3,
    title: "Pro",
    description:
      "The pro plan is a good fit for larger and enterprise companies.",
    price: 59,
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Pricing Options
          </h2>

          <p className="mt-6 text-2xl text-gray-600">
            We've got a plan for companies of any size
          </p>

        </div>

        {/* Pricing Cards */}

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 border border-gray-300 rounded-2xl overflow-hidden shadow-sm">

          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`px-12 py-16 text-center border-r last:border-r-0 ${
                plan.featured ? "bg-gray-50" : "bg-white"
              }`}
            >
              <h3 className="text-5xl font-bold text-gray-900">
                {plan.title}
              </h3>

              <p className="mt-8 text-xl text-gray-600 leading-10">
                {plan.description}
              </p>

              {/* Price */}

              <div className="flex justify-center items-end gap-4 mt-20">

                <span className="text-7xl font-bold text-gray-900">
                  ${plan.price}
                </span>

                <div className="text-left text-lg text-gray-700 mb-2">
                  <p>per user</p>
                  <p>per month</p>
                </div>

              </div>

              {/* Button */}

              <button
                className={`w-full mt-20 py-4 rounded-lg border-2 border-blue-600 text-xl font-medium transition-all duration-300
                ${
                  plan.featured
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                Select Plan
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}