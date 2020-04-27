import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import './styles.css';

function App() {
  const [binario, setBinario] = useState(0);
  const [decimal, setDecimal] = useState(0);
  const [resD, setResD] = useState(0);
  const [resB, setResB] = useState(0);
  const [errD, setErrD] = useState('');
  const [errB, setErrB] = useState('');

  function convertInDec(e) {
    e.preventDefault()

    if (binario.match(/^[0-1]+$/g) === null) {
      setErrD('Erro: Insira apenas 0 ou 1')
      return
    }

    setErrD('');

    let dec = binario.split('').map(Number).reverse();
    let calc = dec.reduce((total, valor, i) => total + valor * Math.pow(2, i));
    setResD(calc);
  }

  function convertInBin(e) {
    e.preventDefault()

    if (decimal.match(/^[0-9]+$/g) === null) {
      setErrB('Erro: Insira apenas números')
      return
    }
    setErrB('');

    let calc = Number(decimal);
    setResB(( calc >>> 0).toString(2));
  }
  
  return (
    <div className="container">
      <h1>Conversão </h1>
      <div className="txt"> 
        <p>Binário</p>
        <div>
          <FiArrowLeft size={18} color="#000000"/>
          <FiArrowRight size={18} color="#000000"/> 
        </div>
        
        <p>Decimal</p>
      </div>
      <div className="contents">
        <div className="content">
          <form onSubmit={convertInBin} className="binario">
          
          <input
            type="text"
            onChange={e => setDecimal(e.target.value)}
            placeholder="Digite um número decimal"/> <br></br>
          <button type="submit">Converter</button>

          <p>Binário: {resB}</p>
          </form>
          <p className="err">{errB}</p> 
        </div>
        <div className="content">
          <form onSubmit={convertInDec} className="decimal"> 
            <input
              type="text"
              onChange={e => setBinario(e.target.value)}
              placeholder="Digite um número binario" maxLength="8"/>      
            <button type="submit">Converter</button><br></br>

            <p>Decimal: {resD}</p>
          </form>
            <p className="err">{errD}</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
