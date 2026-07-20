---
subject: Mathematics
topic: Mixture & Alligation
status: draft
---
# Mixture & Alligation (મિશ્રણ)

Mixture & Alligation is a powerful method used to solve weighted average problems. Alligation can be applied to speed up calculations in Profit & Loss, Simple Interest, Average, and Ratio problems.

---

## 1. Core Rule of Alligation

Alligation is a rule that enables us to find the ratio in which two ingredients of given prices (or values) must be mixed to produce a mixture at a given mean price.

* Let the cost price of cheaper ingredient be $d$ (Cheaper).
* Let the cost price of dearer ingredient be $m$ (Dearer).
* Let the mean price of the mixture be $w$ (Mean).

### The Alligation Diagram:

```text
    Cheaper (d)                Dearer (m)
               \              /
                 Mean Price (w)
               /              \
        (m - w)      :         (w - d)
```

$$\frac{\text{Quantity of Cheaper}}{\text{Quantity of Dearer}} = \frac{m - w}{w - d}$$

---

## 2. Exam Shortcuts & Formulas

### A. The Replacement Formula (Pure Liquid Replacement)
Used when a certain quantity of liquid is repeatedly removed and replaced with another liquid (usually water).
* If a container contains $x$ liters of a pure liquid (e.g. milk/wine), and $y$ liters are withdrawn and replaced by water, and this process is repeated $n$ times:

$$\text{Quantity of Pure Liquid Left} = x \left( 1 - \frac{y}{x} \right)^n$$
$$\text{Ratio of Pure Liquid to Total Liquid} = \left( 1 - \frac{y}{x} \right)^n$$

> **Example:** A container contains $80\text{ liters}$ of pure milk. $8\text{ liters}$ of milk is replaced with water. This process is repeated 2 more times (total 3 times). How much pure milk is left?
> * Here, $x = 80$, $y = 8$, $n = 3$.
> * $$\text{Milk Left} = 80 \times \left( 1 - \frac{8}{80} \right)^3 = 80 \times \left( \frac{9}{10} \right)^3$$
> * $$\text{Milk Left} = 80 \times \frac{729}{1000} = \frac{5832}{100} = \mathbf{58.32\text{ liters}}$$
> * **Answer:** **$58.32\text{ liters}$** of pure milk remains.

---

## 3. Solved Practice Questions

### Question 1 (Ratio of Mixture - SSC CGL)
In what ratio must a grocer mix tea costing ₹$60\text{ per kg}$ and ₹$65\text{ per kg}$ so that by selling the mixture at ₹$68.20\text{ per kg}$, he may gain $10\%$?
* **Solution:**
  * First, calculate the cost price (Mean Price) of the mixture.
  * SP of mixture $= \text{₹}68.20$, Profit $= 10\%$.
  * Mean Price (CP) $= 68.20 \times \frac{100}{110} = \mathbf{₹62}$.
  * Now, apply Alligation:
    * Cheaper Price ($d$) $= 60$
    * Dearer Price ($m$) $= 65$
    * Mean Price ($w$) $= 62$
  * $$\frac{\text{Quantity of Cheaper}}{\text{Quantity of Dearer}} = \frac{65 - 62}{62 - 60} = \frac{3}{2}$$
  * **Answer:** The grocer must mix them in the ratio **$3:2$**.

### Question 2 (Alligation in Profit & Loss - UPSC CSAT)
A merchant has $1000\text{ kg}$ of sugar, part of which he sells at $8\%$ profit and the rest at $18\%$ profit. He gains $14\%$ on the whole. Find the quantity sold at $18\%$ profit.
* **Solution:**
  * Apply Alligation directly using the profit percentages:
    * Cheaper Profit ($d$) $= 8\%$
    * Dearer Profit ($m$) $= 18\%$
    * Mean Profit ($w$) $= 14\%$
  * Ratio of quantities $= (18 - 14) : (14 - 8) = 4 : 6 = 2 : 3$.
  * Quantity sold at $18\%$ profit $= 1000 \times \frac{3}{2+3} = 1000 \times \frac{3}{5} = \mathbf{600\text{ kg}}$.
  * **Answer:** **$600\text{ kg}$** was sold at $18\%$ profit.
