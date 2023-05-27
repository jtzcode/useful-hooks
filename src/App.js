import './App.css';
import Consumer from './components/Consumer';
function App() {
  const consumerData = [
    { id: 1, name: 'Consumer 1' },
    { id: 2, name: 'Consumer 2' },
    { id: 3, name: 'Consumer 3' },
  ];
  return (
    <div className="App">
      {
        consumerData.map((consumer) => (
          <Consumer key={consumer.id} opt={true} obj={ consumer } />
        ))
      }
    </div>
  );
}

export default App;
