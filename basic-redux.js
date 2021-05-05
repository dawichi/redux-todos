const { createStore } = require('redux')

// actions
const INCREMENT = 'increment'
const DECREMENT = 'decrement'

// actionCreators
const increment = () => ({ type: INCREMENT })
const decrement = () => ({ type: DECREMENT })

const initialState = 0

// reducer
const counter = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return state + 1
		case DECREMENT:
			return state - 1
		default:
			return state
	}
}

const store = createStore(counter)

store.subscribe(() => console.log(store.getState()))

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())