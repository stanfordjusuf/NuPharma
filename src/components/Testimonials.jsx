import React from "react";

export default function Testimonials() {
  const team = [
    {
      avatar: "https://i.ibb.co/8cQKRcC/10.png",
      name: "LEZATRON",
      title:
        "For anorexia. Learn to love food. A ground breaking appetite stimulant powered by Megestrol Acetate.",
    },
    {
      avatar: "https://i.ibb.co/nkZnHMv/11.png",
      name: "PIHUNRON",
      title:
        "For binge eating. Heal your relationship with food. A metabolic booster and appetite regulator fueled by Conjugated Linoleic Acid (CLA).",
    },
    {
      avatar: "https://i.ibb.co/sv0TFJS/12.png",
      name: "CLARITRON",
      title:
        "For mental health and LEZATRON or PIHUNRON activator. Don't let food control your life. A serotonin producer and absorption agent energized by Tryptophan Hydroxylase (TPH).",
    },
  ];

  return (
    <section className="bg-white py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto sm:text-center">
          <p className="text-gray-600 mt-3">#NuGeneration</p>
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            INTRODUCING THE{" "}
            <span className="text-transparent bg-clip-text" style={{ color: "#93B1EB" }}>
              TRINITY OF CURE. JUST 2 PILLS A DAY.
            </span>
          </h2>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {team.map((item, idx) => (
              <li key={idx}>
                <div className="w-full h-60 sm:h-52 md:h-56">
                  <img
                    src={item.avatar}
                    className="w-full h-full object-cover object-center shadow-md rounded-xl"
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-lg text-gray-700 font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-indigo-600">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <br />
      <center>
        <img
          src="https://i.ibb.co/VHqKZ8C/Webfinity-Assets-8.png"
          className="lg:w-[1040px] lg:h-[640px] sm:w-full sm:h-full"
          style={{ borderRadius: "30px" }}
        />
      </center>
    </section>
  );
}
