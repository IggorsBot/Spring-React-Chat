// Third-Party
import SockJS from 'sockjs-client'
import {Stomp} from '@stomp/stompjs'

var stompClient = null

const handlers = new Map()

export function connect() {
    return new Promise(function(resolve, reject) {
        const socket = SockJS('http://localhost:8080/chat-websocket')
        stompClient = Stomp.over(socket)
        stompClient.debug = () => {};
        stompClient.connect({"Authorization": localStorage.getItem("authorization")}, frame => {

            stompClient.subscribe('/topic/users', message => {
                handlers.forEach((value, key) => {
                    if(key === "UserListHandler") value(JSON.parse(message.body))
                })
            })

            stompClient.subscribe('/topic/newChat', message => {
                handlers.forEach((value, key) => {
                    if(key === "NewChatHandler") value(JSON.parse(message.body))
                })
            })
        })
    })
}

export function addHandler(handlerName, handler) {
    handlers.set(handlerName, handler)
}

export function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect()
    }
    console.log("Disconnected")
}

export function sendMessage(message) {
    stompClient.send("/app/newMessage", {}, JSON.stringify(message))
}

export function newChat(username) {
    stompClient.send("/app/newChat", {}, JSON.stringify(username))
}

export function getConversationList() {
    if (stompClient != null) {
        stompClient.send("/app/chatList", {}, JSON.stringify())
    }
}

export function getUsersForNewChat(username) {
    if (stompClient != null) {
        stompClient.send("/app/searchUser", {}, JSON.stringify(username))
    }
}
