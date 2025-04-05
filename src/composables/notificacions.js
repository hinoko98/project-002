import { reactive } from 'vue'

export const notifications = reactive({
  list: [],
  add(notification) {
    this.list.unshift({
      id: Date.now(),
      message: notification.message,
      type: notification.type || 'info', // 'info', 'warning', 'error', etc
      read: false
    })
  },
  clear() {
    this.list = []
  }
})
