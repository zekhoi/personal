---
title: Ternary Operator
author: Khoironi Kurnia Syah
icon: code-slash
tags: ["ternary", "operator", "kondisi", "indonesia"]
thumbnail: /images/thumbnails/code-for-ternary.jpg
summary: Operator Ternary merupakan salah satu dari tiga sifat Operator yang digunakan untuk menentukan ekspresi berdasarkan suatu kondisi.
date: 2021-08-28
---

Operator Ternary juga dikenal sebagai ekspresi kondisional merupakan sebuah operator yang mengevaluasi sesuatu berdasarkan sebuah kondisi `True` atau `False`. Operator ini mempermudah kita untuk mengetes kondisi hanya dalam satu baris yang menggantikan banyak baris kondisi `if-else` yang membuat kode semakin padat.

#### Contoh Penggunaan `Ternary Condition`

```javascript
kondisi ? ekpresiTrue : ekpresiFalse;
```

Selain ekspresi `False`, ekspresi ini juga akan dieksekusi ketika kondisi tersebut bernilai `null`, `Nan`, `0`, `""` (string kosong), dan `undefined`. Jadi setiap nilai yang bernilai seperti yang disebutkan sebelumnya atau selain `True` akan mengeksekusi ekspresi `False`.

Kita juga bisa membuat `conditional chains` atau seperti percabangan `if-else` dengan menggunakan `ternary condition` ini.

#### Contoh `Conditional Chains`

```javascript
kondisi1 ? ekspresi1 :
kondisi2 ? ekspresi2 :
kondisi3 ? ekspresi3 :
kondisi4 ? ekspresi4 :
. . .
```
