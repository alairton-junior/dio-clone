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
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { Link } from 'react-router-dom'

export default function Header() {

    const { user, handleSignOut } = useContext(AuthContext)

    return (
        <Wrapper>
            <Container>
                <Row>
                    <Link to="/">
                        <img src={Logo} alt="Logo da Dio" />
                    </Link>
                    {user.id ?
                    
                    (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..."/>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Olá, { user.name}</Menu>
                        </>
                    ) : null}
                    
                </Row>
                <Row>
                    {user.id ? (
                        <>
                            <UserPicture src="https://avatars.githubusercontent.com/u/59837025?v=4"/>
                            <a href="#" onClick={handleSignOut}> Sair </a>
                       </>
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

