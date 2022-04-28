import React, { useContext, useState, useEffect } from "react";

const SidenavContext = React.createContext();

export function SidenavContextProvider(props) {
  //Responsible for opening and closing the sub container
  const [subContainer, setSubContainer] = useState(false);
  //Responsible for storing the subContainers entries
  const [subContainerEntries, setSubContainerEntries] = useState(null);
  //Responsible for holding all of the data that goes into the navbar
  const [entryStore, setEntryStore] = useState(null);

  useEffect(() => {}, []);

  return <SidenavContext.Provider>{props.children}</SidenavContext.Provider>;
}
