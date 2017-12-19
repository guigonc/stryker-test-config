import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import App from '../../../src/app/components/app'

describe('App', () => {
  let appComponent

  beforeEach(() => {
    const data = { name: 'Victor', role: 'Developer' }

    appComponent = shallow(<App message="Hello!!" data={data} />)
  })

  it('renders hello', () => {
    expect(appComponent.find('h1').text()).to.equal('Hello!!')
  })

  it('renders True', () => {
    expect(appComponent.find('p').text()).to.equal('True')
  })
})
