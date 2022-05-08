topic
Defferance between var, let, const.
===================
<!-- var -->
fullname variable. script writting sortname var.
var is an storage.
we can store data in variable.
variable required a name for calling next time.
variable writting syntex:
var (variable name) = (variable value or storable object)
so, example below
var varName = 'variable value';
var myName = 'jahurul islam';
var myAge = 30;

if we declare variable by using var we can use same variable name multiple times...
var myAge = 35;

and js accept the last variable (var myName = 35;) with same name.

we also can asign variable value multiple times...
myAge = 40;
and js accept the last value (myAge = 40) we asigned.

var accept
1. declare variable name first then asigned value.
example:
var myName;
myName = 'jahurul';

2. declare variable name with asigned value.
example:
var myName = 'jahurul';

3. declare variable multiple times with same name.
example:
var myName = 'jahurul';
var myName = 'Islam';
N.B. js accept value Islam for myName variable.

4. asigned value multiple times.
example:
var myName = 'jahurul';
myName = 'Islam';
N.B. js accept value Islam for myName variable.

<!-- let -->
let also is a storage we can store data with variable name by using let

writting syntex
let firstName = 'jahurul';
let lastName = 'islam';
let age = 20;

if we declare variable by using let we can't use same variable name multiple times...
let age = 25;(we get syntex error)

but we can asign variable value multiple times...
age = 25;
and js accept the last value (age = 25) we asigned.

let accept
1. declare variable name first then asigned value.
example:
let myName;
myName = 'jahurul';

2. declare variable name with asigned value.
example:
let myName = 'jahurul';

3. asigned value multiple times.
let myName = 'jahurul';
myName = 'Islam';
N.B. js accept value Islam for myName variable.

let refuse/reject/give error
1. declare variable multiple times with same name.
example:
let myName = 'jahurul';
let myName = 'Islam';
N.B. js not accept value for myName variable and give an syntex error.

<!-- conts -->
fullname constant. script writting sortname const.
const also is a storage we can store data with variable name by using const.

writting syntex
const firstName = 'jahurul';
const lastName = 'islam';
const age = 20;

if we declare variable by using const we can't use same variable name multiple times...
const age = 25;(we get syntex error)

also we can't asign variable value multiple times...
age = 30;(also give an syntex error)

const accept
1. declare variable name with asigned value.
example:
const myName = 'jahurul';

let refuse/reject/give error
1. declare variable multiple times with same name.
example:
const myName = 'jahurul';
const myName = 'Islam';
N.B. js not accept value for myName variable and give an syntex error.

2. declare variable name first then asigned value.
example:
const myName;
myName = 'jahurul';
N.B. js not accept value for myName variable and give an syntex error.

3. asigned value multiple times.
const myName = 'jahurul';
myName = 'Islam';
N.B. js not accept value for myName variable and give an syntex error.

if you find any fault or typing mistake feel free to feedback.
your comment is always welcome...
written by jahurul