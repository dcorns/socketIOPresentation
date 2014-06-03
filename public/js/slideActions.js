/**
 * Created by dcorns on 6/2/14.
 */
'use strict';


function btnNextClick(id){
  console.dir(id);
  socket.emit('nextClicked',id);

}