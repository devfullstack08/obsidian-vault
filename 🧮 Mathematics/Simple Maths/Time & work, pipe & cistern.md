---
subject: Mathematics
topic: Time & Work, Pipes & Cisterns
status: draft
---
# Time & Work, Pipes & Cisterns

This topic is highly scoring. While schools teach fraction-based methods, competitive exams require the **LCM Method**, which avoids fractions and allows you to solve questions mentally.

---

## 1. Core Formulas & Concepts

* **Basic Equation:**
  $$\text{Total Work} = \text{Time Taken} \times \text{Efficiency (Rate of Work)}$$
* **Inverse Relation:** Time and Efficiency are inversely proportional.
  $$\text{Efficiency} = \frac{1}{\text{Time}}$$
  * If the ratio of time taken by A and B is $3:4$, then the ratio of their efficiency is $4:3$.

---

## 2. Exam Shortcuts & Tricks

### A. The "LCM Method" (The Best Trick)
Instead of using $\frac{1}{A} + \frac{1}{B}$, assume the total work is the **LCM of the time taken by each person**.

> **Example:** A can complete a work in $10\text{ days}$ and B can do it in $15\text{ days}$. In how many days can they complete the work together?
> 1. Find LCM of 10 and 15 $\rightarrow$ **$30$** (This is our **Total Work** in units).
> 2. Find daily efficiencies (units/day):
>    * Efficiency of A $= \frac{30}{10} = 3\text{ units/day}$
>    * Efficiency of B $= \frac{30}{15} = 2\text{ units/day}$
> 3. Combined Efficiency of A + B $= 3 + 2 = 5\text{ units/day}$.
> 4. Time taken together $= \frac{\text{Total Work}}{\text{Combined Efficiency}} = \frac{30}{5} = \mathbf{6\text{ days}}$.

---

### B. The $MDH$ Formula (Chain Rule)
Used when a group of people is working under different conditions.

$$\frac{M_1 \times D_1 \times H_1 \times E_1}{W_1} = \frac{M_2 \times D_2 \times H_2 \times E_2}{W_2}$$

* Where:
  * $M =$ Number of men/workers
  * $D =$ Number of days
  * $H =$ Number of hours worked per day
  * $E =$ Efficiency of workers
  * $W =$ Work done (or quantity produced, or wages earned)

> **Example:** If $15\text{ men}$ working $8\text{ hours}$ a day can build a wall in $10\text{ days}$, how many days will it take for $12\text{ men}$ working $10\text{ hours}$ a day to build the same wall?
> * Here, $W_1 = W_2$ (same wall).
> * $15 \times 10 \times 8 = 12 \times D_2 \times 10$
> * $1200 = 120 \times D_2 \implies D_2 = \mathbf{10\text{ days}}$.

---

### C. Pipes and Cisterns (Inlet & Outlet Pipes)
Exactly the same as Time & Work, with one difference:
* **Inlet Pipe (Fills the tank):** Has **positive (+)** efficiency.
* **Outlet/Leakage Pipe (Empties the tank):** Has **negative (-)** efficiency.

> **Example:** Pipe A can fill a tank in $6\text{ hours}$, but due to a leak (Pipe B) at the bottom, it takes $8\text{ hours}$ to fill. In how many hours can the leak empty the full tank alone?
> 1. Find LCM of 6 and 8 $\rightarrow$ **$24\text{ units}$** (Total Capacity of the tank).
> 2. Find hourly efficiencies:
>    * Efficiency of A $= \frac{24}{6} = +4\text{ units/hour}$
>    * Combined Efficiency of A + Leak B $= \frac{24}{8} = +3\text{ units/hour}$
> 3. Find Leak B's efficiency:
>    * $\text{Efficiency of A} + \text{Efficiency of B} = 3$
>    * $4 + \text{Efficiency of B} = 3 \implies \text{Efficiency of B} = \mathbf{-1\text{ unit/hour}}$ (The negative sign confirms it empties the tank).
> 4. Time for Leak B to empty the tank $= \frac{\text{Total Capacity}}{\text{Leak Efficiency}} = \frac{24}{1} = \mathbf{24\text{ hours}}$.

---

## 3. Solved Practice Questions

### Question 1 (Alternating Days - SSC CGL / RBI Grade B)
A and B can do a work in 12 and 18 days respectively. If they work on alternate days, starting with A, in how many days will the work be completed?
* **Solution:**
  * LCM of 12 and 18 $= 36\text{ units}$ (Total Work).
  * Efficiency of A $= 3\text{ units/day}$, Efficiency of B $= 2\text{ units/day}$.
  * In a **2-day cycle** (Day 1: A, Day 2: B), work completed $= 3 + 2 = 5\text{ units}$.
  * Let's find how many full cycles fit into 36 units:
    * 7 cycles $= 7 \times 5 = 35\text{ units}$ completed in $14\text{ days}$ ($7 \times 2$).
  * Remaining work $= 36 - 35 = 1\text{ unit}$.
  * Now, it is A's turn (Day 15):
    * A's efficiency is 3 units/day, so A takes $\frac{1}{3}\text{ day}$ to complete the remaining 1 unit.
  * **Total Time** $= 14 + \frac{1}{3} = \mathbf{14\frac{1}{3}\text{ days}}$.
