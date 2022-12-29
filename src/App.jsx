import { useState } from 'react'
import './App.css'
import { ListItem } from './ListItem'

function App() {
  const [texto, setTexto] = useState("")
  const [lista, setLista] = useState(["Cebolinha", "Arroz", "Feijão"])

  return (
    <div className="App">
      <h1>Lista de compras</h1>
      <ul style={{ "listStyle": "none" }}>
        {lista.map((item) => (<ListItem label={item} />))}
      </ul>
      <p>Você digitou: {texto}</p>
      <input type={"text"} placeholder={"Digite algo aqui"} onChange={(event) => setTexto(event.currentTarget.value)} />
      <button onClick={() => setLista([...lista, texto])}>Adicionar</button>
      <a href={'https://api.whatsapp.com/send?text=Lista%20de%20Compras:%0A' + lista.join(',%0A')}>
        <button>Enviar para o WhatsApp</button>
      </a>
    </div>
  )
}

export default App
