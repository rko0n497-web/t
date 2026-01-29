// حالة اللعبة
const gameState = {
    currentScreen: 'login',
    playerName: '',
    gameCode: '',
    isHost: false,
    players: [],
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    timer: null,
    timeLeft: 10,
    selectedAnswer: null,
    leaderboard: []
};

// عينة أسئلة (يمكن استبدالها بملف JSON أو قاعدة بيانات)
const sampleQuestions = [
    {
        question: "ما هي عاصمة المملكة العربية السعودية؟",
        answers: ["الرياض", "جدة", "مكة", "الدمام"],
        correct: 0
    },
    {
        question: "كم عدد أيام السنة الكبيسة؟",
        answers: ["365", "366", "364", "367"],
        correct: 1
    },
    {
        question: "ما هو أطول نهر في العالم؟",
        answers: ["نهر النيل", "نهر الأمازون", "نهر المسيسيبي", "نهر اليانغتسي"],
        correct: 0
    },
    {
        question: "ما هو الكوكب الأحمر؟",
        answers: ["المريخ", "الزهرة", "المشتري", "زحل"],
        correct: 0
    },
    {
        question: "من هو مؤلف كتاب 'الأيام'؟",
        answers: ["طه حسين", "نجيب محفوظ", "توفيق الحكيم", "عباس العقاد"],
        correct: 0
    },
{
  question: "ما هو الكوكب الأقرب إلى الشمس؟",
  answers: ["الزئبق", "الزهرة", "المريخ", "الأرض"],
  correct: 0
},
{
  question: "في أي دولة تقع مدينة البندقية؟",
  answers: ["إيطاليا", "فرنسا", "إسبانيا", "اليونان"],
  correct: 0
},
{
  question: "ما هي عاصمة اليابان؟",
  answers: ["طوكيو", "أوساكا", "كيوتو", "هيروشيما"],
  correct: 0
},
{
  question: "من هو مؤلف مسرحية 'الزير سالم'؟",
  answers: ["محمود درويش", "سعد الله ونوس", "توفيق الحكيم", "علي أحمد باكثير"],
  correct: 1
},
{
  question: "ما هو الحيوان الأسرع على الأرض؟",
  answers: ["الفهد", "النمر", "الغزال", "الأسد"],
  correct: 0
},
{
  question: "كم عدد أوتار العود؟",
  answers: ["5 أوتار", "6 أوتار", "7 أوتار", "8 أوتار"],
  correct: 1
},
{
  question: "من هو أول رائد فضاء عربي؟",
  answers: ["سلطان بن سلمان", "محمد فارس", "عبد الحكيم العيادي", "علي ناصر"],
  correct: 0
},
{
  question: "ما هي أكبر دولة في العالم من حيث المساحة؟",
  answers: ["روسيا", "كندا", "الصين", "الولايات المتحدة"],
  correct: 0
},
{
  question: "من هو مكتشف الدورة الدموية؟",
  answers: ["ابن النفيس", "ابن سينا", "الرازي", "ابن الهيثم"],
  correct: 0
},
{
  question: "ما هي العملة الرسمية في ألمانيا؟",
  answers: ["اليورو", "الجنيه", "الدولار", "الفرنك"],
  correct: 0
},
{
  question: "من هو صاحب لوحة 'الموناليزا'؟",
  answers: ["ليوناردو دافنشي", "فان جوخ", "بيكاسو", "ميكلانجيلو"],
  correct: 0
},
{
  question: "ما هو أطول جسر بحري في العالم؟",
  answers: ["جسر هونغ كونغ", "جسر الملك فهد", "جسر الصداقة", "جسر المسيلة"],
  correct: 0
},
{
  question: "من هو مؤلف مسرحية 'مدرسة المشاغبين'؟",
  answers: ["علي سالم", "لطفي الخولي", "سعد الدين وهبة", "نعمان عاشور"],
  correct: 2
},
{
  question: "ما هو عدد أيام شهر فبراير في السنة الكبيسة؟",
  answers: ["28", "29", "30", "31"],
  correct: 1
},
{
  question: "من هو مخترع التلفزيون؟",
  answers: ["جون لوجي بيرد", "غراهام بيل", "توماس إديسون", "نيكولا تسلا"],
  correct: 0
},
{
  question: "ما هي عاصمة الأرجنتين؟",
  answers: ["بوينس آيرس", "برازيليا", "ليما", "سانتياغو"],
  correct: 0
},
{
  question: "من هو مؤلف كتاب 'كليلة ودمنة'؟",
  answers: ["ابن المقفع", "الجاحظ", "ابن خلدون", "أبو حيان"],
  correct: 0
},
{
  question: "ما هي أكبر المحيطات في العالم؟",
  answers: ["المحيط الهادئ", "المحيط الأطلسي", "المحيط الهندي", "المحيط المتجمد الشمالي"],
  correct: 0
},
{
  question: "من هو أول خليفة عباسي؟",
  answers: ["أبو العباس السفاح", "المنصور", "هارون الرشيد", "المأمون"],
  correct: 0
},
{
  question: "ما هو الحيوان الوطني في الصين؟",
  answers: ["الباندا", "النمر", "التنين", "الفيل"],
  correct: 0
},
{
  question: "من هو مؤلف 'ألف ليلة وليلة'؟",
  answers: ["مجهول", "ابن بطوطة", "الهمذاني", "الجاحظ"],
  correct: 0
},
{
  question: "ما هي أكبر صحاري العالم؟",
  answers: ["الصحراء الكبرى", "صحراء غوبي", "صحراء الربع الخالي", "صحراء أتاكاما"],
  correct: 0
},
{
  question: "من هو مخترع المصباح الكهربائي؟",
  answers: ["توماس إديسون", "نيكولا تسلا", "ألكسندر غراهام بيل", "مايكل فاراداي"],
  correct: 0
},
{
  question: "ما هي عاصمة كندا؟",
  answers: ["أوتاوا", "تورونتو", "فانكوفر", "مونتريال"],
  correct: 0
},
{
  question: "من هو مؤلف كتاب 'المنتظم في التاريخ'؟",
  answers: ["ابن الجوزي", "الطبري", "المسعودي", "ابن الأثير"],
  correct: 0
},
{
  question: "ما هو أطول نهر في إفريقيا؟",
  answers: ["نهر النيل", "نهر الكونغو", "نهر النيجر", "نهر الزمبيزي"],
  correct: 0
},
{
  question: "من هو مؤسس الدولة الأموية في الأندلس؟",
  answers: ["عبد الرحمن الداخل", "هشام بن عبد الملك", "الوليد بن عبد الملك", "سليمان بن عبد الملك"],
  correct: 0
},
{
  question: "ما هي لغة البرازيل الرسمية؟",
  answers: ["البرتغالية", "الإسبانية", "الإنجليزية", "الفرنسية"],
  correct: 0
},
{
  question: "من هو مؤلف كتاب 'تفسير الأحلام'؟",
  answers: ["سيغموند فرويد", "كارل يونغ", "ألفريد أدلر", "إريك فروم"],
  correct: 0
},
{
  question: "ما هي أعلى قمة في العالم؟",
  answers: ["إفرست", "كي 2", "كانغشينجونغا", "لوتسي"],
  correct: 0
},
{
  question: "من هو أول من صعد إلى القمر؟",
  answers: ["نيل أرمسترونغ", "باز ألدرين", "يوري غاغارين", "جون غلين"],
  correct: 0
},
{
  question: "ما هي عاصمة أستراليا؟",
  answers: ["كانبرا", "سيدني", "ملبورن", "بريزبن"],
  correct: 0
},
{
  question: "من هو مؤلف كتاب 'حي بن يقظان'؟",
  answers: ["ابن طفيل", "ابن سينا", "ابن رشد", "الفارابي"],
  correct: 0
},
{
  question: "ما هو أسرع حيوان بحري؟",
  answers: ["سمكة الشراع", "الدلفين", "الحوت القاتل", "القرش"],
  correct: 0
},
{
  question: "من هو مؤسس علم الجبر؟",
  answers: ["الخوارزمي", "ابن الهيثم", "البيروني", "الكندي"],
  correct: 0
},
{
  question: "ما هي العملة الرسمية في الهند؟",
  answers: ["الروبية", "الدينار", "الين", "البات"],
  correct: 0
},
{
  question: "من هو مؤلف مسرحية 'بغداد الأزل بين الجد والهزل'?",
  answers: ["مارون النقاش", "أحمد شوقي", "يعقوب صنوع", "إبراهيم رمزي"],
  correct: 0
},
{
  question: "ما هو عدد قارات العالم؟",
  answers: ["7", "6", "5", "8"],
  correct: 0
},
{
  question: "من هو مخترع الطائرة؟",
  answers: ["الأخوان رايت", "ألبرتو سانتوس دومون", "كليمنت آدر", "هيرام ماكسي"],
  correct: 0
},
{
  question: "ما هي عاصمة مصر؟",
  answers: ["القاهرة", "الإسكندرية", "الجيزة", "الأقصر"],
  correct: 0
},
{
  question: "من هو مؤلف كتاب 'مقدمة ابن خلدون'؟",
  answers: ["ابن خلدون", "المقريزي", "القلقشندي", "النويري"],
  correct: 0
},
{
  question: "ما هو أكبر بحر في العالم؟",
  answers: ["بحر الفلبين", "بحر العرب", "بحر الصين الجنوبي", "بحر المرجان"],
  correct: 0
},
{
  question: "من هو أول من فكر ببناء السد العالي؟",
  answers: ["الحسن بن الهيثم", "ابن بطوطة", "الخازن", "البتاني"],
  correct: 0
},
{
  question: "ما هي اللغة الرسمية في النمسا؟",
  answers: ["الألمانية", "الفرنسية", "الإيطالية", "الإنجليزية"],
  correct: 0
},
{
  question: "من هو مؤلف ديوان 'أغاني الحياة'؟",
  answers: ["مصطفى صادق الرافعي", "إيليا أبو ماضي", "أحمد شوقي", "خليل مطران"],
  correct: 1
},
{
  question: "ما هو عدد أيام السنة الهجرية؟",
  answers: ["354", "355", "365", "366"],
  correct: 0
},
{
  question: "من هو مكتشف أمريكا؟",
  answers: ["كريستوفر كولومبوس", "أميريغو فسبوتشي", "فاسكو دا غاما", "ماجلان"],
  correct: 0
},
{
  question: "ما هي عاصمة كوريا الجنوبية؟",
  answers: ["سيول", "بوسان", "دايجو", "إنتشون"],
  correct: 0
},
{
  question: "من هو مؤلف كتاب 'فلسفة الفن'؟",
  answers: ["مصطفى عبد الرازق", "طه حسين", "زكي نجيب محمود", "أحمد أمين"],
  correct: 2
},
{
  question: "ما هو أعمق محيط في العالم؟",
  answers: ["المحيط الهادئ", "المحيط الأطلسي", "المحيط الهندي", "المحيط المتجمد الشمالي"],
  correct: 0
},
{
  question: "من هو أول من صنع التلسكوب؟",
  answers: ["غاليليو غاليلي", "يوهانس كيبلر", "هانز ليبرشي", "إسحاق نيوتن"],
  correct: 0
},
{
  question: "ما هي عاصمة المغرب؟",
  answers: ["الرباط", "الدار البيضاء", "مراكش", "فاس"],
  correct: 0
},
{
  question: "من هو مؤلف كتاب 'الأمير'؟",
  answers: ["ميكيافيللي", "جان جاك روسو", "فولتير", "مونتسكيو"],
  correct: 0
},
{
  question: "ما هو أكبر خليج في العالم؟",
  answers: ["خليج المكسيك", "خليج البنغال", "خليج هدسون", "خليج عمان"],
  correct: 0
},
{
  question: "من هو مؤسس علم النفس الحديث؟",
  answers: ["فيلهلم فونت", "سيغموند فرويد", "إيفان بافلوف", "ب. ف. سكينر"],
  correct: 0
},
{
  question: "ما هي العملة الرسمية في تركيا؟",
  answers: ["الليرة التركية", "اليورو", "الدولار", "الجنيه"],
  correct: 0
},
{
  question: "من هو مؤلف مسرحية 'سليمان الحلبي'؟",
  answers: ["محمد الماغوط", "سعد الله ونوس", "ممدوح عدوان", "عز الدين المدني"],
  correct: 2
},
{
  question: "ما هو عدد عضلات جسم الإنسان؟",
  answers: ["حوالي 650", "حوالي 450", "حوالي 850", "حوالي 250"],
  correct: 0
},
{
  question: "من هو مخترع الهاتف؟",
  answers: ["ألكسندر غراهام بيل", "توماس إديسون", "نيكولا تسلا", "غولييلمو ماركوني"],
  correct: 0
},
{
  question: "ما هي عاصمة إندونيسيا؟",
  answers: ["جاكرتا", "بالي", "سورابايا", "باندونغ"],
  correct: 0
}
];

