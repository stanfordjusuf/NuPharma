import React from "react";

export default function Scarcity() {
  const stats = [
    {
      data: "<3",
      title: "new investors",
    },
    {
      data: "Who Truly Believe",
      title: "in our mission to heal the world of its eating disorder",
    },
  ];

  return (
    <section className="bg-white py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#69d9f1] to-[#93B1EB]">
              QUALITY
            </span>{" "}
            OVER{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#69d9f1] to-[#93B1EB]">
              QUANTITY
            </span>
          </h2>
          <p className="mt-3">Every quarter, we only accept ...</p>
        </div>
        <div className="mt-12">
          <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
            {stats.map((item, idx) => (
              <li key={idx} className="text-center px-12 md:px-16">
                <h4
                  className="text-4xl text-indigo-600 font-semibold"
                  style={{ color: "#93B1EB" }}
                >
                  {item.data}
                </h4>
                <p className="mt-3 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
