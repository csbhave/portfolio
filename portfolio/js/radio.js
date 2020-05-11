// var widget_id = widget_id || "RMKrOcK6w5I/w6dbIynCsMK+UMK7JMKkwq3DtEXDhic=";
    var mytuner_scripts = mytuner_scripts || {};
    mytuner_scripts["player-v1.js_queue"] = mytuner_scripts["player-v1.js_queue"] || [];
    if (mytuner_scripts["player-v1.js-imported"] == undefined) {
        mytuner_scripts["player-v1.js-imported"] = false;
        mytuner_scripts["player-v1.js"] = function(){};
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://mytuner-radio.com/static/js/widgets/player-v1.js";
        s.defer = true;
        if (s.readyState){  //IE
            s.onreadystatechange = function(){
                if (s.readyState == "loaded" || s.readyState == "complete"){
                    s.onreadystatechange = null;
                    runQueue();
                }
            };
        } else {  //Others
            s.onload = function(){ runQueue(); };
        }
        document.getElementsByTagName('head')[0].appendChild(s);

        function runQueue() {
            mytuner_scripts["player-v1.js_queue"].forEach(function(func) {
                func();
            });
        }
        mytuner_scripts["player-v1.js_queue"].push(function(){mytuner_scripts["player-v1.js"]("RMKrOcK6w5I/w6dbIynCsMK+UMK7JMKkwq3DtEXDhic=")});
    } else {
        let widget = document.getElementById("RMKrOcK6w5I/w6dbIynCsMK+UMK7JMKkwq3DtEXDhic=");
        if (widget && widget.dataset.requires_initialization === "true") {
            if (mytuner_scripts["player-v1.js-imported"]) {
                mytuner_scripts["player-v1.js"]("RMKrOcK6w5I/w6dbIynCsMK+UMK7JMKkwq3DtEXDhic=");
                widget.dataset.requires_initialization = "false";
            } else {
                mytuner_scripts["player-v1.js_queue"].push(function(){
                    mytuner_scripts["player-v1.js"]("RMKrOcK6w5I/w6dbIynCsMK+UMK7JMKkwq3DtEXDhic=");
                    widget.dataset.requires_initialization = "false";
                });
            }
        }
    }

    var mytuner_scripts = mytuner_scripts || {};
    if (mytuner_scripts["widget-player-v1.js-imported"] == undefined) {
        mytuner_scripts["widget-player-v1.js-imported"] = false;
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://mytuner-radio.com/static/js/widgets/widget-player-v1.js";
        s.defer = true;
        document.getElementsByTagName('head')[0].appendChild(s);
    }