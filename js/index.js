var colors = { 
    red:         'grapefruit',
    orange:     'bittersweet',
    darkgreen:  'mint',
    yellow:     'sunflower',
    green:      'grass',
    blue:       'acqua',
    darkblue:   'blue-jeans',
    violet:     'lavender_',
    pink:       'pink-rose',
    lightgrey:  'light-gray',
};
var keys = Object.keys( colors );
var speech = new webkitSpeechRecognition();
speech.language = 'en-US';
speech.continuous = true;
speech.interimResults = true;
speech.onresult = function( e ) {
    if ( e.results[e.results.length-1].isFinal) {
      var said = e.results[e.results.length-1][0].transcript.toLowerCase();
      output.textContent = said;
      
        for (var i = keys.length - 1; i >= 0; i--) {
            var sanitized_said = said.trim().replace( ' ', '' );

            if ( keys[i] === sanitized_said ) {
                
                document.body.className = 'body--' + colors[keys[i]];
            } else if ( sanitized_said === 'remove' || sanitized_said === 'none' || sanitized_said === 'clean' ) {
                document.body.className = '';
            }
        };
    };
}

speech.start();