import { stompClient } from 'util/WebSocketConfig'


export function getUsersRepository(username) {
    stompClient.send("/app/searchUser", {}, JSON.stringify(username))
}
