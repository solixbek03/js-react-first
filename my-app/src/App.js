import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__container container">
          <div className="header__inner">
            <a className="header__link" href="#">
              <img src={logo} className="App-logo" alt="logo" width={100}/>
            </a>

            <nav className="header__nav">
              <ul className="header__nav-list">
                <li>
                  <a className="header__nav-list-link" href="#">Homer</a>
                </li>
      
                <li>
                  <a className="header__nav-list-link" href="#">About</a>
                </li>
      
                <li>
                  <a className="header__nav-list-link" href="#">Contact</a>
                </li>
      
                <li>
                  <a className="header__nav-list-link" href="#">Blog</a>
                </li>
      
                <li>
                  <a className="header__nav-list-link" href="#">Careers</a>
                </li>
              </ul>
            </nav>

            <button className="header__buttun" type="button">Request Invite</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
