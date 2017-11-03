---
layout: post
title: Spoilerfy, A First Python Package
---
There is a page on the internet called [reddit.com/r/dailyprogrammer](https://www.reddit.com/r/dailyprogrammer), where users can gather and share solutions to problems their peers have devised. These problems certainly span the spectrum of difficulty. [Some](https://www.reddit.com/r/dailyprogrammer/comments/pih8x/easy_challenge_1/) could be solved by someone who has only programmed for a matter of hours, while [others](https://www.reddit.com/r/dailyprogrammer/comments/qxv8h/3152012_challenge_25_difficult/) still haven't been solved (for large N).

In order to post a solution on the site to a problem, you need to put four spaces in front of each of your lines of code. This happens to be a one-liner in awk:
{% highlight bash %}
awk '$0="    "$0' yourfile | xclip
{% endhighlight %}

But, this only works if you have access to awk, not everyone does. Even getting a bash terminal in the first place on Windows can be quite the project. This is where Spoilerfy comes in; Spoilerfy prefixes each of your lines of code with four spaces in the output of your choice on multiple platforms. Spoilerfy's intended audience are those trying who are new to programming that are trying to improve their ability. They probably don't know awk, and may have a hard time with basic tooling. Some of the people interested in improving don't even know what bash is, but with Spoilerfy, they will be able to share their code on [/r/dailyprogrammer](https://https://www.reddit.com/r/dailyprogrammer) with ease, which will help them improve.

To install Spoilerfy, you can use pip, easy_install, or you can [download](https://pypi.python.org/pypi/spoilerfy/0.11) the compressed file from PyPI. For example: `pip install spoilerfy`, you might need `sudo`.

Spoilerfy has several output options. You can get your Spoilerfied text on your clipboard (via [pyperclip](https://github.com/asweigart/pyperclip), in a new file, or printed to the console, all without having to know any shell commands. For example, after installing Spoilerfy via pip in an environment with Python 3.x+ installed, just type: `spoilerfy -c mycode.pl` to get your spoilerfied code on your clipboard, ready to copy and paste to the comment section of the [/r/dailyprogrammer](https://www.reddit.com/r/dailyprogrammer) board. For more information, check out the documentation on the [Github page](https://www.github.com/rodenmonte/spoilerfy).

If you're interested in putting your own package on the Python Package Index, check out [this](http://peterdowns.com/posts/first-time-with-pypi.html) tutorial.
