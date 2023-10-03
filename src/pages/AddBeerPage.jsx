import { useEffect, useState } from "react";

function AddBeerPage() {
  const [beerName, setBeerName] = useState("");
  const [beerTagline, setBeerTagline] = useState("");
  const [beerDescription, setBeerDescription] = useState("");
  const [beerFirstBrewed, setBeerFirstBrewed] = useState("");
  const [beerBrewersTips, setBeerBrewersTips] = useState("");
  const [beerAttenuationLevel, setBeerAttenuationLevel] = useState(0);
  const [beerContributedBy, setBeerContributedBy] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const values = {
      name: beerName,
      tagline: beerTagline,
      description: beerDescription,
      first_brewed: beerFirstBrewed,
      brewers_tips: beerBrewersTips,
      attenuation_level: beerAttenuationLevel,
      contributed_by: beerContributedBy,
    };

    try {
      const response = await fetch(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      const currentBeer = await response.json();
      console.log(currentBeer);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input
          value={beerName}
          onChange={(event) => setBeerName(event.target.value)}
          required
        />
      </label>

      <label>
        Tagline
        <input
          value={beerTagline}
          onChange={(event) => setBeerTagline(event.target.value)}
          required
        />
      </label>

      <label>
        Description
        <input
          value={beerDescription}
          onChange={(event) => setBeerDescription(event.target.value)}
          required
        />
      </label>

      <label>
        First brewed
        <input
          value={beerFirstBrewed}
          onChange={(event) => setBeerFirstBrewed(event.target.value)}
          required
        />
      </label>

      <label>
        Brewer's tips
        <input
          value={beerBrewersTips}
          onChange={(event) => setBeerBrewersTips(event.target.value)}
          required
        />
      </label>

      <label>
        Attenuation level
        <input
          value={beerAttenuationLevel}
          onChange={(event) => setBeerAttenuationLevel(event.target.value)}
          required
        />
      </label>

      <label>
        Contributed by
        <input
          value={beerContributedBy}
          onChange={(event) => setBeerContributedBy(event.target.value)}
          required
        />
      </label>

      <button type="submit">ADD NEW</button>
    </form>
  );
}

export default AddBeerPage;
