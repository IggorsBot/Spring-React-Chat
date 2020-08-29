import { stompClient } from 'util/WebSocketConfig'
import { getUsersRepository } from 'repositories/UserRepository'

export function getUsersService(username) {
    if (stompClient != null) {
        getUsersRepository(username)
    }
}
