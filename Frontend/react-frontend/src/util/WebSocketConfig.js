// Third-Party
import SockJS from 'sockjs-client'
import {Stomp} from '@stomp/stompjs'

import { API_URL } from 'util/PathAPI'


export var stompClient = null

export var handlers = new Map()

export function connect() {
    return new Promise(function(resolve, reject) {
        const socket = SockJS(API_URL + "/chat-websocket")
        stompClient = Stomp.over(socket)
        stompClient.debug = () => {};
        stompClient.connect(

            // Header
            {"Authorization": localStorage.getItem("authorization")},

            // Success Callback
            frame => {
                handlers.forEach((value, key) => {
                    stompClient.subscribe(key, message => value(JSON.parse(message.body)))
            })},

            // Error Callback
            () => {
                console.log("Error Callback")
            }
        )
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
