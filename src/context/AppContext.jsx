'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { createContext, useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import showToast from 'utils/CustomToast'
import { getStoredCampaignValues, STORAGE_KEYS } from 'utils/getInitialValues'
import * as yup from 'yup'

const MINIMUM_PERCENTAGE = 0
const EMPTY_VALUES = {
  initial_percentage: 0,
  campaign_target: 0,
  current_amount: 0,
}

export const calculatePercentage = (currentAmount, campaignTarget) => {
  const current = Number(currentAmount)
  const target = Number(campaignTarget)

  if (!Number.isFinite(current) || !Number.isFinite(target) || target <= 0) {
    return 0
  }

  return Math.round((current / target) * 100)
}

const validationSchema = yup
  .object({
    initial_percentage: yup
      .number()
      .typeError('Informe uma porcentagem inicial válida')
      .required('Este campo é obrigatório')
      .integer('Informe a porcentagem inicial sem casas decimais')
      .min(MINIMUM_PERCENTAGE, 'A porcentagem inicial não pode ser negativa'),
    campaign_target: yup
      .number()
      .typeError('Informe um alvo válido')
      .required('Este campo é obrigatório')
      .moreThan(0, 'O alvo da campanha deve ser maior que zero'),
    current_amount: yup
      .number()
      .typeError('Informe uma arrecadação válida')
      .required('Este campo é obrigatório')
      .min(0, 'A arrecadação atual não pode ser negativa'),
  })
  .test(
    'initial-percentage-limit',
    'A porcentagem inicial não pode exceder a porcentagem calculada',
    function (values) {
      if (!values) return true

      const calculatedPercentage = calculatePercentage(
        values.current_amount,
        values.campaign_target
      )

      if (Number(values.initial_percentage) > calculatedPercentage) {
        return this.createError({
          path: 'initial_percentage',
          message:
            'A porcentagem inicial não pode exceder a porcentagem calculada',
        })
      }

      return true
    }
  )

const AppContext = createContext()

export default function AppProvider({ children }) {
  const [calculatedPercentage, setCalculatedPercentage] = useState(0)
  const useFn = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: EMPTY_VALUES,
  })

  const { reset, setValue } = useFn

  useEffect(() => {
    const storedValues = getStoredCampaignValues()
    const restoredPercentage =
      storedValues.campaign_target > 0
        ? calculatePercentage(
            storedValues.current_amount,
            storedValues.campaign_target
          )
        : storedValues.final_percentage

    reset({
      initial_percentage: storedValues.initial_percentage,
      campaign_target: storedValues.campaign_target,
      current_amount: storedValues.current_amount,
    })
    setCalculatedPercentage(restoredPercentage)

    if (storedValues.campaign_target > 0) {
      localStorage.setItem(
        STORAGE_KEYS.finalPercentage,
        restoredPercentage.toString()
      )
    }
  }, [reset])

  function onSubmit(data) {
    const initialPercentage = Number(data.initial_percentage)
    const campaignTarget = Number(data.campaign_target)
    const currentAmount = Number(data.current_amount)
    const finalPercentage = calculatePercentage(currentAmount, campaignTarget)

    localStorage.setItem(
      STORAGE_KEYS.initialPercentage,
      initialPercentage.toString()
    )
    localStorage.setItem(STORAGE_KEYS.campaignTarget, campaignTarget.toString())
    localStorage.setItem(STORAGE_KEYS.currentAmount, currentAmount.toString())
    localStorage.setItem(
      STORAGE_KEYS.finalPercentage,
      finalPercentage.toString()
    )

    setValue('initial_percentage', initialPercentage)
    setValue('campaign_target', campaignTarget)
    setValue('current_amount', currentAmount)
    setCalculatedPercentage(finalPercentage)
    showToast('Valores salvos', 'success')
  }

  function toggleFullscreen() {
    const element = document.getElementById('main__body')

    if (element.requestFullscreen) element.requestFullscreen()
  }

  const AppContextValues = {
    calculatedPercentage,
    onSubmit,
    toggleFullscreen,
    useFn,
  }

  return (
    <AppContext.Provider value={AppContextValues}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
