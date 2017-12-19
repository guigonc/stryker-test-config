// @flow
import React from 'react'

const App = ({ message, data }: Props) => (<div>
  <h1>{ message }</h1>
  <h2>{data.name}</h2>
  <p>{ data.role ? 'True' : 'False' }</p>
</div>)

type Props = {|
  message: string,
  data: Object
|}

export default App
