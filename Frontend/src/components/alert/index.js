import React, { createContext, useState } from 'react'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import style from './alert.module.scss'

export const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const [messages, setMessages] = useState([])

  const alertErrorMessage = (message) => {
    setMessages([...messages, message])
  }

  return (
    <div className={style.container}>
      <AlertContext.Provider value={{ alertErrorMessage }}>
        {children}
        <ToastContainer position="bottom-end" className="p-3">
          {messages &&
            messages.map((message, index) => {
              return <AlertToast message={message} key={index} />
            })}
        </ToastContainer>
      </AlertContext.Provider>
    </div>
  )
}

const AlertToast = ({ message }) => {
  const [show, setShow] = useState(true)

  return (
    <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
      <Toast.Header>
        <strong className="me-auto">Alert</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  )
}
