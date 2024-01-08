import React, { createContext, useContext, useState } from "react";

const AssemblyDataContext = createContext();

export const AssemblyDataProvider = ({ children }) => {
  const [selectedAssemblyData, setSelectedAssemblyData] = useState([]);

  const addNewAssembly = (assembly) => {
    setSelectedAssemblyData((existingData) => [...existingData, assembly]);
  };

  const removeAssembly = (assembly) => {
    setSelectedAssemblyData((existingData) =>
    existingData.filter((_, index) => index !== assembly)
    );
  };

  return (
    <AssemblyDataContext.Provider
      value={{
        selectedAssemblyData,
        addNewAssembly,
        removeAssembly,
      }}
    >
      {children}
    </AssemblyDataContext.Provider>
  );
};

export const useAssemblyContext = () => useContext(AssemblyDataContext)
