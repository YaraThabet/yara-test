import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import App from "./App";
import { createProductsModule } from "./modules/Products";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const { Provider: ProductsProvider } = createProductsModule();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 60_000,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <MantineProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </MantineProvider>
    </QueryClientProvider>
  </StrictMode>
);