// تهيئة اللعبة
document.addEventListener('DOMContentLoaded', function() {
    // تعيين معالجات الأحداث
    document.getElementById('join-game').addEventListener('click', joinGame);
    document.getElementById('create-game').addEventListener('click', createGame);
    document.getElementById('copy-code').addEventListener('click', copyGameCode);
    document.getElementById('start-game').addEventListener('click', startGame);
    document.getElementById('next-question').addEventListener('click', nextQuestion);
    document.getElementById('play-again').addEventListener('click', playAgain);
    document.getElementById('new-game').addEventListener('click', newGame);
    
    // معالجات أحدادث الإجابات
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectAnswer(parseInt(this.dataset.index));
        });
    });
    
    // تحميل الأسئلة
    loadQuestions();
});

// تحميل الأسئلة
function loadQuestions() {
    // يمكن تغيير هذا لتحميل الأسئلة من ملف JSON أو قاعدة بيانات
    gameState.questions = sampleQuestions;
    
    // تحديث عدد الأسئلة الكلي
    document.getElementById('total-questions').textContent = gameState.questions.length;
}

// الانضمام للعبة
function joinGame() {
    const playerName = document.getElementById('player-name').value.trim();
    const gameCode = document.getElementById('game-code').value.trim();
    
    if (!playerName || !gameCode) {
        alert('الرجاء إدخال اسم اللاعب وكود اللعبة');
        return;
    }
    
    gameState.playerName = playerName;
    gameState.gameCode = gameCode;
    gameState.isHost = false;
    
    // هنا في الواقع سيكون هناك اتصال بالسيرفر
    // لكننا سنستخدم محاكاة للتوضيح
    simulateJoinGame(playerName, gameCode);
}

