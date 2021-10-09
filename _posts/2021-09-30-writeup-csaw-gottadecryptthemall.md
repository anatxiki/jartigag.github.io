---
title:  "#writeup: CSAW - Gotta Decrypt Them All [crypto]"
layout: post
date:   2021-09-30
ctfs: true
permalink: /writeup-csaw21
redirect_to: https://scavengersecurity.com/posts/csaw-gottadecryptthemall/
author: jartigag
image: https://scavengersecurity.com/posts/csaw-gottadecryptthemall/upload_c01fd065e4c94aa14993e6841cf70b7e.png
tag:
- ctf
- criptografía
- seguridad
mastodonReplies: https://mastodon.social/@jartigag/107027934320891523
twitterReplies: https://twitter.com/jartigag/status/1443579786069098497
---

[https://scavengersecurity.com/posts/csaw-gottadecryptthemall/](https://scavengersecurity.com/posts/csaw-gottadecryptthemall/)

```
original writeup metadata:
---
author: jartigag, blast_o
categories: ctf
date: 2021-09-12
layout: post
tags: [jartigag, blast_o, morse, ascii, base64, rsa, rot13]
title: CSAW - Gotta Decrypt Them All [crypto]
usemathjax: true
---
```

# Gotta Decrypt Them All

> You are stuck in another dimension while you were riding Solgaleo. You have Rotom-dex with you to contact your friends but he won't activate the GPS unless you can prove yourself to him. He is going to give you a series of phrases that only you should be able to decrypt and you have a limited amount of time to do so. Can you decrypt them all?
> `nc crypto.chal.csaw.io 5001`

## A direct way

### Get the numbers

When connecting to that server at port 5001, this is received:
```
$ nc crypto.chal.csaw.io 5001
What does this mean?
---.. ....- /.---- ----- ..... /-.... ..... /..... --... /--... ...-- /-.... ---.. /.---- ----- ...-- /.---- ..--- .---- /--... --... /.---- ..--- ..--- /.---- ----- --... /.---- ..--- .---- /--... --... /-.... ---.. /-.... ..... /.---- ..--- ----- /--... --... /-.... ---.. /--... ...-- /.---- ..--- ..--- /--... ---.. /.---- ----- -.... /---.. ..... /....- ----. /--... --... /.---- ..--- ..--- /----. ----. /.---- .---- ----. /--... ----. /---.. ....- /---.. .---- /..... ..--- /--... ----. /---.. ....- /---.. ----. /..... ..--- /--... --... /-.... ---.. /-.... ----. /.---- ..--- ----- /--... ----. /-.... ---.. /.---- ----- --... /..... .---- /--... ---.. /---.. ....- /-.... ----. /..... ...-- /--... ---.. /-.... ---.. /---.. ----. /..... ----- /--... ---.. /.---- ..--- ..--- /-.... ..... /.---- ..--- .---- /--... ----. /-.... ---.. /-.... ..... /..... ----- /--... ---.. /---.. ....- /.---- ----- --... /.---- ..--- .---- /--... ---.. /---.. ....- /.---- ----- --... /..... ----- /--... --... /---.. ....- /---.. .---- /.---- .---- ----. /--... --... /-.... ---.. /-.... ----. /.---- ..--- ----- /--... ---.. /.---- ..--- ..--- /---.. ..... /.---- .---- ----. /--... ----. /-.... ---.. /--... ...-- /..... ...-- /--... ---.. /-.... ---.. /---.. ..... /.---- ..--- ----- /--... --... /---.. ....- /---.. .---- /.---- .---- ----. /--... --... /.---- ..--- ..--- /---.. ----. /..... ----- /--... ----. /---.. ....- /--... ...-- /....- ---.. /--... ----. /---.. ....- /---.. .---- /..... ..--- /--... ----. /---.. ....- /-.... ----. /..... .---- /--... ---.. /.---- ----- -.... /-.... ..... /.---- .---- ----. /--... ---.. /.---- ----- -.... /.---- ----- --... /..... ...-- /--... ----. /-.... ---.. /.---- ----- ...-- /.---- .---- ----. /--... ---.. /.---- ----- -.... /---.. ..... /..... ----- /--... ---.. /.---- ----- -.... /.---- ----- ...-- /..... ...-- /--... ---.. /---.. ....- /---.. ..... /.---- ..--- .---- /--... ---.. /---.. ....- /--... ...-- /.---- .---- ----. /--... ---.. /-.... ---.. /--... ...-- /..... ..--- /--... ---.. /.---- ----- -.... /--... --... /..... ...-- /--... ---.. /-.... ---.. /-.... ----. /.---- ..--- .---- /--... ---.. /-.... ---.. /---.. ----. /....- ----. /--... ---.. /.---- ..--- ..--- /---.. ----. /.---- ..--- ----- /--... --... /.---- ----- -.... /.---- ----- ...-- /....- ----. /--... ---.. /---.. ....- /--... --... /..... ----- /--... ----. /-.... ---.. /.---- ----- ...-- /..... ----- /--... ---.. /.---- ----- -.... /--... ...-- /....- ----. /--... ----. /---.. ....- /--... --... /.---- ..--- ..--- /--... ----. /---.. ....- /----. ----. /..... ...-- /--... --... /.---- ..--- ..--- /.---- ----- ...-- /....- ---.. /--... ---.. /.---- ..--- ..--- /---.. ----. /.---- .---- ----. /--... ----. /-.... ---.. /--... ...-- /.---- ..--- ----- /--... ---.. /.---- ----- -.... /--... ...-- /.---- ..--- ----- /--... --... /.---- ..--- ..--- /--... ...-- /..... .---- /--... ---.. /.---- ----- -.... /-.... ..... /..... ----- /--... --... /---.. ....- /-.... ..... /..... .---- /--... --... /---.. ....- /-.... ..... /..... ----- /--... ---.. /.---- ----- -.... /--... --... /.---- ..--- ..--- /--... ----. /---.. ....- /---.. ----. /.---- ..--- ----- /--... ---.. /.---- ----- -.... /.---- ----- ...-- /....- ----. /--... --... /.---- ----- -.... /.---- ----- --... /..... ...-- /--... --... /---.. ....- /--... ...-- /....- ----. /--... ---.. /---.. ....- /---.. ..... /..... ..--- /--... ---.. /.---- ..--- ..--- /--... --... /..... ...-- /--... ---.. /---.. ....- /.---- ----- --... /....- ---.. /--... ---.. /.---- ..--- ..--- /--... ...-- /..... ----- /--... ---.. /---.. ....- /---.. .---- /..... ...-- /--... ---.. /.---- ----- -.... /-.... ..... /....- ----. /--... --... /.---- ..--- ..--- /---.. ----. /.---- ..--- .---- /--... ---.. /.---- ----- -.... /-.... ----. /.---- ..--- ----- /--... ---.. /.---- ..--- ..--- /---.. ..... /....- ----. /--... ----. /---.. ....- /-.... ..... /....- ----. /--... ---.. /.---- ..--- ..--- /----. ----. /.---- ..--- ..--- /--... --... /-.... ---.. /---.. ..... /....- ----. /--... ---.. /---.. ....- /.---- ----- ...-- /....- ----. /--... ---.. /.---- ----- -.... /.---- ----- ...-- /.---- ..--- .---- /--... ----. /---.. ....- /-.... ..... /.---- .---- ----. /--... --... /---.. ....- /---.. ----. /..... ...-- /--... --... /---.. ....- /.---- ----- --... /.---- .---- ----. /--... ----. /---.. ....- /.---- ----- --... /....- ----. /--... --... /-.... ---.. /--... ...-- /..... ----- /--... ---.. /.---- ----- -.... /---.. .---- /.---- ..--- ..--- /--... --... /-.... ---.. /.---- ----- ...-- /..... ...-- /--... --... /.---- ----- -.... /-.... ----. /.---- .---- ----. /--... ----. /---.. ....- /---.. .---- /.---- ..--- ----- /--... ---.. /.---- ..--- ..--- /---.. ----. /.---- ..--- ..--- /--... --... /.---- ..--- ..--- /----. ----. /....- ---.. /--... ---.. /.---- ----- -.... /---.. .---- /....- ----. /--... --... /.---- ..--- ..--- /---.. ..... /.---- ..--- .---- /--... ----. /-.... ---.. /.---- ----- --... /..... .---- /--... ---.. /.---- ----- -.... /---.. ..... /....- ----. /--... ---.. /-.... ---.. /-.... ----. /..... ..--- /--... ---.. /-.... ---.. /---.. ..... /..... ----- /--... --... /-.... ---.. /--... --... /.---- .---- ----. /--... --... /-.... ---.. /---.. ..... /.---- .---- ----. /--... ---.. /-.... ---.. /-.... ..... /..... ...-- /--... ----. /---.. ....- /-.... ..... /..... ..--- /--... --... /.---- ..--- ..--- /--... --... /.---- ..--- ----- /--... ---.. /.---- ..--- ..--- /-.... ..... /.---- ..--- ..--- /--... ----. /---.. ....- /.---- ----- --... /..... ...-- /--... ---.. /---.. ....- /.---- ----- --... /....- ----. /--... --... /.---- ..--- ..--- /-.... ----. /..... ----- /--... ----. /-.... ---.. /--... --... /..... ----- /--... ---.. /.---- ----- -.... /--... ...-- /..... ----- /--... --... /-.... ---.. /.---- ----- ...-- /.---- .---- ----. /--... --... /-.... ---.. /-.... ..... /.---- ..--- ----- /--... --... /-.... ---.. /--... ...-- /..... .---- /--... ---.. /-.... ---.. /-.... ----. /..... ...-- /-.... --... /.---- ----- ----. /---.. ..... /.---- ----- ...-- /---.. ----- /---.. ...-- /-.... ..... /.---- ..--- ..--- /-.... --... /.---- ----- ----. /--... --... /.---- ----- ...-- /---.. ----- /---.. ...-- /-.... ..... /.---- ..--- ----- /--... ---.. /---.. ....- /--... ...-- /.---- ..--- ----- /--... ---.. /.---- ----- -.... /----. ----. /....- ---.. /--... --... /.---- ----- -.... /---.. .---- /.---- ..--- .---- /--... ---.. /.---- ..--- ..--- /--... --... /..... ...-- /--... ---.. /.---- ..--- ..--- /----. ----. /....- ---.. /--... --... /.---- ..--- ..--- /---.. ----. /..... .---- /--... --... /-.... ---.. /--... ...-- /..... ..--- /--... ----. /---.. ....- /-.... ..... /.---- ..--- .---- /--... ---.. /.---- ..--- ..--- /--... --... /.---- ..--- .---- /--... ---.. /.---- ..--- ..--- /---.. .---- /....- ----. /--... --... /-.... ---.. /-.... ----. /..... .---- /--... --... /.---- ..--- ..--- /---.. .---- /.---- .---- ----. /--... --... /---.. ....- /--... ...-- /..... .---- /--... ---.. /.---- ----- -.... /---.. ..... /..... ..--- /--... ----. /-.... ---.. /--... ...-- /....- ---.. /--... ----. /-.... ---.. /----. ----. /.---- .---- ----. /--... --... /-.... ---.. /.---- ----- ...-- /.---- ..--- ..--- /--... --... /.---- ..--- ..--- /.---- ----- ...-- /..... ...-- /--... ---.. /.---- ..--- ..--- /--... --... /.---- ..--- .---- /--... --... /.---- ..--- ..--- /--... ...-- /....- ----. /--... --... /-.... ---.. /--... ...-- /.---- ..--- ----- /--... ---.. /.---- ..--- ..--- /-.... ..... /.---- ..--- ..--- /--... ---.. /---.. ....- /---.. ----. /.---- ..--- ..--- /--... ---.. /.---- ..--- ..--- /---.. ..... /.---- ..--- ----- /--... ---.. /-.... ---.. /.---- ----- ...-- /..... ..--- /--... --... /---.. ....- /.---- ----- ...-- /..... ----- /--... --... /-.... ---.. /.---- ----- --... /..... ----- /--... --... /.---- ----- -.... /-.... ----. /..... ..--- /--... ---.. /.---- ----- -.... /--... --... /..... ...-- /--... ---.. /.---- ..--- ..--- /---.. ..... /.---- ..--- .---- /--... ---.. /---.. ....- /---.. ----. /-.... .----
```

That seems Morse. After [decoding](https://www.dcode.fr/code-morse) it (with `.`=short and `-`=long), we get:
```
84  105  65  57  73  68  103  121  77  122  107  121  77  68  65  120  77  68  73  122  78  106  85  49  77  122  99  119  79  84  81  52  79  84  89  52  77  68  69  120  79  68  107  51  78  84  69  53  78  68  89  50  78  122  65  121  79  68  65  50  78  84  107  121  78  84  107  50  77  84  81  119  77  68  69  120  78  122  85  119  79  68  73  53  78  68  85  120  77  84  81  119  77  122  89  50  79  84  73  48  79  84  81  52  79  84  69  51  78  106  65  119  78  106  107  53  79  68  103  119  78  106  85  50  78  106  103  53  78  84  85  121  78  84  73  119  78  68  73  52  78  106  77  53  78  68  69  121  78  68  89  49  78  122  89  120  77  106  103  49  78  84  77  50  79  68  103  50  78  106  73  49  79  84  77  122  79  84  99  53  77  122  103  48  78  122  89  119  79  68  73  120  78  106  73  120  77  122  73  51  78  106  65  50  77  84  65  51  77  84  65  50  78  106  77  122  79  84  89  120  78  106  103  49  77  106  107  53  77  84  73  49  78  84  85  52  78  122  77  53  78  84  107  48  78  122  73  50  78  84  81  53  78  106  65  49  77  122  89  121  78  106  69  120  78  122  85  49  79  84  65  49  78  122  99  122  77  68  85  49  78  84  103  49  78  106  103  121  79  84  65  119  77  84  89  53  77  84  107  119  79  84  107  49  77  68  73  50  78  106  81  122  77  68  103  53  77  106  69  119  79  84  81  120  78  122  89  122  77  122  99  48  78  106  81  49  77  122  85  121  79  68  107  51  78  106  85  49  78  68  69  52  78  68  85  50  77  68  77  119  77  68  85  119  78  68  65  53  79  84  65  52  77  122  77  120  78  122  65  122  79  84  107  53  78  84  107  49  77  122  69  50  79  68  77  50  78  106  73  50  77  68  103  119  77  68  65  120  77  68  73  51  78  68  69  53  67  109  85  103  80  83  65  122  67  109  77  103  80  83  65  120  78  84  73  120  78  106  99  48  77  106  81  121  78  122  77  53  78  122  99  48  77  122  89  51  77  68  73  52  79  84  65  121  78  122  77  121  78  122  81  49  77  68  69  51  77  122  81  119  77  84  73  51  78  106  85  52  79  68  73  48  79  68  99  119  77  68  103  122  77  122  103  53  78  122  77  121  77  122  73  49  77  68  73  120  78  122  65  122  78  84  89  122  78  122  85  120  78  68  103  52  77  84  103  50  77  68  107  50  77  106  69  52  78  106  77  53  78  122  85  121  78  84  89  61
```

That can be [converted into ASCII](https://www.dcode.fr/code-ascii):
```
TiA9IDExNTQyNTk5NDQ5Mzk3MDg2MzYwNjIwNTg4NjQ5Mjc2MDIxNjMyNTA2ODg2ODMzMTg3NDk1MjE1Nzk0MDY2NjcwMTEzNjg2MTU2MDEyNjA2OTY1MDY0OTY1NDcyNTQzNDM4OTM2MjExMDg1NTk0NzE2NjA0NzIxNTI2MTk2NTMxMTI2NDcyOTc2NDg1MjMxODQ5NzAzNTEzNDMzODEyOTI4MDE0ODkxNTgyMjg1NDI0MjczNjk4NTMyMzg4MDMyNDc2NTcwNzM2Mjk4MzcwMTE1MDE0NTU2NDAwMzg1NzYzMjUyNTczODc3NzQyNzQ1MjAzNjk3MDc0NjY0MjQ5NDYzNTY0ODc0ODYyMTUwODU4MTA2MDM5NzAwMjM3NjE0OTA4NDU2NTgwMjM2OTU3ODY1MzUxOQplID0gMwpjID0gMTUyMTY3NDI0MjczOTc3NDM2NzAyODkwMjczMjc0NTAxNzM0MDEyNzY1ODgyNDg3MDA4MzM4OTczMjMyNTAyMTcwMzU2Mzc1MTQ4ODE4NjA5NjIxODYzOTc1MjU2Cg==
```

Now it seems Base64 encoded. If we [decode](https://www.dcode.fr/code-base-64) it, we'll get these parameters:
```
N = 115425994493970863606205886492760216325068868331874952157940666701136861560126069650649654725434389362110855947166047215261965311264729764852318497035134338129280148915822854242736985323880324765707362983701150145564003857632525738777427452036970746642494635648748621508581060397002376149084565802369578653519
e = 3
c = 152167424273977436702890273274501734012765882487008338973232502170356375148818609621863975256
```

Since we're in a crypto challenge, this notation suggests [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)). Said public-key cryptosystem is based on this operation:

$$ c = p^e \pmod n $$

### Attack RSA

In this case, the exponent $ e=3 $ is too low that $ p $ is susceptible to being obtained by calculating the $ e $ -th root of $ c $ (that's known as the ["cube-root RSA attack"](https://crypto.stackexchange.com/questions/33561/cube-root-attack-rsa-with-low-exponent)):

$$ p = \sqrt[e]{c} \quad (\text{if }p^e < n) $$

Using [RsaCtfTool](https://github.com/Ganapati/RsaCtfTool/):
```
$ python3 RsaCtfTool.py --verbosity DEBUG --attack cube_root -n $N -e $e --uncipher $c
private argument is not set, the private key will not be displayed, even if recovered.

[*] Testing key /tmp/tmp5rna7l4c.
[*] Performing cube_root attack on /tmp/tmp5rna7l4c.

Results for /tmp/tmp5rna7l4c:

Unciphered data :
HEX : 0x436278727a626120416e7a7266
INT (big endian) : 5338762031123926997889413968486
INT (little endian) : 8116701877186273491947517141571
utf-8 : Cbxrzba Anzrf
STR : b'Cbxrzba Anzrf'
```

### Get the flag

Those two words may be Caesar-encoded... Let's try to decode them with [ROT13](https://www.dcode.fr/chiffre-rot):
```
Pokemon Names
```

So now we know that, if we apply ROT13-decoding to that $ p $ number we obtained before (expressed as a string in UTF8), we get some words that make sense.

Input will change 5 more times (if we repeat all this process to every input, names like "[Wobbuffet](https://www.pokemon.com/us/pokedex/wobbuffet)", "[Forretress](https://www.pokemon.com/us/pokedex/forretress)", "[Bouffalant](https://www.pokemon.com/us/pokedex/bouffalant)", "[Froakie](https://www.pokemon.com/us/pokedex/froakie)" and "[Bergmite](https://www.pokemon.com/us/pokedex/bergmite)" will be revealed). After sending each result as a response to each input crypto.chal.csaw.io:5001 gives to us, we finally get the flag from the server:
```
flag{We're_ALrEadY_0N_0uR_waY_7HE_j0UrnEY_57aR75_70day!}
```

## Alternative ways

### Gotta script them all

Just running [this script `pokemon_names.py`](https://gist.github.com/jartigag/b0c35d09876274451a50a8689ddd4151):

```
$ python3 pokemon_names.py
Pokemon Names
Wobbuffet
Arctovish
Bouffalant
Froakie
Arctozolt
```

### Gotta chef them first

[![](https://scavengersecurity.com/posts/csaw-gottadecryptthemall/upload_c01fd065e4c94aa14993e6841cf70b7e.png)](https://gchq.github.io/CyberChef/#recipe=From_Morse_Code('Space','Forward%20slash')From_Decimal('Space',false)From_Base64('A-Za-z0-9%2B/%3D',true)&input=LS0tLi4gLi4uLi0gLy4tLS0tIC0tLS0tIC4uLi4uIC8tLi4uLiAuLi4uLiAvLi4uLi4gLS0uLi4gLy0tLi4uIC4uLi0tIC8tLi4uLiAtLS0uLiAvLi0tLS0gLS0tLS0gLi4uLS0gLy4tLS0tIC4uLS0tIC4tLS0tIC8tLS4uLiAtLS4uLiAvLi0tLS0gLi4tLS0gLi4tLS0gLy4tLS0tIC0tLS0tIC0tLi4uIC8uLS0tLSAuLi0tLSAuLS0tLSAvLS0uLi4gLS0uLi4gLy0uLi4uIC0tLS4uIC8tLi4uLiAuLi4uLiAvLi0tLS0gLi4tLS0gLS0tLS0gLy0tLi4uIC0tLi4uIC8tLi4uLiAtLS0uLiAvLS0uLi4gLi4uLS0gLy4tLS0tIC4uLS0tIC4uLS0tIC8tLS4uLiAtLS0uLiAvLi0tLS0gLS0tLS0gLS4uLi4gLy0tLS4uIC4uLi4uIC8uLi4uLSAtLS0tLiAvLS0uLi4gLS0uLi4gLy4tLS0tIC4uLS0tIC4uLS0tIC8tLS0tLiAtLS0tLiAvLi0tLS0gLi0tLS0gLS0tLS4gLy0tLi4uIC0tLS0uIC8tLS0uLiAuLi4uLSAvLS0tLi4gLi0tLS0gLy4uLi4uIC4uLS0tIC8tLS4uLiAtLS0tLiAvLS0tLi4gLi4uLi0gLy0tLS4uIC0tLS0uIC8uLi4uLiAuLi0tLSAvLS0uLi4gLS0uLi4gLy0uLi4uIC0tLS4uIC8tLi4uLiAtLS0tLiAvLi0tLS0gLi4tLS0gLS0tLS0gLy0tLi4uIC0tLS0uIC8tLi4uLiAtLS0uLiAvLi0tLS0gLS0tLS0gLS0uLi4gLy4uLi4uIC4tLS0tIC8tLS4uLiAtLS0uLiAvLS0tLi4gLi4uLi0gLy0uLi4uIC0tLS0uIC8uLi4uLiAuLi4tLSAvLS0uLi4gLS0tLi4gLy0uLi4uIC0tLS4uIC8tLS0uLiAtLS0tLiAvLi4uLi4gLS0tLS0gLy0tLi4uIC0tLS4uIC8uLS0tLSAuLi0tLSAuLi0tLSAvLS4uLi4gLi4uLi4gLy4tLS0tIC4uLS0tIC4tLS0tIC8tLS4uLiAtLS0tLiAvLS4uLi4gLS0tLi4gLy0uLi4uIC4uLi4uIC8uLi4uLiAtLS0tLSAvLS0uLi4gLS0tLi4gLy0tLS4uIC4uLi4tIC8uLS0tLSAtLS0tLSAtLS4uLiAvLi0tLS0gLi4tLS0gLi0tLS0gLy0tLi4uIC0tLS4uIC8tLS0uLiAuLi4uLSAvLi0tLS0gLS0tLS0gLS0uLi4gLy4uLi4uIC0tLS0tIC8tLS4uLiAtLS4uLiAvLS0tLi4gLi4uLi0gLy0tLS4uIC4tLS0tIC8uLS0tLSAuLS0tLSAtLS0tLiAvLS0uLi4gLS0uLi4gLy0uLi4uIC0tLS4uIC8tLi4uLiAtLS0tLiAvLi0tLS0gLi4tLS0gLS0tLS0gLy0tLi4uIC0tLS4uIC8uLS0tLSAuLi0tLSAuLi0tLSAvLS0tLi4gLi4uLi4gLy4tLS0tIC4tLS0tIC0tLS0uIC8tLS4uLiAtLS0tLiAvLS4uLi4gLS0tLi4gLy0tLi4uIC4uLi0tIC8uLi4uLiAuLi4tLSAvLS0uLi4gLS0tLi4gLy0uLi4uIC0tLS4uIC8tLS0uLiAuLi4uLiAvLi0tLS0gLi4tLS0gLS0tLS0gLy0tLi4uIC0tLi4uIC8tLS0uLiAuLi4uLSAvLS0tLi4gLi0tLS0gLy4tLS0tIC4tLS0tIC0tLS0uIC8tLS4uLiAtLS4uLiAvLi0tLS0gLi4tLS0gLi4tLS0gLy0tLS4uIC0tLS0uIC8uLi4uLiAtLS0tLSAvLS0uLi4gLS0tLS4gLy0tLS4uIC4uLi4tIC8tLS4uLiAuLi4tLSAvLi4uLi0gLS0tLi4gLy0tLi4uIC0tLS0uIC8tLS0uLiAuLi4uLSAvLS0tLi4gLi0tLS0gLy4uLi4uIC4uLS0tIC8tLS4uLiAtLS0tLiAvLS0tLi4gLi4uLi0gLy0uLi4uIC0tLS0uIC8uLi4uLiAuLS0tLSAvLS0uLi4gLS0tLi4gLy4tLS0tIC0tLS0tIC0uLi4uIC8tLi4uLiAuLi4uLiAvLi0tLS0gLi0tLS0gLS0tLS4gLy0tLi4uIC0tLS4uIC8uLS0tLSAtLS0tLSAtLi4uLiAvLi0tLS0gLS0tLS0gLS0uLi4gLy4uLi4uIC4uLi0tIC8tLS4uLiAtLS0tLiAvLS4uLi4gLS0tLi4gLy4tLS0tIC0tLS0tIC4uLi0tIC8uLS0tLSAuLS0tLSAtLS0tLiAvLS0uLi4gLS0tLi4gLy4tLS0tIC0tLS0tIC0uLi4uIC8tLS0uLiAuLi4uLiAvLi4uLi4gLS0tLS0gLy0tLi4uIC0tLS4uIC8uLS0tLSAtLS0tLSAtLi4uLiAvLi0tLS0gLS0tLS0gLi4uLS0gLy4uLi4uIC4uLi0tIC8tLS4uLiAtLS0uLiAvLS0tLi4gLi4uLi0gLy0tLS4uIC4uLi4uIC8uLS0tLSAuLi0tLSAuLS0tLSAvLS0uLi4gLS0tLi4gLy0tLS4uIC4uLi4tIC8tLS4uLiAuLi4tLSAvLi0tLS0gLi0tLS0gLS0tLS4gLy0tLi4uIC0tLS4uIC8tLi4uLiAtLS0uLiAvLS0uLi4gLi4uLS0gLy4uLi4uIC4uLS0tIC8tLS4uLiAtLS0uLiAvLi0tLS0gLS0tLS0gLS4uLi4gLy0tLi4uIC0tLi4uIC8uLi4uLiAuLi4tLSAvLS0uLi4gLS0tLi4gLy0uLi4uIC0tLS4uIC8tLi4uLiAtLS0tLiAvLi0tLS0gLi4tLS0gLi0tLS0gLy0tLi4uIC0tLS4uIC8tLi4uLiAtLS0uLiAvLS0tLi4gLS0tLS4gLy4uLi4tIC0tLS0uIC8tLS4uLiAtLS0uLiAvLi0tLS0gLi4tLS0gLi4tLS0gLy0tLS4uIC0tLS0uIC8uLS0tLSAuLi0tLSAtLS0tLSAvLS0uLi4gLS0uLi4gLy4tLS0tIC0tLS0tIC0uLi4uIC8uLS0tLSAtLS0tLSAuLi4tLSAvLi4uLi0gLS0tLS4gLy0tLi4uIC0tLS4uIC8tLS0uLiAuLi4uLSAvLS0uLi4gLS0uLi4gLy4uLi4uIC0tLS0tIC8tLS4uLiAtLS0tLiAvLS4uLi4gLS0tLi4gLy4tLS0tIC0tLS0tIC4uLi0tIC8uLi4uLiAtLS0tLSAvLS0uLi4gLS0tLi4gLy4tLS0tIC0tLS0tIC0uLi4uIC8tLS4uLiAuLi4tLSAvLi4uLi0gLS0tLS4gLy0tLi4uIC0tLS0uIC8tLS0uLiAuLi4uLSAvLS0uLi4gLS0uLi4gLy4tLS0tIC4uLS0tIC4uLS0tIC8tLS4uLiAtLS0tLiAvLS0tLi4gLi4uLi0gLy0tLS0uIC0tLS0uIC8uLi4uLiAuLi4tLSAvLS0uLi4gLS0uLi4gLy4tLS0tIC4uLS0tIC4uLS0tIC8uLS0tLSAtLS0tLSAuLi4tLSAvLi4uLi0gLS0tLi4gLy0tLi4uIC0tLS4uIC8uLS0tLSAuLi0tLSAuLi0tLSAvLS0tLi4gLS0tLS4gLy4tLS0tIC4tLS0tIC0tLS0uIC8tLS4uLiAtLS0tLiAvLS4uLi4gLS0tLi4gLy0tLi4uIC4uLi0tIC8uLS0tLSAuLi0tLSAtLS0tLSAvLS0uLi4gLS0tLi4gLy4tLS0tIC0tLS0tIC0uLi4uIC8tLS4uLiAuLi4tLSAvLi0tLS0gLi4tLS0gLS0tLS0gLy0tLi4uIC0tLi4uIC8uLS0tLSAuLi0tLSAuLi0tLSAvLS0uLi4gLi4uLS0gLy4uLi4uIC4tLS0tIC8tLS4uLiAtLS0uLiAvLi0tLS0gLS0tLS0gLS4uLi4gLy0uLi4uIC4uLi4uIC8uLi4uLiAtLS0tLSAvLS0uLi4gLS0uLi4gLy0tLS4uIC4uLi4tIC8tLi4uLiAuLi4uLiAvLi4uLi4gLi0tLS0gLy0tLi4uIC0tLi4uIC8tLS0uLiAuLi4uLSAvLS4uLi4gLi4uLi4gLy4uLi4uIC0tLS0tIC8tLS4uLiAtLS0uLiAvLi0tLS0gLS0tLS0gLS4uLi4gLy0tLi4uIC0tLi4uIC8uLS0tLSAuLi0tLSAuLi0tLSAvLS0uLi4gLS0tLS4gLy0tLS4uIC4uLi4tIC8tLS0uLiAtLS0tLiAvLi0tLS0gLi4tLS0gLS0tLS0gLy0tLi4uIC0tLS4uIC8uLS0tLSAtLS0tLSAtLi4uLiAvLi0tLS0gLS0tLS0gLi4uLS0gLy4uLi4tIC0tLS0uIC8tLS4uLiAtLS4uLiAvLi0tLS0gLS0tLS0gLS4uLi4gLy4tLS0tIC0tLS0tIC0tLi4uIC8uLi4uLiAuLi4tLSAvLS0uLi4gLS0uLi4gLy0tLS4uIC4uLi4tIC8tLS4uLiAuLi4tLSAvLi4uLi0gLS0tLS4gLy0tLi4uIC0tLS4uIC8tLS0uLiAuLi4uLSAvLS0tLi4gLi4uLi4gLy4uLi4uIC4uLS0tIC8tLS4uLiAtLS0uLiAvLi0tLS0gLi4tLS0gLi4tLS0gLy0tLi4uIC0tLi4uIC8uLi4uLiAuLi4tLSAvLS0uLi4gLS0tLi4gLy0tLS4uIC4uLi4tIC8uLS0tLSAtLS0tLSAtLS4uLiAvLi4uLi0gLS0tLi4gLy0tLi4uIC0tLS4uIC8uLS0tLSAuLi0tLSAuLi0tLSAvLS0uLi4gLi4uLS0gLy4uLi4uIC0tLS0tIC8tLS4uLiAtLS0uLiAvLS0tLi4gLi4uLi0gLy0tLS4uIC4tLS0tIC8uLi4uLiAuLi4tLSAvLS0uLi4gLS0tLi4gLy4tLS0tIC0tLS0tIC0uLi4uIC8tLi4uLiAuLi4uLiAvLi4uLi0gLS0tLS4gLy0tLi4uIC0tLi4uIC8uLS0tLSAuLi0tLSAuLi0tLSAvLS0tLi4gLS0tLS4gLy4tLS0tIC4uLS0tIC4tLS0tIC8tLS4uLiAtLS0uLiAvLi0tLS0gLS0tLS0gLS4uLi4gLy0uLi4uIC0tLS0uIC8uLS0tLSAuLi0tLSAtLS0tLSAvLS0uLi4gLS0tLi4gLy4tLS0tIC4uLS0tIC4uLS0tIC8tLS0uLiAuLi4uLiAvLi4uLi0gLS0tLS4gLy0tLi4uIC0tLS0uIC8tLS0uLiAuLi4uLSAvLS4uLi4gLi4uLi4gLy4uLi4tIC0tLS0uIC8tLS4uLiAtLS0uLiAvLi0tLS0gLi4tLS0gLi4tLS0gLy0tLS0uIC0tLS0uIC8uLS0tLSAuLi0tLSAuLi0tLSAvLS0uLi4gLS0uLi4gLy0uLi4uIC0tLS4uIC8tLS0uLiAuLi4uLiAvLi4uLi0gLS0tLS4gLy0tLi4uIC0tLS4uIC8tLS0uLiAuLi4uLSAvLi0tLS0gLS0tLS0gLi4uLS0gLy4uLi4tIC0tLS0uIC8tLS4uLiAtLS0uLiAvLi0tLS0gLS0tLS0gLS4uLi4gLy4tLS0tIC0tLS0tIC4uLi0tIC8uLS0tLSAuLi0tLSAuLS0tLSAvLS0uLi4gLS0tLS4gLy0tLS4uIC4uLi4tIC8tLi4uLiAuLi4uLiAvLi0tLS0gLi0tLS0gLS0tLS4gLy0tLi4uIC0tLi4uIC8tLS0uLiAuLi4uLSAvLS0tLi4gLS0tLS4gLy4uLi4uIC4uLi0tIC8tLS4uLiAtLS4uLiAvLS0tLi4gLi4uLi0gLy4tLS0tIC0tLS0tIC0tLi4uIC8uLS0tLSAuLS0tLSAtLS0tLiAvLS0uLi4gLS0tLS4gLy0tLS4uIC4uLi4tIC8uLS0tLSAtLS0tLSAtLS4uLiAvLi4uLi0gLS0tLS4gLy0tLi4uIC0tLi4uIC8tLi4uLiAtLS0uLiAvLS0uLi4gLi4uLS0gLy4uLi4uIC0tLS0tIC8tLS4uLiAtLS0uLiAvLi0tLS0gLS0tLS0gLS4uLi4gLy0tLS4uIC4tLS0tIC8uLS0tLSAuLi0tLSAuLi0tLSAvLS0uLi4gLS0uLi4gLy0uLi4uIC0tLS4uIC8uLS0tLSAtLS0tLSAuLi4tLSAvLi4uLi4gLi4uLS0gLy0tLi4uIC0tLi4uIC8uLS0tLSAtLS0tLSAtLi4uLiAvLS4uLi4gLS0tLS4gLy4tLS0tIC4tLS0tIC0tLS0uIC8tLS4uLiAtLS0tLiAvLS0tLi4gLi4uLi0gLy0tLS4uIC4tLS0tIC8uLS0tLSAuLi0tLSAtLS0tLSAvLS0uLi4gLS0tLi4gLy4tLS0tIC4uLS0tIC4uLS0tIC8tLS0uLiAtLS0tLiAvLi0tLS0gLi4tLS0gLi4tLS0gLy0tLi4uIC0tLi4uIC8uLS0tLSAuLi0tLSAuLi0tLSAvLS0tLS4gLS0tLS4gLy4uLi4tIC0tLS4uIC8tLS4uLiAtLS0uLiAvLi0tLS0gLS0tLS0gLS4uLi4gLy0tLS4uIC4tLS0tIC8uLi4uLSAtLS0tLiAvLS0uLi4gLS0uLi4gLy4tLS0tIC4uLS0tIC4uLS0tIC8tLS0uLiAuLi4uLiAvLi0tLS0gLi4tLS0gLi0tLS0gLy0tLi4uIC0tLS0uIC8tLi4uLiAtLS0uLiAvLi0tLS0gLS0tLS0gLS0uLi4gLy4uLi4uIC4tLS0tIC8tLS4uLiAtLS0uLiAvLi0tLS0gLS0tLS0gLS4uLi4gLy0tLS4uIC4uLi4uIC8uLi4uLSAtLS0tLiAvLS0uLi4gLS0tLi4gLy0uLi4uIC0tLS4uIC8tLi4uLiAtLS0tLiAvLi4uLi4gLi4tLS0gLy0tLi4uIC0tLS4uIC8tLi4uLiAtLS0uLiAvLS0tLi4gLi4uLi4gLy4uLi4uIC0tLS0tIC8tLS4uLiAtLS4uLiAvLS4uLi4gLS0tLi4gLy0tLi4uIC0tLi4uIC8uLS0tLSAuLS0tLSAtLS0tLiAvLS0uLi4gLS0uLi4gLy0uLi4uIC0tLS4uIC8tLS0uLiAuLi4uLiAvLi0tLS0gLi0tLS0gLS0tLS4gLy0tLi4uIC0tLS4uIC8tLi4uLiAtLS0uLiAvLS4uLi4gLi4uLi4gLy4uLi4uIC4uLi0tIC8tLS4uLiAtLS0tLiAvLS0tLi4gLi4uLi0gLy0uLi4uIC4uLi4uIC8uLi4uLiAuLi0tLSAvLS0uLi4gLS0uLi4gLy4tLS0tIC4uLS0tIC4uLS0tIC8tLS4uLiAtLS4uLiAvLi0tLS0gLi4tLS0gLS0tLS0gLy0tLi4uIC0tLS4uIC8uLS0tLSAuLi0tLSAuLi0tLSAvLS4uLi4gLi4uLi4gLy4tLS0tIC4uLS0tIC4uLS0tIC8tLS4uLiAtLS0tLiAvLS0tLi4gLi4uLi0gLy4tLS0tIC0tLS0tIC0tLi4uIC8uLi4uLiAuLi4tLSAvLS0uLi4gLS0tLi4gLy0tLS4uIC4uLi4tIC8uLS0tLSAtLS0tLSAtLS4uLiAvLi4uLi0gLS0tLS4gLy0tLi4uIC0tLi4uIC8uLS0tLSAuLi0tLSAuLi0tLSAvLS4uLi4gLS0tLS4gLy4uLi4uIC0tLS0tIC8tLS4uLiAtLS0tLiAvLS4uLi4gLS0tLi4gLy0tLi4uIC0tLi4uIC8uLi4uLiAtLS0tLSAvLS0uLi4gLS0tLi4gLy4tLS0tIC0tLS0tIC0uLi4uIC8tLS4uLiAuLi4tLSAvLi4uLi4gLS0tLS0gLy0tLi4uIC0tLi4uIC8tLi4uLiAtLS0uLiAvLi0tLS0gLS0tLS0gLi4uLS0gLy4tLS0tIC4tLS0tIC0tLS0uIC8tLS4uLiAtLS4uLiAvLS4uLi4gLS0tLi4gLy0uLi4uIC4uLi4uIC8uLS0tLSAuLi0tLSAtLS0tLSAvLS0uLi4gLS0uLi4gLy0uLi4uIC0tLS4uIC8tLS4uLiAuLi4tLSAvLi4uLi4gLi0tLS0gLy0tLi4uIC0tLS4uIC8tLi4uLiAtLS0uLiAvLS4uLi4gLS0tLS4gLy4uLi4uIC4uLi0tIC8tLi4uLiAtLS4uLiAvLi0tLS0gLS0tLS0gLS0tLS4gLy0tLS4uIC4uLi4uIC8uLS0tLSAtLS0tLSAuLi4tLSAvLS0tLi4gLS0tLS0gLy0tLS4uIC4uLi0tIC8tLi4uLiAuLi4uLiAvLi0tLS0gLi4tLS0gLi4tLS0gLy0uLi4uIC0tLi4uIC8uLS0tLSAtLS0tLSAtLS0tLiAvLS0uLi4gLS0uLi4gLy4tLS0tIC0tLS0tIC4uLi0tIC8tLS0uLiAtLS0tLSAvLS0tLi4gLi4uLS0gLy0uLi4uIC4uLi4uIC8uLS0tLSAuLi0tLSAtLS0tLSAvLS0uLi4gLS0tLi4gLy0tLS4uIC4uLi4tIC8tLS4uLiAuLi4tLSAvLi0tLS0gLi4tLS0gLS0tLS0gLy0tLi4uIC0tLS4uIC8uLS0tLSAtLS0tLSAtLi4uLiAvLS0tLS4gLS0tLS4gLy4uLi4tIC0tLS4uIC8tLS4uLiAtLS4uLiAvLi0tLS0gLS0tLS0gLS4uLi4gLy0tLS4uIC4tLS0tIC8uLS0tLSAuLi0tLSAuLS0tLSAvLS0uLi4gLS0tLi4gLy4tLS0tIC4uLS0tIC4uLS0tIC8tLS4uLiAtLS4uLiAvLi4uLi4gLi4uLS0gLy0tLi4uIC0tLS4uIC8uLS0tLSAuLi0tLSAuLi0tLSAvLS0tLS4gLS0tLS4gLy4uLi4tIC0tLS4uIC8tLS4uLiAtLS4uLiAvLi0tLS0gLi4tLS0gLi4tLS0gLy0tLS4uIC0tLS0uIC8uLi4uLiAuLS0tLSAvLS0uLi4gLS0uLi4gLy0uLi4uIC0tLS4uIC8tLS4uLiAuLi4tLSAvLi4uLi4gLi4tLS0gLy0tLi4uIC0tLS0uIC8tLS0uLiAuLi4uLSAvLS4uLi4gLi4uLi4gLy4tLS0tIC4uLS0tIC4tLS0tIC8tLS4uLiAtLS0uLiAvLi0tLS0gLi4tLS0gLi4tLS0gLy0tLi4uIC0tLi4uIC8uLS0tLSAuLi0tLSAuLS0tLSAvLS0uLi4gLS0tLi4gLy4tLS0tIC4uLS0tIC4uLS0tIC8tLS0uLiAuLS0tLSAvLi4uLi0gLS0tLS4gLy0tLi4uIC0tLi4uIC8tLi4uLiAtLS0uLiAvLS4uLi4gLS0tLS4gLy4uLi4uIC4tLS0tIC8tLS4uLiAtLS4uLiAvLi0tLS0gLi4tLS0gLi4tLS0gLy0tLS4uIC4tLS0tIC8uLS0tLSAuLS0tLSAtLS0tLiAvLS0uLi4gLS0uLi4gLy0tLS4uIC4uLi4tIC8tLS4uLiAuLi4tLSAvLi4uLi4gLi0tLS0gLy0tLi4uIC0tLS4uIC8uLS0tLSAtLS0tLSAtLi4uLiAvLS0tLi4gLi4uLi4gLy4uLi4uIC4uLS0tIC8tLS4uLiAtLS0tLiAvLS4uLi4gLS0tLi4gLy0tLi4uIC4uLi0tIC8uLi4uLSAtLS0uLiAvLS0uLi4gLS0tLS4gLy0uLi4uIC0tLS4uIC8tLS0tLiAtLS0tLiAvLi0tLS0gLi0tLS0gLS0tLS4gLy0tLi4uIC0tLi4uIC8tLi4uLiAtLS0uLiAvLi0tLS0gLS0tLS0gLi4uLS0gLy4tLS0tIC4uLS0tIC4uLS0tIC8tLS4uLiAtLS4uLiAvLi0tLS0gLi4tLS0gLi4tLS0gLy4tLS0tIC0tLS0tIC4uLi0tIC8uLi4uLiAuLi4tLSAvLS0uLi4gLS0tLi4gLy4tLS0tIC4uLS0tIC4uLS0tIC8tLS4uLiAtLS4uLiAvLi0tLS0gLi4tLS0gLi0tLS0gLy0tLi4uIC0tLi4uIC8uLS0tLSAuLi0tLSAuLi0tLSAvLS0uLi4gLi4uLS0gLy4uLi4tIC0tLS0uIC8tLS4uLiAtLS4uLiAvLS4uLi4gLS0tLi4gLy0tLi4uIC4uLi0tIC8uLS0tLSAuLi0tLSAtLS0tLSAvLS0uLi4gLS0tLi4gLy4tLS0tIC4uLS0tIC4uLS0tIC8tLi4uLiAuLi4uLiAvLi0tLS0gLi4tLS0gLi4tLS0gLy0tLi4uIC0tLS4uIC8tLS0uLiAuLi4uLSAvLS0tLi4gLS0tLS4gLy4tLS0tIC4uLS0tIC4uLS0tIC8tLS4uLiAtLS0uLiAvLi0tLS0gLi4tLS0gLi4tLS0gLy0tLS4uIC4uLi4uIC8uLS0tLSAuLi0tLSAtLS0tLSAvLS0uLi4gLS0tLi4gLy0uLi4uIC0tLS4uIC8uLS0tLSAtLS0tLSAuLi4tLSAvLi4uLi4gLi4tLS0gLy0tLi4uIC0tLi4uIC8tLS0uLiAuLi4uLSAvLi0tLS0gLS0tLS0gLi4uLS0gLy4uLi4uIC0tLS0tIC8tLS4uLiAtLS4uLiAvLS4uLi4gLS0tLi4gLy4tLS0tIC0tLS0tIC0tLi4uIC8uLi4uLiAtLS0tLSAvLS0uLi4gLS0uLi4gLy4tLS0tIC0tLS0tIC0uLi4uIC8tLi4uLiAtLS0tLiAvLi4uLi4gLi4tLS0gLy0tLi4uIC0tLS4uIC8uLS0tLSAtLS0tLSAtLi4uLiAvLS0uLi4gLS0uLi4gLy4uLi4uIC4uLi0tIC8tLS4uLiAtLS0uLiAvLi0tLS0gLi4tLS0gLi4tLS0gLy0tLS4uIC4uLi4uIC8uLS0tLSAuLi0tLSAuLS0tLSAvLS0uLi4gLS0tLi4gLy0tLS4uIC4uLi4tIC8tLS0uLiAtLS0tLiAvLS4uLi4gLi0tLS0)


### Gotta pipe them all

```bash
$ cat morse.sed 
# based on https://stackoverflow.com/a/60139038
# .=short -=long
s/-----/0/g
s/\.----/1/g
s/\.\.---/2/g
s/\.\.\.--/3/g
s/\.\.\.\.-/4/g
s/\.\.\.\.\./5/g
s/-\.\.\.\./6/g
s/--\.\.\./7/g
s/---\.\./8/g
s/----\./9/g
$ export $(grep -v What input | sed 's/\//\n/g' | sed -Ef morse.sed | sed 's/ //g' | awk -F_ '{printf("%c",$0)}' | base64 -d | sed 's/ //g')
$ python RsaCtfTool.py --attack cube_root -n $N -e $e --uncipher $c | grep utf-8 | tr 'A-Za-z' 'N-ZA-Mn-za-m' | awk '{$1="";$2="";print $0}'
  Pokemon Names
```
