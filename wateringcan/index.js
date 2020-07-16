(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,258,164]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,129,82), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(64));

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(64.6,41.1,1,1,0.2159,0,0,61.5,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:64.5,regY:41,rotation:0.6404,x:67.6,y:41.6},0).wait(1).to({rotation:2.2479,x:67.55,y:41.75},0).wait(1).to({rotation:4.8903,x:67.5,y:41.85},0).wait(1).to({rotation:8.6013,x:67.4,y:42.05},0).wait(1).to({rotation:13.4821,x:67.35,y:42.3},0).wait(1).to({rotation:19.6959,x:67.25,y:42.6},0).wait(1).to({rotation:27.4848,x:67,y:42.9},0).wait(1).to({rotation:34.6091,x:66.75,y:43.25},0).wait(1).to({rotation:38.5261,x:66.6,y:43.35},0).wait(1).to({rotation:39.4887,y:43.4},0).wait(1).to({rotation:38.5474,y:43.35},0).wait(1).to({rotation:37.6939,x:66.65},0).wait(1).to({rotation:36.8158,x:66.7,y:43.3},0).wait(1).to({rotation:34.8867,x:66.75,y:43.25},0).wait(1).to({rotation:32.2992,x:66.85,y:43.1},0).wait(1).to({rotation:32.3735,y:43.15},0).wait(1).to({rotation:32.4478},0).wait(1).to({rotation:32.5222},0).wait(1).to({rotation:32.5965},0).wait(1).to({rotation:32.6708,x:66.8,y:43.1},0).wait(1).to({rotation:32.7451,y:43.2},0).wait(1).to({rotation:32.8194,x:66.85,y:43.15},0).wait(1).to({rotation:32.8937,y:43.2},0).wait(1).to({rotation:32.9681,x:66.8,y:43.15},0).wait(1).to({rotation:33.0424,y:43.1},0).wait(1).to({rotation:33.1167,y:43.2},0).wait(1).to({rotation:33.191,x:66.85,y:43.15},0).wait(1).to({rotation:33.2653,x:66.8,y:43.2},0).wait(1).to({rotation:33.3396,y:43.15},0).wait(1).to({rotation:33.414},0).wait(1).to({rotation:33.4883,x:66.85,y:43.2},0).wait(1).to({rotation:33.5626,x:66.8,y:43.15},0).wait(1).to({rotation:33.6369,y:43.2},0).wait(1).to({rotation:33.7112},0).wait(1).to({rotation:33.7855},0).wait(1).to({rotation:33.8599,x:66.75},0).wait(1).to({rotation:33.9342,y:43.15},0).wait(1).to({rotation:34.0085,y:43.25},0).wait(1).to({rotation:34.0828,y:43.2},0).wait(1).to({rotation:34.1571},0).wait(1).to({rotation:34.2314,x:66.8,y:43.25},0).wait(1).to({rotation:34.3058,y:43.2},0).wait(1).to({rotation:34.3801},0).wait(1).to({rotation:34.4544,x:66.75},0).wait(1).to({rotation:19.7322,x:67.2,y:42.6},0).wait(1).to({rotation:12.0142,x:67.4,y:42.25},0).wait(1).to({rotation:6.8738,x:67.5,y:41.95},0).wait(1).to({rotation:3.3223,y:41.8},0).wait(1).to({rotation:0.9024,x:67.55,y:41.65},0).wait(1).to({rotation:-0.4095,x:67.6,y:41.55},0).wait(1).to({rotation:-0.9636,y:41.5},0).wait(1).to({rotation:-1.1003},0).wait(1).to({rotation:-0.9531,y:41.55},0).wait(1).to({rotation:-0.5842,x:67.55},0).wait(1).to({rotation:-0.005},0).wait(1).to({rotation:-0.005},0).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-29.2,153,145.29999999999998);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2];
	// timeline functions:
	this.frame_0 = function() {
		this.can.stop();
		
		this.can.addEventListener("click", playClicked.bind(this));
		
		function playClicked() {
		
		this.play();
			
			this.can.play();
				
		}
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// can
	this.can = new lib.Symbol1();
	this.can.name = "can";
	this.can.setTransform(106.2,106,1,1,0,0,0,64.5,41);

	this.timeline.addTween(cjs.Tween.get(this.can).wait(3));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(319.7,265.4,-145.7,-117.49999999999997);
// library properties:
lib.properties = {
	id: 'A0E00999AC9E4D7C96EC45BFB6F715BD',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1594869964778", id:"index_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A0E00999AC9E4D7C96EC45BFB6F715BD'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;