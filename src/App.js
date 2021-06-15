import './App.css';
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div className='App'>
      <Carousel className='carousel-container'>
        <div className='card'>
          <p>OIDC (OpenID Connect) Integration</p>
        </div>
        <div className='card'>
          <p>SAML Integration</p>
        </div>
        <div className='card'>
          <p>SCIM Integration</p>
        </div>
        <div className='card'>
          <p>SWA Integration</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
