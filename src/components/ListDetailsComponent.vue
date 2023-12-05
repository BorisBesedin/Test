<script setup>
import { computed, ref, toRefs } from 'vue';
import shuffleArray from '../helpers/shuffleArray.js'
const props = defineProps({
  list: Object
})
const { items } = toRefs(props.list)

const shuffle = ref(false)

const squares = computed(() => {
  let arr = []
  let checked = items.value.filter(i => i.checked)

  checked.forEach(item => {
    for (let i = 0; i < item.count; i++) {
      arr.push({
        itemId: item.id,
        color: item.color
      })
    }
  })
  if (shuffle.value) arr = shuffleArray(arr)
  return arr
})

const remove = sq => {
  const obj = items.value.find(item => item.id === sq.itemId)

  if (!obj) return

  const index = squares.value.indexOf(sq)
  squares.value.splice(index, 1)
  obj.count--
}
</script>

<template>
  <li class="list">
    <div class="list__top">
      <h3>{{ list.title }}</h3>
      <button @click="shuffle = !shuffle">{{ shuffle ? 'Сортировать' : 'Перемешать' }}</button>
    </div>

    <ul class="list__squares squares">
      <li @click="remove(sq)" v-for="sq, index in squares" :key="index" :style="`background-color: ${sq.color}`">

      </li>
    </ul>    
  </li>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  padding: 20px;
}

.list__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.squares {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  & li {
    width: 15px;
    height: 15px;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>