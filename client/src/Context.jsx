import { createContext, useMemo, useState } from "react"

const initialState = {
    count: 0,
    name: '',
}

export const Context = createContext(initialState);

export const DispatchContext = createContext({
    setCount : ()=>{},
    setName : ()=>{},
});

export const Provider = ({children}) => {
    const [state, setState] = useState(initialState);

    const setCount = () => {
        setState((prevState)=>({
            ...prevState,
            count : prevState.count+1,
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
