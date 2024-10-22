
import './App.css'
import { Notification } from './components/Notification'

function App() {

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <Notification.Root>
        <Notification.Icon/>
        <Notification.Content text="batata mole"/>
        <Notification.Actions>
          <Notification.ActionButton />
        </Notification.Actions>
      </Notification.Root>
    </div>
  )
}

export default App
