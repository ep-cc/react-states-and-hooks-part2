import { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      const response = await fetch('/api/users');
      const data = await response.json();
      setData(data);
    }

    load();
  }, []);


  return (
    <div>
      <h1>Fake users</h1>
      { data === null && <div> Loading animation... </div> }
      { data && <div>{JSON.stringify(data)}</div> }
    </div>
  );
}

export default App;
