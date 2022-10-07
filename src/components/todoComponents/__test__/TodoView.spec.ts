import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoForm from '../TodoForm.vue'
import TodoList from '../TodoList.vue'
import { createPinia, setActivePinia } from "pinia";
import { useTodoListStore } from '../../../stores/useTodoListStore'

describe('Todo.Vue', () => {

    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('renders properly', async() => {
        const todoList = useTodoListStore()
        const wrapper = mount(TodoForm)

        await wrapper.vm.addItemAndClear("hello Vites")
        expect(todoList.$state.todoList.length).toBe(1)
    })

    it('renders properly', async() => {
        const todoList = useTodoListStore()
        const wrapper = mount(TodoList)

        await todoList.addTodo('vites')
        expect(todoList.$state.todoList.length).toBe(1)

        await wrapper.vm.toggleCompleted(0)
        expect(todoList.$state.todoList[0].completed).toBe(true)
    })

    it('renders properly', async() => {
        const todoList = useTodoListStore()
        const wrapper = mount(TodoList)

        await todoList.addTodo('vites')
        expect(todoList.$state.todoList.length).toBe(1)

        await wrapper.vm.deleteTodo(0)
        expect(todoList.$state.todoList.length).toBe(0)
    })
    
})
