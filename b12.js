Block.defineBlock (55, "Redstone Off",[["redstone_dust_cross",0], ["redstone_dust_cross",0], ["redstone_dust_cross",0], ["redstone_dust_cross",0], ["redstone_dust_cross",0], ["redstone_dust_cross",0]],50,false,13)           
Block.setDestroyTime(55,0.1)
Block.setShape(55,0,0,0,1,1/16,1)
Block.setColor(55, [0x440000] )
Block.setRenderLayer (55, 2)
  
Block.defineBlock (23, "Redstone On",[["redstone_dust_cross",0], ["redstone_dust_cross",0], ["redstone_dust_cross",0], ["redstone_dust_cross",0], ["redstone_dust_cross",0], ["redstone_dust_cross",0]],50,false,13)           
Block.setDestroyTime(23,0.1)
Block.setShape(23,0,0,0,1,1/16,1)
Block.setColor(23, [0xFD0000] )
Block.setLightLevel (23,5)
Block.setRenderLayer (23, 2)

Block.defineBlock (123, "Redstone Lamp",[["redstone_lamp_off",0], ["redstone_lamp_off",0], ["redstone_lamp_off",0], ["redstone_lamp_off",0], ["redstone_lamp_off",0], ["redstone_lamp_off",0]],50,false,0),         
Block.setDestroyTime(123,0.1)
  
Block.defineBlock (124, "Redstone Lamp",[["redstone_lamp_on",0], ["redstone_lamp_on",0], ["redstone_lamp_on",0], ["redstone_lamp_on",0], ["redstone_lamp_on",0], ["redstone_lamp_on",0]],50,false,0),         
Block.setDestroyTime(124,0.1)
Block.setLightLevel (124,15)

Block.defineBlock (76, "Redstone Torch",[["redstone_torch_on",0], ["redstone_torch_on",0], ["redstone_torch_on",0], ["redstone_torch_on",0], ["redstone_torch_on",0], ["redstone_torch_on",0]],50,false,1)           
Block.setDestroyTime(76,0.1)
Block.setLightLevel (76,7)
Block.setRenderLayer (76, 1)

Block.defineBlock (75, "Redstone Torch",[["redstone_torch_off",0], ["redstone_torch_off",0], ["redstone_torch_off",0], ["redstone_torch_off",0], ["redstone_torch_off",0], ["redstone_torch_off",0]],50,false,1)           
Block.setDestroyTime(75,0.1)
Block.setRenderLayer (75, 1)

Block.defineBlock (69, "Lever",[["lever",0], ["lever",0], ["lever",0], ["lever",0], ["lever",0], ["lever",0]],50,false,1)           
Block.setDestroyTime(69,0.1)
Block.setRenderLayer (69, 1)

Block.defineBlock (70, "Stone Pressure Plate",[["stone",0], ["stone",0], ["stone",0], ["stone",0], ["stone",0], ["stone",0]],50,false,13)           
Block.setDestroyTime(70,0.1)
Block.setShape(70,0,0,0,1,1/16,1)
Block.setRenderLayer (70, 2)

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
Block.setShape (102,0.31,0.38,0.88,0.69,0.62,1)
Block.setRenderLayer (102,2)

