import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const { beerId } = useParams;

  const [beer, setBeer] = useState("");

  const fetchOneBeer = async () => {
    const response = await fetch(
      `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
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
      <section>
        <img src={beer.image_url} style={{ width: 50 }} />
      </section>

      <section>
        <p>{beer.name}</p>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </section>
    </>
  );
}

export default BeerDetailsPage;
