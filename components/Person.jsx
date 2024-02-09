import axios from "axios";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs" ;

const Person = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState({});
  const url = `https://swapi.dev/api/people/?search=${name}`;

  const fetchCharacter = (e) => {
    e.preventDefault();
    try {
      axios.get(url).then((response) => {
        setPeople(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 pb-4 text-white z-10">
        <form
          onSubmit={fetchCharacter}
          className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-3xl"
        >
          <div>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Search"
              className="bg-transparent border-none text-white focus:outline-none text-2xl"
            />
          </div>
          <button onClick={fetchCharacter}>
            <BsSearch size={20} />
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center pt-10">
        {people?.results?.map((d, i) => (
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
    </>
  );
};

export default Person;
