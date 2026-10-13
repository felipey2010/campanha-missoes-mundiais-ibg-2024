import confetti from 'canvas-confetti'
import { useEffect, useMemo, useRef, useState } from 'react'
import { generateRandomNumber } from 'utils/RandomNumberGenerator'
import PercentageValueContainer from './percentage-value-container'

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
const CONFETTI_DELAY_MS = 600

function Content({
  startLevel = 0,
  endLevel = 0,
  campaignTarget = 0,
  currentAmount = 0,
  startAnimation = false,
}) {
  const initialPercentage = Number(startLevel) || 0
  const finalPercentage = Number(endLevel) || 0
  const targetAmount = Number(campaignTarget) || 0
  const raisedAmount = Number(currentAmount) || 0
  const [percentage, setPercentage] = useState(initialPercentage)
  const hasTriggeredConfetti = useRef(false)

  useEffect(() => {
    setPercentage(initialPercentage)
  }, [initialPercentage, finalPercentage])

  useEffect(() => {
    if (!startAnimation || percentage >= finalPercentage) return undefined

    const isFirstPartOfAnimation = percentage < 0.8 * finalPercentage
    const delay = isFirstPartOfAnimation
      ? generateRandomNumber(1000, 700)
      : generateRandomNumber(2000, 1300)
    const step = isFirstPartOfAnimation ? generateRandomNumber(5, 1) : 1
    const timer = setTimeout(() => {
      setPercentage((currentPercentage) =>
        Math.min(currentPercentage + step, finalPercentage)
      )
    }, delay)

    return () => clearTimeout(timer)
  }, [finalPercentage, percentage, startAnimation])

  useEffect(() => {
    const hasReachedFinalValue = percentage >= finalPercentage

    if (
      !startAnimation ||
      !hasReachedFinalValue ||
      finalPercentage <= 0 ||
      hasTriggeredConfetti.current
    ) {
      return
    }

    hasTriggeredConfetti.current = true
    const timer = setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 160,
        startVelocity: 45,
        origin: { y: 0.6 },
        zIndex: 100,
        disableForReducedMotion: true,
      })
    }, CONFETTI_DELAY_MS)

    return () => clearTimeout(timer)
  }, [finalPercentage, percentage, startAnimation])

  const animatedAmount = useMemo(() => {
    if (finalPercentage <= initialPercentage) return raisedAmount

    const initialAmount = targetAmount * (initialPercentage / 100)
    const progress = Math.min(
      Math.max(
        (percentage - initialPercentage) /
          (finalPercentage - initialPercentage),
        0
      ),
      1
    )

    return initialAmount + (raisedAmount - initialAmount) * progress
  }, [
    finalPercentage,
    initialPercentage,
    percentage,
    raisedAmount,
    targetAmount,
  ])

  return (
    <div className='flex flex-col items-center justify-center gap-3 p-3 sm:gap-4 sm:p-4 md:p-5'>
      <div className='flex h-full min-h-44 w-full min-w-0 flex-col items-center pb-3 sm:min-h-56 sm:pb-4'>
        <PercentageCounter percentage={percentage} />
        <span className='h-1 w-4/5 border-b border-gray-500' />
        <h2 className='my-4 text-center text-2xl font-bold leading-tight sm:my-6 sm:text-4xl md:text-5xl'>
          DE ALVO ALCANÇADO
        </h2>

        <div className='grid w-full grid-cols-1 gap-3 sm:grid-cols-2'>
          <AmountCard label='Alvo da campanha' value={targetAmount} />
          <AmountCard label='Arrecadação atual' value={animatedAmount} />
        </div>
      </div>
    </div>
  )
}

function AmountCard({ label, value }) {
  return (
    <div className='rounded-lg border border-gray-700 bg-gray-900/80 p-3 text-center sm:p-4'>
      <p className='text-xs uppercase tracking-wide text-gray-400 sm:text-sm'>
        {label}
      </p>
      <p className='mt-1 break-words text-lg font-bold text-white sm:text-xl'>
        {currencyFormatter.format(value)}
      </p>
    </div>
  )
}

function PercentageCounter({ percentage }) {
  const characters = String(Math.round(percentage)).split('')

  return (
    <div className='flex h-full w-full items-center justify-center gap-1 p-1 text-center text-[clamp(1.75rem,10vw,3.75rem)] font-bold sm:gap-2 sm:p-3 md:gap-4 md:p-4'>
      {characters.map((value, index) => (
        <PercentageValueContainer key={`${index}-${value}`} value={value} />
      ))}
      <PercentageValueContainer value='%' />
    </div>
  )
}

export default Content
