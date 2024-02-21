import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar></Avatar>
      <Titulo fontSize={20}>VBraga</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        viniciusrbraga
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Coboleiro
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
