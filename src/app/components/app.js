// @flow
import React from 'react'

const App = ({ message }: Props) => (<div>
  <h1>{ message }</h1>
</div>)

type Props = {
  message: string
}

export default App
