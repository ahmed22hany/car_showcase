'use client'

import { CarProps } from '@/types';
import Image from 'next/image';
import React from 'react'
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CarDetails = ({ isOpen, car, closeModal }: CarDetailsProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className={'relative z-10'} onClose={closeModal} >
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex justify-center items-center min-h-full p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className={'relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl p-6 transition-all flex flex-col gap-5'}>
                                    <button className=' absolute top-5 right-5 z-10 w-fit bg-primary-blue-100 rounded-full' type='button' onClick={closeModal}>
                                        <Image
                                            src={'/close.svg'}
                                            alt='close'
                                            width={18}
                                            height={18}
                                            className='object-contain'
                                        />
                                    </button>

                                    <div className='flex-1 flex flex-col gap-3'>
                                        <div className=' relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                                            <Image src={'/hero.png'} fill alt={'car model'} className='object-contain' priority />
                                        </div>

                                        <div className='flex gap-3'>
                                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                <Image src={'/hero.png'} fill alt={'car model'} className='object-contain' priority />
                                            </div>
                                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                <Image src={'/hero.png'} fill alt={'car model'} className='object-contain' priority />
                                            </div>
                                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                <Image src={'/hero.png'} fill alt={'car model'} className='object-contain' priority />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex-1 flex flex-col gap-2'>
                                        <h2 className='font-semibold text-xl capitalize'>
                                            {car.make} {car.model}
                                        </h2>

                                        <div className='mt-3 flex flex-wrap gap-4'>
                                            {Object.entries(car).map(([key, value]) =>
                                            (
                                                <div className='flex justify-between w-full gap-5 text-right' key={key}>
                                                    <h4 className='text-gray capitalize'>{key.split('_').join(' ')}</h4>
                                                    <p className='text-black-100 font-semibold'>{value}</p>
                                                </div>
                                            )
                                            )}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default CarDetails