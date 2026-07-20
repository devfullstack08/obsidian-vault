---
subject: Mathematics
topic: Compound Interest
status: draft
---
# Compound Interest (ચક્રવૃદ્ધિ વ્યાજ)

Compound Interest (CI) is interest calculated on the initial principal and the accumulated interest of previous periods ("interest on interest").

---

## 1. Core Formulas

* **Amount (A) Compounded Annually:**
  $$A = P \left(1 + \frac{R}{100}\right)^T$$
  * Where $P = \text{Principal}$, $R = \text{Rate \% per annum}$, $T = \text{Time in years}$.
* **Compound Interest (CI):**
  $$\text{CI} = A - P = P \left[ \left(1 + \frac{R}{100}\right)^T - 1 \right]$$

### Different Compounding Periods:
* **Compounded Half-Yearly:** Rate is halved, time is doubled.
  $$A = P \left(1 + \frac{R/2}{100}\right)^{2T}$$
* **Compounded Quarterly:** Rate is divided by 4, time is multiplied by 4.
  $$A = P \left(1 + \frac{R/4}{100}\right)^{4T}$$

---

## 2. Ultimate Exam Shortcuts & Tricks

### A. The Ratio / Fraction Method (Easiest for Calculation)
Avoid calculations like $1.1^3$ by converting the rate into a fraction.

> **Example:** Find the Compound Interest on ₹$10,000$ for $3\text{ years}$ at $10\%$ per annum.
> 1. Convert rate to fraction: $10\% = \frac{1}{10}$.
> 2. This means a principal of ₹$10$ becomes an amount of ₹$11$ in one year.
> 3. For 3 years, cube the terms (or multiply three times):
>    $$\text{Principal} : \text{Amount}$$
>    $$10^3 : 11^3 \implies 1000 : 1331$$
> 4. Here, if Principal $= 1000$, then Amount $= 1331$, and **$\text{CI} = 1331 - 1000 = 331$** units.
> 5. Match with real values:
>    * $1000\text{ units} = \text{₹}10,000 \implies 1\text{ unit} = \text{₹}10$
>    * $\text{CI} = 331\text{ units} \times 10 = \mathbf{₹3310}$. (Solved without long formulas!)

---

### B. Difference Between CI and SI (Extremely Common Question)
Many questions ask for the difference between CI and SI for 2 or 3 years.

* **For 2 Years:**
  $$\text{CI} - \text{SI} = P \left( \frac{R}{100} \right)^2$$
* **For 3 Years:**
  $$\text{CI} - \text{SI} = P \left( \frac{R}{100} \right)^2 \left( \frac{300 + R}{100} \right)$$

> **Example:** The difference between CI and SI on a certain sum at $10\%$ per annum for $2\text{ years}$ is ₹$150$. Find the sum.
> * Given: $CI - SI = 150$, $R = 10$
> * $$150 = P \left( \frac{10}{100} \right)^2 = P \left( \frac{1}{10} \right)^2 = \frac{P}{100}$$
> * $$P = 150 \times 100 = \mathbf{₹15,000}$$
> * **Answer:** The sum is **₹15,000**.

---

### C. The "$n$-times" Multiplier Rule (CI)
If a sum of money becomes $x$ times of itself in $T$ years under Compound Interest:
* It will become **$x^y$ times** in **$y \times T$ years**.

> **Example:** A sum of money placed at compound interest doubles itself in $5\text{ years}$. In how many years will it become $8\text{ times}$ of itself?
> * Doubles ($x = 2$) in $T = 5$ years.
> * We want it to become 8 times. Write 8 in terms of power of 2: $8 = 2^3 \implies y = 3$.
> * Time taken $= y \times T = 3 \times 5 = \mathbf{15\text{ years}}$.

---

## 3. Solved Practice Questions

### Question 1 (Fractional Years - UPSC CSAT)
Find the compound interest on ₹$2000$ at $10\%$ per annum for $2\frac{1}{2}\text{ years}$.
* **Solution:**
  * For the first 2 full years, the rate is $10\%$ per annum.
  * For the remaining $\frac{1}{2}$ year, the rate is halved $= \frac{10}{2} = 5\%$.
  * Using equivalent fractions:
    * Year 1 ($10\%$): $10 \rightarrow 11$
    * Year 2 ($10\%$): $10 \rightarrow 11$
    * Half Year ($5\%$): $20 \rightarrow 21$
  * Multiply:
    * Total Principal $= 10 \times 10 \times 20 = 2000$ units.
    * Total Amount $= 11 \times 11 \times 21 = 121 \times 21 = 2541$ units.
  * Since our units match the Principal (₹2000), the interest is:
    * $\text{CI} = 2541 - 2000 = \mathbf{₹541}$.
