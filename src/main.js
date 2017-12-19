// @flow

import React from 'react'
import { render } from 'react-dom'
import App from 'app/components/app'

const person = { name: 'Victor' }
const job = { role: 'Developer' }

render(
  <App message="Hello!" data={{ ...person, ...job }} />,
  document.getElementById('appContainer')
)
