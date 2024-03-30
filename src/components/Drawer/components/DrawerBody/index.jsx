import { useApp } from 'context/AppContext'
import { FaSave } from 'react-icons/fa'

function DrawerBody() {
  const { useFn, onSubmit } = useApp()

  const { register, handleSubmit } = useFn

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full p-4 md:p-5 space-y-6 flex flex-col items-center justify-center'
    >
      <div className='w-full'>
        <label
          htmlFor='initial_percentage'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Porcentagem inicial
        </label>
        <input
          type='number'
          id='initial_percentage'
          name='initial_percentage'
          {...register('initial_percentage', { min: 0, max: 100 })}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='informe apenas números'
          required
        />
      </div>

      <div className='w-full'>
        <label
          htmlFor='final_percentage'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Porcentagem final
        </label>
        <input
          type='number'
          id='final_percentage'
          name='final_percentage'
          {...register('final_percentage', { min: 0, max: 100 })}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='informe a porcentagem final'
          required
        />
      </div>

      <div className='w-full'>
        <button
          type='submit'
          className='text-white justify-center flex items-center gap-2 bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          <FaSave size={18} /> Salvar
        </button>
      </div>

      <ul className='w-full flex flex-col text-red-600 text-sm list-disc px-4'>
        <li>Valores - Minímo: 0 e maxímo: 100</li>
        <li>Porcentagem final deve ser maior que inicial</li>
      </ul>
    </form>
  )
}

export default DrawerBody
