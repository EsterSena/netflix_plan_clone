import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Main'

function App() {
  const planos = [
    {
      nome: "Básico",
      texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      valor: '18,00',
      icontext: 'Lorem Ipsum is simply dummy tex'
    },
    {
      nome: "Padrão",
      texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      valor: '29,00',
      color: '',
      icontext: 'Lorem Ipsum is simply dummy tex'
    },
    {
      nome: "Premium",
      texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      valor: '59,00',
      color: '',
      icontext: 'Lorem Ipsum is simply dummy tex'
    },
    {
      nome: "Premium",
      texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      valor: '59,00',
      color: '',
      icontext: 'Lorem Ipsum is simply dummy tex'
    },
  ];


  return (
    <div>
      <Card planos={planos} />
    </div>
  );
}

export default App;
