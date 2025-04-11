
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Cases from "./pages/Cases";
import CaseDetail from "./pages/CaseDetail";
import Gallery from "./pages/Gallery";
import ArtDetail from "./pages/ArtDetail";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// CMS Pages
import CmsLogin from "./pages/CmsLogin";
import CmsLayout from "./components/cms/CmsLayout";
import RequireAuth from "./components/cms/RequireAuth";
import Dashboard from "./pages/cms/Dashboard";
import ProjectsManagement from "./pages/cms/ProjectsManagement";
import CmsPlaceholder from "./pages/cms/CmsPlaceholder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:id" element={<CaseDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<ArtDetail />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* CMS Routes */}
          <Route path="/cms" element={<CmsLogin />} />
          <Route path="/cms/*" element={
            <RequireAuth>
              <CmsLayout />
            </RequireAuth>
          }>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="projects" element={<ProjectsManagement />} />
            <Route path="cases" element={<CmsPlaceholder title="Case Studies Management" />} />
            <Route path="gallery" element={<CmsPlaceholder title="Gallery Management" />} />
            <Route path="board" element={<CmsPlaceholder title="Board Members Management" />} />
            <Route path="settings" element={<CmsPlaceholder title="Settings" />} />
          </Route>
          
          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
