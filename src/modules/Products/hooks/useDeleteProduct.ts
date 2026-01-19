import { useProducts } from "..";
import { useQueryClient ,useMutation } from "@tanstack/react-query";
import { useGetAllProducts } from "./useGetAllProducts";


export const useDeleteProduct = ({onSuccess}:{onSuccess:()=> void }) => {
  const { delete: deleteProduct } = useProducts();

  const queryClient = useQueryClient();

  const { mutate, isError, isPending ,isSuccess } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [useGetAllProducts.queryKey] });
      onSuccess();
    }
  })
  return{
      deleteProduct: mutate,
        isError,
        isPending,
        isSuccess,
  }

};
