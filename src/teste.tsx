import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};

  // se o props.fontSize não for resilvido, será aplicado o que está depois do ||
  font-size: ${(props) => props.fontSize || '18px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao fontSize="30px" principal>
        Enviar
      </Botao>
      <Botao principal={false}>Cancelar</Botao>

      {/* as="" pode transformar um elemento HTML em outro (ex: 'button' para 'a') */}
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
