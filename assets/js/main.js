/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner'),
		settings = {

			// Carousels
				carousels: {
					speed: 4,
					fadeIn: true,
					fadeDelay: 250
				},

		};

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});






   // Carousels.
		$('.carousel').each(function() {

			//new
			const sliders= document.querySelector(".carousel");
			var scrollPerClick;
			var ImagePadding = 20;
			showMovieData();

			var scrollAmount = 0;

			async function showMovieData(){
				
			}

	var	$t = $(this),
		$forward = $('<span class="forward"></span>'),
		$backward = $('<span class="backward"></span>'),
		$reel = $t.children('.reel'),
		$items = $reel.children('article');

	var	pos = 0,
		leftLimit,
		rightLimit,
		itemWidth,
		reelWidth,
		timerId;

	// Items.
		if (settings.carousels.fadeIn) {

			$items.addClass('loading');

			$t.scrollex({
				mode: 'middle',
				top: '-20vh',
				bottom: '-20vh',
				enter: function() {

					var	timerId,
						limit = $items.length - Math.ceil($window.width() / itemWidth);

					timerId = window.setInterval(function() {
						var x = $items.filter('.loading'), xf = x.first();

						if (x.length <= limit) {

							window.clearInterval(timerId);
							$items.removeClass('loading');
							return;

						}

						xf.removeClass('loading');

					}, settings.carousels.fadeDelay);

				}
			});

		}
		
			// Main.
			$t._update = function() {
				pos = 0;
				rightLimit = (-1 * reelWidth) + $window.width();
				leftLimit = 0;
				$t._updatePos();
			};

			$t._updatePos = function() { $reel.css('transform', 'translate(' + pos + 'px, 0)'); };

		// Forward.
			$forward
				.appendTo($t)
				.hide()
				.mouseenter(function(e) {
					timerId = window.setInterval(function() {
						pos -= settings.carousels.speed;

						if (pos <= rightLimit)
						{
							window.clearInterval(timerId);
							pos = rightLimit;
						}

						$t._updatePos();
					}, 10);
				})
				.mouseleave(function(e) {
					window.clearInterval(timerId);
				});

		// Backward.
			$backward
				.appendTo($t)
				.hide()
				.mouseenter(function(e) {
					timerId = window.setInterval(function() {
						pos += settings.carousels.speed;

						if (pos >= leftLimit) {

							window.clearInterval(timerId);
							pos = leftLimit;

						}

						$t._updatePos();
					}, 10);
				})
				.mouseleave(function(e) {
					window.clearInterval(timerId);
				});

		// Init.
			$window.on('load', function() {

				reelWidth = $reel[0].scrollWidth;

				if (browser.mobile) {

					$reel
						.css('overflow-y', 'hidden')
						.css('overflow-x', 'scroll')
						.scrollLeft(0);
					$forward.hide();
					$backward.hide();

				}
				else {

					$reel
						.css('overflow', 'visible')
						.scrollLeft(0);
					$forward.show();
					$backward.show();

				}

				$t._update();

				$window.on('resize', function() {
					reelWidth = $reel[0].scrollWidth;
					$t._update();
				}).trigger('resize');

			});
		});


		


   // Carousels.
   $('.carousel2').each(function() {

	//new
	const sliders= document.querySelector(".carousel");
	var scrollPerClick;
	var ImagePadding = 20;
	showMovieData();

	var scrollAmount = 0;

	async function showMovieData(){
		
	}

var	$t = $(this),
$forward = $('<span class="forward"></span>'),
$backward = $('<span class="backward"></span>'),
$reel2 = $t.children('.reel2'),
$items = $reel2.children('article');

var	pos = 0,
leftLimit,
rightLimit,
itemWidth,
reel2Width,
timerId;

// Items.
if (settings.carousels.fadeIn) {

	$items.addClass('loading');

	$t.scrollex({
		mode: 'middle',
		top: '-20vh',
		bottom: '-20vh',
		enter: function() {

			var	timerId,
				limit = $items.length - Math.ceil($window.width() / itemWidth);

			timerId = window.setInterval(function() {
				var x = $items.filter('.loading'), xf = x.first();

				if (x.length <= limit) {

					window.clearInterval(timerId);
					$items.removeClass('loading');
					return;

				}

				xf.removeClass('loading');

			}, settings.carousels.fadeDelay);

		}
	});

}

	// Main.
	$t._update = function() {
		pos = 0;
		rightLimit = (-1 * reel2Width) + $window.width();
		leftLimit = 0;
		$t._updatePos();
	};

	$t._updatePos = function() { $reel2.css('transform', 'translate(' + pos + 'px, 0)'); };

// Forward.
	$forward
		.appendTo($t)
		.hide()
		.mouseenter(function(e) {
			timerId = window.setInterval(function() {
				pos -= settings.carousels.speed;

				if (pos <= rightLimit)
				{
					window.clearInterval(timerId);
					pos = rightLimit;
				}

				$t._updatePos();
			}, 10);
		})
		.mouseleave(function(e) {
			window.clearInterval(timerId);
		});

// Backward.
	$backward
		.appendTo($t)
		.hide()
		.mouseenter(function(e) {
			timerId = window.setInterval(function() {
				pos += settings.carousels.speed;

				if (pos >= leftLimit) {

					window.clearInterval(timerId);
					pos = leftLimit;

				}

				$t._updatePos();
			}, 10);
		})
		.mouseleave(function(e) {
			window.clearInterval(timerId);
		});

// Init.
	$window.on('load', function() {

		reel2Width = $reel2[0].scrollWidth;

		if (browser.mobile) {

			$reel2
				.css('overflow-y', 'hidden')
				.css('overflow-x', 'scroll')
				.scrollLeft(0);
			$forward.hide();
			$backward.hide();

		}
		else {

			$reel2
				.css('overflow', 'visible')
				.scrollLeft(20);
			$forward.show();
			$backward.show();

		}

		$t._update();

		$window.on('resize', function() {
			reel2Width = $reel2[0].scrollWidth;
			$t._update();
		}).trigger('resize');

	});
});




	

})(jQuery);
// trying to do in react 
// import React from 'react';
// import ReactDOM from 'react-dom';
// import '../css/main.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

