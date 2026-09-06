import { Suspense } from "react";
import "./App.css";
import type { CountryType } from "./components/type";
import Countries from "./components/Countries/Countries";

//step 1: create a promise to load data
const countriesPromise = async (): Promise<CountryType[]> => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await res.json();
  return data.countries;
};

function App() {
  return (
    <>
      <h2>World on the Go....</h2>
      <Suspense fallback={<div>Loading</div>}>
        <Countries countriesPromise={countriesPromise()}></Countries>
      </Suspense>
    </>
  );
}

export default App;
