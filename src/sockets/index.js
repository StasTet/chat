import { ADD_MESSAGE, addMessage } from '../actions/messages';

const setupSocket = (dispatch) => {
    const socket = new WebSocket('ws://localhost:3000');

    socket.onopen = () => {
        socket.send(JSON.stringify('Hello Server!'));
    };

    socket.onmessage = (event) => {
            const data = JSON.parse(event.data);

            switch (data.type) {
                case ADD_MESSAGE:
                    dispatch(addMessage(data.payload));
                    break;

                default:
                    break;
            }
    };

    return socket;
};

export default setupSocket;
