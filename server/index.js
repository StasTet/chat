const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

const broadcast = (data, ws) => {
    server.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
};

server.on('connection', (ws) => {
    ws.on('message', (message) => {
        const data = JSON.parse(message);

        switch (data.type) {
            case 'ADD_MESSAGE':
                ws.send(JSON.stringify({
                    type: 'ADD_MESSAGE',
                    payload: data.payload
                }))

                broadcast({
                    type: 'ADD_MESSAGE',
                    payload: data.payload
                }, ws);
                break;

            default:
                break;
        }
    })
  
    ws.on('close', () => {
        broadcast({
            type: 'SIGN_OUT'
        }, ws);
    });
});
