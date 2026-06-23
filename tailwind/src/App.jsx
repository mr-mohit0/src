import { Routes } from "react-router-dom";
import Card from "./assets/Card";
import NaveBar from "./assets/NaveBar";
import { Route } from "react-router-dom";
import About from "./assets/About";
import Contact from "./assets/Contact";
import ZustandStateCounter from "./assets/ZustandStateCounter";
import ProjectsSection from "./assets/ProjectsSection";
import DynamicRout_projects from "./assets/DynamicRout_projects";
import Team from "./assets/Team";
import Company from "./assets/Company";
import { JsonPlaceHolder } from "./assets/JsonPlaceHolder";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-linear-to-br from-black via-zinc-950 to-black">
          <NaveBar />
          <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/About" element={<About />}>
              <Route path="team" element={<Team />} />
              <Route path="company" element={<Company />} />
            </Route>
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Counter" element={<ZustandStateCounter />} />
            <Route path="/Projects" element={<ProjectsSection />} />
            <Route path={`/Projects/:id`} element={<DynamicRout_projects />} />
            <Route path={"/posts"} element={<JsonPlaceHolder />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </>
  );
};

export default App;
