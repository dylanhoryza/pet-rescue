import React from "react";
import '../styles/adoptdog.css'
import DogList from "../components/DogList";

export default function AdoptDogPage() {
  return (
    <div className="adpot-dog-container">
      <h1 className="adopt-header">Our Adoptable Dogs</h1>
      <DogList />
    </div>
  );
}