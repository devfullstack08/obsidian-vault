---
subject: Mathematics
topic: Simplification
status: draft
---
# Simplification

Simplification is heavily tested in SSC CGL, Bank, and other state exams. Success depends on speed and accuracy using order of operations, algebraic identities, and calculation tricks.

---

## 1. VBODMAS Rule

To solve mathematical expressions, always follow the order of **VBODMAS**:

| Letter | Operation          | Description                                                                       |
| :----- | :----------------- | :-------------------------------------------------------------------------------- |
| **V**  | **Vinculum (Bar)** | The line bracket drawn over numbers (e.g., $\overline{5 - 3}$). Solve this first. |
| **B**  | **Brackets**       | Solve in the order: Circular `()`, Curly `{}`, and Square `[]`.                   |
| **O**  | **Of**             | Represents multiplication, but has higher priority than Division.                 |
| **D**  | **Division**       | Division ($\div$)                                                                 |
| **M**  | **Multiplication** | Multiplication ($\times$)                                                         |
| **A**  | **Addition**       | Addition ($+$)                                                                    |
| **S**  | **Subtraction**    | Subtraction ($-$)                                                                 |

---

## 2. Key Algebraic Identities (Used for Quick Cancellation)
Many complex looking division questions are actually simple algebraic identities in disguise:

1. **Difference of Squares:**
   $$a^2 - b^2 = (a - b)(a + b)$$
2. **Sum & Difference of Cubes:**
   $$a^3 + b^3 = (a + b)(a^2 - ab + b^2) \implies \frac{a^3 + b^3}{a^2 - ab + b^2} = a + b$$
   $$a^3 - b^3 = (a - b)(a^2 + ab + b^2) \implies \frac{a^3 - b^3}{a^2 + ab + b^2} = a - b$$
3. **The Three-Variable Identity:**
   $$a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)$$
   * **Special Case:** If **$a + b + c = 0$**, then:
     $$a^3 + b^3 + c^3 = 3abc$$
     *(Very common question: e.g., $a = 30$, $b = -20$, $c = -10 \rightarrow a^3+b^3+c^3 = 3 \times 30 \times (-20) \times (-10) = 18000$).*

---

## 3. Exam Shortcuts & Calculation Tricks

### A. Ladder Fractions (Continuous Fractions)
To simplify a continuous fraction like:
$$1 + \frac{1}{1 + \frac{1}{1 + \frac{2}{3}}}$$

* **Shortcut Method:**
  1. Look at the last fraction: write the numerator and denominator side-by-side: `2, 3`.
  2. Count the number of addition steps (here, there are three "$1 +$").
  3. Add the last two numbers iteratively for each step:
     * Step 1: $2 + 3 = 5 \rightarrow$ list becomes: `2, 3, 5`
     * Step 2: $3 + 5 = 8 \rightarrow$ list becomes: `2, 3, 5, 8`
     * Step 3: $5 + 8 = 13 \rightarrow$ list becomes: `2, 3, 5, 8, 13`
  4. The final answer is the last number divided by the second-to-last number:
     $$\text{Answer} = \frac{13}{8}$$

---

### B. Unit Digit and Digital Sum Methods
* **Unit Digit Method:** When checking the options, verify only the last digit of the calculation to eliminate wrong options.
* **Digital Sum Method:** Add all the digits of a number until you get a single-digit sum. The digital sum of the LHS of an equation must equal the digital sum of the RHS. *(Note: Treat 9 as 0 in digital sum calculations).*

---

## 4. Solved Practice Questions

### Question 1 (Algebraic Simplification - SSC CGL)
Evaluate:
$$\frac{0.87 \times 0.87 \times 0.87 + 0.13 \times 0.13 \times 0.13}{0.87 \times 0.87 - 0.87 \times 0.13 + 0.13 \times 0.13}$$
* **Solution:**
  * Let $a = 0.87$ and $b = 0.13$.
  * The expression is in the form:
    $$\frac{a^3 + b^3}{a^2 - ab + b^2}$$
  * Using the identity, this simplifies directly to:
    $$a + b = 0.87 + 0.13 = \mathbf{1.0}$$
  * **Answer:** **$1$**. (Solved without doing any decimals multiplication!)

### Question 2 (VBODMAS Application)
Simplify: $20 - [5 + \{8 \div (4 - \overline{3 - 1})\}]$
* **Solution:**
  * Step 1 (Vinculum): $\overline{3 - 1} = 2$.
  * Step 2 (Circular Bracket): $(4 - 2) = 2$.
  * Step 3 (Curly Bracket): $\{8 \div 2\} = 4$.
  * Step 4 (Square Bracket): $[5 + 4] = 9$.
  * Step 5: $20 - 9 = \mathbf{11}$.
  * **Answer:** **$11$**.
