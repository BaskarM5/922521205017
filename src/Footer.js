import React from 'react'
const Footer = () => {
const year = new Date();
  return (
    <div className='App'>Content Copyright &copy; {year.getFullYear()}</div>
  )
}
export default Footer;