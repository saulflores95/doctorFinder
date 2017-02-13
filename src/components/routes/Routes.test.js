import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'

import Routes from './Routes'
import Home from '../home/Home'
import About from '../about/About'
import PostDetail from '../postDetail/PostDetail'
import NotFound from '../notfound/NotFound'

test('should render routes when visiting /', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(Home).length).toBe(1)
})

test('should render routes when visiting /about', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/about']} initialIndex={0}>
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(About).length).toBe(1)
})

test('should render PostDetail when visiting /post/:slug', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/post/getting-started-with-css-modules-in-webpack']} initialIndex={0}>
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(PostDetail).length).toBe(1)
})

test('should render NotFound  when visiting 404-not-found', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/404-not-found']} initialIndex={0}>
      <Routes />
    </MemoryRouter>
  )

  expect(component.find(NotFound).length).toBe(1)
})
