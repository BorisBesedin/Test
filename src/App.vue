<script setup>
import { ref } from 'vue';
import useList from './composables/useList';
import ListComponent from './components/ListComponent.vue';
import ListDetailsComponent from './components/ListDetailsComponent.vue';

const lists = ref([])

const getLists = () => {
  const count = 5
  for (let i = 0; i < count; i++) {
    lists.value.push(useList(i))
  }
}

getLists()
</script>

<template>
  <main class="main">
    <ul class="main__left">
      <ListComponent v-for="l, index in lists" :key="index" :list="l" />
    </ul>

    <ul class="main__right">
      <ListDetailsComponent v-for="l, index in lists" :key="index" :list="l" />
    </ul>
  </main>
</template>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  height: 100%;
}

.main__left,
.main__right {
  border: 1px solid #000;
  padding: 20px;
}

.main__right {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
