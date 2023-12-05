import { ref } from 'vue'
import randomInteger from '../helpers/randomInteger'
import randomColor from '../helpers/randomColor'

export default function useItem(index) {
  const id = ref(index + 1)
  const title = ref('Item ' + id.value)
  const checked = ref(false)
  const color = ref(randomColor())
  const count = ref(randomInteger(5, 15))

  const check = (bool) => checked.value = bool

  return {
    id,
    checked,
    title,
    count,
    color,
    check
  }
}
