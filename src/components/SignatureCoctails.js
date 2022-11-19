import React, { useState } from "react";

export default function SignatureCocktails() {
  const [signatureCocktails] = useState([
    { id: 1, name: 'The Cabrini', description: 'A rum delight enhanced with mango puree, cherry and 7-up' },
    { id: 2, name: 'The Hancock', description: 'The perfect Whiskey sour' },
    { id: 3, name: 'The Skyline', description: 'An unforgettable Vodka Martini' },
    { id: 4, name: 'The Tower', description: 'A twist of Paloma' }
  ])
  return (
    <div className="text-center">
      <h1>
        --Signature Cocktails--
      </h1>
      <div className="row justify-content-center" >
        {signatureCocktails.map((signatureCocktails) =>
          <div className="border col-2 border-dark m-2 p-2" key={signatureCocktails.id}>
            <h3>{signatureCocktails.name}</h3>
            <p>{signatureCocktails.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}