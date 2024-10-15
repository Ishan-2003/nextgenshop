import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

const Template = (props) => {
    
  return (
    <div className='breadcrumb'>
      <div className='container-xxl'>
        <div className='row'>
            <div className='col-12 d-flex justify-content-center pt-2'>
                <p className='text-center w-100'>
                    <Link to='/' className='text-dark'><HomeIcon/></Link> / {props.title}
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Template
