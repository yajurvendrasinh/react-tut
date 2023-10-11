import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImg from './images/alexa.png';
import SiriImg from './images/siri.png';
import CortanaImg from './images/cortana.png';

function App() {
  return (
    <div className="App">

      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
            Personal Digital Assistants
          </p>
        </div>
      </section>

      <div className='container'>
        <section className="section">
          <div class="columns">
            <div class="column is-4">
              <ProfileCard
                desc="Alexa is created by Amazon and helps you buy things" 
                image={AlexaImg} 
                title='Alexa' 
                handle='@alexa99'
              />
            </div>
            <div class="column is-4">
              <ProfileCard 
                desc="Cortana is created by Microsoft, who knows what it does" 
                image={CortanaImg} 
                title='Cortana' 
                handle='@cortana32'
              />
            </div>
            <div class="column is-4">
              <ProfileCard
                desc="Siri is created by Apple, is being phased out"  
                image={SiriImg} 
                title='Siri' 
                handle='@siri01'
              />
            </div>
          </div>
        </section>
      </div>

    </div> /** end App */
  );
}

export default App;

/**
 * Main agenda of this app is to learn how to make re-useable components
 */
