import React from "react";

const Person = ({ data }) => {
  console.log("DATA IN PERSON", data);
  return (
    <div className="flex justify-center items-center pt-10">
      {data.results.map((d, i) => (
        <div
          key={i}
          className="relative items-center m-auto p-2 text-gray-300 z-10"
        >
          <div className=" bg-black/50 rounded-md flex flex-col items-center">
            <div>
              <p className="text-3xl">NAME: {d.name}</p>
            </div>
            <p className="text-2xl">GENDER: {d.gender}</p>
            <p className="text-1xl">HEIGHT: {d.height}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Person;
