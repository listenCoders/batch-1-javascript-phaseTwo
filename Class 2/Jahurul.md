<!-- JS Loop -->

End of the listen you have clear idea about:

1. What is loop?
2. type of loop?
3. while loop syntax.
4. how to apply while loop in Html file?

so let's start

what's Loop
or,
Loop meaning...
	লুপ এর বাংলা অর্থ অনেক রয়েছে এর মধ্যে একটি হলো ঘুর্ণন চক্র...

	আমরা খেটে খাওয়া মানুষ পুস্তক এর ভাষা সহজে মাথায় নিতে পারিনা ...
	তাইতো ঘুর্ণন চক্রের কথা শুনে অনেকের নিজেদের মাথা চক্রের ন্যায় ঘুরছে কিন্তু বুঝতে পারতেছিনা,

	যারা ঘুর্ণন চক্র বুঝেন তারা এই সেকশন স্কিপ করতে পারেন...
	যারা ক্লিয়ার না তাদের জন্য সহজ খেটে খাওয়া মানুষের ভাষায় বলতে গেলে নিজেদের জীবনের সাথে মিলিয়ে বলছি, 
	
	আমরা খাওয়ার জন্য রোজগার করি, তারপর সেই রোজগার থেকে বাজার করি, তারপর সেটা প্রসেসিং করে খাই এবং এখানেই থেমে যাইনা আবার রোজগার করি আবার বাজার করি আবার প্রসেসিং করি আবার খাই এভাবে চলতেই থাকে ... এই চলতে থাকাকেই ঘুর্ণন চক্র বা loop বলে।

Loop in JS
	অনেক সময় প্রোগ্রামিং এ একই কাজ বারবার করানোর প্রয়োজন হয় ।
	আর বারবার একই কোড কে লিখে কাজ কমপ্লিট করাটা অনেক বেশি ঝামেলার কাজ এবং প্রোসেস টাও অনেক দীর্ঘ হয় ।
	এই ঝামেলা এড়াতে এবং কোড কে বারবার না লিখে একবার লিখেই বুঝিয়ে দেওয়ার এই প্রসেস টাকেই loop বলে...

type of loop
	লুপ ৫ প্রকার
	1. while loop,
	2. for loop,
	3. do while loop,
	4. for in loop,
	5. for of loop
	<!-- w3schools referance -->

