<template>
  <div class="p-4">
    <h1 class="flex items-center mb-10">
      <svg-icon name="bundle" title="budle" />
      <span class="font-bold text-3xl ml-3">{{ $t('title_home') }}</span>
    </h1>

    <ul class="flex flex-wrap">
      <li class="w-1/6 self-center rounded p-2 flex" v-for="deputados in getDeputados" :key="deputados.node.id">
        <img
          class="w-1/3"
          :src="deputados.node.urlFoto"
          :alt="deputados.node.nome">
        <div class="w-2/3 p-4 bg-gray-100">
          <h2 class="font-bold">
            {{ deputados.node.nome }} / {{ deputados.node.siglaPartido }}
          </h2>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import SvgIcon from '@components/SvgIcon'

export default {
  name: 'home',
  components: {
    SvgIcon
  },
  apollo: {
    deputados: gql`query {
      deputados (first: 20) {
        edges {
          node {
            id
            nome
            siglaPartido
            urlFoto
          }
        }
      }
    }`
  },
  computed: {
    getDeputados () {
      if (this.deputados) {
        return this.deputados.edges
      }
      return []
    }
  }
}
</script>

<style lang="scss"></style>
