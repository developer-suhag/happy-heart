import React, { createContext, useEffect, useState } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("./services.json");
      const data = await res.json();
      setServices(data);
    };
    loadData();
  }, []);
  console.log(services);
  return (
    <DataContext.Provider value={services}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
