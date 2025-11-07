import Footer from '@/components/layouts/Footer'
import MainHeader from '@/components/layouts/Header'
import { LayoutProps } from '@/types'
import React from 'react'

const Layout = ({children}:LayoutProps) => {
  return (
    <>
    <MainHeader/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
