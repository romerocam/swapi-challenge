import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Spinner from "../components/Spinner";
import Image from "next/image";
import Person from "../components/Person";
import CharacterList from "../components/CharacterList";

export default function Home() {
  // const [id, setId] = useState("");
  const [characters, setCharacters] = useState({});
  const [name, setName] = useState("");
  const [people, setPeople] = useState({});
  const [loading, setLoading] = useState(false);
  const url = `https://swapi.dev/api/people/?search=${name}`;

  const fetchPeople = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      axios.get(url).then((response) => {
        setPeople(response.data);
        // console.log(response.data);
      });
    } catch (error) {
      console.log(error);
    }
    // setId("");
    setLoading(false);
  };
  console.log("PEOPLE", people);
  console.log("Name", name);
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => setCharacters(res.data));
    console.log("Characters--->", characters);
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <Head>
          <title>Swapi Challenge Get Wannabe</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />
        <Image
          src="https://images.unsplash.com/photo-1547700055-b61cacebece9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHN0YXIlMjB3YXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          layout="fill"
          className="object-cover"
          alt="starwars"
        />
        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 pb-4 text-white z-10">
          <form
            onSubmit={fetchPeople}
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
          >
            <div>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Search"
                className="bg-transparent border-none text-white focus:outline-none text-2xl"
              />
            </div>
            <button onClick={fetchPeople}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>
        <div>

        {people.results ? (
          <Person data={people} />
        ) : (
          <CharacterList characters={characters} />
        )}
        </div>
      </div>
    );
  }
}
