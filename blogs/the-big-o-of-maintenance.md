# The Big-O of Maintenance

A large part of a projects lifetime is maintenance, with estimates at 60% to 80%.¹ That statistic defines maintenance as fixing bugs, and adding new functionality to an existing system.
With so much time spent on this phase, it's important to keep in mind: code itself grows and changes with respect to Big-O notation.

If adding a new features requires all modules to add a new reference, that's `O(n)`.
If adding a new feature requires one module to add one new reference, that's `O(1)`. Not bad.
If adding a new feature requires one module to add one new reference, but it's a massive "kitchen sink" module: probably not good.

This is a laid back and informal use of Big-O, but it gets the point across. If code is setup such that most changes are `O(1)`, much pain can be prevented.

I am also being loosey-goosey with what a "module" and "reference" is, that's on purpose. The interpretation is context and project dependent, but you'll know it when you see it.

Take for example this bit of pseudo-code,

```
function doSomeCoolStuff(Comment comment) {
	...
	string url;
	switch (comment.kind)
		Picture: url = "https://foo.com",
		Reply: url = "https://bar.com",
		...
	...
}
```
We can immediately see, every time a new comment kind is added, this code likely needs to be _maintained_. If there's `n` different switch statements throughout the codebase, that's `n` different places to update.
It is worth mentioning, there is nothing inherently wrong with switch statements like these. They're normally straightforward, simple, and maintainable, but sometimes the alternatives are better.

There are a few immediate (among many) ways to "extract" this switch out, such that future updates may only require changing one place.

1. A simple function approach. Just move the code into a shared function somewhere.

```
function doSomeCoolStuff(Comment comment) {
	...
	string url = getUrl(comment.kind);
	...
}
```

2. A function passing approach. Function passing is a great way to create flexibility and move logic elsewhere.

```
function doSomeCoolStuff(Comment comment, Lambda getUrl) {
	...
	string url = getUrl();
	...
}
```

3. A polymorphism/interface approach. Also a valid option that makes good sense in some situations.

```
function doSomeCoolStuff(Comment comment) {
	...
	string url = comment.getUrl(); // Changes based on the underlying implementation, eg `PostComment`, `NewsFeedComment`, etc.
	...
}
```

Occasionally, _both_ a switch statement and polymorphism can be combined to reduce the number of change locations. This is exactly what the [factory pattern](https://en.wikipedia.org/wiki/Factory_method_pattern) does. It looks something like this,

```
Comment getComment(CommentKind kind) {
	switch (kind)
		Picture: new PictureComment(...);
		Reply: new ReplyComment(...);
}
```

Without this context the factory pattern looks like an unnecessary layer of indirection. But we've now seen it can consolidate many switch statements into a single location. 

All we've done is move complexity around. Sometimes this is all it takes to reduce overall complexity. If all of these `switch` statements are moved to one central place, we can get a big win by having updates only change one place. More so if it reduces some duplication, or allows us to calculate some value only once.

Related concepts: [DRY](http://www.catb.org/~esr/writings/taoup/html/ch04s02.html#spot_rule), [SRP](https://wiki.c2.com/?SingleResponsibilityPrinciple), [DIP](https://wiki.c2.com/?DependencyInversionPrinciple).

¹ Facts and Fallacies of Software Engineering (2002)