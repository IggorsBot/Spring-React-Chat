// Third-Party
import SockJS from 'sockjs-client'
import {Stomp} from '@stomp/stompjs'

import { USER_LIST_FOR_NEW_CHAT, NEW_CHAT } from 'util/HandlerNames'


export var stompClient = null

const handlers = new Map()

export function connect() {
    return new Promise(function(resolve, reject) {
        const socket = SockJS('http://localhost:8080/chat-websocket')
        stompClient = Stomp.over(socket)
        stompClient.debug = () => {};
        stompClient.connect({"Authorization": localStorage.getItem("authorization")}, frame => {

            stompClient.subscribe('/topic/users', message => {
                handlers.forEach((value, key) => {
                    if(key === USER_LIST_FOR_NEW_CHAT) value(JSON.parse(message.body))
                })
            })

            stompClient.subscribe('/topic/newChat', message => {
                handlers.forEach((value, key) => {
                    if(key === NEW_CHAT) value(JSON.parse(message.body))
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
