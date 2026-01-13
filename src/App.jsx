import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Home from './components/Home';

import Gallery from './components/Gallery';
import Message from './components/Message';
import Surprise from './components/Surprise';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="font-sans text-gray-800">
          <Home />
          <Gallery />
          <Message />
          <Surprise />
        </div>
      )}
    </>
  );
}

export default App;