// إنشاء لعبة جديدة
function createGame() {
    const playerName = document.getElementById('player-name').value.trim();
    
    if (!playerName) {
        alert('الرجاء إدخال اسم اللاعب');
        return;
    }
    
    gameState.playerName = playerName;
    gameState.gameCode = generateGameCode();
    gameState.isHost = true;
    
    // إضافة اللاعب المضيف
    gameState.players = [{ name: playerName, score: 0, id: Date.now().toString() }];
    
    // الانتقال لشاشة الانتظار
    switchScreen('waiting');
    
    // عرض كود اللعبة
    document.getElementById('display-game-code').textContent = gameState.gameCode;
    updatePlayersList();
    
    // تفعيل زر البدء للمضيف
    document.getElementById('start-game').disabled = false;
}

// توليد كود لعبة عشوائي
function generateGameCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

// محاكاة الانضمام للعبة
function simulateJoinGame(playerName, gameCode) {
    // هنا في الواقع سيكون هناك اتصال بالسيرفر للتحقق من صحة الكود
    // لكننا سنفترض أن الكود صحيح للمحاكاة
    
    gameState.gameCode = gameCode;
    
    // محاكاة أن هناك لاعبين آخرين
    const fakePlayers = [
        { name: "أحمد", score: 0, id: "1" },
        { name: "سارة", score: 0, id: "2" },
        { name: "محمد", score: 0, id: "3" }
    ];
    
    // إضافة اللاعب الحالي
    gameState.players = [...fakePlayers, { name: playerName, score: 0, id: Date.now().toString() }];
    
    // الانتقال لشاشة الانتظار
    switchScreen('waiting');
    
    // عرض كود اللعبة
    document.getElementById('display-game-code').textContent = gameState.gameCode;
    updatePlayersList();
}

