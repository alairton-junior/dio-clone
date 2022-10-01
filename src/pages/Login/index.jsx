import { MdEmail, MdLock} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import Header from '../../components/Header'
import Button from '../../components/Button'
import Input from '../../components/Input'

import { 
    Container,
    Title,
    SubtitleLogin,
    Wrapper, 
    CriarText,
    EsqueciText,
    TitleLogin,
    Row,
    Column,
    Line
} from './styles'

export default function Login() {

    const navigate = useNavigate();

    const handleClickFeed = () => {
        navigate('/feed')
    }

    return (
    <>
        <Header/>
        <Container>
            <Column>
                <Line/>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>  
            <Column>
                <Wrapper>
                    <Line/>
                    <TitleLogin>Já tem cadastro?</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form action="">
                        <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
                        <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="ENTRAR" variant="login" onClick={handleClickFeed} type="button"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci a senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>  
        </Container>
    </>
    )
}