// class Carousel extends React.Component {
    
//     constructor(props) {
//         super(props)
//         this.state = {
//             items: this.props.items,
//             active: this.props.active,
//             direction: ''
//         }
//         this.rightClick = this.moveRight.bind(this)
//         this.leftClick = this.moveLeft.bind(this)
//     }

//     generateItems() {
//         var items = []
//         var level
//         console.log(this.state.active)
//         for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
//             var index = i
//             if (i < 0) {
//                 index = this.state.items.length + i
//             } else if (i >= this.state.items.length) {
//                 index = i % this.state.items.length
//             }
//             level = this.state.active - i
//             items.push(<Item key={index} id={this.state.items[index]} level={level} />)
//         }
//         return items
//     }
    
//     moveLeft() {
//         var newActive = this.state.active
//         newActive--
//         this.setState({
//             active: newActive < 0 ? this.state.items.length - 1 : newActive,
//             direction: 'left'
//         })
//     }
    
//     moveRight() {
//         var newActive = this.state.active
//         this.setState({
//             active: (newActive + 1) % this.state.items.length,
//             direction: 'right'
//         })
//     }
    
//     render() {
//         return(
//             <div id="carousel" className="noselect">
//                 <div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left"></i></div>
//                 <ReactCSSTransitionGroup 
//                     transitionName={this.state.direction}>
//                     {this.generateItems()}
//                 </ReactCSSTransitionGroup>
//                 <div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right"></i></div>
//             </div>
//         )
//     }
// }

// class Item extends React.Component {
    
//     constructor(props) {
//         super(props)
//         this.state = {
//             level: this.props.level
//         }
//     }
    
//     render() {
//         const className = 'item level' + this.props.level
//         return(
//             <div className={className}>
//                 {this.props.id}
//             </div>
//         )
//     }
// }

// var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// ReactDOM.render(<Carousel items={items} active={0}/>, document.getElementById('app'))

/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * https://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


// /* ========================================================================
//  * Bootstrap: carousel.js v3.3.5
//  * https://getbootstrap.com/javascript/#carousel
//  * ========================================================================
//  * Copyright 2011-2015 Twitter, Inc.
//  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
//  * ======================================================================== */


// +function ($) {
//   'use strict';

//   // CAROUSEL CLASS DEFINITION
//   // =========================

//   var Carousel = function (element, options) {
//     this.$element    = $(element)
//     this.$indicators = this.$element.find('.carousel-indicators')
//     this.options     = options
//     this.paused      = null
//     this.sliding     = null
//     this.interval    = null
//     this.$active     = null
//     this.$items      = null

//     this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

//     this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
//       .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
//       .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
//   }

//   Carousel.VERSION  = '3.3.5'

//   Carousel.TRANSITION_DURATION = 600

//   Carousel.DEFAULTS = {
//     interval: 5000,
//     pause: 'hover',
//     wrap: true,
//     keyboard: true
//   }

//   Carousel.prototype.keydown = function (e) {
//     if (/input|textarea/i.test(e.target.tagName)) return
//     switch (e.which) {
//       case 37: this.prev(); break
//       case 39: this.next(); break
//       default: return
//     }

//     e.preventDefault()
//   }

//   Carousel.prototype.cycle = function (e) {
//     e || (this.paused = false)

//     this.interval && clearInterval(this.interval)

