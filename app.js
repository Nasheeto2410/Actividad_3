const { useState } = React;

function Likes() {
  const [likes, setLikes] = useState(0);
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="container">
      <img src="Imagen_2.jpg" alt="</div></div>Frenchie 2" className="image" style={{ width: '300px', height: '350px' }} />
      <button onClick={handleLike} className="like-button">
      <i className="fas fa-heart"></i> Like {likes}
      </button>
    </div>
  );
}

function Boton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const Theme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <button onClick={Theme} className={`theme-toggle-button ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="toggle-icon"></div>
    </button>
  );
}


function App() {
  return (
    <div>
      <h1><strong>Tarea 3 React</strong></h1>
      <Likes />
      <Boton />
      <h1>José Ignacio López Scheel</h1>

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
