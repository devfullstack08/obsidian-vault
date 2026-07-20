---
subject: Mathematics
topic: Common Rules & Divisibility Rules
status: draft
---
e# Mathematics: Common Rules & Divisibility Rules

This note covers the divisibility rules for numbers from 2 to 11, along with examples.

---

## The "Sum of Digits" Rule (Important Clarification)

Your rule: *"First sum the digits of the number; if the sum is divisible by the given number, then the number is divisible."*

> [!IMPORTANT]
> This rule is **only correct for the numbers 3 and 9**. It does not work for other numbers.
> * For example, if you want to check if **124** is divisible by **4**, summing the digits ($1+2+4 = 7$) does not work because 124 is divisible by 4, but 7 is not.

---

## Complete Divisibility Rules Table (2 to 11)

| Number | Divisibility Rule                                                                                                          | Example                                                                               |
| :----- | :------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| **2**  | The last digit must be even (0, 2, 4, 6, 8).                                                                               | **148** ends in 8 $\rightarrow$ Divisible.                                            |
| **3**  | The **sum of the digits** must be divisible by 3.                                                                          | **372** ($3+7+2 = 12$, and 12 is divisible by 3) $\rightarrow$ Divisible.             |
| **4**  | The last two digits must form a number divisible by 4.                                                                     | **316** (16 is divisible by 4) $\rightarrow$ Divisible.                               |
| **5**  | The last digit must be 0 or 5.                                                                                             | **235** ends in 5 $\rightarrow$ Divisible.                                            |
| **6**  | The number must be divisible by both **2** and **3**.                                                                      | **162** (ends in 2, and $1+6+2 = 9$ is divisible by 3) $\rightarrow$ Divisible.       |
| **7**  | Double the last digit and subtract it from the rest of the number. The result must be divisible by 7.                      | **343** ($34 - (3 \times 2) = 28$, and 28 is divisible by 7) $\rightarrow$ Divisible. |
| **8**  | The last three digits must form a number divisible by 8.                                                                   | **1824** (824 is divisible by 8) $\rightarrow$ Divisible.                             |
| **9**  | The **sum of the digits** must be divisible by 9.                                                                          | **783** ($7+8+3 = 18$, and 18 is divisible by 9) $\rightarrow$ Divisible.             |
| **10** | The last digit must be 0.                                                                                                  | **540** ends in 0 $\rightarrow$ Divisible.                                            |
| **11** | The difference between the sum of the digits in odd positions and the sum in even positions must be 0 or a multiple of 11. | **1331** ($(1+3) - (3+1) = 0$) $\rightarrow$ Divisible.                               |

---

## Detailed Rules & Explanations

### Divisibility by 3 and 9 (Sum of Digits)
* **Rule:** If the sum of all digits is a multiple of 3 or 9, the whole number is divisible by 3 or 9.
* **Why it's useful:** It makes checking huge numbers very fast.
* **Example:** Is **45,396** divisible by 9?
  * Sum of digits: $4 + 5 + 3 + 9 + 6 = 27$
  * Since 27 is divisible by 9 ($9 \times 3 = 27$), the number **45,396** is divisible by 9.

### Divisibility by 4 and 8 (Last Digits)
* **Rule for 4:** Look only at the last 2 digits.
  * E.g., **5,724** $\rightarrow$ Check 24. Since $24 \div 4 = 6$, the whole number is divisible.
* **Rule for 8:** Look only at the last 3 digits.
  * E.g., **9,120** $\rightarrow$ Check 120. Since $120 \div 8 = 15$, the whole number is divisible.

### Divisibility by 11
* **Rule:** Subtract the sum of the digits in the even positions from the sum of the digits in the odd positions. If the result is 0 or a multiple of 11, the number is divisible.
* **Example:** Is **8,591** divisible by 11?
  * Odd positions: 8 and 9 $\rightarrow$ $8 + 9 = 17$
  * Even positions: 5 and 1 $\rightarrow$ $5 + 1 = 6$
  * Difference: $17 - 6 = 11$
  * Since 11 is a multiple of 11, the number **8,591** is divisible by 11.

---

## Calendar Repetition Rule

To find out when a calendar year will repeat exactly (have the same days and dates), divide the **last two digits of the year by 4** and check the remainder:

| Remainder | Years to Add | Example |
| :--- | :--- | :--- |
| **0** (Leap Year) | **+ 28 years** | **2024** $\div 4$ remainder is 0 $\rightarrow 2024 + 28 = \mathbf{2052}$ |
| **1** | **+ 6 years** | **2021** $\div 4$ remainder is 1 $\rightarrow 2021 + 6 = \mathbf{2027}$ |
| **2** | **+ 11 years** | **2022** $\div 4$ remainder is 2 $\rightarrow 2022 + 11 = \mathbf{2033}$ |
| **3** | **+ 11 years** | **2023** $\div 4$ remainder is 3 $\rightarrow 2023 + 11 = \mathbf{2034}$ |

> [!NOTE]
> * You were very close! Just remember: the remainder for adding **6** is **1** (not 2). 
> * For remainders **2 or 3**, you add **11**.
> * For remainder **0** (Leap Year), you add **28**.


## Geometric Mean (GM)

Yes, you are correct! For two numbers $a$ and $b$, the Geometric Mean (GM) is the square root of their product:

$$\text{GM} = \sqrt{a \times b}$$

### General Formula
For $n$ numbers ($x_1, x_2, \dots, x_n$), the Geometric Mean is the $n$-th root of their product:

$$\text{GM} = \sqrt[n]{x_1 \times x_2 \times \dots \times x_n}$$

### Example
Find the Geometric Mean of **4** and **9**:
$$\text{GM} = \sqrt{4 \times 9} = \sqrt{36} = 6$$

---

## Least Common Multiple (LCM)
* **Method:** Prime Factorization.

---

## Understand the Partnership Rule:
Ratio of Profit = Ration of (capital * time)

---

## The **Simple Interest formula** is:

SI= P × R x T / 100
- SI = Simple Interest
- P = Principal amount
- R = Annual interest rate
- T = Time in years
  
The **total amount** after interest is: A = P + SI
Calculate Compound Interest(CI) : CI = A - P

-------

To convert **kilometres per hour (km/h)** into **metres per second (m/s)**:
m/s = km/h * 5/ 18

Distance = Speed × Time
Time = Distance / Speed

----
For a rectangle:
Area = Length × Width
Diagonal = a^2 + b^2  =  c^2

For the circle:
Area = 22/7  r ^ 2

--------

cone area = 22/ 7 * r * l 

---

Cylindrical cube = 22/7 * 2 ^2  * h(l) 

--------------

Volume of a Cuboid(rectangular prism/ લંબઘનનું ઘનફળ): V = l(length) × b(breadth) × h​(height)

----

Right-angled triangle -> x + x + 90 = 180 