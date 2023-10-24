import React from 'react'

const Home = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("Enviando Formulário")
        console.log(email, senha)

        setEmail("")
        setSenha("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                <span>E-Mail</span>
                <input type="email" name="email" id="email" placeholder='nome@site.com' onChange={(e)=>setEmail(e.target.value)} value={email} />
            </label>
            <label>
                <span>Senha</span>
                <input type="password" name="senha" id="senha" placeholder='*********' onChange={(e)=>setSenha(e.target.value)} value={senha} />
            </label>            
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Home