import React, { createContext, useContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {
    const [name, setName] = useState("ankur");

    const changeToPikachu = () => {
        setName("Pikachu");
    };

    return (
        <DataContext.Provider value={{ name, changeToPikachu }}>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;