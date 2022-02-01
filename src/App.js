export default function App(){
  return(
    <div>
      <h1>Calculadora IMC</h1>
      <span>Vamos Calcular seu imc</span>

      <div className="area-input">
        <input 
            type="text"
            placeholder="Peso em (Kg) Ex:90"        
        />
        <input 
            type="text"
            placeholder="Altura em (cm) Ex:180"        
        />

        <button>
          Calcular
        </button>

      </div>

      <h2>Seu imc foi 25, você está abaixo do peso!</h2>


    </div>

  )
}