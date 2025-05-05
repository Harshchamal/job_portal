import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider =(props) => {

    const [ searchFilter,setSearchFilter ] = useState({
        title:'',
        location:''
    })

    const [isSearched,setIsSearched] = useState(false)

    const Value ={
        setSearchFilter,searchFilter,
        isSearched, setIsSearched,
    }


    return (<AppContext.Provider value={Value}>
        {props.children}

    </AppContext.Provider>)
}
