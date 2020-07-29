import React from 'react';
import useAxios from 'axios-hooks'


function App() {
    const [{ data, loading, error }, refetch] = useAxios(
        'http://localhost:8080/welcome'
    )

  return (
    <div>
        <div>{data}</div>
    </div>
  );
}

export default App;
