import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyBookButton } from "@/components/layout/sticky-book-button";
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/home";
import CorporateMagic from "@/pages/corporate-magic";
import TradeShowMagic from "@/pages/trade-show-magic";
import KeynoteMagic from "@/pages/keynote-magic";
import Masterminds from "@/pages/masterminds";
import About from "@/pages/about";
import Testimonials from "@/pages/testimonials";
import Videos from "@/pages/videos";
import Contact from "@/pages/contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pb-20 md:pb-0">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/corporate-magic" component={CorporateMagic} />
          <Route path="/trade-show-magic" component={TradeShowMagic} />
          <Route path="/keynote-magic" component={KeynoteMagic} />
          <Route path="/masterminds" component={Masterminds} />
          <Route path="/about" component={About} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/videos" component={Videos} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
