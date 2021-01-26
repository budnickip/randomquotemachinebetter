import types from './types'

const add = quote => ({type: types.ADD, quote})
const reset = () => ({type: types.RESET})

export default{
    add,
    reset
}