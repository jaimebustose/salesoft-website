import React from "react";

export default function PeopleCard() {
  return (
    <div className="w-96 px-6 py-8 rounded-lg text-center bg-neutral-50">
      <img
        className="w-1/2 my-5 mx-auto rounded-full"
        src="http://placekitten.com/200/200"
        alt="Sunset in the mountains"
      ></img>
      <div className="px-6 py-4">
        <div className="font-poppins text-2xl font-medium  text-neutral-700 mb-2">
          Manfred Engler H.
        </div>
        <span className="font-open text- text-neutral-300 block">
          Ing. Civil Informático
        </span>
      </div>
      <div className="px-6 py-4">
        <span className="font-open inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-neutral-300 mr-2">
          #Backend
        </span>
        <span className="font-open inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-neutral-300 mr-2">
          #CI/CD
        </span>
        <span className="font-open inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-neutral-300">
          #Docker
        </span>
      </div>
    </div>
  );
}
