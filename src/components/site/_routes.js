import React from 'react';
import Home from './Home';
import Resources from './Resources';

export const routes = [
    {
      path: '/' || '/home',
      exact: true,
      main: () => <Home />
    },
    {
      path: '/resources',
      exact: true,
      main: () => <Resources />
  },
]