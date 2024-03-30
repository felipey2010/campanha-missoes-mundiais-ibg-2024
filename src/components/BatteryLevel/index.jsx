import PageContent from './components/PageContent'

const BatteryLevel = ({ show, close }) => {
  if (!show) return

  return <PageContent close={close} />
}

export default BatteryLevel
