Block.defineBlock (77,"Stone Button",[["stone",0]],50,false,7)
Block.setShape (77,0,11/16,0,1,6/16,1)
Block.setRenderLayer (77,2)

function useItem (x,y,z,b,i,side)
{
  if (b !==0 && i == 77 && side == 1)
  {
    setTile (x,y+1,z,77)
  }
}

function procCmd (c) {
    var p = c.split(" ");
    var command = p[0];
    switch(command) {
        case 'give': {
            if(p[1] > 0) {
                Entity.setCarriedItem(getPlayerEnt(),p[1],1,p[2]);
            }
        }
    }
}
