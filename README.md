
<h2>Day 2</h2>
```js
const pageId = Number(String(Date.now()).slice(-7)) + Math.floor(Math.random() * 1000);
```
##
### Step 1 — `Date.now()`

Returns the current time in **milliseconds** since the Unix epoch (a big integer like `1700000000123`).

### Step 2 — `String(Date.now())`

Converts that number to a string so you can slice characters from it.
Example: `1700000000123` → `"1700000000123"`.

### Step 3 — `.slice(-7)`

Takes the **last 7 characters** of that string.
If the string is `"1700000000123"`, `.slice(-7)` → `"00000123"` (note: if there are leading zeros they stay as characters).

### Step 4 — `Number(...)`

Converts the sliced string back to a number.
`Number("0000123")` → `123`.

So at this point you have the last 7 digits of the millisecond timestamp as a number (range `0` to `9,999,999`).

### Step 5 — `Math.random() * 1000`

`Math.random()` gives a floating point in `[0, 1)`. Multiplying by `1000` gives a float in `[0, 1000)`.

### Step 6 — `Math.floor(...)`

Rounds that down to an integer in `{0, 1, 2, ..., 999}`.

### Final — `+`

You add the two numbers: `last7OfTimestamp + random0to999`. So `pageId` is roughly the last-7-of-timestamp with a small random offset (0–999).

---

### Example

If `Date.now()` → `1700001234567`:

* `String(...)` → `"1700001234567"`
* `.slice(-7)` → `"01234567"` → `Number(...)` → `1234567`
* `Math.floor(Math.random() * 1000)` → say `512`
* `pageId` → `1234567 + 512` → `1235079`

### Notes / caveats

* Not globally unique — collisions are possible, especially if many IDs are generated within the same millisecond (only the +0..999 random reduces collisions slightly).
* Using only the last 7 timestamp digits means IDs repeat every ~~10 million ms (~2.7 hours) modulo the added random.
* If you need robust uniqueness, consider `crypto.randomUUID()` or combine full timestamp + randomness, e.g.:

  ```js
  const id = `${Date.now()}-${Math.floor(Math.random()*1e6)}`;
  // or
  const id = crypto.randomUUID();
  ```
