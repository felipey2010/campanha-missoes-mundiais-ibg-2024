'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { createContext, useContext } from 'react'
import { useForm } from 'react-hook-form'
import showToast from 'utils/CustomToast'
import {
  getFinalPercentage,
  getInitialPercentage,
} from 'utils/getInitialValues'
import * as yup from 'yup'

const AppContext = createContext()

export default function AppProvider({ children }) {
  const useFn = useForm({
    resolver: yupResolver(
      yup.object().shape({
        initial_percentage: yup.string().required('Este campo é obrigatório'),
        final_percentage: yup.string().required('Este campo é obrigatório'),
      })
    ),
    defaultValues: {
      initial_percentage: getInitialPercentage() || 0,
      final_percentage: getFinalPercentage() || 0,
    },
  })

  function onSubmit(data) {
    const { initial_percentage, final_percentage } = data
    try {
      storeInputValues(initial_percentage, final_percentage)
      showToast('Valores salvos', 'success')
    } catch (error) {
      console.log('Error: ', error)
      showToast('Erro salvando valores', 'error')
    }
  }

  function storeInputValues(initialPercentage, finalPercentage) {
    if (isValidInput(initialPercentage, finalPercentage)) {
      localStorage.setItem('initial_percentage', initialPercentage.toString())
      localStorage.setItem('final_percentage', finalPercentage.toString())
    } else {
      localStorage.setItem('initial_percentage', 0)
      localStorage.setItem('final_percentage', 0)
    }
  }

  function isValidInput(initialPercentage, finalPercentage) {
    if (isNaN(initialPercentage) || isNaN(finalPercentage)) {
      return false
    }

    if (
      initialPercentage < 0 ||
      initialPercentage > 100 ||
      finalPercentage < 0 ||
      finalPercentage > 100 ||
      finalPercentage < initialPercentage
    ) {
      return false
    }

    return true
  }

  const AppContextValues = {
    onSubmit,
    useFn,
  }

  return (
    <AppContext.Provider value={AppContextValues}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
