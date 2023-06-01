//Log the Apollo 11 countdown, use the message provided as the last output. It starts from 8 till 0!

const apolloCountdownMessage = "all engine running... LIFT-OFF!";
let countdown = 8;
while (countdown >=0){
    console.log (countdown)
    countdown -= 1 //it was very difficult, had to google...
}
console.log(apolloCountdownMessage);