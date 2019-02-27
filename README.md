node-noop
=========
Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. 

- Antoine de Saint-Exupery

NOTE: Please do not install this module. It was created as a joke. It exposes no functionality, and it is considered bad practice to create modules that lack functionality. This "technique" is also known as [Cargo Cult Programming](https://en.wikipedia.org/wiki/Cargo_cult_programming).

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
[here](https://github.com/coolaj86/javascript-noop)) already has
this basic functionality, but it doesn't do it in a very node-like way.
He just sticks the noop function on the global scope when you require it.
