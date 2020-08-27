import { stompClient } from 'util/ws'


export function getUsersRepository(username) {
    stompClient.send("/app/searchUser", {}, JSON.stringify(username))
}
