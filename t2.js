Block.defineBlock (77,"Stone Button",[["stone",0]],50,false,7)
Block.setShape (77,0,0.38,0.31,0.12,0.62,0.69)
Block.setRenderLayer (77,1)

Block.defineBlock (100,"Stone Button",[["stone",0]],50,false,7)
Block.setShape (100,0.88,0.38,0.31,1,0.62,0.69)
Block.setRenderLayer (100,2)

Block.defineBlock (101,"Stone Button",[["stone",0]],50,false,7)
Block.setShape (101,0.31,0.38,0,0.69,0.62,0.12)
Block.setRenderLayer (101,2)

Block.defineBlock (102,"Stone Button",[["stone",0]],50,false,7)
Block.setShape (102,0.31,0.38,0.88,0.69,0.62,0)
Block.setRenderLayer (102,2)

function useItem (x,y,z,itemId,blockId,side)
{
  if (itemId == 77 && side == 1)
  {
    preventDefault()
  }
  if (itemId == 77 && side == 4)
  {
    setTile (x-1,y,z,100)
  }
  if (itemId == 77 && side == 5)
  {
    setTile (x+1,y,z,77)
  }
  if (itemId == 77 && side == 6)
  {
    preventDefault()
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
