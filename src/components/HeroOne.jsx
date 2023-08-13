import React from "react";

export default function heroOne() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-sm font-medium" style={{ color: "#93B1EB" }}>
              CALLING OUT VENTURE CAPITALISTS #NuGeneration
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
              DO YOU WANT TO LIVE IN A{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#69d9f1] to-[#93B1EB]">
                WORLD FREE FROM EATING DISORDERS
              </span>{" "}
              ?
            </h2>
            <p className="max-w-2xl mx-auto">
              We are seeking a $40 million investment in exchange for 5% stake
              in our company!
            </p>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                href="#"
                className="block py-2 px-4 text-white font-medium rounded-lg shadow-lg hover:shadow-none"
                style={{ backgroundColor: "#93B1EB" }}
              >
                Yes we do!
              </a>
            </div>
          </div>
          <br />
          <center>
            <img
              src="https://i.ibb.co/NxFSrKw/Screenshot-2023-08-12-at-18-02-13.png"
              className="lg:w-[1040px] lg:h-[640px] sm:w-full sm:h-full"
              style={{ borderRadius: "30px" }}
            />
          </center>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-sm font-medium" style={{ color: "#93B1EB" }}>
              THE HARSH TRUTH
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
              OVER{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#69d9f1] to-[#93B1EB]">
                70,000,000
              </span>{" "}
              PEOPLE LIVE WITH AN EATING DISORDER
            </h2>
            <p className="max-w-2xl mx-auto">
              Our mission is to heal the world! $40 million will cover the
              production and even marketing of more than 3,000,000 bottles of
              our treatment.
            </p>
          </div>
          <br />
          <center>
            <img
              src="https://i.ibb.co/PWTwg47/Screenshot-2023-08-13-at-06-37-18.png"
              className="lg:w-[1040px] lg:h-[640px] sm:w-full sm:h-full"
              style={{ borderRadius: "30px" }}
            />
          </center>
        </div>
      </section>
    </>
  );
}
