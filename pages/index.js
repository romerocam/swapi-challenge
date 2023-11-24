import Head from "next/head";
import Person from "../components/Person";
import CharacterList from "../components/CharacterList";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Swapi Challenge</title>
        <meta name="description" content="Generated  by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Person />
      <CharacterList props={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://swapi.dev/api/people/");
  const data = await res.json();
  // console.log("CONTEXT", context)
  // console.log("acaaa", data.results);

  return {
    props: { data },
  };
}
