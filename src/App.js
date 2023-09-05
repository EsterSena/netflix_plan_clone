import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Main'

function App() {
  const planos = [
    {
      nome: "Básico",
      texto: "Sem compromisso, cancele quando quiser.",
      valor: '18,00',
      icontext: 'Divirta-se com a Netflix em todos os seus aparelhos'
    },
    {
      nome: "Padrão",
      texto: "Sem compromisso, cancele quando quiser.",
      valor: '29,00',
      color: '',
      icontext: 'Divirta-se com a Netflix em todos os seus aparelhos'
    },
    {
      nome: "Premium",
      texto: "Sem compromisso, cancele quando quiser.",
      valor: '59,00',
      color: '',
      icontext: 'Divirta-se com a Netflix em todos os seus aparelhos'
    },
    {
      nome: "Premium",
      texto: "Sem compromisso, cancele quando quiser.",
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
