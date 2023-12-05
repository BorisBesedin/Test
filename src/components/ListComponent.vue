<script setup>
import { computed, ref } from 'vue';
import ItemComponent from './ItemComponent.vue';

const props = defineProps({
  list: Object
})

const showItems = ref(false)

const statusBtnClasses = computed(() => {
  return {
    'all': props.list.status === 'all',
    'part': props.list.status === 'part'
  }
})

const openBtnClasses = computed(() => {
  return {
    'opened': showItems.value
  }
})
</script>

<template>
  <li class="list">
    <div class="list__top">
      <button :class="openBtnClasses" @click="showItems = !showItems" class="list__open">></button>
      <button :class="statusBtnClasses" @click="list.checkStatus" class="list__status"></button>
      <h3>{{ list.title }}</h3>
    </div>
    <ul v-show="showItems">
      <ItemComponent v-for="item, index in list.items" :key="index" :item="item" />
    </ul>
  </li>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
}

.list__top {
  display: flex;
  align-items: center;
  gap: 10px;
}

.list__open {
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
  &.opened {
    transform: rotate(90deg);
  }
}

.list__status {
  width: 13px;
  height: 13px;
  background-color: transparent;
  border: 1px solid #000;
  padding: 0;
  cursor: pointer;
  position: relative;

  &.all::after {
    position: absolute;
    content: "";
    top: 0px;
    left: 2px;
    width: 7px;
    height: 7px;
    border: 2px solid #000;
    border-left-color: transparent;
    border-top-color: transparent;
    transform: rotate(45deg);
  }

  &.part::after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    width: 7px;
    height: 7px;
    background-color: #000;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>



