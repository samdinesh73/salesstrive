/* ==============
 ========= js documentation ==========================

 * theme name: Xpovio
 * version: 1.0
 * description: Creative Agency Portfolio HTML5 Template
 * author: Gramentheme
 * author-url: https://themeforest.net/user/gramentheme

    ==================================================

     01. video modal
     -------------------------------------------------
     02. portfolio text slider
     -------------------------------------------------
     03. vanilla tilt
     -------------------------------------------------
     04. testimonial text slider
     -------------------------------------------------
     05. sponsor slider
     -------------------------------------------------
     06. next page text slider
     -------------------------------------------------
     07. offer two slider
     -------------------------------------------------
     08. portfolio filter
     -------------------------------------------------
     09. testimonial two slider
     -------------------------------------------------
     10. blog two slider
     -------------------------------------------------
     11. banner three slider
     -------------------------------------------------
     12. portfolio three slider
     -------------------------------------------------
     13. testimonial slider
     -------------------------------------------------
     14. project slider
     -------------------------------------------------
     15. team slider
     -------------------------------------------------
     16. achievements slider
     -------------------------------------------------
     17. service plan slider
     -------------------------------------------------
     18. project details poster slider
     -------------------------------------------------
     19. project details slider
     -------------------------------------------------
     20. select subject
     -------------------------------------------------
     21. gsap register
     -------------------------------------------------
     22. gsap config
     -------------------------------------------------
     23. target id
     -------------------------------------------------
     24. smooth scroll
     -------------------------------------------------
     25. skill bar progress
     -------------------------------------------------
     26. project horizontal move
     -------------------------------------------------
     27. split title
     -------------------------------------------------
     28. fade animations
     -------------------------------------------------
     29. banner one thumb
     -------------------------------------------------
     30. banner two thumb
     -------------------------------------------------
     31. banner five horizontal move
     -------------------------------------------------
     32. video modal bg
     -------------------------------------------------
     33. testimonial two thumb
     -------------------------------------------------
     34. banner five
     -------------------------------------------------
     35. folks text
     
    ==================================================
============== */

(function($) {
	"use strict";

	jQuery(document).ready(function() {
		let device_width = window.innerWidth;

	
		
		// 21. gsap register
		gsap.registerPlugin(
			ScrollTrigger,
			ScrollToPlugin
			// ,
			// SplitText
		);

		// // 22. gsap config
		// gsap.config({
		// 	nullTargetWarn: false,
		// 	debug: false,
		// });

		// 23. target id
		$('a[href^="#"]').on("click", function(event) {
			event.preventDefault();

			var target = $(this).attr("href");

			gsap.to(window, {
				scrollTo: {
					y: target,
					offsetY: 50,
				},
				duration: 0.5,
				ease: "power3.inOut",
			});
		});
// 24. smooth scroll
		if (device_width > 576) {
			const smoother = ScrollSmoother.create({
			  smooth: 2.2,
			  effects: device_width < 992 ? false : true,
			  smoothTouch: false,
			  normalizeScroll: false,
			  ignoreMobileResize: true,
			});
		  }

		

	});
})(jQuery);