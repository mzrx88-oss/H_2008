const wait = (ms) => new Promise(r => setTimeout(r, ms));

async function checkPassword() {
    const input = document.getElementById('passwordField').value;
    if (input === "1102008") {
        loginSuccess(); // جمعت خطوات النجاح هنا لسهولة الاستدعاء
    } else {
        alert("كلمة المرور غلط يا قمر❣️!");
    }
}

// دالة النجاح اللي بتفتح الموقع
async function loginSuccess() {
    document.getElementById('login-page').style.display = 'none';
    const main = document.getElementById('main-content');
    main.classList.remove('hidden');
    
    initMatrix();
    await wait(500);
    runChatAlgorithm();
    
    updateLoveTimer();
    setInterval(updateLoveTimer, 1000);
}

// --- السطر اللي هيخلي الموقع يفتح لوحده لما يجيله أمر من الموقع الجديد ---
window.addEventListener('load', () => {
    if (window.location.hash === "#bypass") {
        loginSuccess(); 
    }
});
// ------------------------------------------------------------------

async function runChatAlgorithm() {
    const chatFlow = document.getElementById('chat-flow');
    const status = document.getElementById('algo-status');
    chatFlow.innerHTML = '';
    const messages = [
        { t: "جاري البحث عليكي وسط 4.09 مليار امرأة لكي تدخلي الي قلبي وتعمريه من وتكوني انتي سيده قلبي وملكه العالم 🥹♥️", side: "right" },
        { t: "⬇️", side: "center" },
        { t: "تم العثور على تطابق تقريبا للملكه التي تبحث عنها...✨", side: "left" },
        { t: "⬇️", side: "center" },
        { t: "الرجاء الانتظار انتي جمله جدااا ونادره وحقا البحث عليكي ليس من السهل ابدا 😞", side: "right" },
        { t: "----------------------------", side: "center" },
        { t: "هدوء | Hodoa <br> 1 أكتوبر 2008 <br> اخيرا بقى ظهرتي وجيتي للعالم أخير علشان اقابلك كنت واثق اني هلاقيكي يابت🥹♥️🫂", side: "left" },
        { t: "هنا انتي دخلتي قلبي وعقلي وخطفتيني بعيونك الحلوين يلا بقا تعالي يانور عيني نستكشف اكتر الي بعد كدا♥️", side: "right" }
    ];
    for (let msg of messages) {
        let div = document.createElement('div');
        div.className = msg.side === "center" ? "divider-msg" : `bubble ${msg.side}`;
        div.innerHTML = msg.t;
        chatFlow.appendChild(div);
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        await wait(3000);
    }
    status.innerHTML = "تم ايجاد حبيبه القلب مبروك";
    document.getElementById('explore-trigger').classList.remove('hidden');
}

document.getElementById('explore-btn').onclick = function() {
    const section = document.getElementById('eyes-section');
    section.classList.remove('hidden');
    setTimeout(() => { section.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
};

document.getElementById('dreams-btn').onclick = function() {
    const section = document.getElementById('dreams-section');
    section.classList.remove('hidden');
    setTimeout(() => { section.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
};

function initMatrix() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = 200;
    const letters = "01HODOALOVE10";
    const drops = Array(Math.floor(canvas.width / 10)).fill(1);
    function draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "#D4AF37"; ctx.font = "10px arial";
        drops.forEach((y, i) => {
            ctx.fillText(letters[Math.floor(Math.random()*letters.length)], i*10, y*10);
            if(y*10 > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        });
    }
    setInterval(draw, 33);
}

function updateLoveTimer() {
    const start = new Date("2025-06-15T00:00:00");
    const now = new Date();
    const diff = now - start;
    const days = Math.floor(diff / 86400000);
    const years = Math.floor(days / 365);
    const remainingDays = days % 365;
    const timerEl = document.getElementById('love-timer');
    if(timerEl) {
        timerEl.innerHTML = `
            <div class="timer-box"><span>${years}</span>سنين</div>
            <div class="timer-box"><span>${remainingDays}</span>أيام</div>
            <div class="timer-box"><span>${Math.floor((diff/3600000)%24)}</span>ساعات</div>
            <div class="timer-box"><span>${Math.floor((diff/60000)%60)}</span>دقائق</div>
            <div class="timer-box"><span>${Math.floor((diff/1000)%60)}</span>ثواني</div>
        `;
    }
}
