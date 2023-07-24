import perfil from '../../assets/perfil.svg'
import sacola from '../../assets/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`

const Icones = styled.ul`
  display: flex;
  align-items: center;
`

function IconesHeader() {
  return (
    <Icones>
      <Icone><img src={perfil} alt='icone do alurabooks' /></Icone>
      <Icone><img src={sacola} alt='icone do alurabooks' /></Icone>
    </Icones>
  )
}

export default IconesHeader