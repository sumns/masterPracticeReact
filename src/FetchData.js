import React, { useState, useEffect } from 'react';
import Table from './Table';

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return <Table data={data} />;
};

export default FetchData;
