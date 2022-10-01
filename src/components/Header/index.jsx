import Button from '../Button'
import Logo from  '../../assets/logo-dio.svg'

import {
    Container, 
    Row,
    Menu,
    MenuRight, 
    Wrapper,
    Input,
    BuscarInputContainer,
    UserPicture
} from './styles'

export default function Header({autenticado}) {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={Logo} alt="Logo da Dio" />
                    {autenticado ?
                    
                    (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..."/>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                    
                </Row>
                <Row>
                    {autenticado ? (
                       <UserPicture src="https://avatars.githubusercontent.com/u/59837025?v=4"/>
                    ) : (
                        <>
                            <MenuRight href="#">Home</MenuRight>
                            <Button title="ENTRAR"/>
                            <Button title="CADASTRAR"/>
                        </>
                    )}
                    
                </Row>
            </Container>
        </Wrapper>
    )
}

