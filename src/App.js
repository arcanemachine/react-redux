// import logo from './logo.svg';
import './App.css';
import './App.sass';

function App() {

  const listItems = ['feed cat', 'walk dog']

  return (
    <div className="container">
      <div className="section">
        <div className="title has-text-centered">
          React Todo
        </div>
      </div>

      <div className="section">
        <input type="search" 
               className="input"
               placeholder="Add an item..." />
      </div>

      <div className="section">
        <div className="subtitle has-text-centered">
          Items
        </div>
        <div className="columns is-mobile">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <ul>
                {listItems.map(listItem =>
                  <li>{listItem}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
