// Third-Party
import SockJS from 'sockjs-client'
import {Stomp} from '@stomp/stompjs'

var stompClient = null
const handlers = []

export function connect() {
    return new Promise(function(resolve, reject) {
        const socket = SockJS('http://localhost:8080/chat-websocket')
        stompClient = Stomp.over(socket)
        stompClient.debug = () => {};
        stompClient.connect({"Authorization": localStorage.getItem("authorization")}, frame => {
            stompClient.subscribe('/topic/users', message => {
                handlers.forEach(handler => handler(JSON.parse(message.body)))
            })
        })
    })
}

export function addHandler(handler) {
    handlers.push(handler)
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

export function getConversations() {
    if (stompClient != null) {
        stompClient.send("/app/conversationList", {}, JSON.stringify())
    }
}

export function getUsernames(username) {
    if (stompClient != null) {
        stompClient.send("/app/searchUser", {}, JSON.stringify(username))
    }
}
