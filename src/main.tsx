import { registerRootComponent } from 'expo';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient"; // Ensure this path is correct
import { TooltipProvider } from "./components/ui/tooltip"; // Changed from @
import { ThemeProvider } from "./components/ThemeProvider"; // Changed from @
import App from "./App";

// 1. We create a wrapper so all your Providers still work on Mobile
function JoelGenApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <App />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

// 2. This is the mobile version of 'createRoot'
registerRootComponent(JoelGenApp);