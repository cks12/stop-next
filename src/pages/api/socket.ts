import SocketService from 'class/SocketService';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>| any
) {
  if (res.socket.server.io) return res.end();

  const server = new SocketService();
  const io = server.create_server(res.socket.server);
  res.socket.server.io = io 
  res.end();
}

export default handler;