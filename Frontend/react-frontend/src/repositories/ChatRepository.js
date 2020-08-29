import { stompClient } from 'util/WebSocketConfig'

export function newChatRepository(username) {
    stompClient.send("/app/newChat", {}, JSON.stringify(username))
}

export function sendMessageRepository(message) {
    stompClient.send("/app/newMessage", {}, JSON.stringify(message))
}

export function getChatListRepository() {
    stompClient.send("/app/chatList", {}, JSON.stringify())
}
