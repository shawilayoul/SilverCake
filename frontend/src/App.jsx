import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {ReactQueryDevtools } from '@tanstack/react-query-devtools'

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
