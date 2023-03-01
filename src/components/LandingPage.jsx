import React from 'react';
import logo from '../images/logo.svg';
import ilustration from '../images/illustration-dashboard.png';
import {IoLogoFacebook} from 'react-icons/io5'
import {IoLogoTwitter} from 'react-icons/io5'
import {IoLogoInstagram} from 'react-icons/io5'     
import {useForm} from 'react-hook-form'                                        


const LandingPage = ({setData}) => {
  const { register, formState :{errors} , handleSubmit} = useForm()

  const onSubmit = (data) =>{
    setData(data)
  }


  return (
    <>
      <div className='container section-container-main'>
        <div className='row '>
          <div className='col-12 section-logo'>
            <img src={logo}/>
          </div>
          <div className='col-12 section-titles'> 
              <h1> We Are launching <b>soon!</b></h1>
              <p> Subscribe and get notified </p>
          </div>
          <div className='col-12 d-flex justify-content-center'> 
             <form className='form-group form-box' onSubmit={handleSubmit(onSubmit)} >
              <input 
               className={errors?.email  ? "col-12 col-md-8  input-error" :  "col-12 col-md-8 " }
               type="text" 
               placeholder='Your email address'
               {...register("email", {
                    required: true,
                    pattern: /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+).([a-zA-Z]{2,5})$/i,
                  })}
               />
            
              <button type='submit' className=' col-12 col-md-4 btn btn-primary'>Notify Me</button>
               {errors.email?.type === 'required' && <p className="validation-errors"> This box cannot be empty</p>}
               {errors.email?.type === 'pattern' && <p className="validation-errors"> Please provide a valid email address </p>}
             </form>
          </div>
          <div className='col-12 section-img'>
            <img  className='ilustration' src={ilustration}/>
          </div>
          
            <footer>
          
            <div className='section-icons'>
               <a href='#'> <IoLogoFacebook/> </a>
               <a href='#'> <IoLogoTwitter/> </a>
               <a href='#'> <IoLogoInstagram/> </a>
            </div>

            <div className='d-flex justify-content-center'>
              <p> ©Copyright Ping. All rights reserved.</p>
            </div>
                <div>
              <p className="attribution">
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
              Coded by <a href="#">Michael Diaz</a>.
              </p>

                </div>
            </footer>
            
        
        </div>
      </div>
     
      
    </>
  )
}

export default LandingPage