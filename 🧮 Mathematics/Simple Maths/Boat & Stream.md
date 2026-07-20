---
subject: Mathematics
topic: Boat & Stream
status: draft
---
# Boat & Stream (હોડી અને પ્રવાહ)

Boat & Stream is a direct application of **Relative Speed** from Time, Speed & Distance, but with a unique twist: the medium (water) is also moving.

---

## 1. Core Terms & Formulas

Let:
* **$u$** = Speed of the boat (or swimmer) in **still water** (સ્થિર પાણીમાં ઝડપ).
* **$v$** = Speed of the **stream / current** (પ્રવાહની ઝડપ).

### A. Downstream Speed ($D$)
Moving in the direction of the water flow (along the stream). The water helps the boat, so their speeds are added.
$$D = u + v$$

### B. Upstream Speed ($U$)
Moving against the direction of the water flow (against the stream). The water opposes the boat, so the stream speed is subtracted.
$$U = u - v \quad (\text{Note: } u > v \text{ always})$$

### C. Calculating Still Water & Stream Speeds from $D$ and $U$:
If downstream speed ($D$) and upstream speed ($U$) are known:
* **Speed of boat in still water ($u$):**
  $$u = \frac{D + U}{2}$$
* **Speed of stream ($v$):**
  $$v = \frac{D - U}{2}$$

---

## 2. Exam Shortcuts & Tricks

### A. The Downstream-Upstream Time Ratio Shortcut
If a boat travels the **same distance** downstream and upstream:
* Let $t_1 = \text{Time taken downstream}$
* Let $t_2 = \text{Time taken upstream}$
* The relationship between the speed of the boat ($u$) and the speed of the stream ($v$) is:

$$\frac{\text{Speed of Boat } (u)}{\text{Speed of Stream } (v)} = \frac{t_2 + t_1}{t_2 - t_1}$$

> **Example:** A boat takes double the time to go upstream than to go downstream for the same distance. If the speed of the stream is $3\text{ km/h}$, find the speed of the boat in still water.
> * Here, $t_2 = 2 \times t_1 \implies \frac{t_2}{t_1} = \frac{2}{1}$.
> * Speed of stream $v = 3$.
> * Using the formula:
>   $$\frac{u}{3} = \frac{2 + 1}{2 - 1} = \frac{3}{1}$$
>   $$u = 3 \times 3 = \mathbf{9\text{ km/h}}$$
> * **Answer:** Speed of boat in still water is **$9\text{ km/h}$**. (Solved in seconds!)

---

## 3. Solved Practice Questions

### Question 1 (Basic u and v Calculation - UPSC CSAT / PSI)
A man can row downstream at $12\text{ km/h}$ and upstream at $8\text{ km/h}$. Find the speed of the man in still water and the speed of the current.
* **Solution:**
  * Downstream speed ($D$) $= 12\text{ km/h}$
  * Upstream speed ($U$) $= 8\text{ km/h}$
  * Speed in still water:
    $$u = \frac{12 + 8}{2} = \frac{20}{2} = \mathbf{10\text{ km/h}}$$
  * Speed of the current:
    $$v = \frac{12 - 8}{2} = \frac{4}{2} = \mathbf{2\text{ km/h}}$$

### Question 2 (Total Journey Time)
A motorboat’s speed in still water is $15\text{ km/h}$, and the speed of the current is $3\text{ km/h}$. The boat travels $36\text{ km}$ downstream and returns to the starting point. Find the total time taken for the round trip.
* **Solution:**
  * Speed of boat in still water ($u$) $= 15\text{ km/h}$
  * Speed of stream ($v$) $= 3\text{ km/h}$
  * Downstream speed ($D$) $= u + v = 15 + 3 = 18\text{ km/h}$.
  * Upstream speed ($U$) $= u - v = 15 - 3 = 12\text{ km/h}$.
  * Time taken downstream:
    $$T_{\text{down}} = \frac{\text{Distance}}{D} = \frac{36}{18} = 2\text{ hours}$$
  * Time taken upstream:
    $$T_{\text{up}} = \frac{\text{Distance}}{U} = \frac{36}{12} = 3\text{ hours}$$
  * Total Round-Trip Time $= 2 + 3 = \mathbf{5\text{ hours}}$.
