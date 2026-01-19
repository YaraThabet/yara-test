import { createRootRoute, createRoute, createRouter, Navigate } from '@tanstack/react-router'
import { Products } from './modules/Products/views';
import {Layout} from './components/Layout'
const rootRoute = createRootRoute({//parent route
  component: Layout,
  notFoundComponent: () => <Navigate to="/" />,
});

export const productsRoute = createRoute({//route tree
  getParentRoute: () => rootRoute,
  path: "/",
  component: Products,
});
export const productRoute = createRoute({//route tree
  getParentRoute: () => productsRoute,
  path: "/ptoduct/$productId",
  component: () => <div>Product Details</div>,
});

export const routeTree = rootRoute.addChildren([productsRoute, productRoute]);