// نسخ كود اللعبة
function copyGameCode() {
    const code = document.getElementById('display-game-code').textContent;
    navigator.clipboard.writeText(code)
        .then(() => {
            const btn = document.getElementById('copy-code');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> تم النسخ';
            btn.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
            }, 2000);
        })
        .catch(err => {
            console.error('فشل نسخ النص: ', err);
        });
}

// تحديث قائمة اللاعبين
function updatePlayersList() {
    const playersList = document.getElementById('players-list');
    const connectedPlayers = document.getElementById('connected-players');
    
    playersList.innerHTML = '';
    gameState.players.forEach(player => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-user"></i> ${player.name}`;
        playersList.appendChild(li);
    });
    
    connectedPlayers.textContent = gameState.players.length;
}

// بدء اللعبة
function startGame() {
    if (!gameState.isHost) return;
    
    // بدء أول سؤال
    gameState.currentQuestionIndex = 0;
    showQuestion();
}

// عرض السؤال
function showQuestion() {
    switchScreen('question');
    
    const question = gameState.questions[gameState.currentQuestionIndex];
    const questionNumber = gameState.currentQuestionIndex + 1;
    
    // تحديث معلومات السؤال
    document.getElementById('question-number').textContent = questionNumber;
    document.getElementById('question-text').textContent = question.question;
    
    // تحديث الإجابات
    question.answers.forEach((answer, index) => {
        const answerElement = document.getElementById(`answer-${index}`);
        const answerBtn = document.querySelector(`.answer-btn[data-index="${index}"]`);
        
        answerElement.textContent = answer;
        
        // إزالة أي تنسيقات سابقة
        answerBtn.classList.remove('correct', 'incorrect', 'selected');
        answerBtn.disabled = false;
    });
    
    // إعادة تعيين التايمر
    resetTimer();
    
    // تحديث عدد اللاعبين
    document.getElementById('total-players').textContent = gameState.players.length;
    document.getElementById('answered-count').textContent = 0;
    
    // إعادة تعيين الإجابة المختارة
    gameState.selectedAnswer = null;
    
    // بدء التايمر
    startTimer();
}

