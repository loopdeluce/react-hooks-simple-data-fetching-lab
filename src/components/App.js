// create your App component here

import React, { useEffect, useState } from 'react';

function App() {
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json())
    .then(image => {
      setImage(image.message);
      setIsLoading(false)
    }
      )
  }, [])

  if (isLoading === true) {
    return <p>Loading...</p>;
  };

  return (
    <img src={image} alt="A Random Dog" />
  );
};

export default App;