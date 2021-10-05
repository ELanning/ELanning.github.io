# The Principle of Weakest Type

Code should use the least powerful type that meets the requirements.

The hierarchy looks something like this.

1. Class
2. Function, [POD](https://en.wikipedia.org/wiki/Passive_data_structure) Struct, Record
3. Tuple, Dictionary, List, ...
4. string, int, float, bool, ...

Classes are great at encapsulation and state management. Some code takes it too far.

```
class Foo {
   public int GetBar() { return this.bar; }
   public int GetBaz() { return this.baz; }
   private int bar;
   private int baz;
}
```

No need for this verbose boilerplate and unnecessary "data hiding". A struct would work fine or a record if you want immutability. Assuming this isn't a widely used 3rd party library, when the requirements change and encapsulation or state management is needed, a struct can be refactored into a class. By using a less powerful type, we've communicated that this is just plain old data. Nothing magical is going on underneath the hood. That information is valuable to readers.

Another common example are "strategy" classes which have an interface such as `IThingDoer` with a single function, such as `DoThing`.  Sometimes that's fine, but maybe a lambda would have worked better,
```
doSomeCoolStuff(IThingDoer strategy);

// Becomes
doSomeCoolStuff(lambda strategy);
```
No need for an entire class which implements a single method.

Structs and records are great at letting the author add additional context _into the types name_. If the language supports constructors on these types, they can guarantee certain properties. Take for example `PlushieOrder`

```
struct PlushieOrder {
	constructor(string productGuid) {
		// throw if productGuid is incorrect format.
	}
	money amountBilled;
	string productGuid;
	string couponGuid;
	date billDate;
}
```

By putting this into a struct with a smart constructor, all callers can use `PlushieOrder` and get a nice bundle of validated data. They don't need to revalidate any of the properties. There's a few cooler things one can do with smart constructors, but we'll leave that out for now.

Some code takes structs (or records) too far.

```
struct Point {
	int x;
	int y;
}
```

In some cases, the above struct is perfectly fine. But maybe a simple named tuple would be better: `(int x, int y) getPosition();`. A struct lets you give a thing a name. Names are powerful things, but some things needn't be named. In fact, sometimes names can get in the way. `getPosition` returns a tuple and is perfectly understandable. A dictionary can often serve the same purpose.

Functions are a powerful tool. By taking a function as a parameter, things like lazy evaluation and other neat stuff can be done,

```
function doCoolStuff(Lambda getUsername());
```

If `getUsername` is only used sometimes and is a costly operation, say a network request, then `doCoolStuff` can get a big win by evaluating it when it needs to. Perhaps at an opportune time.

However, if that's not the case, perhaps a primitive would do just fine.

`function doCoolStuff(string username);`

Interestingly enough, sometimes the _reverse_ of this rule is not followed. A dictionary is used where a struct was needed to add context for the reader. Or a struct is badly doing the job of a class.

The language itself can often dictate conventions as well. In JavaScript, classes aren't used too much. In Java, classes are probably [_overused_](http://steve-yegge.blogspot.com/2006/03/execution-in-kingdom-of-nouns.html) due to language design.
