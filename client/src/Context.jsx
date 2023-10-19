import { createContext, useMemo, useState } from "react"

const initialState = {
    count: '',
    name: '',
}

export const Context = createContext(initialState);

export const DispatchContext = createContext({
    setCount : ()=>{},
    setName : ()=>{},
});

export const Provider = ({children}) => {
    const [state, setState] = useState(initialState);

    const setCount = (count) => {
        setState((prevState)=>({
            ...prevState,
            count : count
        }));
    }

    const setName = (name) => {
        setState((prevState)=>({
            ...prevState,
            name: name,
        }))
    }

    const dispatch = useMemo(()=>({
        setCount,
        setName,
    }),);

    return (
        <Context.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </Context.Provider>
    )
}
