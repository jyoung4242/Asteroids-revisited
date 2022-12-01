/* <div class="joystick" \${===isMobile}>
        <div class="js_rel_cont">
            <div class="knob"
                \${==>joystick.knob}
                \${touchstart@=>joystick.start}
                \${touchmove@=>joystick.move}
                \${touchend@=>joystick.end}
                \${touchcancel@=>joystick.cancel}
            ></div>    
        </div>
    </div> 
    
     //touch controls
      //if (model.joystick.dir == "NW" || model.joystick.dir == "W" || model.joystick.dir == "SW")
      //if (model.joystick.dir == "NE" || model.joystick.dir == "E" || model.joystick.dir == "SE")
      //if (model.joystick.dir == "NE" || model.joystick.dir == "N" || model.joystick.dir == "NW")
      //if (model.joystick.dir == "SE" || model.joystick.dir == "S" || model.joystick.dir == "SW") model.entities[0].reverse();
      if (model.joystick.dir == "W") model.entities[0].turnLeft();
      if (model.joystick.dir == "E") model.entities[0].turnRight();
      if (model.joystick.dir == "N") model.entities[0].accelerate();
      if (model.joystick.dir == "S") model.entities[0].reverse();
      if (model.joystick.dir == "NA") model.entities[0].decelerate();*/
