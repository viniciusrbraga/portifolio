import React from 'react'
import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/sidebar'
import Sobre from './Sobre'
import Projetos from './Projetos'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
