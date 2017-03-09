import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import './stylesheets/index.scss'
import { DropDownSelect } from './components/DropDownSelect'

window.React = React

render (
  <DropDownSelect />,
  document.getElementById('react-container')
)
