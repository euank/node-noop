node-noop
=========
Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. 

- Antoine de Saint-Exupery

What it does
------------

![Magikarp uses splash attack](http://i.imgur.com/0xoCTbW.png)

Installation
------------
```
npm install node-noop
```

Usage
-----
```
var noop = require('node-noop').noop;
require('fs').writeFile('file.out',"Ignore write failure",noop);
```

Reviews
-------
> "Everything that is wrong with the Node ecosystem." &mdash; An enlightened Reddit user

Alternatives
------------
The npm package `noop` (github
[here](https://github.com/coolaj86/javascript-noop) already has
this basic functionality, but it doesn't do it in a very node-like way.
It just sticks the noop function on the global scope when you require it.

[Here's a list of a lot of noop packages on NPM](https://github.com/tj-commits/noop-packages), including this one.
