import React from "react";

const Person = ({ data }) => {
  console.log("DATA IN PERSON", data);
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      <div className=" bg-black/50 rounded-md flex flex-col items-center">
        <div>
          <p className="text-4xl">NAME: {data.results[0].name}</p>
        </div>
        <p className="text-2xl">GENDER: {data.results[0].gender}</p>
        <p className="text-2xl">HEIGHT: {data.results[0].height}</p>
      </div>
    </div>
  );
};

export default Person;
