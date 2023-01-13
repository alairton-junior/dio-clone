import { MdEmail, MdLock} from 'react-icons/md'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useContext } from 'react'

import { IFormData } from './types';


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
import { AuthContext } from '../../context/auth';


const schema = yup.object({
    email: yup.string().email('E-mail não é válido').required("Campo obrigatório"),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required("Campo obrigatório"),
  }).required();

export default function Login() {

    const { handleLogin } = useContext(AuthContext)

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });

    console.log(isValid, errors)

    const onSubmit = async (formData : IFormData) => {
        handleLogin(formData);
    };


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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input control={control} errorMessage={errors.email?.message} name="email" placeholder="E-mail" leftIcon={<MdEmail/>}/>
                        <Input control={control} errorMessage={errors.password?.message} name="password" placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="ENTRAR" variant="login" type="submit"/>
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