import React from "react";

export default function Guarantee() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl space-y-3 md:mx-auto">
          <h1
            className="text-sm text-indigo-600 font-medium"
            style={{ color: "#93B1EB" }}
          >
            OUR STORY
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Nu Pharma's CEO,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#69d9f1] to-[#93B1EB]">
              Alden
            </span>{" "}
            , has first hand experience{" "}
            <span className="text-transparent bg-clip-text" style={{ color: "#93B1EB" }}>
              living with an eating disorder
            </span>
          </h2>
        </div>
        <div className="mt-4">
          <a
            href="#"
            className="inline-block py-2 px-4 text-white font-medium bg-indigo-800 duration-150 hover:bg-indigo-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
            style={{ backgroundColor: "#93B1EB" }}
          >
            Let's hear his story!
          </a>
        </div>
      </div>
    </section>
  );
}
