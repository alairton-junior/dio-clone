import Header from '../../components/Header'
import Card from '../../components/Card'
import UserInfo from '../../components/UserInfo'

import { Container, Column, Title, TitleHighlight } from './styles';

export default function Feed() {

    return (
    <>
        <Header />
        <Container>
            <Column flex={3}>
                <Title>FEED</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Column>
            <Column flex={1}>
                <TitleHighlight>#RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={80} name={"Alairton Junior"} image="https://avatars.githubusercontent.com/u/59837025?v=4"/>
                <UserInfo percentual={35} name={"Alairton Junior"} image="https://avatars.githubusercontent.com/u/59837025?v=4"/>
                <UserInfo percentual={60} name={"Alairton Junior"} image="https://avatars.githubusercontent.com/u/59837025?v=4"/>
                <UserInfo percentual={20} name={"Alairton Junior"} image="https://avatars.githubusercontent.com/u/59837025?v=4"/>

            </Column>
            
        </Container>
    </>
    )
}