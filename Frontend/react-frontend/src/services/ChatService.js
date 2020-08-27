import { stompClient } from 'util/ws'

import {newChatRepository, sendMessageRepository,
        getChatListRepository} from 'repositories/ChatRepository'

export function sendMessageService(message) {
    if (stompClient != null) {
        sendMessageRepository(message)
    }
}

export function newChatService(username) {
    if (stompClient != null) {
        newChatRepository(username)
    }
}

export function getChatListService() {
    if (stompClient != null) {
        getChatListRepository()
    }
}
