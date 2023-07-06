'use client'
import { createNewExperince } from '@/lib/api'
import { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#modal')

const NewExperice = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  const [name, setName] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await createNewExperince(name)
    closeModal()
  }

  return (
    <div className='px-6 py-8 hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center'>
      <button onClick={() => openModal()}>+ New Project</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName='bg-[rgba(0,0,0,.4)] flex justify-center items-center absolute top-0 left-0 h-screen w-screen'
        className='w-3/4 bg-white rounded-xl p-8'>
        <h1 className='text-3xl mb-6'>New Project</h1>
        <form className='flex items-center' onSubmit={handleSubmit}>
          <input
            placeholder='project name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button type='submit'>Create</button>
        </form>
      </Modal>
    </div>
  )
}

export default NewExperice
