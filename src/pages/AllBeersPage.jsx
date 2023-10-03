import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  const fetchAllBeers = async () => {
    const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
    const allBeers = await response.json();
    setBeers(allBeers);
    console.log(allBeers);
  };

  useEffect(() => {
    fetchAllBeers();
  }, []);

  return (
    <>
      <ul>
        {beers.map((oneBeer) => {
          return (
            <li key={oneBeer._id}>
              <section>
                <img src={oneBeer.image_url} style={{ width: 30 }} />
              </section>

              <section>
                <Link to={`/beers/${oneBeer._id}`}>
                  <p>{oneBeer.name}</p>
                </Link>
                
                <p>{oneBeer.tagline}</p>
                <p>Created by: {oneBeer.contributed_by}</p>
              </section>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default AllBeersPage;
