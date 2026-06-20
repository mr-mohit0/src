import { Routes } from "react-router-dom";
import Card from "./assets/Card";
import  NaveBar from './assets/NaveBar'
import { Route } from "react-router-dom";
import About from './assets/About';
import Contact from './assets/Contact'
import ZustandStateCounter from './assets/ZustandStateCounter'
import ProjectsSection from "./assets/ProjectsSection";
import DynamicRout_projects from "./assets/DynamicRout_projects";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-black via-zinc-950 to-black">
        <NaveBar />
        <Routes>
          <Route path="/" element={ <Card/>} /> 
          <Route path="/About" element={ <About/>} /> 
          <Route path="/Contact" element={ <Contact/>} /> 
          <Route path="/Counter" element={ <ZustandStateCounter/>} /> 
          <Route path="/Projects" element={<ProjectsSection />}/>
            <Route />
          <Route path={`/Projects/:a`} element={ <DynamicRout_projects/>} /> 
        </Routes>
      </div>
    </>
  );
};

export default App;
