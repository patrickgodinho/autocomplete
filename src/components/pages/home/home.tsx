import './home.styles.css';
import { Autocomplete } from '../../organisms/autocomplete';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <Autocomplete />
      </div>
    </div>
  );
}

export default Home;
