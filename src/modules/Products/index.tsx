import { createContext, use, useContext, type PropsWithChildren } from "react";

const productsContext = createContext<string |null>(null)
type ProductsProviderProps = PropsWithChildren<{
    value: string | null
}>
export const ProductsProvider = ({value,children}:ProductsProviderProps) =>{
    return <productsContext.Provider value={value}>{children}</productsContext.Provider>
}

export const useProduct = () =>{
    const context =  useContext(productsContext)
    if(!context){
        throw new Error("useProduct must be used within a ProductsProvider")
    }
    return context
}