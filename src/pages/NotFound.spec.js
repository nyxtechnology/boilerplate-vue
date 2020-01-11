import { shallowMount } from '@vue/test-utils'
import NotFound from './NotFound'
import '@components/_globals'

describe('@pages/NotFound', () => {
  it('Should match 404 text', () => {
    const wrapper = shallowMount(NotFound)
    expect(wrapper.text()).toMatch('404 Page not found')
  })
})