import { useNavigate } from 'react-router-dom'

import bannerImage from '../../assets/image1.png'
import Header from '../../components/Header'
import Button from '../../components/Button'

import { Container, TextContent, Title, TitleHighlight } from './styles'

export default function Home() {

    const navigate = useNavigate();

    const handleClickSingIn = () => {
        navigate('/login')
    }

    return (
    <>
        <Header/>
        <Container>
            <div>
                <Title>
                    <TitleHighlight>Implemente <br/></TitleHighlight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title={"COMEÇAR AGORA"} variant="secondary" onClick={handleClickSingIn}/>
            </div>  
            <div>
                <img src={bannerImage} alt="Imagem Principal" />
            </div>  
        </Container>
    </>
    )
}