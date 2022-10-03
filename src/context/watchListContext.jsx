import { createContext, useState, useEffect, useContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [watchList, setWatchList] = useState(
    localStorage.getItem("watchList")?.split(",") || ["GOOGL", "MSFT", "AMZN"]
  );

  useEffect(() => {
    localStorage.setItem("watchList", watchList);
  }, [watchList]);

  const addStock = (stock) => {
    if (watchList.indexOf(stock) === -1) {
      setWatchList([...watchList, stock]);
    }
  };

  const deleteStock = (stock) => {
    setWatchList(watchList.filter((el) => el !== stock));
  };

  return (
    <AppContext.Provider value={{ watchList, addStock, deleteStock }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
