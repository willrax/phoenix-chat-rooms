import { Socket } from 'deps/phoenix/web/static/js/phoenix';
import Application from './react-app';

window.onload = () => {
  let socket = new Socket('/socket');
  socket.connect();
  let channel = socket.channel('messages:new', {});

  channel.join().receive('ok', chan => {
    console.log('Joined');
  });

  React.render(
    <Application channel={channel}/>,
    document.getElementById("application")
  );
}
