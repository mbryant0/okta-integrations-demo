import './App.css';
import { Carousel } from 'react-responsive-carousel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Carousel className='carousel-container'>
        <div className='card'>
          <div className='signin-card'>
            <p>OIDC (OpenID Connect) Integration</p>
            <Form>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name='email' type='text' autoComplete='off' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name='password'
                  type='password'
                  autoComplete='off'
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className='card'>
          <div className='signin-card'>
            <p>SAML Integration</p>
            <Form>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name='email' type='text' autoComplete='off' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name='password'
                  type='password'
                  autoComplete='off'
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className='card'>
          <div className='signin-card'>
            <p>SWA Integration</p>
            <Form>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name='email' type='text' autoComplete='off' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name='password'
                  type='password'
                  autoComplete='off'
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
