<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS DOM</title>
</head>
<style>
    a {
        text-decoration: none;
    }
</style>

<body>
    Home Work By Ratul
    <h1>What is Dom</h1>
    ডকুমেন্ট অবজেক্ট মডেল (DOM) হল ওয়েব ডকুমেন্টের জন্য একটি প্রোগ্রামিং ইন্টারফেস। <br> এটি পৃষ্ঠার প্রতিনিধিত্ব করে
    যাতে প্রোগ্রামগুলি নথির গঠন,
    শৈলী এবং বিষয়বস্তু পরিবর্তন করতে পারে। <br>
    DOM নথিটিকে নোড এবং বস্তু হিসাবে উপস্থাপন করে; এইভাবে, প্রোগ্রামিং ভাষা পৃষ্ঠার সাথে যোগাযোগ করতে পারে। <br>
    একটি ওয়েব পৃষ্ঠা হল একটি নথি যা ব্রাউজার উইন্ডোতে বা HTML উত্স হিসাবে প্রদর্শিত হতে পারে। <br> উভয় ক্ষেত্রেই,
    এটি একই নথি কিন্তু ডকুমেন্ট অবজেক্ট মডেল (DOM) উপস্থাপনা এটিকে ম্যানিপুলেট করার অনুমতি দেয়। <br> ওয়েব পৃষ্ঠার
    একটি অবজেক্ট-ভিত্তিক উপস্থাপনা হিসাবে, এটি জাভাস্ক্রিপ্টের মতো স্ক্রিপ্টিং ভাষা দিয়ে সংশোধন করা যেতে পারে। <br>
    <div>
        <h3> Dom Work</h3>
        <h1 id="htmlId">Ratul Khan</h1>
        <h2 id="hTm">Hello</h2>
        <h3 id="h3">Hi </h3>
        <h4 id="h4">oi </h4>
        <h5 id="h5"> Kotah bolo</h5>
        <h6 id="h6">Visa sry</h6>
        <p id="p">bfwferabg</p>
        <a href="WWW.listen Coder's.com" id="ar"> Coder's</a>

    </div>
    <script>
        console.log(document.getElementById('htmlId').innerHTML = 'I am Ratul Khan');
        console.log(document.getElementById('hTm').innerHTML = 'I am a student');
        document.getElementById('h3').innerHTML = ("I am a student of Listen coder's")
        document.getElementById('h4').innerHTML = ("I live in khulna")
        document.getElementById('h5').innerHTML = ('I am a good boy')
        document.getElementById("h6").innerHTML = ('Recently I complete HTML and CSS and BOOTSTRAP')
        document.getElementById('p').innerHTML = ('I am good boy.My name is Ratul khan. I live in Khulna.I am an WebDesigner.I learn online platform and offline  My online platform name is Listen coders and offline name is Future It Center.')
        document.getElementById('ar').innerHTML = ("Listen Coder's")




    </script>
</body>

</html>