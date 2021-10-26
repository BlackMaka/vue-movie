<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        class="nav-item"
        v-for="nav in navigations"
        :key="nav.name">
        <!-- active 되었을때 사용할 클래스명을 직접 지정해줌 active-class속성에
        부트스트랩 에서 active로 사용하고있어서 -->
        <RouterLink
          active-class="active" 
          class="nav-link"
          :to="nav.href">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components:{
    Logo
  },
  data(){
    return{
      navigations:[
        {
          name:'Search',
          href:'/'
        },
        {
          name:'Movie',
          href:'/movie'
        },
        {
          name:'About',
          href:'/about'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  .logo{
    margin-right: 40px;
  }
}
</style>