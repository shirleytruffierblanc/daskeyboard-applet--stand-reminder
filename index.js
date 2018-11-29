const q = require('daskeyboard-applet');
const logger = q.logger; // to access to the logger


class StandReminder extends q.DesktopApp {

  constructor() {
    super();// in order to initialize some important variables and signal handlers 
    this.pollingInterval = 1000;
    logger.info("Stand Reminder ready to go!");
  }

  async run() {
    console.log("je suis dans run");
    var now = new Date();
    var n = now.getMinutes();
    var sec = now.getSeconds();

    //var init = sec - sec;

    //console.log("valeur de init", init);

    console.log("valeur de now", now);
    console.log("valeur des minutes actuelles ", n);
    console.log("valeur des secondes", sec);

    const reminder = this.config.reminder;
    var integer = parseInt(reminder, 10);

        if ( n == integer && sec == 0){
          
          logger.info("Running.");
          const color = '#FF0000';
          console.log("envoie signal");

          return new q.Signal({
            points: [
              [new q.Point(color, q. Effects.BLINK)]
            ],
            name: 'Stand Reminder',
            message: `Stand up !!` 
          });
    }
      else{
          console.log("je retourne rien");
        
       }


    
    
  }
}



module.exports = {
  StandReminder: StandReminder
}


const applet = new StandReminder();

/*

{"geometry": { "width": 1 "height": 1 "origin": {"x": 1,"y": 1} },"applet": {"user": { 30}}} 

' {"geometry": {"width": 4, "height": 1, "origin": {"x": 1, "y": 1}}}'

'{"applet":{"user": {"reminder": "30"}}}'

*/