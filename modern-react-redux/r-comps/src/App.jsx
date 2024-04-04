import 'bulma/css/bulma.css';
import ProfileCard from './components/ProfileCard';
import AlexaImg from './assets/images/alexa.png';
import CortanaImg from './assets/images/cortana.png';
import SiriImg from './assets/images/siri.png';

function App() {
  return (
    <>
      <h1>Peronsal Digital Assitants</h1>
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              {' '}
              <ProfileCard title='Alexa' handle='@hanlde' img={AlexaImg} />
            </div>
            <div className='column is-4'>
              <ProfileCard title='Cortana' handle='@hanlde' img={CortanaImg} />
            </div>
            <div className='column is-4'>
              {' '}
              <ProfileCard title='Siri' handle='@hanlde' img={SiriImg} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
