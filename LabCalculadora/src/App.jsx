import './App.css'

function App() {

  return (
    <>
      <div className="contenedorGeneral">
        <div className="carcaza">
          <div className="display"></div>
          <div className="teclado">
            <div className="lineaBoton1">
              <div className="boton">C</div>
              <div className="boton">/</div>
              <div className="boton">*</div>
              <div className="boton">-</div>
            </div>

            <div className="lineaBoton">
              <div className="columnaBtn">
                {/* <div className="boton">7</div>
                <div className="boton">4</div> */}
              </div>
              <div className="columnbaBtn">
                {/* <div className="boton">8</div>
                <div className="boton">5</div> */}
              </div>
              <div className="columnbaBtn">
                
              </div>
            </div>
            <div className="lineaBoton">
              <div className="columnbaBtn"></div>
              <div className="columnbaBtn"></div>
            </div>
            <div className="boton">9</div>
            <div className="boton">+</div>
            <div className="boton">6</div>
            <div className="boton">1</div>
            <div className="boton">2</div>
            <div className="boton">3</div>
            <div className="boton">enter</div>
            <div className="boton">0</div>
            <div className="boton">.</div>
          </div>

        </div>
      </div>
      
    </>
  )
}

export default App
