import './App.css';
import Consumer from './components/Consumer';
import  useAsync from './hooks/useAsync';
function App() {
  const consumerData = [
    { id: 1, name: 'Consumer 1' },
    { id: 2, name: 'Consumer 2' },
    { id: 3, name: 'Consumer 3' },
  ];
  const { execute, status, value, error } = useAsync(myFunc, false);
  return (
    <div className="App">
      { status === 'idle' && <div>Start your journey by clicking a button</div> }
      { status === 'success' && <div>{ value }</div> }
      { status === 'error' && <div>{ error }</div> }
      <button onClick={execute} disabled={status === 'pending'}>
        { status !== 'pending' ? 'Click me' : 'Loading...' }
      </button>
      {
        consumerData.map((consumer) => (
          <Consumer key={consumer.id} opt={true} obj={ consumer } />
        ))
      }
    </div>
  );
}

const myFunc = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random() * 10;
      random <= 5
        ? resolve('Request success')
        : reject('Error');
    }, 2000);
  });
};

export default App;
