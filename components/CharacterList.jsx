import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
// import Spinner from "../components/Spinner";
import Image from "next/image";

const CharacterList = () => {
    const [characters, setCharacters] = useState({});
    const [name, setName] = useState("");
    const [people, setPeople] = useState({});
    const [loading, setLoading] = useState(false);
    const [next, setNext] = useState("");
    const [previous, setPrevious] = useState("");
    const url = `https://swapi.dev/api/people/?search=${name}`;

    const fetchCharacter = (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        axios.get(url).then((response) => {
          setPeople(response.data);
        });
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    console.log("PreviousPAGE--->", previous);
    console.log("NEXTPAGE--->", next);

  const handleNextPage = () => {
    axios.get(next).then((response) => {
      setCharacters(response.data);
      setPrevious(response.data.previous);
      setNext(response.data.next);
    });
  };

  const handlePreviousPage = () => {
    axios.get(previous).then((response) => {
      setCharacters(response.data);
      setPrevious(response.data.previous);
      setNext(response.data.next);
    });
  };

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/").then((res) => {
      setCharacters(res.data);
      setNext(res.data.next);
    });
    // console.log("Characters--->", characters);
  }, []);
    console.log("Chars in CharacterList--->", characters);
  return (
    <>
      
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />
        <Image
          src="https://images.unsplash.com/photo-1547700055-b61cacebece9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHN0YXIlMjB3YXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          layout="fill"
          className="object-cover"
          alt="starwars"
        />
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
        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 pb-4 text-white z-10">
          <button
            className="flex justify-center items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-3xl"
            disabled={!previous}
            onClick={handlePreviousPage}
          >
            Previous
          </button>

          <button
            className="flex justify-center items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-3xl"
            disabled={!next}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
        <div className="columns-2 justify-center items-center">
      <div>
        {characters?.results?.map((item, index) => (
          <div key={index}>
            <div className="relative items-center m-auto p-2 text-gray-300 z-10">
              <div className=" bg-black/50 rounded-md flex flex-col items-center">
                <div>
                  <p className="text-3xl ">NAME: {item.name}</p>
                </div>
                <p className="text-2xl">GENDER: {item.gender}</p>
                <p className="text-1xl">HEIGHT: {item.height}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default CharacterList;

// export async function getServerSideProps(context) {
//   const res = await axios.get("https://swapi.dev/api/people/");
//   const data = await res.json();
//   //   axios.get("https://swapi.dev/api/people/").then((res) => {
//   //       setCharacters(res.data);
//   //       setNext(res.data.next);
//   // });

//   return {
//     props: {data},
//   };
// }
