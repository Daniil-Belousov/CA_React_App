import { useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = (): JSX.Element => {
  const [isOpen, setOpen] = useState(false);

  const navArr = [
    {
      path: '/',
      text: 'Main'
    },
    {
      path: '/about',
      text: 'About'
    }
  ]
  
  return (
    <>
      {!isOpen ? <button className='menuBtn' onClick={() => setOpen(!isOpen)}>Menu</button> 
      : <button style={{color: 'red'}} className='menuBtn' onClick={() => setOpen(!isOpen)}>Close</button>}
      <div className='list' style={!isOpen ? {display: 'none'} : {display: 'flex'}}>
        <>
        {isOpen ? navArr.map(item => {
          return <Link to={item.path} key={item.path} className='item' onClick={() => setOpen(false)}>{item.text}</Link>
        }) : null}
        </>
      </div>
    </>
  )
}

export default NavBar