//     this.options.interval
//       && !this.paused
//       && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

//     return this
//   }

//   Carousel.prototype.getItemIndex = function (item) {
//     this.$items = item.parent().children('.item')
//     return this.$items.index(item || this.$active)
//   }

//   Carousel.prototype.getItemForDirection = function (direction, active) {
//     var activeIndex = this.getItemIndex(active)
//     var willWrap = (direction == 'prev' && activeIndex === 0)
//                 || (direction == 'next' && activeIndex == (this.$items.length - 1))
//     if (willWrap && !this.options.wrap) return active
//     var delta = direction == 'prev' ? -1 : 1
//     var itemIndex = (activeIndex + delta) % this.$items.length
//     return this.$items.eq(itemIndex)
//   }

//   Carousel.prototype.to = function (pos) {
//     var that        = this
//     var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

//     if (pos > (this.$items.length - 1) || pos < 0) return

//     if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
//     if (activeIndex == pos) return this.pause().cycle()

//     return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
//   }

//   Carousel.prototype.pause = function (e) {
//     e || (this.paused = true)

//     if (this.$element.find('.next, .prev').length && $.support.transition) {
//       this.$element.trigger($.support.transition.end)
//       this.cycle(true)
//     }

//     this.interval = clearInterval(this.interval)

//     return this
//   }

//   Carousel.prototype.next = function () {
//     if (this.sliding) return
//     return this.slide('next')
//   }

//   Carousel.prototype.prev = function () {
//     if (this.sliding) return
//     return this.slide('prev')
//   }

//   Carousel.prototype.slide = function (type, next) {
//     var $active   = this.$element.find('.item.active')
//     var $next     = next || this.getItemForDirection(type, $active)
//     var isCycling = this.interval
//     var direction = type == 'next' ? 'left' : 'right'
//     var that      = this

//     if ($next.hasClass('active')) return (this.sliding = false)

//     var relatedTarget = $next[0]
//     var slideEvent = $.Event('slide.bs.carousel', {
//       relatedTarget: relatedTarget,
//       direction: direction
//     })
//     this.$element.trigger(slideEvent)
//     if (slideEvent.isDefaultPrevented()) return

//     this.sliding = true

//     isCycling && this.pause()

//     if (this.$indicators.length) {
//       this.$indicators.find('.active').removeClass('active')
//       var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
//       $nextIndicator && $nextIndicator.addClass('active')
//     }

//     var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
//     if ($.support.transition && this.$element.hasClass('slide')) {
//       $next.addClass(type)
//       $next[0].offsetWidth // force reflow
//       $active.addClass(direction)
//       $next.addClass(direction)
//       $active
//         .one('bsTransitionEnd', function () {
//           $next.removeClass([type, direction].join(' ')).addClass('active')
//           $active.removeClass(['active', direction].join(' '))
//           that.sliding = false
//           setTimeout(function () {
//             that.$element.trigger(slidEvent)
//           }, 0)
//         })
//         .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
//     } else {
//       $active.removeClass('active')
//       $next.addClass('active')
//       this.sliding = false
//       this.$element.trigger(slidEvent)
//     }

//     isCycling && this.cycle()

//     return this
//   }


//   // CAROUSEL PLUGIN DEFINITION
//   // ==========================

//   function Plugin(option) {
//     return this.each(function () {
//       var $this   = $(this)
//       var data    = $this.data('bs.carousel')
//       var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
//       var action  = typeof option == 'string' ? option : options.slide

//       if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
//       if (typeof option == 'number') data.to(option)
//       else if (action) data[action]()
//       else if (options.interval) data.pause().cycle()
//     })
//   }

//   var old = $.fn.carousel

//   $.fn.carousel             = Plugin
//   $.fn.carousel.Constructor = Carousel


//   // CAROUSEL NO CONFLICT
//   // ====================

//   $.fn.carousel.noConflict = function () {
//     $.fn.carousel = old
//     return this
//   }


//   // CAROUSEL DATA-API
//   // =================

//   var clickHandler = function (e) {
//     var href
//     var $this   = $(this)
//     var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
//     if (!$target.hasClass('carousel')) return
//     var options = $.extend({}, $target.data(), $this.data())
//     var slideIndex = $this.attr('data-slide-to')
//     if (slideIndex) options.interval = false

//     Plugin.call($target, options)

//     if (slideIndex) {
//       $target.data('bs.carousel').to(slideIndex)
//     }

//     e.preventDefault()
//   }

//   $(document)
//     .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
//     .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

//   $(window).on('load', function () {
//     $('[data-ride="carousel"]').each(function () {
//       var $carousel = $(this)
//       Plugin.call($carousel, $carousel.data())
//     })
//   })

// }(jQuery);



// $('.carousel').carousel({
//     interval: 0
// });