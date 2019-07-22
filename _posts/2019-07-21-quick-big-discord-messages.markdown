---
layout: post
title: Quick Big Discord Messages
---
<style>
    .inline-block {
        display: inline-block;
    }
</style>
<h1>Make your discord message BIG</h1>
<div class="inline-block">
    <h2>Raw text</h2>
    <textarea name="message" id="message" cols="30" rows="10"></textarea>
</div>
<div class="inline-block">
    <h2>Processed Text <button id="copy">Copy to clipboard</button></h2>
    <textarea name="processed" id="processed" cols="50" rows="10"></textarea>
</div>
<script src="/assets/js/quick-big-discord-messages.js"></script>

<br/>
<hr/>
<br/>

I like to send "Big messages" using text emojis in Discord. They can take a while to type.
This tool makes sending these messages
<img src="/assets/img/big_message.png"
    style="width: 300px;
    margin: 0 auto; display: block;" />

Here's the text transformation code:

{% highlight javascript %}
function transformText(text) {
  text.trim().split(/\s+/)
    .map(function (word) {
    return word.split("").map(function (letter) {
      const l = letter.toLowerCase();
      if ( letter.length == 1 && l.match(/[a-z]/i) ) {
        return `:regional_indicator_${l}:`
      }
    }).join(" ");
  }).join("\n");
}
{% endhighlight %}