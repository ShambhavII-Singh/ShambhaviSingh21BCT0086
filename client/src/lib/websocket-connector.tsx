export const WebsocketConnector = (message: ((this: WebSocket, ev: MessageEvent) => unknown) | null) => {
    const websocket = new WebSocket("ws://localhost:3001");
    websocket.onmessage = message;
    websocket.onclose = () => {
        console.log("Web socket connection is closed");
    }
    websocket.onclose = () => {
        console.log("Web socket connection is closed");
    }
    websocket.onopen = () => {
        console.log("Web socket connection is opened");
    }
    return websocket;
}