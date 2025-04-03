import React, { useState } from 'react'
import { Form, Link, useFormAction } from 'react-router'
import UserDetails from '../Components/UserDetails'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { deleteUserData, addUserData } from '../store/userDataSlice';
const Administrator = ({ profile }) => {
    const [flag, setFlag] = useState(false)
    const userDispatcher = useDispatch();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ shouldUnregister: true },);
    const profiles = useSelector((state) => state.UserData.data);

    const handleUserForm = (data) => {
        userDispatcher(addUserData(data))

    }
    function managerDelete(index) {
        console.log(index)
        userDispatcher(deleteUserData(index))
    }

    return (
        <div className='w-full  h-screen  flex flex-col justify-center items-center'>
            <h1 className='my-[3%] text-2xl md:text-4xl mt-15 font-bold'>Administrative Admin</h1>
            <div className='w-[80vw] min-h-[70%]  rounded-md  p-3'>

                <div className='flex justify-between' >
                    <h2 className='hidden md:block text-black font-bold text-xl'>User Profile</h2>
                    <div onClick={() => setFlag(prev => !prev)} className='bg-black px-4 py-2 rounded-lg text-white'><i className="ri-add-line pr-2"></i>Add New Profile</div>
                </div>

                {/* -------------- */}
                <div
                    className={`w-full shadow-sm rounded-sm my-2 mb-5 p-4 overflow-hidden transition-all overflow-y-auto duration-500 ${flag ? 'h-[60vh] opacity-100' : 'h-0 opacity-0'
                        }`}
                >
                    <form className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-3' onSubmit={handleSubmit(handleUserForm)}>
                        <div className='flex  flex-col gap-1'>
                            <label htmlFor="name">Name</label>
                            <input
                                type='text'
                                className='md:text-sm bg-zinc-500 py-[12px] md:py-[20px] lg:py-[6px] rounded-sm text-xs lg:text-sm pl-2 mb-1 outline-none ' id='name'
                                {...register("name", { required: true })}
                                placeholder='Enter your name'
                            />
                            {errors.name && <p className='text-sm' style={{ color: "red" }}>Name is required</p>}
                        </div>
                        <div className='flex  flex-col gap-1'>
                            <label htmlFor="name">Image Link</label>
                            <input
                                type='text'
                                className='md:text-sm bg-zinc-500 py-[12px] md:py-[20px] lg:py-[6px] rounded-sm text-xs lg:text-sm pl-2 mb-1 outline-none ' id='photo'
                                {...register("photo", { required: true })}
                                placeholder='Enter your photo link'
                            />
                            {errors.photo && <p className='text-sm' style={{ color: "red" }}>photo is required</p>}
                        </div>
                        <div className='flex  flex-col gap-1'>
                            <label htmlFor="name">Description</label>
                            <input
                                type='text'
                                className='md:text-sm bg-zinc-500 py-[12px] md:py-[20px] lg:py-[6px] rounded-sm text-xs lg:text-sm pl-2 mb-1 outline-none ' id='description'
                                {...register("description", { required: true })}
                                placeholder='Enter description'
                            />
                            {errors.description && <p className='text-sm' style={{ color: "red" }}>Description is required</p>}
                        </div>
                        <div className='flex  flex-col gap-1'>
                            <label htmlFor="name">Contact</label>
                            <input
                                type='text'
                                className='md:text-sm bg-zinc-500 py-[12px] md:py-[20px] lg:py-[6px] rounded-sm text-xs lg:text-sm pl-2 mb-1 outline-none ' id='contact'
                                {...register("contact", { required: true })}
                                placeholder='Enter your contact'
                            />
                            {errors.contact && <p className='text-sm' style={{ color: "red" }}>contact is required</p>}
                        </div>
                        <div className='flex  flex-col gap-1'>
                            <label htmlFor="name">Location</label>
                            <input
                                type='text'
                                className='md:text-sm bg-zinc-500 py-[12px] md:py-[20px] lg:py-[6px] rounded-sm text-xs lg:text-sm pl-2 mb-1 outline-none ' id='location'
                                {...register("location", { required: true })}
                                placeholder='Enter your location'
                            />
                            {errors.location && <p className='text-sm' style={{ color: "red" }}>location is required</p>}
                        </div>
                        <div className='flex  flex-col gap-1'>
                            <label htmlFor="name">Address</label>
                            <input
                                type='text'
                                className='md:text-sm bg-zinc-500 py-[12px] md:py-[20px] lg:py-[6px] rounded-sm text-xs lg:text-sm pl-2 mb-1 outline-none ' id='address'
                                {...register("address", { required: true })}
                                placeholder='Enter your address'
                            />
                            {errors.address && <p className='text-sm' style={{ color: "red" }}>address is required</p>}
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='flex  flex-col gap-1'>
                                <label htmlFor="name">Latitude</label>
                                <input
                                    type='number'
                                    className='md:text-sm bg-zinc-500 py-[12px] md:py-[20px] lg:py-[6px] rounded-sm text-xs lg:text-sm pl-2 mb-1 outline-none ' id='lat'
                                    {...register("lat")}
                                    placeholder='Enter Latitude'
                                />

                            </div>
                            <div className='flex  flex-col gap-1'>
                                <label htmlFor="name">Longitude</label>
                                <input
                                    type='number'
                                    className='md:text-sm bg-zinc-500 py-[12px] md:py-[20px] lg:py-[6px] rounded-sm text-xs lg:text-sm pl-2 mb-1 outline-none ' id='lng'
                                    {...register("lng")}
                                    placeholder='Enter Longitude'
                                />

                            </div>
                        </div>

                        <div className='flex  flex-col gap-1'>
                            <label htmlFor="name">Interest</label>
                            <input
                                type='text'
                                className='md:text-sm bg-zinc-500 py-[12px] md:py-[20px] lg:py-[6px] rounded-sm text-xs lg:text-sm pl-2 mb-1 outline-none ' id='interest'
                                {...register("interest", { required: true })}
                                placeholder='Enter your area of interest'
                            />
                            {errors.address && <p className='text-sm' style={{ color: "red" }}>Enter area of interest</p>}
                        </div>
                        <div className='flex  flex-col gap-1'>
                            <label htmlFor="name">Number</label>
                            <input
                                className='md:text-sm bg-zinc-500 py-[12px] md:py-[20px] lg:py-[6px] rounded-sm text-xs lg:text-sm pl-2 mb-1 outline-none ' id='phone'
                                {...register("phone", { required: true })}
                                placeholder='Enter phone number'
                            />
                            {errors.phone && <p className='text-sm' style={{ color: "red" }}>Enter phone number</p>}
                        </div>
                        <div className='flex  flex-col gap-1'>
                            <label htmlFor="name">Join Date</label>
                            <input
                                type='text'
                                className='md:text-sm bg-zinc-500 py-[12px] md:py-[20px] lg:py-[6px] rounded-sm text-xs lg:text-sm pl-2 mb-1 outline-none ' id='join'
                                {...register("join")}
                                placeholder='Enter join date'
                            />
                            {errors.join && <p className='text-sm' style={{ color: "red" }}>Enter join date</p>}
                        </div>

                        <div className='flex opacity-0 flex-col gap-1'>

                            <div
                                type='text'
                                className='md:text-sm bg-zinc-500 py-[12px] md:py-[20px] lg:py-[6px] rounded-sm text-xs lg:text-sm pl-2 mb-1 outline-none ' id='join'
                                {...register("join")}
                                placeholder='Enter join date'></div>


                        </div>

                        <div className='flex md:mt-8  flex-col  gap-1'>

                            <button type='submit'
                                className='md:text-xl font-semibold bg-black lg:py-[12px] md:py-[20px] lg:py-[6px] py-4 rounded-sm text-xs lg:text-sm pl-2 mb-1 outline-none text-white text-center' >
                                Add User

                            </button >

                        </div>

                    </form>
                </div>



                <div class="flex flex-col gap-4 ">
                    <div className='flex flex-row justify-between px-[5%] shadow-md my-5'>
                        <div className='w-10 h-10 rounded-full'>Image</div>
                        <div className='hidden md:block'>Email</div>

                        <div>Role</div>
                        <div>Action</div>

                    </div>

                    {profiles.map((profile, index) => <UserDetails key={index} profile={profile} index={index} managerDelete={managerDelete} />)}


                </div>
                {/* <UserDetails /> */}
            </div >
        </div >
    )
}

export default Administrator