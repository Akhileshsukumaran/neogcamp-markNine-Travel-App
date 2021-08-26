import React from "react";
import { useState } from "react";
import "./styles.css";

const seasonObj = {
  Summer: [
    {
      name: "1.Goa",
      rating: "5/5",
      description:
        "Lying on the western coast, Goa is India's smallest state and unlike any other, known for its endless beaches, stellar nightlife, eclectic seafood, world-heritage listed architecture."
    },
    {
      name: "2.Chennai",
      rating: "3/5",
      description:
        "Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. The city is home to Fort St. George, built in 1644 and now a museum showcasing the city’s roots as a British military garrison and East India Company trading outpost, when it was called Madras."
    }
  ],
  Monsoon: [
    {
      name: "1.Kerala",
      rating: "5/5",
      description:
        "Kerala is the best time to be visited during Monsoon. If you are fond of seeing scenic beauty, tea plantations and lush green covered mountains, Kerala is your best bet. Termed as God’s own country with heavy rainfall, Kerala has much to offer."
    },
    {
      name: "2.Coorg",
      rating: "4.5/5",
      description:
        "Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station. It is popular for its beautiful green hills and the streams cutting right through them."
    }
  ],
  Spring: [
    {
      name: "1.Ooty",
      rating: "4/5",
      description:
        "Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is a hill station in Tamil Nadu which serves as a top-rated tourist destination. Once regarded as the summer headquarters of the East India Company, the Queen of the hills is a picturesque getaway."
    },
    {
      name: "2.Hampi",
      rating: "3.5/5",
      description:
        "While the tourist season in Hampi usually ends with the month of March, night around when spring starts, visiting Hampi during the off-season is an experience in itself.Through the months of November to March, this temple town in Karnataka is teeming with both pilgrims and local tourists and hosts a number of festivals as well."
    }
  ]
};

const seasonDB = Object.keys(seasonObj);

export default function App() {
  const [selectedGenre, setGenre] = useState("Summer");

  function clickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="container">
      <h1>🌴 Travel Recommedation</h1>
      <p> select any of the following Seasons to get started:</p>
      <div>
        {seasonDB.map((genre) => {
          return <button onClick={() => clickHandler(genre)}>{genre}</button>;
        })}
      </div>
      <hr></hr>

      <div>
        <ul>
          {seasonObj[selectedGenre].map((season) => (
            <li key={season.name}>
              <div className="list"> {season.name} </div>
              <div className="list">Rating: {season.rating} </div>
              <div className="list">{season.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
