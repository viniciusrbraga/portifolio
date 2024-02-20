import Titulo from '../components/Titulo'
import Paragrafo from '../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Corporis tenetur ipsam veritatis dolores repellendus odio mollitia quasi
      explicabo atque voluptatibus rem enim facere exercitationem adipisci
      omnis, ducimus, sint praesentium possimus.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=viniciusrbraga&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=viniciusrbraga&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
