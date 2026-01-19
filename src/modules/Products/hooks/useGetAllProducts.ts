
import { useProducts } from "..";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "../entities/Product";

type SelectQueryData ={
    all:Product[],
    productWithDiscountHigherThan10: Product[],
    productWithDiscountLowerThan10: Product[],
}
const GET_ALL_PRODUCTS_QUERY_KEY = 'products';
export const useGetAllProducts = () => {
    const { getAll } = useProducts();
    const { data = { all:[], productWithDiscountHigherThan10: [], productWithDiscountLowerThan10: [] }, error, isLoading} = useQuery({
        queryKey: [GET_ALL_PRODUCTS_QUERY_KEY],
        queryFn: getAll,//هدي الفنكشن الى بتجيب الداتا من الريبو
        staleTime: 1000 * 60, // 1 minute
        // This option can be used to transform or select a part of the data returned by the query function. It affects the returned data value, but does not affect what gets stored in the query cache.
        select:(data:Product[]):SelectQueryData=>{
            return{
                all:data,
                productWithDiscountHigherThan10: data.filter((product) => product.hasDiscounts && product.discountPercentage > 10),
                productWithDiscountLowerThan10: data.filter((product) => product.hasDiscounts && product.discountPercentage <= 10),

            }
        }
    })
 
    return {
         productWithDiscountHigherThan10: data.productWithDiscountHigherThan10,
         productWithDiscountLowerThan10: data.productWithDiscountLowerThan10,
         isEmpty: error,
         error,
         isLoading,
    };
}

useGetAllProducts.queryKey = GET_ALL_PRODUCTS_QUERY_KEY;