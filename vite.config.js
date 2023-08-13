import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'tasks/level-1/task-1/index.html'),
        task2: resolve(__dirname, 'tasks/level-1/task-2/index.html'),
        task3: resolve(__dirname, 'tasks/level-1/task-3/index.html'),
      }
    }
  }
})
