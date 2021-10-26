<template>
  <Header />
  <!-- 전역컴포넌트 RouterView-->
  <RouterView />
</template>

<script>
import Header from '~/components/Header'
export default {
  components:{
    Header
  }

}
</script>

<style lang="scss" >
@import '~/scss/main.scss';
</style>