// إعادة تعيين التايمر
function resetTimer() {
    clearInterval(gameState.timer);
    gameState.timeLeft = 10;
    document.getElementById('timer').textContent = gameState.timeLeft;
    
    // إعادة تعيين التقدم
    const timerCircle = document.querySelector('.timer-circle');
    timerCircle.style.background = `conic-gradient(#ff5722 0%, #333 0%)`;
}

// بدء التايمر
function startTimer() {
    const timerElement = document.getElementById('timer');
    const timerCircle = document.querySelector('.timer-circle');
    
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        timerElement.textContent = gameState.timeLeft;
        
        // تحديث الدائرة
        const percentage = 100 - (gameState.timeLeft / 10 * 100);
        timerCircle.style.background = `conic-gradient(#ff5722 ${percentage}%, #333 ${percentage}%)`;
        
        // انتهى الوقت
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            showResults();
        }
    }, 1000);
}

// اختيار إجابة
function selectAnswer(answerIndex) {
    if (gameState.selectedAnswer !== null) return; // منع اختيار إجابة أخرى
    
    gameState.selectedAnswer = answerIndex;
    
    // تلوين الزر المختار
    const selectedBtn = document.querySelector(`.answer-btn[data-index="${answerIndex}"]`);
    selectedBtn.classList.add('selected');
    
    // تعطيل جميع الأزرار
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = true;
    });
    
    // محاكاة إجابات اللاعبين الآخرين
    simulateOtherAnswers();
}

// محاكاة إجابات اللاعبين الآخرين
function simulateOtherAnswers() {
    let answeredCount = 1; // اللاعب الحالي
    
    // تحديث عدد المجيبين
    const interval = setInterval(() => {
        answeredCount += Math.floor(Math.random() * 2) + 1;
        
        if (answeredCount > gameState.players.length) {
            answeredCount = gameState.players.length;
            clearInterval(interval);
        }
        
        document.getElementById('answered-count').textContent = answeredCount;
    }, 300);
}

