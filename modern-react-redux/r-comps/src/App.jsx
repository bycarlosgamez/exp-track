import ProfileCard from './components/ProfileCard';
import AlexaImg from './assets/images/alexa.png';
import CortanaImg from './assets/images/cortana.png';
import SiriImg from './assets/images/siri.png';

function App() {
  return (
    <>
      <h1>Peronsal Digital Assitants</h1>
      <ProfileCard title='Alexa' handle='@hanlde' img={AlexaImg} />
      <ProfileCard title='Cortana' handle='@hanlde' img={CortanaImg} />
      <ProfileCard title='Siri' handle='@hanlde' img={SiriImg} />
    </>
  );
}

export default App;
