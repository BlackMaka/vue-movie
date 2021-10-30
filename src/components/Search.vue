<template>
  <div class="container">
    <input
      type="text"
      class="form-control"
      v-model="title"
      placeholder="Search for Movies, Series & more" />
    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option
          value=""
          v-if="filter.name === 'year'">
          All years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:'',
      type : 'movie',
      number : 10,
      year:'',
      filters : [
        {
          name : 'type',
          items : ['movie', 'series', 'episode']
        },
        {
          name : 'number',
          items : [10, 20, 30]
        },
        {
          name : 'year',
          items : (()=>{
            const years = [];
            for (let i = new Date().getFullYear(); i >= 1985; i--) {
              years.push(i);
            }
            return years;
          })()
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  > * {
    margin-right: 10px;
    font-size: 15px;
    &:last-child{
      margin-right: 0px;
    }
  }
  .selects{
    display: flex;
    select{
      width: 120px;
      margin-right: 10px;
      &:last-child{
        margin-right: 0px;
      }
    }
  }
}
</style>