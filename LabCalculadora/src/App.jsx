import './App.css'
import React, { useState, useEffect } from 'react';
import Button from './components/Button/Button';

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operation, setOperation] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if ((key >= '0' && key <= '9') || key === '.') {
        handleButtonClick(key);
      } else if (key === 'Enter') {
        // console.log("detecta")
        handleButtonClick('=');
      } else if (key === 'Backspace') {
        handleButtonClick('C');
      } else if (key === '+') {
        handleButtonClick('+');
      } else if (key === '-') {
        handleButtonClick('-');
      } else if (key === '*') {
        handleButtonClick('*');
      } else if (key === '/') {
        handleButtonClick('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleButtonClick = (value) => {
    if (!isNaN(value) || value === '.') {
      // Handle numbers and decimal point
      setOperation(operation + value);
      setDisplayValue((prev) => (prev === '0' ? value : prev + value));
    } else if (value === 'C') {
      // Handle clear
      setDisplayValue('0');
      setOperation('');
    } else if (value === '=') {
      // Handle equals
      try {
        const result = eval(operation);
        setDisplayValue(String(result));
        setOperation(String(result));
      } catch {
        setDisplayValue('Error');
        setOperation('');
      }
    } else {
      // Handle operators
      if (operation !== '' && !isNaN(operation[operation.length - 1])) {
        setOperation(operation + value);
        setDisplayValue((prev) => prev + value);
      }
    }
  };

  return (
    <>
      <div className="contenedorGeneral">
        <div className="carcaza">
          <div className="display">
            <div className="text">{displayValue}</div>
          </div>
          <div className="teclado">
            <div className="lineaBoton1" style={{marginBottom: '0'}}>
              <Button text={"C"} onClick={() => handleButtonClick('C')} style={{width: '26%', marginBottom: '0', marginLeft: '1%'}}></Button>
              <Button text={"/"} onClick={()=> handleButtonClick('/')} style={{width: '26%', marginBottom: '0' }}></Button>
              <Button text={"x"} onClick={()=> handleButtonClick('*')} style={{width: '26%', marginRight: '1%', marginBottom: '0'}}></Button>
              <Button text={"-"} onClick={()=> handleButtonClick('-')} style={{width: '23%', marginRight: '4%', marginBottom: '0'}}></Button>
            </div>

            <div className="lineaBoton">
              <div className="columnaBtn">
                  <Button text={"7"} onClick={()=> handleButtonClick('7')}></Button>
                  <Button text={"4"} onClick={()=> handleButtonClick('4')}></Button>
              </div>
              <div className="columnaBtn">
                <Button text={"8"} onClick={()=> handleButtonClick('8')}></Button>
                <Button text={"5"} onClick={()=> handleButtonClick('5')}></Button>
              </div>
              <div className="columnaBtn">
                <Button text={"9"} onClick={()=> handleButtonClick('9')}></Button>
                <Button text={"6"} onClick={()=> handleButtonClick('6')}></Button>
              </div>
              <Button text={"+"} onClick={()=> handleButtonClick('+')} style={{width: '20%', height: '95%', marginTop: '1%'}}></Button>
            </div>
            <div className="lineaBoton">
              <div className="columnaBtn">
                <Button text={"1"} onClick={()=> handleButtonClick('1')}></Button>
                <Button text={"0"} onClick={()=> handleButtonClick('0')}></Button>
              </div>
              <div className="columnaBtn">
                <Button text={"2"} onClick={()=> handleButtonClick('2')}></Button>
                <Button text={"."} onClick={()=> handleButtonClick('.')}></Button>
              </div>
              <div className="columnaBtn">
                <Button text={"3"} onClick={()=> handleButtonClick('3')}></Button>
                <Button text={"%"} onClick={()=> handleButtonClick('%')}></Button>
              </div>
              <Button text={"="} onClick={()=> handleButtonClick('=')} style={{width: '20%', height: '95%', marginTop: '1%'}}></Button>
            </div>
          </div>

        </div>
      </div>
      
    </>
  )
}

export default App