// عرض النتائج
function showResults() {
    switchScreen('results');
    
    const question = gameState.questions[gameState.currentQuestionIndex];
    const correctAnswerText = question.answers[question.correct];
    
    // عرض الإجابة الصحيحة
    document.getElementById('correct-answer-text').textContent = correctAnswerText;
    
    // تحديث النقاط
    updateScores();
    
    // عرض لوحة المتصدرين
    updateLeaderboard();
    
    // إذا كان المضيف، تفعيل زر التالي
    if (gameState.isHost) {
        document.getElementById('next-question').style.display = 'block';
    } else {
        document.getElementById('next-question').style.display = 'none';
    }
}

// تحديث النقاط
function updateScores() {
    const question = gameState.questions[gameState.currentQuestionIndex];
    
    // تحديث نقاط اللاعب الحالي إذا أجاب بشكل صحيح
    if (gameState.selectedAnswer === question.correct) {
        // حساب النقاط بناء على السرعة
        const points = Math.max(100, gameState.timeLeft * 100);
        gameState.score += points;
        
        // البحث عن اللاعب الحالي في القائمة وتحديث نقاطه
        const playerIndex = gameState.players.findIndex(p => p.name === gameState.playerName);
        if (playerIndex !== -1) {
            gameState.players[playerIndex].score += points;
        }
    }
    
    // محاكاة تحديث نقاط اللاعبين الآخرين
    gameState.players.forEach(player => {
        if (player.name !== gameState.playerName) {
            // محاكاة أن 60% من اللاعبين الآخرين أجابوا بشكل صحيح
            if (Math.random() < 0.6) {
                player.score += Math.floor(Math.random() * 500) + 300;
            }
        }
    });
}

// تحديث لوحة المتصدرين
function updateLeaderboard() {
    // ترتيب اللاعبين حسب النقاط
    gameState.leaderboard = [...gameState.players].sort((a, b) => b.score - a.score);
    
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = '';
    
    gameState.leaderboard.forEach((player, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="player-rank">${index + 1}</span>
            <span class="player-name">${player.name}</span>
            <span class="player-score">${player.score} نقطة</span>
        `;
        leaderboardList.appendChild(li);
    });
}

// الانتقال للسؤال التالي
function nextQuestion() {
    gameState.currentQuestionIndex++;
    
    if (gameState.currentQuestionIndex < gameState.questions.length) {
        showQuestion();
    } else {
        showFinalResults();
    }
}

// عرض النتائج النهائية
function showFinalResults() {
    switchScreen('final');
    
    // عرض الفائز
    const winner = gameState.leaderboard[0];
    document.getElementById('winner-name').textContent = winner.name;
    
    // عرض الترتيب النهائي
    const finalLeaderboard = document.getElementById('final-leaderboard');
    finalLeaderboard.innerHTML = '';
    
    gameState.leaderboard.forEach((player, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${index + 1}. ${player.name}</span>
            <span>${player.score} نقطة</span>
        `;
        finalLeaderboard.appendChild(li);
    });
}

// اللعب مرة أخرى
function playAgain() {
    // إعادة تعيين النقاط
    gameState.players.forEach(player => {
        player.score = 0;
    });
    
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    
    if (gameState.isHost) {
        startGame();
    } else {
        // العودة لشاشة الانتظار
        switchScreen('waiting');
    }
}

// العودة للرئيسية
function newGame() {
    // إعادة تعيين حالة اللعبة
    gameState.currentScreen = 'login';
    gameState.playerName = '';
    gameState.gameCode = '';
    gameState.isHost = false;
    gameState.players = [];
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    
    // إعادة تعيين الحقول
    document.getElementById('player-name').value = '';
    document.getElementById('game-code').value = '';
    
    switchScreen('login');
}

// تغيير الشاشة
function switchScreen(screenName) {
    // إخفاء جميع الشاشات
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // إظهار الشاشة المطلوبة
    document.getElementById(`${screenName}-screen`).classList.add('active');
    gameState.currentScreen = screenName;
}