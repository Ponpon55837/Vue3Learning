<template>
  <div class=''>
    Count: {{ state.count }}
    <button @click="dispatch({ type: 'decrement' })">
      -
    </button>
    <button @click="dispatch({ type: 'increment' })">
      +
    </button>
  </div>
</template>

<script>
import { useReducer } from '../../composables/state.js'
import countReducer from '../../reduce/reducerState.js'

export default {
  name: 'Reducer',
  setup() {
    const { reducer, initialState } = countReducer()
    const [state, dispatch] = useReducer(reducer, initialState)

    return { dispatch, state }
  }
}
</script>
