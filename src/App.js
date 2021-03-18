
import './App.css';
import Button from './components/Button';

const images = [
  '/img/Rectangle 135.png',
  '/img/Rectangle 136.png',
  '/img/Rectangle 137.png',
  '/img/Rectangle 207.png',
];

const icons = [
  '/img/Icon awesome-fire.png',
  '/img/Icon ionic-ios-thermometer.png',
  '/img/Icon awesome-mountain.png',
  '/img/Icon metro-directions-bike.png'
];

function App() {
  return (
    <div className="btn-1">
      <Button images={images} icons={icons}/>
    </div>
  );
}

export default App;
