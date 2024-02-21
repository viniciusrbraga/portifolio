import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/sidebar'
import Sobre from './Sobre'
import Projetos from './Projetos'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [estausandoTemaDark, setEstausandoTemaDark] = useState(false)

  function trocaTema() {
    setEstausandoTemaDark(!estausandoTemaDark)
  }

  return (
    <ThemeProvider theme={estausandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
