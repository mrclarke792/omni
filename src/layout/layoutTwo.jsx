import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/footer'
import Modal from '../components/common/modal'
import HeaderTwo from '../components/common/headers/headerTwo'
import WhatsAppButton from '../WhatsAppButton'

const LayoutTwo = () => {
  return (
    <>
     <WhatsAppButton/>
      <Modal />
      <HeaderTwo />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutTwo