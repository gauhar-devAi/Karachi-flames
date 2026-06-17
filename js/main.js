const tabBtns = document.querySelectorAll('.tab-btn');
const menuCards = document.querySelectorAll('.menu-card-wrap');

// Shuru mein baaki categories hide karo sirf starters dikhao
menuCards.forEach(card => {
  if (card.getAttribute('data-category') !== 'starters') {
    card.style.display = 'none';
  }
});

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Tamam buttons se active class remove karo
    tabBtns.forEach(b => b.classList.remove('active'));
    
    // Sirf clicked button par active class add karo
    btn.classList.add('active');

    const selectCategory = btn.getAttribute('data-category');

    menuCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');

      if (selectCategory === cardCategory) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});




// Bhai, bilkul fikar nahi karo. Yeh JavaScript shuru shuru mein sab ko mushkil lagti hai kyunke yeh dimaag ki tarah soch rahi hoti hai. Aaj isko itna aasan karke samjhenge ke aap zindagi bhar nahi bhoolenge.

// Is pure code ka sirf **aik maqsad** hai: *User jis button par click kare, usko sirf wahi khana dikhao aur baaki chupao.*

// Aayein isko **3 barik hisson (Steps)** mein tor kar aik aik word samajhte hain:

// ---

// ### Hisa 1: Chizon ko dhoondna (Variables)

// ```javascript
// const tabBtns = document.querySelectorAll('.tab-btn');
// const menuCards = document.querySelectorAll('.menu-card-wrap');

// ```

// * **`const`**: Iska matlab hai "Constant" (mushaqat). Yeh JavaScript ko batata hai ke hum aik aisi cheez (box) banane lage hain jiska naam baad mein tabdeel nahi hoga.
// * **`tabBtns` aur `menuCards**`: Yeh aapke diye huwe naye naam hain (kuch bhi rakh sakte the). Ek ka naam humne rakha buttons ke liye, ek ka cards ke liye.
// * **`document`**: Yeh aapki poori HTML file (webpage) hai. JavaScript jab bhi kisi cheez ko dhoondti hai, to wo `document` (yaani poore ghar) mein dhoondti hai.
// * **`.querySelectorAll()`**: Iska matlab hai **"Sab ko dhoond nikaalo"**.
// * `('.tab-btn')` ka matlab hai ke HTML mein jahan jahan `class="tab-btn"` likha hai, un sab buttons ko pakar kar ek lathi mein piro do.
// * `('.menu-card-wrap')` ka matlab hai ke saare khano ke cards wale divs ko pakar lo.



// ---

// ### Hisa 2: Page load hote hi khano ko chhupana

// ```javascript
// menuCards.forEach(card => {
//   if(card.getAttribute('data-category') !== 'starters') {
//     card.style.display = 'none';
//   }
// });

// ```

// * **`menuCards.forEach(...)`**: `forEach` ka matlab hai **"Har ek ke paas jao"**. Hum JavaScript ko keh rahe hain ke jitne bhi cards tumne dhoonde hain, un sab ke paas baari-baari jao.
// * **`card =>`**: Iska matlab hai ke is loop ke andar, hum jis aik card par khare hain, uska temporary naam humne **`card`** rakh diya hai.
// * **`if (...)`**: Yeh shart (condition) hai, yaani **"Agar aisa ho to..."**
// * **`card.getAttribute('data-category')`**: `getAttribute` ka matlab hai "khoobi check karo". Yeh check karta hai ke is card ke HTML ke andar `data-category` mein kya likha hai (jaise 'starters', 'main', ya 'desserts').
// * **`!== 'starters'`**: Is `!==` ka matlab hai **"Barabar NAHI hai"**.
// * *Puri line ka matlab:* Agar kisi card ki category **'starters' ke barabar NAHI hai** (yaani wo main ya dessert hai)...


// * **`card.style.display = 'none';`**: To us card ki CSS change karke `display: none` kar do, yaani usay screen se **chhupa do**.

// ---

// ### Hisa 3: Button par click karne ki logic

// Ab aate hain sab se mazedaar hissa par, jab user kisi button par click karta hai.

// ```javascript
// tabBtns.forEach(btn => {
//   btn.addEventListener('click', () => {

// ```

// * **`tabBtns.forEach(btn => ...)`**: Phir se `forEach` aaya, yaani teeno buttons (Starters, Main, Desserts) par nazar rakho aur har button ka temporary naam rakh do **`btn`**.
// * **`btn.addEventListener('click', () => { ... })`**: `addEventListener` ka matlab hai **"Kaan laga kar suno"**. Hum button ko keh rahe hain ke jab bhi tum par koi **'click'** kare, to foran active ho jao aur niche likha hua kaam shuru kar do.

// #### Click hone ke baad kya hota hai?

// ```javascript
// tabBtns.forEach(b => b.classList.remove('active'));
// btn.classList.remove('active'); // (Aapke code mein yahan add hoga)
// btn.classList.add('active');

// ```

// * **`tabBtns.forEach(b => b.classList.remove('active'))`**: Sab se pehle, baari-baari sab buttons ke paas jao aur unki `class="active"` ko **remove (khatam)** kar do, taake yellow color sab se hat jaye.
// * **`btn.classList.add('active')`**: Phir **`btn`** (yaani jis button par user ne click kiya tha), sirf us par `active` class **add (laga)** do taake wo yellow ho jaye.

// ```javascript
// const selectCategory = btn.getAttribute('data-category');

// ```

// * Humne naya variable banaya `selectCategory`. Isme humne save kar liya ke user ne jis button par click kiya hai uski apni category kya hai (jaise agar 'Main' par click kiya to isme **'main'** save ho jayega).

// ```javascript
// menuCards.forEach(card => {
//   const cardCategory = card.getAttribute('data-category');

// ```

// * Ab hum dubara saare khano ke cards (`menuCards`) ke paas baari-baari ja rahe hain aur check kar rahe hain ke har card ki apni category (`cardCategory`) kya hai.

// ```javascript
// if(selectCategory === cardCategory) {
//   card.style.display = '';
// } else {
//   card.style.display = 'none';
// }

// ```

// * **`if(selectCategory === cardCategory)`**: `===` ka matlab hai **"Bilkul barabar hai"**. Agar clicked button ki category aur card ki category aapas mein match kar jaye (jaise button bhi 'main' ho aur card bhi 'main' ho)...
// * **`card.style.display = '';`**: To us card ka display khali (`''`) kar do. Jab display khali chorhte hain, to card wapas **show** ho jata hai.
// * **`else { card.style.display = 'none'; }`**: `else` ka matlab hai **"Warna"**. Warna agar category match nahi karti (jaise button 'main' hai aur card 'starters' hai), to usay `display = 'none'` (yaani **chhupa**) do.

// ---

// ### Summary (Aasan lafzon mein)

// Yeh code bilkul ek security guard ki tarah kaam kar raha hai:

// 1. Shuru mein guard aata hai aur Starters ke ilawa sab ko chupne ka kehta hai.
// 2. Jab aap kisi button par click karte hain, to guard sab se pehle purana yellow color sab buttons se chinta hai aur naye button ko pehnata hai.
// 3. Phir wo check karta hai ke aapne kaunsa button dabaya, aur poori market mein ghoom kar sirf us category ke cards ko samne chorhta hai aur baaki sab ko dande maar kar chhupa deta hai!

// Umeed hai ab aapko aik aik word crystal clear ho gaya hoga. Agla kaunsa hissa samajhna hai?