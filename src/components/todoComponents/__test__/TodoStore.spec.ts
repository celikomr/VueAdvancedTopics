import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from "pinia";
import { useTodoListStore } from '../../../stores/useTodoListStore'

describe('todoList', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('inital todolist size', () => {

        const todoList = useTodoListStore()
        expect(todoList.$state.todoList.length).toBe(0)
    })

    it('to add an item into the todolist and compare size', async () => {
        const todoList = useTodoListStore()
        
        await todoList.addTodo('vites')
        expect(todoList.$state.todoList.length).toBe(1)
    })

    it('to delete an item into the todolist and compare size', async () => {
        const todoList = useTodoListStore()

        await todoList.addTodo('vites')
        expect(todoList.$state.todoList.length).toBe(1)

        await todoList.deleteTodo(0)
        expect(todoList.$state.todoList.length).toBe(0)
    })

    it('to toggle complate flag an item into the todolist and compare size', async () => {
        const todoList = useTodoListStore()

        await todoList.addTodo('vites')
        expect(todoList.$state.todoList[0].completed).toBe(false)

        await todoList.toggleCompleted(0)
        expect(todoList.$state.todoList[0].completed).toBe(true)
    })


})