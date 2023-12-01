// ... other imports
import portfolioData from "./data";

function App() {
  return (
    <div className="container">
      <h1>My Portfolio</h1>
      {portfolioData.map((project) => (
        <div key={project.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{project.year}</h6>
            <p className="card-text">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
