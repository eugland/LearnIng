const prompt = require("prompt");


function ask(que, yes, no) {
    const {conf} = prompt.get(['conf']);
    console.log(conf)
    if (conf) yes()
    else no();
}
  
function showOk() {
    console.log( "You agreed." );
}
  
function showCancel() {
    console.log( "You canceled the execution." );
}
  
  // usage: functions showOk, showCancel are passed as arguments to ask
//ask("Do you agree?", showOk, showCancel);
prompt.get(['username', 'email'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Email: ' + result.email);
});
