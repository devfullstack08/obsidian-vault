---
subject: Mathematics
topic: Surds & Indices
status: draft
---
# Surds & Indices (ઘાત અને ઘાતાંક)

Surds and Indices are used to simplify expressions involving powers and roots. They are highly tested in Simplification and Algebra sections.

---

## 1. Laws of Indices

Indices refer to the powers to which a base is raised (e.g., in $a^n$, $n$ is the index).

1. **Product Rule:** $a^m \times a^n = a^{m+n}$
2. **Quotient Rule:** $\frac{a^m}{a^n} = a^{m-n}$
3. **Power of a Power Rule:** $(a^m)^n = a^{mn}$
4. **Product Power Rule:** $(ab)^n = a^n b^n$
5. **Quotient Power Rule:** $\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$
6. **Zero Exponent Rule:** $a^0 = 1 \quad (a \neq 0)$
7. **Negative Exponent Rule:** $a^{-n} = \frac{1}{a^n}$

---

## 2. Laws of Surds

Surds are irrational numbers that cannot be simplified into whole numbers or fractions (e.g., $\sqrt{2}, \sqrt[3]{5}$).

1. **Root Form:** $\sqrt[n]{a} = a^{1/n}$
2. **Product Rule:** $\sqrt[n]{ab} = \sqrt[n]{a} \times \sqrt[n]{b}$
3. **Quotient Rule:** $\sqrt[n]{\frac{a}{b}} = \frac{\sqrt[n]{a}}{\sqrt[n]{b}}$
4. **Self-Cancel Rule:** $(\sqrt[n]{a})^n = a$
5. **Nested Root Rule:** $\sqrt[m]{\sqrt[n]{a}} = \sqrt[mn]{a}$

---

## 3. Exam Shortcuts & Tricks

### A. Infinite Root Series Shortcuts (Highly Repeated in Exams)

#### Type 1: Multiplied to Infinity
If a number $x$ repeats under a square root to infinity:
$$\sqrt{x \sqrt{x \sqrt{x \dots \infty}}} = x$$
> **Example:** Find the value of $\sqrt{7 \sqrt{7 \sqrt{7 \dots \infty}}}$.
> * **Answer:** **$7$**. (Solved instantly!)

#### Type 2: Added to Infinity
If a number $x$ is added under a square root to infinity:
$$Y = \sqrt{x + \sqrt{x + \sqrt{x + \dots \infty}}}$$
* **Rule:** Factorize $x$ into two consecutive numbers: $x = n \times (n+1)$. 
* The answer is the **larger number $(n+1)$**.
> **Example:** Find the value of $\sqrt{12 + \sqrt{12 + \sqrt{12 + \dots \infty}}}$.
> * Factorize 12 into consecutive numbers: $12 = 3 \times 4$.
> * Since it is an addition ($+$), the answer is the larger factor.
> * **Answer:** **$4$**.

#### Type 3: Subtracted to Infinity
If a number $x$ is subtracted under a square root to infinity:
$$Y = \sqrt{x - \sqrt{x - \sqrt{x - \dots \infty}}}$$
* **Rule:** Factorize $x$ into two consecutive numbers: $x = n \times (n+1)$.
* The answer is the **smaller number $n$**.
> **Example:** Find the value of $\sqrt{30 - \sqrt{30 - \sqrt{30 - \dots \infty}}}$.
> * Factorize 30 into consecutive numbers: $30 = 5 \times 6$.
> * Since it is a subtraction ($-$), the answer is the smaller factor.
> * **Answer:** **$5$**.

---

### B. Comparing the Value of Surds
To find which surd is larger (e.g., comparing $\sqrt{2}$, $\sqrt[3]{3}$, and $\sqrt[4]{5}$):
1. Write them as fractions: $2^{1/2}$, $3^{1/3}$, $5^{1/4}$.
2. Find the **LCM of the denominators** of the fractional powers (LCM of 2, 3, and 4 is **$12$**).
3. Multiply the power of each surd by the LCM:
   * $2^{\frac{1}{2} \times 12} = 2^6 = \mathbf{64}$
   * $3^{\frac{1}{3} \times 12} = 3^4 = \mathbf{81}$
   * $5^{\frac{1}{4} \times 12} = 5^3 = \mathbf{125}$
4. Compare the final values: Since $125 > 81 > 64$, then **$\sqrt[4]{5} > \sqrt[3]{3} > \sqrt{2}$**.

---

## 4. Solved Practice Questions

### Question 1 (Nested Powers - SSC CGL)
If $3^{x-y} = 27$ and $3^{x+y} = 243$, find the value of $x$.
* **Solution:**
  * Express RHS with base 3:
    * $3^{x-y} = 27 = 3^3 \implies x - y = 3$ (Equation 1)
    * $3^{x+y} = 243 = 3^5 \implies x + y = 5$ (Equation 2)
  * Add the two equations:
    * $(x - y) + (x + y) = 3 + 5$
    * $2x = 8 \implies \mathbf{x = 4}$.
