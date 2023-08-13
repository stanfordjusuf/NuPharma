import React from "react";

export default function CTA() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <img
              src="https://i.ibb.co/r2MpDJY/Webfinity-Assets-7.png"
              className="md:max-w-lg sm:rounded-lg"
              alt=""
            />
          </div>
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3
              className="text-indigo-600 font-semibold"
              style={{ color: "#93B1EB" }}
            >
              I have seen enough!
            </h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Grow with us{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#69d9f1] to-[#93B1EB]">
                today
              </span>{" "}
              and take the leap to a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#69d9f1] to-[#93B1EB]">
                new world
              </span>{" "}
              and a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#69d9f1] to-[#93B1EB]">
                #NuGeneration!
              </span>{" "}
            </p>
            <a
              href="#"
              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
              style={{ backgroundColor: "#93B1EB" }}
            >
              Yes I want to invest in the Nu Generation now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
