import { shallowMount } from '@vue/test-utils'
import Home from './Home.vue'
import '@components/_globals'

describe('@pages/home', () => {
  const wrapper = shallowMount(Home)
  
  it('Has logo', () => {
    expect(wrapper.contains('img')).toBe(true)
  })
})