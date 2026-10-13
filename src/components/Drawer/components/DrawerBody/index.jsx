import { calculatePercentage, useApp } from 'context/AppContext'
import { FaSave } from 'react-icons/fa'

const inputClassName =
  'block w-full rounded-lg border border-gray-600 bg-gray-800 p-2.5 text-sm text-white focus:border-primary/85 focus:ring-primary/85'

function DrawerBody() {
  const { useFn, onSubmit, calculatedPercentage } = useApp()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useFn

  const campaignTarget = watch('campaign_target')
  const currentAmount = watch('current_amount')
  const previewPercentage =
    campaignTarget || currentAmount
      ? calculatePercentage(currentAmount, campaignTarget)
      : calculatedPercentage

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-full flex-col items-center justify-center space-y-5 p-4 md:p-5'
    >
      <FormField
        id='campaign_target'
        label='Alvo da campanha (R$)'
        error={errors.campaign_target?.message}
      >
        <input
          type='number'
          id='campaign_target'
          inputMode='decimal'
          {...register('campaign_target')}
          className={inputClassName}
          placeholder='0,00'
          min='0.01'
          step='0.01'
          required
        />
      </FormField>

      <FormField
        id='current_amount'
        label='Arrecadação atual (R$)'
        error={errors.current_amount?.message}
      >
        <input
          type='number'
          id='current_amount'
          inputMode='decimal'
          {...register('current_amount')}
          className={inputClassName}
          placeholder='0,00'
          min='0'
          step='0.01'
          required
        />
      </FormField>

      <FormField
        id='initial_percentage'
        label='Porcentagem inicial'
        error={errors.initial_percentage?.message}
      >
        <input
          type='number'
          id='initial_percentage'
          inputMode='numeric'
          {...register('initial_percentage')}
          className={inputClassName}
          placeholder='Informe a porcentagem inicial'
          min='0'
          required
        />
      </FormField>

      <FormField id='calculated_percentage' label='Porcentagem calculada'>
        <div className='flex w-full items-center justify-between rounded-lg border border-gray-600 bg-gray-800/60 p-2.5 text-sm text-gray-200'>
          <output id='calculated_percentage' aria-live='polite'>
            {previewPercentage}%
          </output>
          <span className='text-xs text-gray-400'>
            Calculada automaticamente
          </span>
        </div>
      </FormField>

      <div className='w-full'>
        <button
          type='submit'
          className='mb-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary/85 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-white'
        >
          <FaSave size={18} /> Salvar
        </button>
      </div>

      <ul className='flex w-full list-disc flex-col px-4 text-sm text-gray-300'>
        <li>O alvo da campanha deve ser maior que zero</li>
        <li>A porcentagem inicial não pode exceder a calculada</li>
        <li>Salve os valores antes de fechar esta janela</li>
      </ul>
    </form>
  )
}

function FormField({ id, label, error, children }) {
  return (
    <div className='w-full'>
      <label htmlFor={id} className='mb-2 block text-sm font-medium text-white'>
        {label}
      </label>
      {children}
      {error && (
        <p className='mt-1.5 text-xs text-red-400' role='alert'>
          {error}
        </p>
      )}
    </div>
  )
}

export default DrawerBody
