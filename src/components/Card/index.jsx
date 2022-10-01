import { FiThumbsUp } from 'react-icons/fi'

import {
    CardContainer,
    ImageBackground,
    Content,
    UserInfo,
    UserPicture,
    PostInfo,
    HasInfo,
} from './styles'

export default function Cart() {
    return(
        <CardContainer>
            <ImageBackground src="https://www.alura.com.br/artigos/assets/react-conheca-novidades-versao-18-react/react-conheca-novidades-versao-18-react.png"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/59837025?v=4"/>
                    <div>
                        <h4>Alairton Junior</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>O que é ReactJS?</h4>
                    <p>O React é uma biblioteca front-end JavaScript de código aberto com foco em... <strong>Saiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JS</h4>
                    <p>
                        <FiThumbsUp/> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}