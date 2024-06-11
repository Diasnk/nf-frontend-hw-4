"use client";

import React from 'react';
import QueryClientProvider from './QueryClientProvider';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
