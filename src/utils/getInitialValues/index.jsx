export const STORAGE_KEYS = {
  initialPercentage: 'initial_percentage',
  finalPercentage: 'final_percentage',
  campaignTarget: 'campaign_target',
  currentAmount: 'current_amount',
}

const getStoredNumber = (key) => {
  if (typeof window === 'undefined') return 0

  const value = Number(localStorage.getItem(key))
  return Number.isFinite(value) ? value : 0
}

const getInitialPercentage = () =>
  getStoredNumber(STORAGE_KEYS.initialPercentage)

const getFinalPercentage = () => getStoredNumber(STORAGE_KEYS.finalPercentage)

const getCampaignTarget = () => getStoredNumber(STORAGE_KEYS.campaignTarget)

const getCurrentAmount = () => getStoredNumber(STORAGE_KEYS.currentAmount)

const getStoredCampaignValues = () => ({
  initial_percentage: getInitialPercentage(),
  final_percentage: getFinalPercentage(),
  campaign_target: getCampaignTarget(),
  current_amount: getCurrentAmount(),
})

export {
  getCampaignTarget,
  getCurrentAmount,
  getFinalPercentage,
  getInitialPercentage,
  getStoredCampaignValues,
}
