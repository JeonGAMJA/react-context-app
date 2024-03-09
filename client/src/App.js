import './App.css'
import OrderPage from './pages/OrderPage'
import SummaryPage from './pages/SummaryPage'

function App() {
  return (
    <div styled={{ padding: '4rem' }}>
      <OrderPage />
      <SummaryPage />
    </div>
  )
}

export default App
