import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import App from 'app/components/app'

describe('App', () => {
  it('renders hello', () => {
    const appComponent = shallow(<App message="Hello!!" />)

    expect(appComponent.find('h1').text()).to.equal('Hello!!')
  })
  
  it('renders True', () => {
    const appComponent = shallow(<App message="Hello!!" />)

    expect(appComponent.find('p').text()).to.equal('True')
  })
})
