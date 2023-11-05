
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Project';
import projectData from './projectData';

function App() {

  const projectElements= projectData.map(data=>{
    return <Project key={data.id} projectData={data}/>
  })

  return (
    <>
    <Navbar/>
    <Hero/>
    <h2 id='project-heading'>Some of My Work</h2>
    {projectElements}
    </>
  );

}

export default App;
