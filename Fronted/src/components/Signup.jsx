import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
        <div className='flex h-screen items-center justify-center'>
        <div className='w-[600px]'>
            <div className='modal-box'>
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none">✕</Link>
                
                <h3 className="font-bold text-lg">SignUp</h3>

                <div className='mt-4 space-y-2'>
                    <span>Name</span>
                    <br/>
                    <input 
                        type='text'
                        placeholder='Enter Your Name'
                        className='w-80 px-3 border rounded-md py-1 outline-none'{...register("name", { required: true })}
                        />
                        <br/>
                        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}

                    <br/>
                </div>
                <div className='mt-4 space-y-2'>
                    <span>Email</span>
                    <br/>
                    <input 
                        type='email'
                        placeholder='Enter Your Email'
                        className='w-80 px-3 border rounded-md py-1 outline-none'{...register("email", { required: true })}
                        />
                        <br/>
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

                    <br/>
                </div>

                <div className='mt-4 space-y-2'>
                    <span>Password</span>
                    <br/>
                    <input 
                        type='text'
                        placeholder='Enter Your Password'
                        className='w-80 px-3 border rounded-md py-1 outline-none'{...register("password", { required: true })}
                        />
                        <br/>
                        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}

                    <br/>
                </div>

                <div className='flex justify-around mt-6 gap-12'>
                    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 w-28 h-10 text-lg'>SignUp</button>
                    <p className='mt-4'>Already registered? 
                    <button className='underline text-blue-500 cursor-pointer'
                    onClick={()=>document.getElementById("my_modal_3").showModal()}
                    >Login</button>
                    <Login/>
                    </p>
                </div>
                </form>
            </div>
        </div> 
        </div>
    </>
  )
}

export default Signup