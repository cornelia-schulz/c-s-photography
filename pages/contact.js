import Head from 'next/head'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import { useEffect, useState } from 'react'

export default function Contact() {
  const [formValid, setFormValid] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formErrors, setFormErrors] = useState({name: '', email: '', message: ''})
  const [error, setError] = useState('')
  const [nameValid, setNameValid] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [messageValid, setMessageValid] = useState(false)

  useEffect(() => {
    validateForm()
  }, [nameValid, emailValid, messageValid])

  const validateField = (fieldName, value) => {
    let fieldValidationErrors = formErrors
    let isNameValid = nameValid
    let isEmailValid = emailValid
    let isMessageValid = messageValid

    switch(fieldName) {
      case 'yourname':
        isNameValid = value.length > 0
        fieldValidationErrors.name = isNameValid ? '' : ' needs to be filled in. '
        break
      case 'email':
        isEmailValid =  value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.email = isEmailValid ? '' : ' is invalid. '
        break
      case 'message':
        isMessageValid = value.length > 0
        fieldValidationErrors.message = isMessageValid ? '' : ' needs to be filled in. '
        break
      default:
        break
    }
    setFormErrors(fieldValidationErrors)
    setNameValid(isNameValid)
    setEmailValid(isEmailValid)
    setMessageValid(isMessageValid)
  }

  const validateForm = () => {
    setFormValid(nameValid && Array.isArray(emailValid) && messageValid)
  }

  const validateInputField = (e) => {
    const name = e.target.name
    const value = e.target.value
    validateField(name, value)
    validateForm()
    setErrorMessage()
  }

  const handleUserInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    if (name === 'yourname') setName(value)
    if (name === 'email') setEmail(value)
    if (name === 'message') setMessage(value)
    validateField()
  }

  const setErrorMessage = () => {
    setError('')
    let currentMessage = ''
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        currentMessage = currentMessage + fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' ' + formErrors[fieldName] + ' '
        setError(currentMessage)
      }
    })}
  }

    return (
    <div page="contact">
      <Head>
        <title>Contact - Cornelia Schulz Photography</title>
      </Head>
      <h1 className="text-2xl text-center mb-6 mt-6">Contact Me</h1>
      <p className="text-center">Please contact me with any questions or comments via the form below.</p>
      <p className="text-center mb-4">Thank you.</p>
      <div className="text-orange">
        {error}
      </div>
      <form name="contact" action="/success" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="yourname" className="mb-2 block">Your name*:</label>
          <input value={name} onChange={handleUserInput} onBlur={validateInputField} type="text" name="yourname" id="yourname" className="w-full mb-4 text-black px-3" required />
        </p>
        <p>
          <label htmlFor="youremail" className="mb-2 block">Your email*:</label>
          <input value={email} onChange={handleUserInput} onBlur={validateInputField} type="email" name="email" id="youremail" className="w-full mb-4 text-black px-3" />
        </p>
        <p>
          <label htmlFor="yourmessage" className="mb-2 block">Your message*:</label>
          <textarea value={message} onChange={handleUserInput} onBlur={validateInputField} name="message" id="yourmessage" rows="6" className="w-full mb-4 text-black px-3"></textarea>
        </p>
        <p className="flex justify-center">
          <button type="submit" className={`${!formValid ? "bg-grey border-2" : "bg-orange hover:bg-dark-orange text-black"} px-4 py-1 rounded font-semibold`} disabled={!formValid}>Send</button>
        </p>
      </form>
    </div>
    )
}

Contact.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Navbar page="contact" />
        {page}
      </Layout>
    )
  }