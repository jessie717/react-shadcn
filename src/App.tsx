import { MouseEvent } from 'react'

import './App.css'
import { Button } from '@/components/ui/button'

function App() {
  const btnClick = (e: MouseEvent) => {
    console.log('shadcn button click', e)
  }

  return (
    <>
      <p className='read-the-docs text-red-400'>
        Click on the Vite and React logos to learn more
      </p>
      <div className='my-4'>
        <Button variant='outline' onClick={(e: MouseEvent) => btnClick(e)}>
          Click me
        </Button>
      </div>
    </>
  )
}

export default App