function useItem (x,y,z,i,b,side)
{
  var A = Level.getData (x,y,z)
  if (b !==55 && b !==23 && b !==75 && b !==76 && b !==69 && i == 331)
  {
    setTile (x,y+1,z,55)
  }
  if (i == 331 && side == 1)
  {
    if (getTile (x-1,y+1,z) == 23 || getTile (x+1,y+1,z) == 23 || getTile (x,y+1,z-1) == 23 || getTile (x,y+1,z+1) == 23 || getTile (x-1,y+2,z) == 23 || getTile (x+1,y+2,z) == 23 || getTile (x,y+2,z-1) == 23 || getTile (x,y+2,z+1) == 23 || getTile (x-1,y,z) == 23 || getTile (x+1,y,z) == 23 || getTile (x,y,z-1) == 23 || getTile (x,y,z+1) == 23)
    {
      setTile (x,y+1,z,23)
      checkRed (x-1,y,z,15,true)
      checkRed (x+1,y,z,15,true)
      checkRed (x,y,z-1,15,true)
      checkRed (x,y,z+1,15,true)
      checkRed (x-1,y+1,z,15,true)
      checkRed (x+1,y+1,z,15,true)
      checkRed (x,y+1,z-1,15,true)
      checkRed (x,y+1,z+1,15,true)
      checkRed (x-1,y+2,z,15,true)
      checkRed (x+1,y+2,z,15,true)
      checkRed (x,y+2,z-1,15,true)
      checkRed (x,y+2,z+1,15,true)
    }
    else if (getTile (x-1,y,z) == 76 || getTile (x+1,y,z) == 76 || getTile (x,y,z-1) == 76 || getTile (x,y,z+1) == 76)
    {
      setTile (x,y+1,z,23)
      checkRed (x-1,y,z,15,true)
      checkRed (x+1,y,z,15,true)
      checkRed (x,y,z-1,15,true)
      checkRed (x,y,z+1,15,true)
     }
    else setTile (x,y+1,z,55)
  }
  if (b == 69 && A == 0)
  {
    checkRed (x-1,y,z,15,true)
    checkRed (x+1,y,z,15,true)
    checkRed (x,y,z-1,15,true)
    checkRed (x,y,z+1,15,true)
    checkRed (x,y-2,z,15,true)
    checkLamp1 (x-1,y,z)
    checkLamp1 (x+1,y,z)
    checkLamp1 (x,y,z-1)
    checkLamp1 (x,y,z+1)
    checkLamp1 (x,y-2,z)
    checkTnt (x-1,y+1,z)
    checkTnt (x+1,y+1,z)
    checkTnt (x,y+1,z-1)
    checkTnt (x,y+1,z+1)
    checkTnt (x,y-2,z)
    setTile (x,y,z,69,1)
  }
  if (b == 69 && A == 1)
  {
    checkRed (x-1,y,z,15,false)
    checkRed (x+1,y,z,15,false)
    checkRed (x,y,z-1,15,false)
    checkRed (x,y,z+1,15,false)
    checkRed (x,y-2,z,15,false)
    checkLamp2 (x-1,y,z)
    checkLamp2 (x+1,y,z)
    checkLamp2 (x,y,z-1)
    checkLamp2 (x,y,z+1)
    checkLamp2 (x,y-2,z)
    setTile (x,y,z,69,0)
  }
  if (b == 77 && A == 0)
  {
    setTile (x,y,z,77,1)
    checkRed (x-1,y+1,z,true)
    checkRed (x+1,y,z,true)
    checkRed (x,y,z-1,true)
    checkRed (x,y,z+1,true)
    checkRed (x,y-2,z,true)
    setTile (x,y,z,77,0)
    checkRed (x-1,y+1,z,false)
    checkRed (x+1,y,z,false)
    checkRed (x,y,z-1,false)
    checkRed (x,y,z+1,false)
    checkRed (x,y-2,z,false)
  }
  if (b == 100 && A == 0)
  {
    setTile (x,y,z,100,1)
    checkRed (x-1,y,z,true)
    checkRed (x+1,y+1,z,true)
    checkRed (x,y,z-1,true)
    checkRed (x,y,z+1,true)
    checkRed (x,y-2,z,true)
    setTile (x,y,z,100,0)
    checkRed (x-1,y,z,false)
    checkRed (x+1,y+1,z,false)
    checkRed (x,y,z-1,false)
    checkRed (x,y,z+1,false)
    checkRed (x,y-2,z,false)
  }
  if (b == 101 && A == 0)
  {
    setTile (x,y,z,101,1)
    checkRed (x-1,y,z,true)
    checkRed (x+1,y,z,true)
    checkRed (x,y+1,z-1,true)
    checkRed (x,y,z+1,true)
    checkRed (x,y-2,z,true)
    setTile (x,y,z,101,0)
    checkRed (x-1,y,z,false)
    checkRed (x+1,y,z,false)
    checkRed (x,y+1,z-1,false)
    checkRed (x,y,z+1,false)
    checkRed (x,y-2,z,false)
  }
  if (b == 102 && A == 0)
  {
    setTile (x,y,z,102,1)
    checkRed (x-1,y,z,true)
    checkRed (x+1,y,z,true)
    checkRed (x,y,z-1,true)
    checkRed (x,y+1,z+1,true)
    checkRed (x,y-2,z,true)
    setTile (x,y,z,102,0)
    checkRed (x-1,y,z,false)
    checkRed (x+1,y,z,false)
    checkRed (x,y,z-1,false)
    checkRed (x,y+1,z+1,false)
    checkRed (x,y-2,z,false)
  }
  if (b !== 0 && A == 0 && i == 76)
  {
    checkRed (x-1,y+1,z,15,true)
    checkRed (x+1,y+1,z,15,true)
    checkRed (x,y+1,z-1,15,true)
    checkRed (x,y+1,z+1,15,true)
    checkRed (x,y+3,z,15,true)
    checkLamp1 (x-1,y+1,z)
    checkLamp1 (x+1,y+1,z)
    checkLamp1 (x,y+1,z-1)
    checkLamp1 (x,y+1,z+1)
    checkLamp1 (x,y+3,z)
    checkTnt (x-1,y+1,z)
    checkTnt (x+1,y+1,z)
    checkTnt (x,y+1,z-1)
    checkTnt (x,y+1,z+1)
    checkTnt (x,y+3,z)
    setTile (x,y+1,z,76,0)
  }
  if (getTile (x,y+1,z) == 76 && getTile (x,y-1,z) == 76)
  {
    setTile (x,y+1,z,75)
  }
  if (getTile (x,y+1,z) == 76 && getTile (x,y+3,z) == 76)
  {
    setTile (x,y+3,z,75)
  }
  if (getTile (x,y+1,z) == 76 && getTile (x,y+3,z) == 76 && getTile (x,y+5,z) == 75)
  {
    setTile (x,y+3,z,75)
  }
  if (getTile (x,y+1,z) == 76 && getTile (x,y+3,z) == 76 && getTile (x,y+5,z) == 75)
  {
    setTile (x,y+5,z,76)
  }
  if (i == 77 && side == 1)
  {
    preventDefault()
  }
  if (i == 77 && side == 2)
  {
    setTile (x,y,z-1,102)
  }
  if (i == 77 && side == 3)
  {
    setTile (x,y,z+1,101)
  }
  if (i == 77 && side == 4)
  {
    setTile (x-1,y,z,100)
  }
  if (i == 77 && side == 5)
  {
    setTile (x+1,y,z,77)
  }
  if (i == 77 && side == 6)
  {
    preventDefault()
  }
}

