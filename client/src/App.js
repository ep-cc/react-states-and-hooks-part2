import { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      const response = await fetch('/api/getNames/1');
      const data = await response.json();
      setData(data);
    }

    load();
  }, []);


  return (
    <div>
      <h1>Movies and actors</h1>
      { data === null &&
        <div> Loading page </div>
      }
      { data &&
        <div>{JSON.stringify(data)}</div>
      }
    </div>
  );
}

export default App;
