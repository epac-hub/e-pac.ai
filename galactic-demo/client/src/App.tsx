import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { Redirect, Route, Router as WouterRouter, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { PageTransitionProvider } from "./components/PageTransition";
import GlobalSoundtrack from "./components/GlobalSoundtrack";
import GlobalStarfield from "./components/GlobalStarfield";
import GlobalCursor from "./components/GlobalCursor";
import ThemeSwitch from "./components/ThemeSwitch";
import Home from "./pages/Home";
import About from "./pages/About";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work"><Redirect to="/" replace /></Route>
      <Route path="/case-study/:slug"><Redirect to="/" replace /></Route>
      <Route component={Home} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    try {
      localStorage.removeItem("galactic-achievements");
      localStorage.removeItem("galactic-visited");
      localStorage.removeItem("paint-stroke-config");
    } catch {
      // Storage may be unavailable in private browsing.
    }
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable>
        <TooltipProvider>
          {import.meta.env.BASE_URL === "/" ? (
            <PageTransitionProvider>
              <Toaster />
              <GlobalSoundtrack />
              <GlobalStarfield />
              <GlobalCursor />
              <ThemeSwitch />
              <AppRoutes />
            </PageTransitionProvider>
          ) : (
            <WouterRouter hook={useHashLocation}>
              <PageTransitionProvider>
                <Toaster />
                <GlobalSoundtrack />
                <GlobalStarfield />
                <GlobalCursor />
                <ThemeSwitch />
                <AppRoutes />
              </PageTransitionProvider>
            </WouterRouter>
          )}
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