function checkRed (x,y,z,p,m)
{
  if (getTile (x,y,z) == 55 && m)
  {
    setTile (x,y,z,23,0)
    checkRed (x-1,y,z,p-1,true)
    checkRed (x+1,y,z,p-1,true)
    checkRed (x,y,z-1,p-1,true)
    checkRed (x,y,z+1,p-1,true)
    if (getTile (x,y+1,z) == 0)
    {
      checkRed (x-1,y+1,z,15,true)
      checkRed (x+1,y+1,z,15,true)
      checkRed (x,y+1,z-1,15,true)
      checkRed (x,y+1,z+1,15,true)
      checkRed (x-1,y-1,z,15,true)
      checkRed (x+1,y-1,z,15,true)
      checkRed (x,y-1,z-1,15,true)
      checkRed (x,y-1,z+1,15,true)
    }
  }
    
  if (getTile (x,y,z) == 23 && !m)
  {
    setTile (x,y,z,55)
    checkRed (x-1,y,z,p-1,false)
    checkRed (x+1,y,z,p-1,false)
    checkRed (x,y,z-1,p-1,false)
    checkRed (x,y,z+1,p-1,false)
    if (getTile (x,y+1,z) == 0)
    {
      checkRed (x-1,y+1,z,p-1,false)
      checkRed (x+1,y+1,z,p-1,false)
      checkRed (x,y+1,z-1,p-1,false)
      checkRed (x,y+1,z+1,p-1,false)
      checkRed (x-1,y-1,z,p-1,false)
      checkRed (x+1,y-1,z,p-1,false)
      checkRed (x,y-1,z-1,p-1,false)
      checkRed (x,y-1,z+1,p-1,false)
    }
  }
  if (getTile (x,y,z) == 23 && m)
  {
    checkTnt (x+1,y-1,z)
    checkTnt (x-1,y-1,z)
    checkTnt (x,y-1,z+1)
    checkTnt (x,y-1,z-1)
    checkTnt (x+1,y,z)
    checkTnt (x-1,y,z)
    checkTnt (x,y,z+1)
    checkTnt (x,y,z-1)
    checkTnt (x,y-2,z)
  }
  if (getTile (x,y,z) == 23 && m)
  {
    checkLamp1 (x+1,y-1,z)
    checkLamp1 (x-1,y-1,z)
    checkLamp1 (x,y-1,z+1)
    checkLamp1 (x,y-1,z-1)
    checkLamp1 (x+1,y,z)
    checkLamp1 (x-1,y,z)
    checkLamp1 (x,y,z+1)
    checkLamp1 (x,y,z-1)
    checkLamp1 (x,y-2,z)
  }
  if (getTile (x,y,z) == 55 && !m)
  {
    checkLamp2 (x+1,y-1,z)
    checkLamp2 (x-1,y-1,z)
    checkLamp2 (x,y-1,z+1)
    checkLamp2 (x,y-1,z-1)
    checkLamp2 (x+1,y,z)
    checkLamp2 (x-1,y,z)
    checkLamp2 (x,y,z+1)
    checkLamp2 (x,y,z-1)
    checkLamp2 (x,y-2,z)
  }
  if (getTile (x,y,z) == 23 && m)
  {
    checkTorch1 (x+1,y+1,z)
    checkTorch1 (x-1,y+1,z)
    checkTorch1 (x,y+1,z+1)
    checkTorch1 (x,y+1,z-1)
  }
  if (getTile (x,y,z) == 55 && !m)
  {
    checkTorch2 (x+1,y+1,z)
    checkTorch2 (x-1,y+1,z)
    checkTorch2 (x,y+1,z+1)
    checkTorch2 (x,y+1,z-1)
  }
  if (getTile (x,y,z) == 23 && m)
  {
    checkTorch3 (x+1,y+3,z)
    checkTorch3 (x-1,y+3,z)
    checkTorch3 (x,y+3,z+1)
    checkTorch3 (x,y+3,z-1)
  }
  if (getTile (x,y,z) == 55 && !m)
  {
    checkTorch4 (x+1,y+3,z)
    checkTorch4 (x-1,y+3,z)
    checkTorch4 (x,y+3,z+1)
    checkTorch4 (x,y+3,z-1)
  }
  if (getTile (x,y,z) == 23 && m)
  {
    checkTorch5 (x+1,y+5,z)
    checkTorch5 (x-1,y+5,z)
    checkTorch5 (x,y+5,z+1)
    checkTorch5 (x,y+5,z-1)
  }
  if (getTile (x,y,z) == 55 && !m)
  {
    checkTorch6 (x+1,y+5,z)
    checkTorch6 (x-1,y+5,z)
    checkTorch6 (x,y+5,z+1)
    checkTorch6 (x,y+5,z-1)
  }
  if (getTile (x,y,z) == 75)
  {
    checkRed (x-1,y,z,15,true)
    checkRed (x+1,y,z,15,true)
    checkRed (x,y,z-1,15,true)
    checkRed (x,y,z+1,15,true)
    checkRed (x,y+2,z,15,true)
  }
  if (getTile (x,y,z) == 76)
  {
    checkRed (x-1,y,z,p-1,false)
    checkRed (x+1,y,z,p-1,false)
    checkRed (x,y,z-1,p-1,false)
    checkRed (x,y,z+1,p-1,false)
    checkRed (x,y+2,z,p-1,false)
  }
  if (getTile (x,y,z) == 23 && m)
  {
    checkDoor (x+1,y+1,z)
    checkDoor (x-1,y+1,z)
    checkDoor (x,y+1,z+1)
    checkDoor (x,y+1,z-1)
    checkDoor (x+1,y,z)
    checkDoor (x-1,y,z)
    checkDoor (x,y,z+1)
    checkDoor (x,y,z-1)
  }
}
function checkTnt (x,y,z)
{
  if (getTile (x,y,z) == 46)
  {
    setTile (x,y,z,0)
    Level.spawnMob (x+0.5, y+0.5, z+0.5, 65, "mob/cow.png")
  }
}
function checkLamp1 (x,y,z)
{
  if (getTile (x,y,z) == 123)
  {
    setTile (x,y,z,124)
  }
}
function checkLamp2 (x,y,z)
{
  if (getTile (x,y,z) == 124)
  {
    setTile (x,y,z,123)
  }
}  
function checkTorch1 (x,y,z)
{
  if (getTile (x,y,z) == 76)
  {
    setTile (x,y,z,75)
  }
}  
function checkTorch2 (x,y,z)
{
  if (getTile (x,y,z) == 75)
  {
    setTile (x,y,z,76)
  }
}  
function checkTorch3 (x,y,z)
{
  if (getTile (x,y,z) == 75)
  {
    setTile (x,y,z,76)
  }
}  
function checkTorch4 (x,y,z)
{
  if (getTile (x,y,z) == 76)
  {
    setTile (x,y,z,75)
  }
}  
function checkTorch5 (x,y,z)
{
  if (getTile (x,y,z) == 76)
  {
    setTile (x,y,z,75)
  }
}  
function checkTorch6 (x,y,z)
{
  if (getTile (x,y,z) == 75)
  {
    setTile (x,y,z,76)
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
function destroyBlock (x,y,z,side) 
{ 
  var A = Level.getData (x,y,z)
  if (getTile (x,y,z) == 76)
  {
    checkRed (x-1,y,z,15,false)
    checkRed (x+1,y,z,15,false)
    checkRed (x,y,z-1,15,false)
    checkRed (x,y,z+1,15,false)
    checkRed (x,y+2,z,15,false)
    checkLamp2 (x-1,y,z)
    checkLamp2 (x+1,y,z)
    checkLamp2 (x,y,z-1)
    checkLamp2 (x,y,z+1)
    checkLamp2 (x,y+2,z)
  }
  if (getTile (x,y,z) == 76 && getTile (x,y+2,z) == 75)
  {
    setTile (x,y+2,z,76)
    checkRed (x-1,y,z,15,true)
    checkRed (x+1,y,z,15,true)
    checkRed (x,y,z-1,15,true)
    checkRed (x,y,z+1,15,true)
    checkRed (x,y+2,z,15,true)
  }
  if (getTile (x,y,z) == 76 && getTile (x,y+2,z) == 75 && getTile (x,y+4,z) == 76)
  {
    setTile (x,y+4,z,75)
    checkRed (x-1,y,z,15,false)
    checkRed (x+1,y,z,15,false)
    checkRed (x,y,z-1,15,false)
    checkRed (x,y,z+1,15,false)
    checkRed (x,y+2,z,15,false)
  }
  if (getTile (x,y,z) == 76 && getTile (x,y+2,z) == 75 && getTile (x,y+5,z) == 76)
  {
    setTile (x,y+2,z,76)
    checkRed (x-1,y,z,15,true)
    checkRed (x+1,y,z,15,true)
    checkRed (x,y,z-1,15,true)
    checkRed (x,y,z+1,15,true)
    checkRed (x,y+2,z,15,true)
  }
  if (getTile (x,y,z) == 69 && A == 1)
  {
    checkRed (x-1,y,z,15,false)
    checkRed (x+1,y,z,15,false)
    checkRed (x,y,z-1,15,false)
    checkRed (x,y,z+1,15,false)
    checkRed (x,y-2,z,15,false)
    checkLamp2 (x-1,y,z)
    checkLamp2 (x+1,y,z)
    checkLamp2 (x,y,z-1)
    checkLamp2 (x,y,z+1)
    checkLamp2 (x,y-2,z)
  }
  if (getTile (x,y,z) == 23)
  {
    checkRed (x-1,y,z,15,false)
    checkRed (x+1,y,z,15,false)
    checkRed (x,y,z-1,15,false)
    checkRed (x,y,z+1,15,false)
  }
}
function checkDoor (x,y,z,enable)
{
 var open = Level.getData (x,y,z)
 if (open>=4)
 {
   open=open-4
 }
 setTile(x,y,z,getTile(x,y,z),enable?open+4:open)
}
  
