"use client";

import { QueryClient, QueryClientProvider as RQQueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }) => {
  return (
    <RQQueryClientProvider client={queryClient}>
      {children}
    </RQQueryClientProvider>
  );
};

export default QueryClientProvider;
