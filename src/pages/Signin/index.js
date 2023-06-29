import React, { useState } from 'react'
import * as C from './style'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../../hooks/useAuth'


const Signin = () => {

  const {signin } = useAuth();
  const navigate = useNavigate();

  const handleLogin=()=>{
    if(!email || !senha){
      setError("Preencha todos os campos")
    }
    const res = signin(email, senha)
    if(res){
      setError(res)
      return;
    }
    navigate("/home");
  };

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");


  return (
    <C.Container>
      <C.Label>Sistema de Login</C.Label>
      <C.Content> 
        <Input
        type='text'
        placeholder='Digite seu email'
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
        type='password'
        placeholder='Digite sua senha'
        value={senha}
        onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text='Entrar' onClick={handleLogin}/>
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp; Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  )
}

export default Signin