import { computed, ref } from 'vue'
import randomInteger from '../helpers/randomInteger'
import useItem from './useItem'

export default function useList(index) {
  const id = ref(index + 1)
  const title = ref('List ' + id.value)
  const items = ref([])

  const status = computed(() => {
    const allChecked = items.value.every(i => i.checked)
    const partChecked = items.value.some(i => i.checked)
    
    if (allChecked) return 'all'
    if (partChecked) return 'part'

    return 'none'
  })  

  const checkStatus = () => {
    const isChecked = items.value.every(i => i.checked)

    if (!isChecked) {
      items.value.forEach(item => item.check(true))
      return
    }

    items.value.forEach(item => item.check(false))
  }

  const init = () => {
    const count = randomInteger(4, 10)

    for (let i = 0; i <= count; i++) {
      items.value.push(useItem(i))
    }
  }

  init()

  return {
    id,
    title,
    status,
    items,
    checkStatus
  }
}
