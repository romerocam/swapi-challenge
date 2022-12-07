import React from "react";

const CharacterList = ({ characters }) => {
  console.log("Chars in CharacterList--->", characters);
  return (
    <div className="flex justify-center items-center">
      <div>
        {characters?.results?.map((item, index) => (
          <div key={index}>
            <div className="relative items-center m-auto p-2 text-gray-300 z-10">
              <div className=" bg-black/50 rounded-md flex flex-col items-center">
                <div>
                  <p className="text-4xl">NAME: {item.name}</p>
                </div>
                <p className="text-2xl">GENDER: {item.gender}</p>
                <p className="text-2xl">HEIGHT: {item.height}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
