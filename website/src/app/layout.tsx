import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import AppTheme from '@/shared-theme/AppTheme';
import AppAppBar from '@/components/AppAppBar';
import ModeSwitch from '@/components/ModeSwitch';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppTheme> {/* Wrap everything in AppTheme */}
            <ThemeProvider theme={theme}>
              <CssBaseline enableColorScheme />
              <AppAppBar />  {/* present across all pages */}
              <ModeSwitch />
              {children}  {/* Page content will be inserted here */}
            </ThemeProvider>
          </AppTheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
