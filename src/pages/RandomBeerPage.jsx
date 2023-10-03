import { useEffect, useState } from "react";

function RandomBeersPage() {
  const [beer, setBeer] = useState("");

  const fetchOneBeer = async () => {
    const response = await fetch(
      "https://ih-beers-api2.herokuapp.com/beers/random"
    );
    const oneBeer = await response.json();
    setBeer(oneBeer);
    console.log(oneBeer);
  };

  useEffect(() => {
    fetchOneBeer();
  }, []);

  return (
    <>
      <img src={beer.image_url} style={{ width: 50 }} />
      <p>{beer.name}</p>
      <p>{beer.tagline}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </>
  );
}

export default RandomBeersPage;
