var i2soft={};
i2soft.util={keyCode:function(b){
  if(!b){
    var b=window.event
  }
  if($.browser.mozilla){
    var a=b.keyCode;
    switch(a){
      case 59:
      a=186;
      break;
      case 107:
      a=187;
      break;
      case 109:
      a=189;
      break;
      case 61:
      a=187;
      break;
      case 173:
      a=189;
      break
    }
    return a
  }
  if($.browser.opera){
    var a=b.keyCode;switch(a){case 59:a=186;break;case 61:a=187;break;case 109:a=189;break}return a}return b.keyCode},isCtrl:function(a){if(!a){var a=window.event}return a.ctrlKey},isAlt:function(a){if(!a){var a=window.event}return a.altKey},isShift:function(a){if(!a){var a=window.event}return a.shiftKey},insertAtCaret:function(a,f){var d=this.getSelectionStart(a);var b=this.getSelectionEnd(a);var c=a.value.length;a.value=a.value.substring(0,d)+f+a.value.substring(b,c);this.setCaretPosition(a,d+f.length,0)},deleteAtCaret:function(c,b,a){var g=this.getSelectionStart(c);var d=this.getSelectionEnd(c);var f=c.value.length;if(b>g){b=g}if(d+a>f){a=f-d}var h=c.value.substring(g-b,d+a);c.value=c.value.substring(0,g-b)+c.value.substring(d+a);this.setCaretPosition(c,g-b,0);return h},getSelectionStart:function(a){a.focus();if(a.selectionStart!==undefined){return a.selectionStart}else{if(document.selection){var b=document.selection.createRange();if(b==null){return 0}var d=a.createTextRange();var c=d.duplicate();d.moveToBookmark(b.getBookmark());c.setEndPoint("EndToStart",d);return c.text.length}}return 0},getSelectionEnd:function(a){a.focus();if(a.selectionEnd!==undefined){return a.selectionEnd}else{if(document.selection){var b=document.selection.createRange();if(b==null){return 0}var d=a.createTextRange();var c=d.duplicate();d.moveToBookmark(b.getBookmark());c.setEndPoint("EndToStart",d);return c.text.length+b.text.length}}return a.value.length},setCaretPosition:function(b,d,a){var c=b.value.length;if(d>c){d=c}if(d+a>c){a=c-a}b.focus();if(b.setSelectionRange){b.setSelectionRange(d,d+a)}else{if(b.createTextRange){var f=b.createTextRange();f.collapse(true);f.moveEnd("character",d+a);f.moveStart("character",d);f.select()}}b.focus()},selectAll:function(a){this.setCaretPosition(a,0,a.value.length)}};i2soft.layout=function(){this.keys=[];this.deadkeys=[];this.dir="ltr";this.name="US";this.lang="en"};i2soft.layout.prototype.loadDefault=function(){this.keys=[{i:"k0",c:"0",n:"`",s:"~"},{i:"k1",c:"0",n:"1",s:"!"},{i:"k2",c:"0",n:"2",s:"@"},{i:"k3",c:"0",n:"3",s:"#"},{i:"k4",c:"0",n:"4",s:"$"},{i:"k5",c:"0",n:"5",s:"%"},{i:"k6",c:"0",n:"6",s:"^"},{i:"k7",c:"0",n:"7",s:"&"},{i:"k8",c:"0",n:"8",s:"*"},{i:"k9",c:"0",n:"9",s:"("},{i:"k10",c:"0",n:"0",s:")"},{i:"k11",c:"0",n:"-",s:"_"},{i:"k12",c:"0",n:"=",s:"+"},{i:"k13",c:"1",n:"q",s:"Q"},{i:"k14",c:"1",n:"w",s:"W"},{i:"k15",c:"1",n:"e",s:"E"},{i:"k16",c:"1",n:"r",s:"R"},{i:"k17",c:"1",n:"t",s:"T"},{i:"k18",c:"1",n:"y",s:"Y"},{i:"k19",c:"1",n:"u",s:"U"},{i:"k20",c:"1",n:"i",s:"I"},{i:"k21",c:"1",n:"o",s:"O"},{i:"k22",c:"1",n:"p",s:"P"},{i:"k23",c:"0",n:"[",s:"{"},{i:"k24",c:"0",n:"]",s:"}"},{i:"k25",c:"0",n:"\\",s:"|"},{i:"k26",c:"1",n:"a",s:"A"},{i:"k27",c:"1",n:"s",s:"S"},{i:"k28",c:"1",n:"d",s:"D"},{i:"k29",c:"1",n:"f",s:"F"},{i:"k30",c:"1",n:"g",s:"G"},{i:"k31",c:"1",n:"h",s:"H"},{i:"k32",c:"1",n:"j",s:"J"},{i:"k33",c:"1",n:"k",s:"K"},{i:"k34",c:"1",n:"l",s:"L"},{i:"k35",c:"0",n:";",s:":"},{i:"k36",c:"0",n:"'",s:'"'},{i:"k37",c:"1",n:"z",s:"Z"},{i:"k38",c:"1",n:"x",s:"X"},{i:"k39",c:"1",n:"c",s:"C"},{i:"k40",c:"1",n:"v",s:"V"},{i:"k41",c:"1",n:"b",s:"B"},{i:"k42",c:"1",n:"n",s:"N"},{i:"k43",c:"1",n:"m",s:"M"},{i:"k44",c:"0",n:",",s:"<"},{i:"k45",c:"0",n:".",s:">"},{i:"k46",c:"0",n:"/",s:"?"},{i:"k47",c:"0",n:"\\",s:"|"}];this.dir="ltr";this.name="US";this.lang="en"};i2soft.layout.prototype.load=function(a){this.keys=a.keys;this.deadkeys=a.deadkeys;this.dir=a.dir;this.name=a.name;this.lang=a.lang?a.lang:"en"};i2soft.layout.parser={keyCodes:[192,49,50,51,52,53,54,55,56,57,48,189,187,81,87,69,82,84,89,85,73,79,80,219,221,220,65,83,68,70,71,72,74,75,76,186,222,90,88,67,86,66,78,77,188,190,191,220],getKeyCode:function(c,e,b){var d=c.length;for(var a=0;a<d;a++){if(c[a].i==b){return e==1?(c[a].s?c[a].s:""):(c[a].n?c[a].n:"")}}return 0},getKey:function(c,b){var d=c.length;for(var a=0;a<d;a++){if(c[a].i==b){return c[a]}}return null},isDeadkey:function(a,d){if(!a){return false}var c=a.length;for(var b=0;b<c;b++){if(a[b].k==d){return true}}return false},getMappedValue:function(a,e,d){if(!a){return""}var c=a.length;for(var b=0;b<c;b++){if(a[b].k==d&&a[b].b==e){return a[b].c}}return""},getKeyId:function(b){for(var a=0;a<48;a++){if(this.keyCodes[a]==b){return a}}return -1},getState:function(d,a,e,b,c){var f="n";if(!a&&!e&&d){f="n"}else{if(!a&&e&&!d){f="s"}else{if(!a&&e&&d){f="s"}else{if(a&&!e&&!d){f="n"}else{if(a&&!e&&d){f="t"}else{if(a&&e&&!d){f="s"}else{if(a&&e&&d){f="f"}}}}}}}if((f=="n"||f=="s")&&b){if(c=="1"){if(f=="n"){f="s"}else{f="n"}}if(c=="SGCap"){if(f=="n"){f="y"}else{if(f=="s"){f="z"}}}}return f}};i2soft.keyboard=function(a,d){this.defaultLayout=new i2soft.layout();this.defaultLayout.loadDefault();this.virtualLayout=new i2soft.layout();this.virtualLayout.loadDefault();this.currentLayout=this.virtualLayout;this.shift=false;this.shiftOn=false;this.caps=false;this.capsOn=false;this.alt=false;this.ctrl=false;this.altCtrlOn=false;this.fontSize=18;this.counter=0;this.interval=0;this.prev="";this.cancelkeypress=false;this.customOnBackspace=function(e){};this.customOnEnter=function(){};this.customOnSpace=function(){return false};this.customOnKey=function(e){return false};this.customOnEsc=function(){};this.customDrawKeyboard=function(e){return e};this.textbox=$("#"+d);this.nativeTextbox=document.getElementById(d);var c=['<div id="i2soft-keyboard">'];for(var b=0;b<13;b++){c.push('<button id="i2soft-k',b,'" class="i2soft-key"></button>')}c.push('<button id="i2soft-backspace"><span>Backspace</span></button>');c.push('<div class="i2soft-clear"></div>');c.push('<button id="i2soft-tab"><span>Tab</span></button>');for(var b=13;b<25;b++){c.push('<button id="i2soft-k',b,'" class="i2soft-key"></button>')}c.push('<button id="i2soft-k25"></button>');c.push('<div class="i2soft-clear"></div>');c.push('<button id="i2soft-caps-lock"><span>Caps Lock</span></button>');for(var b=26;b<37;b++){c.push('<button id="i2soft-k',b,'" class="i2soft-key"></button>')}c.push('<button id="i2soft-enter" class="i2soft-enter"><span>Enter</span></button>');c.push('<div class="i2soft-clear"></div>');c.push('<button id="i2soft-left-shift"><span>Shift</span></button>');c.push('<button id="i2soft-k47" class="i2soft-key"></button>');for(var b=37;b<47;b++){c.push('<button id="i2soft-k',b,'" class="i2soft-key"></button>')}c.push('<button id="i2soft-right-shift"><span>Shift</span></button>');c.push('<div class="i2soft-clear"></div>');c.push('<button id="i2soft-left-ctrl"><span>Ctrl</span></button>');c.push('<button id="i2soft"><span>i2soft</span></button>');c.push('<button id="i2soft-left-alt"><span>Alt</span></button>');c.push('<button id="i2soft-space"><span>Space</span></button>');c.push('<button id="i2soft-right-alt"><span>Alt</span></button>');c.push('<button id="i2soft-escape" title="Turn on/off keyboard input conversion"><span>Esc</span></button>');c.push('<button id="i2soft-right-ctrl"><span>Ctrl</span></button>');c.push('<div class="i2soft-clear"></div>');c.push("</div>");document.getElementById(a).innerHTML=c.join("");this.wireEvents();this.drawKeyboard()};i2soft.keyboard.prototype.loadDefaultLayout=function(a){this.defaultLayout.load(a);this.drawKeyboard()};i2soft.keyboard.prototype.loadVirtualLayout=function(a){this.virtualLayout.load(a);this.drawKeyboard();this.textbox.attr("dir",this.attr("dir"))};i2soft.keyboard.prototype.switchLayout=function(){this.currentLayout=(this.currentLayout===this.defaultLayout)?this.virtualLayout:this.defaultLayout;this.reset();this.drawKeyboard();this.textbox.attr("dir",this.attr("dir"))};i2soft.keyboard.prototype.onEsc=function(){this.switchLayout();this.customOnEsc()};i2soft.keyboard.prototype.onShift=function(){this.shift=!this.shift;this.drawKeyboard()};i2soft.keyboard.prototype.onAlt=function(){this.alt=!this.alt;this.drawKeyboard()};i2soft.keyboard.prototype.onCtrl=function(){this.ctrl=!this.ctrl;this.drawKeyboard()};i2soft.keyboard.prototype.onCapsLock=function(){this.caps=!this.caps;this.drawKeyboard()};i2soft.keyboard.prototype.onBackspace=function(){if(this.prev!=""){this.prev="";this.shift=false;this.drawKeyboard()}else{var a=i2soft.util.deleteAtCaret(this.nativeTextbox,1,0);this.customOnBackspace(a)}};i2soft.keyboard.prototype.onEnter=function(){i2soft.util.insertAtCaret(this.nativeTextbox,"\u000A");this.customOnEnter()};i2soft.keyboard.prototype.onSpace=function(){if(!this.customOnSpace()){i2soft.util.insertAtCaret(this.nativeTextbox,"\u0020")}};i2soft.keyboard.prototype.attr=function(a){if(a=="dir"){return this.currentLayout.dir}else{if(a=="lang"){return this.currentLayout.lang}else{if(a=="name"){return this.currentLayout.name}}}return""};i2soft.keyboard.prototype.reset=function(){this.shift=false;this.caps=false;this.alt=false;this.ctrl=false;this.counter=0;this.interval=0;this.prev=""};i2soft.keyboard.prototype.stopRepeat=function(){if(this.interval!=0){clearInterval(this.interval);this.counter=0;this.interval=0}};i2soft.keyboard.prototype.onKey=function(b){var a=i2soft.layout.parser.getKey(this.currentLayout.keys,b);if(a){var d=i2soft.layout.parser.getState(this.ctrl,this.alt,this.shift,this.caps,a.c?a.c:"0");var e=a[d]?a[d]:"";if(this.prev!=""){var c=i2soft.layout.parser.getMappedValue(this.currentLayout.deadkeys,e,this.prev);if(c!=""){i2soft.util.insertAtCaret(this.nativeTextbox,c)}this.prev=""}else{if(i2soft.layout.parser.isDeadkey(this.currentLayout.deadkeys,e)){this.prev=e}else{if(e!=""){if(!this.customOnKey(e)){i2soft.util.insertAtCaret(this.nativeTextbox,e)}}}}}};i2soft.keyboard.prototype.drawKeyboard=function(){if(!this.currentLayout.keys){return}var d,f,j,k;var g=this.currentLayout.keys.length;for(var e=0;e<g;e++){f=this.currentLayout.keys[e];if(!$("i2soft-"+f.i)){continue}var c=this.ctrl;var a=this.alt;var h=this.shift;var b=this.caps;if(this.shiftOn){h=true}if(this.capsOn){b=true}if(this.altCtrlOn){c=true;a=true}j=i2soft.layout.parser.getState(c,a,h,b,f.c?f.c:"0");k=f[j]?f[j]:"";if(this.prev!=""){k=i2soft.layout.parser.getMappedValue(this.currentLayout.deadkeys,k,this.prev)}if(!h){k=this.customDrawKeyboard(k);if(k==""){k=" "}d='<div class="i2soft-label-reference">'+i2soft.layout.parser.getKeyCode(this.defaultLayout.keys,0,f.i)+'</div><div class="i2soft-label-natural" style="font-size:'+this.fontSize+'px;"> '+k+"</div>"}else{if(k==""){k=" "}d='<div class="i2soft-label-reference">'+i2soft.layout.parser.getKeyCode(this.defaultLayout.keys,0,f.i)+'</div><div class="i2soft-label-shift" style="font-size:'+this.fontSize+'px;"> '+k+"</div>"}document.getElementById("i2soft-"+f.i).innerHTML=d}$("#i2soft-left-ctrl").removeClass();$("#i2soft-right-ctrl").removeClass();if(c){$("#i2soft-left-ctrl").addClass("i2soft-recessed"+(this.ctrl?"":"-hover"));$("#i2soft-right-ctrl").addClass("i2soft-recessed"+(this.ctrl?"":"-hover"))}$("#i2soft-left-alt").removeClass();$("#i2soft-right-alt").removeClass();if(a){$("#i2soft-left-alt").addClass("i2soft-recessed"+(this.alt?"":"-hover"));$("#i2soft-right-alt").addClass("i2soft-recessed"+(this.alt?"":"-hover"))}$("#i2soft-left-shift").removeClass();$("#i2soft-right-shift").removeClass();if(h){$("#i2soft-left-shift").addClass("i2soft-recessed"+(this.shift?"":"-hover"));$("#i2soft-right-shift").addClass("i2soft-recessed"+(this.shift?"":"-hover"))}$("#i2soft-caps-lock").removeClass();if(b){$("#i2soft-caps-lock").addClass("i2soft-recessed"+(this.caps?"":"-hover"))}};i2soft.keyboard.prototype.wireEvents=function(){var a=this;$("#i2soft-keyboard").delegate("button","mousedown",function(b){var c=this.id;a.interval=setInterval(function(){a.counter++;if(a.counter>5){switch(c){case"i2soft-backspace":a.onBackspace();break;default:if(c.search("i2soft-k([0-9])|([1-3][0-9])|(4[0-7])")!=-1){a.onKey(c.substr(7));a.shift=false;a.alt=false;a.ctrl=false;a.drawKeyboard()}break}}},50)});$("#i2soft-keyboard").delegate("button","mouseup",function(b){a.stopRepeat()});$("#i2soft-keyboard").delegate("button","mouseout",function(b){a.stopRepeat()});$("#i2soft-keyboard").delegate("button","click",function(b){var c=this.id;switch(c){case"i2soft-left-shift":case"i2soft-right-shift":a.onShift();break;case"i2soft-left-alt":case"i2soft-right-alt":a.onCtrl();a.onAlt();break;case"i2soft-left-ctrl":case"i2soft-right-ctrl":a.onAlt();a.onCtrl();break;case"i2soft-escape":a.onEsc();break;case"i2soft-caps-lock":a.onCapsLock();break;case"i2soft-backspace":a.onBackspace();break;case"i2soft-enter":a.onEnter();break;case"i2soft-space":a.onSpace();break;default:if(c.search("i2soft-k([0-9])|([1-3][0-9])|(4[0-7])")!=-1){a.onKey(c.substr(7));a.shift=false;a.alt=false;a.ctrl=false;a.drawKeyboard()}break}});$("#i2soft-left-shift, #i2soft-right-shift").bind("mouseover",function(b){a.shiftOn=true;a.drawKeyboard()});$("#i2soft-left-shift, #i2soft-right-shift").bind("mouseout",function(b){a.shiftOn=false;a.drawKeyboard()});$("#i2soft-left-ctrl, #i2soft-right-ctrl").bind("mouseover",function(b){a.altCtrlOn=true;a.drawKeyboard()});$("#i2soft-left-ctrl, #i2soft-right-ctrl").bind("mouseout",function(b){a.altCtrlOn=false;a.drawKeyboard()});$("#i2soft-left-alt, #i2soft-right-alt").bind("mouseover",function(b){a.altCtrlOn=true;a.drawKeyboard()});$("#i2soft-left-alt, #i2soft-right-alt").bind("mouseout",function(b){a.altCtrlOn=false;a.drawKeyboard()});$("#i2soft-caps-lock").bind("mouseover",function(b){a.capsOn=true;a.drawKeyboard()});$("#i2soft-caps-lock").bind("mouseout",function(b){a.capsOn=false;a.drawKeyboard()});a.textbox.bind("keydown",function(b){var d=i2soft.util.keyCode(b);if((d==65||d==67||d==86||d==88||d==89||d==90)&&(a.ctrl&&!a.alt&&!a.shift)){return}if(a.currentLayout==a.defaultLayout&&d!=27){return}switch(d){case 17:a.ctrl=false;a.onCtrl();break;case 18:a.alt=false;a.onAlt();break;case 16:a.shift=false;a.onShift();break;case 27:a.onEsc();break;case 8:a.onBackspace();b.preventDefault();break;case 32:a.onSpace();b.preventDefault();break;case 10:a.onEnter();b.preventDefault();break;default:var c=i2soft.layout.parser.getKeyId(i2soft.util.keyCode(b));if(c!=-1){a.onKey("k"+c);a.drawKeyboard();b.preventDefault();a.cancelkeypress=true}break}});if($.browser.opera){a.textbox.bind("keypress",function(b){if(a.cancelkeypress){b.preventDefault();a.cancelkeypress=false}})}a.textbox.bind("keyup",function(b){switch(i2soft.util.keyCode(b)){case 17:a.ctrl=true;a.onCtrl();break;case 18:a.alt=true;a.onAlt();break;case 16:a.shift=true;a.onShift();break;default:}})};
        function ClearExitorText(){document.getElementById('editor').value = "";};
