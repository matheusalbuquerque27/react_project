import Button from './button.js'; 
import { useState } from 'react'

function Form() {

    const [name, setName] = useState('Letícia')
    const [password, setPassword] = useState()
    const [passwordVerify, setPasswordVerify] = useState()

    function click(e){
        e.preventDefault()
        console.log(`Olá ${name}. Sua senha é ${password}`)
    }

    function clearPassword(e){
        e.preventDefault()
        setPasswordVerify('')
        console.log(passwordVerify)
    }

    return(
        <div>
            <form>
                <h1>Cadastro</h1>
                <input onChange={(e) => setName(e.target.value)} type='text' placeholder='Nome'></input>
                <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Senha'></input>
                <input onChange={(e) => setPasswordVerify(e.target.value)} type='password' placeholder='Confirme Senha'></input>
                <Button name='Enviar!' valor={name} password={password} event={click}/>
            </form>
            {passwordVerify == password && (
                <>
                <p>As senhas coincidem!</p>
                <button onClick={clearPassword}>Limpar</button>
                </>
            )}
        </div>
    )
}

export default Form