<template>
  <h1 class="page-not-found__title">
    404 Page not found
  </h1>
</template>

<script>
export default {
  name: 'PageNotFound',
  head: {
    title: 'Page not found',
    meta: [
      { name: 'description', content: '404 - Page not found' }
    ]
  }
}
</script>

<style lang="scss">
.page-not-found {
  &__title {
    text-align: center;
  }
}
</style>
