<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  item: Object
})

const { checked, color, count } = toRefs(props.item)

const checkVal = (e) => {
  const val = e.target.value
  const min = 0
  const max = 15

  if (val < min) count.value = min
  if (val > max) count.value = max
}
</script>

<template>
  <li class="item">
    <div class="item__block">
      <input type="checkbox" v-model="checked">
      <h4>{{ item.title }}</h4>
    </div>

    <div class="item__block">
      <input class="count" @change="checkVal" type="number" v-model="count">
      <input type="color" v-model="color">
    </div>
  </li>
</template>

<style lang="scss" scoped>
.item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-left: 40px;
}

.item__block {
  display: flex;
  align-items: center;
  gap: 10px;

  & .count {
    width: 50px;
  }
}
</style>