import { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function load() {
      const response = await fetch(`/api/getNames/${page}`);
      const data = await response.json();
      setData(data);
    }

    load();
  }, [page]);


  return (
    <div>
      <h1>Movies and actors</h1>
      <h2>Page: {page}</h2>
      <div>
        <button onClick={()=>setPage((page) => page - 1)} disabled={page === 0}>Back</button>
        <button onClick={()=>setPage((page) => page + 1)}>Forward</button>
      </div>
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
