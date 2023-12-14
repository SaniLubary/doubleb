'use client';

import { ReactElement } from 'react';
import { SidenavProvider } from './context/sidenav';

export function Providers({ children }: {children: ReactElement}) {
  return (
      <SidenavProvider>{children}</SidenavProvider>
  );
}