var keyboard = null;
        $(document).ready(function () {
            keyboard = new i2soft.keyboard("keyboard", "editor");
keyboard.fontSize = 20;
            keyboard.loadVirtualLayout({"name":"Urdu","dir":"rtl","keys":[{"i":"k0","c":"0","n":"`","s":"~","l":"","t":"","f":""},{"i":"k1","c":"0","n":"1","s":"!","l":"","t":"","f":""},{"i":"k2","c":"0","n":"2","s":"@","l":"","t":"","f":""},{"i":"k3","c":"0","n":"3","s":"#","l":"","t":"","f":""},{"i":"k4","c":"0","n":"4","s":"$","l":"","t":"","f":""},{"i":"k5","c":"0","n":"5","s":"٪","l":"","t":"","f":""},{"i":"k6","c":"0","n":"6","s":"^","l":"","t":"","f":""},{"i":"k7","c":"0","n":"7","s":"ۖ","l":"","t":"","f":""},{"i":"k8","c":"0","n":"8","s":"٭","l":"","t":"","f":""},{"i":"k9","c":"0","n":"9","s":")","l":"","t":"","f":""},{"i":"k10","c":"0","n":"0","s":"(","l":"","t":"","f":""},{"i":"k11","c":"0","n":"-","s":"_","l":"","t":"","f":""},{"i":"k12","c":"0","n":"=","s":"+","l":"","t":"","f":""},{"i":"k13","c":"0","n":"ط","s":"ظ","l":"","t":"","f":""},{"i":"k14","c":"0","n":"ص","s":"ض","l":"","t":"","f":""},{"i":"k15","c":"0","n":"ھ","s":"ذ","l":"","t":"","f":""},{"i":"k16","c":"0","n":"د","s":"ڈ","l":"","t":"","f":""},{"i":"k17","c":"0","n":"ٹ","s":"ث","l":"","t":"","f":""},{"i":"k18","c":"0","n":"پ","s":"ّ","l":"","t":"","f":""},{"i":"k19","c":"0","n":"ت","s":"ۃ","l":"","t":"","f":""},{"i":"k20","c":"0","n":"ب","s":"ـ","l":"","t":"","f":""},{"i":"k21","c":"0","n":"ج","s":"چ","l":"","t":"","f":""},{"i":"k22","c":"0","n":"ح","s":"خ","l":"","t":"","f":""},{"i":"k23","c":"0","n":"]","s":"}","l":"","t":"","f":""},{"i":"k24","c":"0","n":"[","s":"{","l":"","t":"","f":""},{"i":"k25","c":"0","n":"\\","s":"|","l":"","t":"","f":""},{"i":"k26","c":"0","n":"م","s":"ژ","l":"","t":"","f":""},{"i":"k27","c":"0","n":"و","s":"ز","l":"","t":"","f":""},{"i":"k28","c":"0","n":"ر","s":"ڑ","l":"","t":"","f":""},{"i":"k29","c":"0","n":"ن","s":"ں","l":"","t":"","f":""},{"i":"k30","c":"0","n":"ل","s":"ۂ","l":"","t":"","f":""},{"i":"k31","c":"0","n":"ہ","s":"ء","l":"","t":"","f":""},{"i":"k32","c":"0","n":"ا","s":"آ","l":"","t":"","f":""},{"i":"k33","c":"0","n":"ک","s":"گ","l":"","t":"","f":""},{"i":"k34","c":"0","n":"ی","s":"ي","l":"","t":"","f":""},{"i":"k35","c":"0","n":"؛","s":":","l":"","t":"","f":""},{"i":"k36","c":"0","n":"'","s":"\"","l":"","t":"","f":""},{"i":"k37","c":"0","n":"ق","s":"‍","l":"","t":"","f":""},{"i":"k38","c":"0","n":"ف","s":"‌","l":"","t":"","f":""},{"i":"k39","c":"0","n":"ے","s":"ۓ","l":"","t":"","f":""},{"i":"k40","c":"0","n":"س","s":"‎","l":"","t":"","f":""},{"i":"k41","c":"0","n":"ش","s":"ؤ","l":"","t":"","f":""},{"i":"k42","c":"0","n":"غ","s":"ئ","l":"","t":"","f":""},{"i":"k43","c":"0","n":"ع","s":"‏","l":"","t":"","f":""},{"i":"k44","c":"0","n":"،","s":">","l":"","t":"","f":""},{"i":"k45","c":"0","n":"۔","s":"<","l":"","t":"","f":""},{"i":"k46","c":"0","n":"/","s":"؟","l":"","t":"","f":""},{"i":"k47","c":"0","n":"\\","s":"|","l":"","t":"","f":""}],"deadkeys":[]});

            $("#editor").attr("dir", keyboard.attr("dir"));
            $("#editor").focus();


            $("#editor").css({"font-size" : keyboard.fontSize + "px"});
	$("#shrink").bind("click", function(){
		if(keyboard.fontSize < 14) return;
		keyboard.fontSize -= 2;
		$("#editor, .i2soft-label-natural, .i2soft-label-shift").css({"font-size" : keyboard.fontSize + "px"});
	});
	$("#enlarge").bind("click", function(){
		keyboard.fontSize += 2;
		$("#editor, .i2soft-label-natural, .i2soft-label-shift").css({"font-size" : keyboard.fontSize + "px"});
	});
            var textbox = document.getElementById("editor");

            $("#selectAll").bind("click", function () {

			i2soft.util.setCaretPosition(textbox, 0, textbox.value.length);

			ga("send", "event", "Keyboard", "click", "Select");
		});

		var localStorageSupported = false;
		try {
			var item = 'item';
			localStorage.setItem(item, item);
			localStorage.removeItem(item);
			localStorageSupported = true;
		} catch(e) {};

		var jsonSupported = false;
		try{
			var obj = JSON.parse(JSON.stringify({item: 'item'}));
			if(obj.item == 'item') jsonSupported = true;
		}
		catch(e){};

		if(localStorageSupported && jsonSupported){
			if(localStorage.getItem("urdu") == null){
				localStorage.setItem("urdu", JSON.stringify({undo : [], redo : []}));
			}
			else{
				$("#editor").val(JSON.parse(localStorage.getItem("urdu")).undo.pop());
			}

			$("#clearAll").bind("click", function() {

				ga("send", "event", "Keyboard", "click", "Clear");
				localStorage.setItem("urdu", JSON.stringify({undo : [], redo : []}));
				$("#editor").val("");
			});

			$("#undo").bind("click", function() {

				var obj = JSON.parse(localStorage.getItem("urdu"));

				if(obj.undo.length == 0) return;

				var item = obj.undo.pop();
				if(item != $("#editor").val()){

					obj.redo.push($("#editor").val());
					$("#editor").val(item);
				}
				else{
					$("#editor").val(obj.undo.length == 0 ? "" : obj.undo[obj.undo.length - 1]);
					obj.redo.push(item);
				}
				localStorage.setItem("urdu", JSON.stringify(obj));
			});

			$("#redo").bind("click", function() {

				var obj = JSON.parse(localStorage.getItem("urdu"));

				if(obj.redo.length == 0) return;

				var item = obj.redo.pop();
				$("#editor").val(item);
				obj.undo.push(item);

				localStorage.setItem("urdu", JSON.stringify(obj));
			});

			setInterval(function(){

				var obj = JSON.parse(localStorage.getItem("urdu"));

				var item = $("#editor").val();

				if(obj.undo.length == 0 && item.length == 0) return;

				if(obj.undo.length == 0 || item != obj.undo[obj.undo.length - 1]){
					obj.undo.push(item);

					localStorage.setItem("urdu", JSON.stringify(obj));
				}
			}, 3000);
		}
		else{
			$("#undo").hide();
			$("#redo").hide();
			$("#clearAll").hide();
		}
        });
