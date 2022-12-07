import React from "react";

const Person = ({ data }) => {
  console.log("DATA IN PERSON", data);
  return (
    <>
      {data.results.map((d, i) => (
        <div
          key={i}
          className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10"
        >
          <div className=" bg-black/50 rounded-md flex flex-col items-center">
            <div>
              <p className="text-4xl">NAME: {d.name}</p>
            </div>
            <p className="text-2xl">GENDER: {d.gender}</p>
            <p className="text-2xl">HEIGHT: {d.height}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Person;
