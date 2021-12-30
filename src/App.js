
import logo from './logo.svg';
import './App.css';
import Card from './component/Card';

function App() {
  return (
    <div className='App'> 
      <Card name='Безлимит 300' price='300р.' speed='до 10 Мбит/сек' info/>
      <Card name='Безлимит 400' price='400р.' speed='до 50 Мбит/сек' info/>
      <Card name='Безлимит 500' price='500р.' speed='до 1000 Мбит/сек' info />
      <Card name='Безлимит 1000' price='1000р.' speed='до 2000 Мбит/сек' info/>
    </div>


  );
}



export default App;
