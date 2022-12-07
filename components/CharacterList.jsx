import React from "react";

const CharacterList = ({ characters }) => {
  console.log("Chars in CharacterList--->", characters);
  return (
    <div className="flex flex-center">
      <div >
        {characters?.results?.map((item, index) => (
          <div key={index} >
            <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
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
