---
subject: Mathematics
topic: Averages
status: draft
---
# Averages (સરેરાશ)

Average is a basic mathematical concept. In competitive exams, questions usually involve changes in average due to inclusion, exclusion, or replacement of values.

---

## 1. Core Formulas

* **Basic Equation:**
  $$\text{Average} = \frac{\text{Sum of all observations}}{\text{Total number of observations}}$$
  $$\text{Sum} = \text{Average} \times \text{Number of observations}$$

---

## 2. Standard Mathematical Series Shortcuts

* **Average of first $n$ natural numbers ($1, 2, 3 \dots n$):**
  $$\text{Average} = \frac{n + 1}{2}$$
* **Average of first $n$ even numbers ($2, 4, 6 \dots 2n$):**
  $$\text{Average} = n + 1$$
* **Average of first $n$ odd numbers ($1, 3, 5 \dots 2n-1$):**
  $$\text{Average} = n$$
* **Average of consecutive numbers (or Arithmetic Progression):**
  $$\text{Average} = \frac{\text{First Term} + \text{Last Term}}{2}$$
  * *Note:* For any consecutive series of numbers, the average is always the **middle term**.

---

## 3. Exam Shortcuts & Deviation Methods

### A. The Replacement Shortcut Formula
Used when one member leaves a group and a new member joins.
* If a person of weight $W_{\text{old}}$ is replaced by a new person of weight $W_{\text{new}}$, and the average of $N$ people changes by $x$:

$$W_{\text{new}} = W_{\text{old}} \pm (N \times x)$$

* *Note:* Use **plus (+)** if the average increases, and **minus (-)** if the average decreases.

> **Example:** The average weight of $10\text{ students}$ increases by $1.5\text{ kg}$ when one student weighing $40\text{ kg}$ is replaced by a new student. Find the weight of the new student.
> * Here, $N = 10$, $W_{\text{old}} = 40$, $x = +1.5$.
> * $$W_{\text{new}} = 40 + (10 \times 1.5) = 40 + 15 = \mathbf{55\text{ kg}}$$
> * **Answer:** Weight of the new student is **$55\text{ kg}$**. (Solved without calculating total sum!)

---

### B. Inclusion and Exclusion Shortcuts
* **Inclusion (New member added):**
  $$\text{New Member Value} = \text{New Average} + (\text{Old Count} \times \text{Increase in Average})$$
* **Exclusion (Member leaves):**
  $$\text{Left Member Value} = \text{Old Average} + (\text{New Count} \times \text{Decrease in Average})$$

---

## 4. Solved Practice Questions

### Question 1 (Consecutive Numbers - UPSC CSAT)
The average of 5 consecutive odd numbers is 25. Find the largest of these numbers.
* **Solution:**
  * For consecutive odd numbers, the average is the middle term.
  * Since there are 5 numbers, the 3rd number is the average $= 25$.
  * The numbers must be:
    * $21, 23, \mathbf{25}, 27, 29$
  * **Answer:** The largest number is **$29$**.

### Question 2 (Weighted Average - SSC CGL)
The average marks of 40 students in Section A is 60 and the average marks of 60 students in Section B is 70. Find the combined average marks of both sections.
* **Solution (Weighted Average):**
  * $$Average = \frac{n_1 A_1 + n_2 A_2}{n_1 + n_2}$$
  * Simplify the ratio of students to save calculation:
    * $n_1 : n_2 = 40 : 60 \implies 2 : 3$.
  * Use the simplified weights (2 and 3):
    * $$\text{Combined Average} = \frac{(2 \times 60) + (3 \times 70)}{2 + 3} = \frac{120 + 210}{5} = \frac{330}{5} = \mathbf{66}$$
  * **Answer:** Combined average is **$66$**.
