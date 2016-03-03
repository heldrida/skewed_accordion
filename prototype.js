(function() {

	var lock = false;
	var ulLiList = document.querySelectorAll("ul li");
	var itemList = document.querySelectorAll(".item");
	var itemBgList = document.querySelectorAll(".item .bg");
	var titleList = document.querySelectorAll("li h5");
	var slideAnimationMs = 0.2;
	var titleAnimationMs = 0.1;
	var galleryWrp = document.querySelector(".gallery-wrp");
	var timeoutId;

	var enterHandler = function(e) {

		var tl = new TimelineLite();
		var container = e.target;
		var index = parseInt(container.getAttribute("data-index"));

		if (index === 1) {

			tl.to(itemList[0], slideAnimationMs, {
				width: "66.66%",
				onStart: function() {
					lock = true;
					container.style.zIndex = 2;
				}
			}, 0);
			
			tl.to(itemList[1], slideAnimationMs, {
				width: "16.66%",
				left: "66.66%",
				onStart: function () {
					container.style.zIndex = 0;					
				}
			}, 0);
			
			tl.to(itemList[2], slideAnimationMs, {
				width: "16.66%",
				right: "0%",
				onStart: function () {
					container.style.zIndex = 0;					
				}
			}, 0);

			tl.to(titleList[0], titleAnimationMs, {
				opacity: 1
			}, 0);
			
			tl.to(titleList[1], titleAnimationMs, {
				opacity: 0
			}, 0);
			
			tl.to(titleList[2], titleAnimationMs, {
				opacity: 0
			}, 0);
			
			tl.to(ulLiList[0], slideAnimationMs, {
				width: "66.66%",
			}, 0);
			
			tl.to(ulLiList[1], slideAnimationMs, {
				width: "16.66%"
			}, 0);
			
			tl.to(ulLiList[2], slideAnimationMs, {
				width: "16.66%"
			}, 0);
			
		} else if (index === 3) {

			tl.to(itemList[0], slideAnimationMs, {
				width: "25%",
				onStart: function() {
					lock = true;
					container.style.zIndex = 2;
				}
			}, 0);
			
			tl.to(itemList[1], slideAnimationMs, {
				width: "25%",
				left: "16.66%",
				onStart: function () {
					container.style.zIndex = 0;					
				}
			}, 0);
			
			tl.to(itemList[2], slideAnimationMs, {
				width: "66.66%",
				onStart: function () {
					container.style.zIndex = 0;					
				}
			}, 0);
			
			tl.to(titleList[0], titleAnimationMs, {
				opacity: 0
			}, 0);
			
			tl.to(titleList[1], titleAnimationMs, {
				opacity: 0
			}, 0);
			
			tl.to(titleList[2], titleAnimationMs, {
				opacity: 1
			}, 0);
			
			tl.to(ulLiList[0], slideAnimationMs, {
				width: "16.66%"
			}, 0);
			
			tl.to(ulLiList[1], slideAnimationMs, {
				width: "16.66%"
			}, 0);
			
			tl.to(ulLiList[2], slideAnimationMs, {
				width: "66.66%"
			}, 0);
			
		} else {

			tl.to(itemList[0], slideAnimationMs, {
				width: "25%",
				onStart: function() {
					lock = true;
					container.style.zIndex = 2;
				}
			}, 0);

			tl.to(itemList[1], slideAnimationMs, {
				width: "66.66%",
				left: "16.66%",
				onStart: function () {
					container.style.zIndex = 0;					
				}
			}, 0);
			
			tl.to(itemList[2], slideAnimationMs, {
				width: "25%",
				right: "0",
				onStart: function () {
					container.style.zIndex = 0;					
				}
			}, 0);

			tl.to(titleList[0], titleAnimationMs, {
				opacity: 0
			}, 0);
			
			tl.to(titleList[1], titleAnimationMs, {
				opacity: 1
			}, 0);
			
			tl.to(titleList[2], titleAnimationMs, {
				opacity: 0
			}, 0);
			
			tl.to(ulLiList[0], slideAnimationMs, {
				width: "16.66%"
			}, 0);
			
			tl.to(ulLiList[1], slideAnimationMs, {
				width: "66.66%"
			}, 0);
			
			tl.to(ulLiList[2], slideAnimationMs, {
				width: "16.66%",
			}, 0);
			
		}

	};

	var leaveHandler = function(e) {

		var tl = new TimelineLite();
		var container = e.target;
		var index = parseInt(container.getAttribute("data-index"));

		tl.to(itemList[0], slideAnimationMs, {
			width: "33.33%",
			left: "0",
			onComplete: function() {
				lock = true;
				container.style.zIndex = 0;
			}
		}, 0);

		tl.to(itemList[1], slideAnimationMs, {
			width: "33.33%",
			left: "33.33%",
			onComplete: function () {
				container.style.zIndex = 0;
			}
		}, 0);

		tl.to(itemList[2], slideAnimationMs, {
			width: "33.33%",
			right: "0%",
			onComplete: function () {
				container.style.zIndex = 0;					
			}
		}, 0);

			tl.to(titleList[0], titleAnimationMs, {
				opacity: 1
			}, 0);
			
			tl.to(titleList[1], titleAnimationMs, {
				opacity: 1
			}, 0);
			
			tl.to(titleList[2], titleAnimationMs, {
				opacity: 1
			}, 0);
		
			tl.to(ulLiList[0], slideAnimationMs, {
				width: "33.33%"
			}, 0);
			
			tl.to(ulLiList[1], slideAnimationMs, {
				width: "33.33%"
			}, 0);
			
			tl.to(ulLiList[2], slideAnimationMs, {
				width: "33.33%"
			}, 0);
		
	};
	
	var moveHandler = function (e) {

		var top = galleryWrp.offsetTop;
		var left = galleryWrp.offsetLeft;
		var y = e.pageY - top;
		var x = e.pageX - left;
		
	};

	_.forEach(itemList, function(v, k) {

		itemList[k].addEventListener("mouseenter", enterHandler);
		itemList[k].addEventListener("mouseleave", leaveHandler);
		itemList[k].addEventListener("mousemove", moveHandler);

	});

}());