import React, { useState } from 'react'

const Login = () => {

  const[state,setState] = useState('Sign Up');
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }

  return (
    <form className='min-h-[65vh] flex items-center' action="">
      <div className='flex flex-col gap-3 m-auto p-8 items-start min-w-[340px] sm:min-w-96 border rounded-lg text-zinc-600 text-sm shadow-lg text-left'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book Appointment</p>
        {
          state === 'Sign Up' && <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded p-2 mt-1 w-full' type="text" onChange={(e) => setName(e.target.name)} value={name} required/>
        </div>
        }
        
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded p-2 mt-1 w-full' type="email" onChange={(e) => setName(e.target.name)} value={name} required/>
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded p-2 mt-1 w-full' type="password" onChange={(e) => setName(e.target.name)} value={name} required/>
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        {
          state === 'Sign Up' 
          ? <p> Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>login here</span></p>
          : <p> Create an new account <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login