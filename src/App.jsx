import React, { useState } from 'react'
import './App.css'
import Button from './Components/Button/Button'
import Input from './Components/Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'




export default function App() {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()

    const formData = new FormData();

    formData.set('email', email)
    formData.set('password', password)

    // const response = await axios.post('http://127.0.0.1:8000/api/v1.0.0/login', formData)

    const response = await axios.post('http://127.0.0.1:8000/api/v1.0.0/login', formData)

    if (response.data.success) {
      toast.success(response.data.message)
      setTimeout(function () {
        navigate('/dashboard')

      }, 3000)
    } else {
      toast.error('email ou mot de passe invalide')

    }
  };

  return (

    <div>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <p>Renseignez vos informations de connexion pour vous connecter</p>

        <Input

          label={'Email'}
          reference={'email'}
          type={'email'}
          value={email}
          placeholder={'Saisir l\'adresse e-mail ici ...'}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <br />
        <Input

          label={'Mot de passe'}
          reference={'password'}
          type={'password'}
          value={password}
          placeholder={'Saisir votre mot de passe e-mail ici ...'}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        /> <br />

        <div>
          <Button type={'submit'} text={'Soumettre'} /> <br />
          <Button type={'reset'} text={'Annuler'} />
        </div>

        <div>
          <Link to={'/registration'} >Inscription</Link>
        </div>

      </form>
    </div>
  )
}




{/* <button onClick={() => {
        setLevel((level) => level + 1)
      }}> Incrémenter</button> */}

// <div className='boris'>
//   <h1>Niveau {level}</h1>

//   <Button text="Incrémenter" onClick={() => {
//     setLevel((level) => { return level >= 10 ? level : level + 1 })
//   }} /> <br />
//   <Button text="Décrémenter" onClick={() => {
//     setLevel((level) => { return level <= 0 ? level : level - 1 })
//   }} />

// </div>