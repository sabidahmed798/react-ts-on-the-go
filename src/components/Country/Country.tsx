import { useState } from "react";
import type { CountryType } from "../type";
import "./Country.css";

export interface CountryProps {
  country: CountryType;
  handleVisitedCountry: (country: CountryType) => void;
}

export default function Country({
  country,
  handleVisitedCountry,
}: CountryProps) {
  const [visited, setVisited] = useState<boolean>(false);
  const handleVisited = () => {
    // setVisited(true);
    // if (visited === true) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    setVisited(!visited);
    handleVisitedCountry(country);
  };
  return (
    <div className={`country ${visited ? "country-visited" : ""}`}>
      <h3>{country.name.common}</h3>

      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <p className={`${visited && "population-known"}`}>Population: </p>
      <button onClick={handleVisited}>Visited</button>
      {visited ? "Visited" : "Mark as Visited"}
    </div>
  );
}