while loop syntax.
	while(condition){
		//Loop body
		//অর্থাৎ যেটাকে বারবার ঘোড়াতে চাই,
	}

	syntax থেকে দেখতে পাচ্ছি প্রথমে while কিওয়ার্ডটি লিখতে হয় তারপর পেরেনথেসিস বা প্রথম বন্ধনীতে আবদ্ধ করে কন্ডিশন দিতে হয় আমরা জানি কন্ডিশন মানে হলো শর্ত অর্থাৎ লুপটি কেন ঘুরবে কতক্ষন ঘুরবে এটাই শর্ত দিয়ে দেয়া হয় । এখন না বুঝলেও কনটিনিও করেন আশা করি সম্পূর্ণ পরার পর সব কনফিউশন বানের জলে ভেশে যাবে ।
	শর্ত দেয়ার পর কার্লি ব্রেকস "{}" বা দ্বিতীয় বন্ধনী এ আবদ্ধ করে লুপ বডি দিতে হয় অর্থাৎ কোন জিনিশ টা আমি বারবার করতে চাচ্ছি সেটা কার্লি ব্রেকস এ দিতে হবে...

	এবার মনে করি ৫০ এর সাথে ২ যোগ করে যে রেজাল্ট পাবো তার সাথে আবার ২ যোগ করবো এর পর আবার যেই রেজাল্ট পাবো তার সাথে আবার ২ যোগ করবো এমন কিছু যদি বলি তাহলে এখানে কিভাবে লুপ চলবে এটা বলা হচ্ছে কিন্তু এটা কতক্ষন চলবে এটা না বলে দিলে এটা চলতেই থাকবে আর থামবেই না , লাস্ট পর্যন্ত পিসি হ্যাং হয়ে যাবে কিন্তু লুপ শেষ হবে না।
	লুপ শেষ করার জন্য আর একটি শর্ত দিতে হবে যেটা বলে দিবে লুপ এর থামার সময় মনে করি ৫০ থেকে ২ করে বেরে বেরে ১০০ তে গিয়ে থামবে তাহলে লুপটি খেয়াল করি তারপর অন্যান্য উপরের উল্যেখিত এরর গুলা নিয়েও উদাহরণ থাকবে...

	loop টি হলোঃ

	let i = 50;

	while(i < 100){
		console.log(i += 2);
	};

	লুপ বিশ্লেষনঃ

	এখানে একটি ভেরিয়েবল দিয়ে i এর মান 50 স্টোর করা হয়েছে...
	জাভাস্ক্রিপ্ট এটাকে পরে মনে রাখবে তারপর সে while দেখতে পাবে এবং শর্ত যখন দেখবে i < 100. অর্থাৎ i ১০০ এর ছোট তখন সে এটার ভিতর ঢুকবে ঢুকে কনসোল একবার i + 2 প্রিন্ট করাবে... আর += দেয়া আছে = হলো এসাইনমেন্ট অপারেটর সো সে ৫২ কনসোলে প্রিন্ট করাবে এবং i এর ভিতর এসাইন করাবে । তারপর আবার লুপ এর শর্ত চেক করবে দেখবে ১০০ এর ছোট আবার ২ যোগ করে প্রিন্ট করাবে । আবার শর্ত চেক করবে লাস্ট ৯৮ হলে লুপে প্রবেশ করে + ২ করে ১০০ প্রিন্ট করাবে তারপর দেখবে i < 100 নয় তখন সে লুপ থেকে নিচের কোড দেখবে...।

	বাস্তব উদাহরনঃ
	কোনো কম্পানিতে লোক নিলে সেখানে কিছু শর্ত থাকে বা সরকারী জবের কথাই যদি বলি...
	লুপটা হলো প্রতিদিন ডিউটি আর মাস শেষে বেতন
	প্রত্যেক মাসেই প্রতিদিন ডিউটি এবং মাস শেষে বেতন...কিন্তু এই ঘুর্ণন চক্রের মধ্যে যেতে গেলে এমনি এমনি কি যাওয়া যাবে ? না শর্তের প্রয়োজন আছে চাকরীর বয়স থাকতে হবে।
	যোগ্যতা থাকতে হবে।
	আর চক্রের মধ্যে যাওয়ারপর প্রতি বছর আবার শর্ত চেক হতে থাকবে বয়স আছে কিনা...
	এবার এটাই প্রোগ্রাম করে দেখবো

	let age = 20;
	while(age <= 60){
		document.write('job per year');
		age +=1;
	};
	এবার বয়স ২০ আছে তাই চাকরীতে ঢুকতে পারবেন
	কিন্তু ৬০+ হলে কি ঢুকতে পারবেন?
	জব এ ঢুকার পরও যদি বয়স ৬০+ হয় জব ছেরে দিতে হয় না ছারতে চাইলেও ছারিয়ে দেওয়া হয়...
	১ বছর যেতে থাকবে আর বয়সের পরিমান ১ করে বারতে থাকবে...


apply loop in html file
	js selector এর মাধ্যমে html কে Tartget করে .innerText কমান্ড এর মাধ্যমে লুপকে html এ নির্দিষ্ঠ element এ প্রদর্শন করানো হয়।


	যদিও বুঝাতে পারলাম না তবুও আরো বিস্তারিত জানতে বা ভুল গুলো ধরিয়ে দিতে আপনার মতামত জানাতে ভুলবেন না...

	written by Jahurul Islam