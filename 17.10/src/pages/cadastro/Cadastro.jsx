import React from 'react'
import { useState } from 'react'

const Cadastro = () => {
    const [nome, setName] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmaSenha, setConfirmaSenha] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("Enviando Formulário")
        console.log(nome, email, senha, confirmaSenha)

        setName("")
        setEmail("")
        setSenha("")
        setConfirmaSenha("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome</span>
                <input type="text" name="nome" id="nome" placeholder='Nome Completo' onChange={(e)=>setName(e.target.value)} value={nome}/>
            </label>
            <label>
                <span>E-Mail</span>
                <input type="email" name="email" id="email" placeholder='nome@site.com' onChange={(e)=>setEmail(e.target.value)} value={email} />
            </label>
            <label>
                <span>Senha</span>
                <input type="password" name="senha" id="senha" placeholder='*********' onChange={(e)=>setSenha(e.target.value)} value={senha} />
            </label>
            <label>
                <span>Confirme a senha</span>
                <input type="password" name="confirmaSenha" id="confirmaSenha" placeholder='*********' onChange={(e)=>setConfirmaSenha(e.target.value)} value={confirmaSenha} />
            </label>
            
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}


export default Cadastro