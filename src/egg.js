(function() {

	/* =====================================================================
		EGG N YOLK
		By Chad Leigh Kluck - chadkluck.net - 02/24/2018 (Modified 6/10/2018)
		github.com/chadkluck/eggnyolk

		Code and Comments are vague for a reason, but there should be enough
		to get you going! Have fun!

		Easter is always coming, and in 2018 it's April Fool's Day!
		I'll say little more about what this code does (it is not nefarious)
		but if you want an egg for your site you'll have to hunt around the
		code to see exactly what you'll get.

		This should be as much fun for the site owner to descramble and
		customize as it is for those who visit a site and come across it.

		Though there is a default action that links to one of my own creations
		feel free to make it fun and link to your own diversion. Just use
		the yolk() function to scramble up your own URL to redirect to.
	*/

	"use strict";

	/* =====================================================================
	 *	yolk() // Scrambled Egg
	 *
	 *  This should not be used as a security measure. Think of it as a way to hide
	 *  Easter Eggs without making it obvious. It is for URLs (or plain strings) that
	 *  you don't mind the curious to discover, but want to keep covered or wrapped
	 *  like a gift until they do find it.
	 *
	 *  This is more of a dissection exercise. There will be few comments as it is part of
	 *  a fun puzzle. See if you can decode the simple scramble pattern by hand!
	 *
	 *  Put a url or string starting with // in and get scrambled text back
	 *  Put a scrambled URL or string in starting with ! and get the unscrambled string back
	 *
	 *  yolk("//example.com") returns !alcxp.memeo
	 *  yolk("!alcxp.memeo") returns //example.com
	 *
	 *  To scramble:
	 *     1. Provide yolk() with a url EXAMPLE:  yolk("//example.com");
	 *     2. Invoke the function in your code (this is temporary, you'll remove it later)
	 *     3. Send it to console.log() and check the browser's debug console for the Scrambled result.
	 *     4. Copy the result (should look something like "Scrambled: !alcxp.memeo", just copy !alcxp.memeo )
     *     5. Use that as the scrambled URL in your code. EXAMPLE: yolk("!alcxp.memeo");
	 *     6. Remove original unscrambled url from your code (don't leave yolk("//example.com"); in there!)
	 *
	 *  Yes, it dices, it chops, it's for URLs but it can be used for regular strings as well.
	 *  Just pre-pend // to the string and scramble it. Then, after de-scrambling it for use remove the //
	 *  yolk("//all your base are belong to us")
	 *  returns
	 *
	 *  Descrambling usage example:
	 *
	 *     window.location=yolk("!alcxp.memeo");
	 *
	 *  NOTE!: This is NOT a cryptographic function!
	 *         I repeat! This is NOT a cryptographic function!
	 *		   Do NOT use it for security!
	 *		   Use it only to prevent URL string searches in code!
	 *         It can be used for FUN Easter Eggs
	 */
	var yolk = function(s) {
		var val = "";
		if (s.substring(0,2) === "//") { // begins with // so it is an unscrambled url/string
			var arr = s.substring(2).split("");
			for(var i=2; i>-1; i--) { for (var z=i, len = arr.length; z<len; z=z+3) { val = val+arr[z]; } }
			val = "!"+val;
		} else { // does not begin with // so it is a scrambled URL/string
			var arr = s.substring(1).split(""), a = [], x = 0;
			for(var i=2; i>-1; i--) { for (var z=i,len=arr.length; z<len; z=z+3) { a[z] = arr[x]; x++; } }
			val = "//"+a.join("");
		}
		return val;
	};

	/* =====================================================================
	 *	Scramble your yolk! This will be the value you place in the variable u below before egg() is defined
	 *  THIS is the actual code you place on your site (minify it after your change the variable u)
	 */

	// USE THE FOLLOWING CODE TO SCRAMBLE YOUR YOLK
	// THEN REMOVE IT!!!
	// The value returned should be placed in the u variable above the egg function definition
	//var y = yolk("//example.com"); // replace with your own url/string
	//console.log("YOLK: "+y); // display value in dev console
	//alert("YOLK: "+y); // display value as alert

	/* =====================================================================
	 *	egg() // Change value of u to the scrambled yolk. No further comment ;-)
	 */

	var ks = [], seq = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], u = "!vsnhkcnirocdu.tdei.alke";

	var egg = function (event) {
		if ( event.keyCode === seq[ks.length] ) { ks.push(event.keyCode); } else { ks = []; }
		if(ks.length === seq.length) { window.location=yolk(u); ks=""; }
	};

	// attach egg to body of page
	document.addEventListener("keydown", egg);

})();
