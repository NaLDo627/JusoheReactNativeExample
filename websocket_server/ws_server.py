import logging
from websocket_server import WebsocketServer

def on_connect(client, server):
    server.send_message(client, "You are connected to python server")

def on_message(client, server, message):
    server.send_message(client, "you said" + message)

ws_server = WebsocketServer(80, host='0.0.0.0', loglevel=logging.INFO)
ws_server.set_fn_new_client(on_connect)
ws_server.set_fn_message_received(on_message)
ws_server.run_forever()