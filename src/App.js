import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Main'

function App() {

  const planos = [
    {
      nome: "Básico",
      texto: "Sem compromisso, cancele quando quiser.",
      valor: '18,00',
      icontext: 'Divirta-se com a Netflix em todos os seus aparelhos',
      vantagens: [
        'Assista em 1 dispositivo em sua casa',
        'Qualidade HD',
        'Cancelamento a qualquer momento',
      ],
    },
    {
      nome: "Padrão",
      texto: "Sem compromisso, cancele quando quiser.",
      valor: '29,00',
      color: '',
      icontext: 'Divirta-se com a Netflix em todos os seus aparelhos',
      vantagens: [
        'Assista em 2 dispositivos, 1 além da sua casa',
        'Qualidade HD',
        'Cancelamento a qualquer momento',
      ],
    },
    {
      nome: "Premium",
      texto: "Sem compromisso, cancele quando quiser.",
      valor: '59,00',
      color: '',
      icontext: 'Divirta-se com a Netflix em todos os seus aparelhos',
      vantagens: [
        'Assista em 4 dispositivos , 3 além da sua casa',
        'Qualidade 4k',
        'Cancelamento a qualquer momento',
      ],
    },
    {
      nome: "Premium",
      texto: "Sem compromisso, cancele quando quiser.",
      valor: '59,00',
      color: '',
      icontext: 'Divirta-se com a Netflix em todos os seus aparelhos',
      vantagens: [
        'Assista em 4 dispositivos, , 3 além da sua casa',
        'Qualidade 4k',
        'Cancelamento a qualquer momento',
      ],
    },
  ];


  return (
    <div>
      <Card planos={planos} />
    </div>
  );
}

export default App;
