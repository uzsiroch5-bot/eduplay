document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target) && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Add active class to current nav item
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
    // Language Support
    const translations = {
        'en': {
            'home': 'Home',
            'login': 'Login',
            'settings': 'Settings',
            'help': 'Help',
            'welcome': 'Welcome to EduPlay 365',
            'math_title': 'Math Blaster',
            'math_desc': 'Learn mathematics through exciting space adventures.',
            'science_title': 'Science Lab',
            'science_desc': 'Experiment with virtual chemistry and physics labs.',
            'geo_title': 'Geography Quiz',
            'geo_desc': 'Explore the world and test your knowledge of countries.',
            'lit_title': 'Literature Quest',
            'lit_desc': 'Dive into classic stories and improve reading skills.',
            'logic_title': 'Logic Puzzles',
            'logic_desc': 'Challenge your brain with complex riddles and puzzles.',
            'login_header': 'Login',
            'email_label': 'Email',
            'password_label': 'Password',
            'signin_btn': 'Sign In',
            'settings_header': 'Settings',
            'help_header': 'Help Center',
            'under_construction': 'This page is under construction.',
            'back_home': 'Back to Home',
            'help_about_title': 'What can this site do?',
            'help_about_p1': 'This website is designed to support preschool educational institutions and organize children\'s education more effectively through modern information technologies.',
            'help_about_p2': 'The platform collects various developmental, educational, and fun games for children, serving to increase their knowledge level, logical thinking, and activity. It also allows monitoring children\'s participation and task completion.',
            'help_about_p3': 'This website serves as a convenient and effective tool for educators to control and analyze the educational process, and for parents to monitor their children\'s development.',
            'help_contact_title': 'Contact',
            'help_tech_title': 'Technical Issues',
            'help_tech_desc': 'For bugs and errors',
            'help_game_title': 'Regarding Video Games',
            'help_game_desc': 'Suggestions and game functions',
            'help_footer_text': 'All requests will be reviewed as quickly as possible to resolve issues and further improve the website\'s operation.'
        },
        'uz': {
            'home': 'Bosh sahifa',
            'login': 'Kirish',
            'settings': 'Sozlamalar',
            'help': 'Yordam',
            'welcome': 'EduPlay 365 ga xush kelibsiz',
            'math_title': 'Matematik Blaster',
            'math_desc': 'Qiziqarli kosmik sarguzashtlar orqali matematika o\'rganing.',
            'science_title': 'Fan Laboratoriyasi',
            'science_desc': 'Virtual kimyo va fizika laboratoriyalarida tajriba o\'tkazing.',
            'geo_title': 'Geografiya Viktorinasi',
            'geo_desc': 'Dunyoni o\'rganing va davlatlar haqidagi bilimingizni sinab ko\'ring.',
            'lit_title': 'Adabiyot Quest',
            'lit_desc': 'Mumtoz hikoyalarga sho\'ng\'ing va o\'qish qobiliyatingizni oshiring.',
            'logic_title': 'Mantiqiy Jumboqlar',
            'logic_desc': 'Murakkab topishmoqlar va jumboqlar bilan miyangizni chiniqtiring.',
            'login_header': 'Kirish',
            'email_label': 'Elektron pochta',
            'password_label': 'Parol',
            'signin_btn': 'Kirish',
            'settings_header': 'Sozlamalar',
            'help_header': 'Yordam Markazi',
            'under_construction': 'Bu sahifa tayyorlanmoqda.',
            'back_home': 'Bosh sahifaga qaytish',
            'help_about_title': 'Bu sayt nima qila oladi?',
            'help_about_p1': 'Ushbu veb-sayt maktabgacha bo‘lgan ta’lim muassasalari faoliyatini qo‘llab-quvvatlash hamda bolalar ta’lim-tarbiyasini zamonaviy axborot texnologiyalari orqali yanada samarali tashkil etish maqsadida ishlab chiqilgan.',
            'help_about_p2': 'Platformada bolalar uchun mo‘ljallangan turli xil rivojlantiruvchi, ta’limiy va qiziqarli o‘yinlar jamlangan bo‘lib, ular orqali bolalarning bilim darajasi, mantiqiy fikrlashi hamda faolligini oshirishga xizmat qiladi. Shuningdek, sayt orqali bolalarning o‘yin jarayonida ishtiroki va topshiriqlarni bajarish holatini kuzatish imkoniyati mavjud.',
            'help_about_p3': 'Mazkur veb-sayt pedagoglar va tarbiyachilar uchun ta’lim jarayonini nazorat qilish va tahlil etishda, ota-onalar uchun esa farzandlarining rivojlanish jarayonini kuzatishda qulay va samarali vosita hisoblanadi.',
            'help_contact_title': 'Bog\'lanish',
            'help_tech_title': 'Texnik masalalar',
            'help_tech_desc': 'Nosozliklar va xatoliklar bo‘yicha',
            'help_game_title': 'Video o‘yinlar bo\'yicha',
            'help_game_desc': 'Takliflar va o\'yin funksiyalari',
            'help_footer_text': 'Barcha murojaatlar imkon qadar tezkor tarzda ko‘rib chiqilib, muammolarni bartaraf etish hamda veb-sayt faoliyatini yanada takomillashtirish choralari ko‘riladi.'
        },
        'ru': {
            'home': 'Главная',
            'login': 'Вход',
            'settings': 'Настройки',
            'help': 'Помощь',
            'welcome': 'Добро пожаловать в EduPlay 365',
            'math_title': 'Математический Бластер',
            'math_desc': 'Изучайте математику через увлекательные космические приключения.',
            'science_title': 'Научная Лаборатория',
            'science_desc': 'Экспериментируйте в виртуальных лабораториях химии и физики.',
            'geo_title': 'Географическая Викторина',
            'geo_desc': 'Исследуйте мир и проверьте свои знания о странах.',
            'lit_title': 'Литературный Квест',
            'lit_desc': 'Погрузитесь в классические истории и улучшите навыки чтения.',
            'logic_title': 'Логические Задачи',
            'logic_desc': 'Бросьте вызов своему мозгу сложными загадками и головоломками.',
            'login_header': 'Вход',
            'email_label': 'Эл. почта',
            'password_label': 'Пароль',
            'signin_btn': 'Войти',
            'settings_header': 'Настройки',
            'help_header': 'Центр Помощи',
            'under_construction': 'Эта страница в разработке.',
            'back_home': 'На главную',
            'help_about_title': 'Что может этот сайт?',
            'help_about_p1': 'Этот веб-сайт разработан для поддержки деятельности дошкольных образовательных учреждений и более эффективной организации образования детей с использованием современных информационных технологий.',
            'help_about_p2': 'Платформа содержит различные развивающие, образовательные и развлекательные игры для детей, помогающие повысить их уровень знаний, логическое мышление и активность. Также есть возможность отслеживать участие детей и выполнение заданий.',
            'help_about_p3': 'Этот веб-сайт служит удобным и эффективным инструментом для педагогов и воспитателей в контроле и анализе учебного процесса, а также для родителей в наблюдении за развитием их детей.',
            'help_contact_title': 'Связь',
            'help_tech_title': 'Технические вопросы',
            'help_tech_desc': 'По ошибкам и неисправностям',
            'help_game_title': 'По видеоиграм',
            'help_game_desc': 'Предложения и функции игр',
            'help_footer_text': 'Все обращения будут рассмотрены в кратчайшие сроки для устранения проблем и дальнейшего совершенствования работы веб-сайта.'
        }
    };

    const langSelect = document.getElementById('lang-select');

    function updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerText = translations[lang][key];
            }
        });
        localStorage.setItem('selectedLang', lang);
    }

    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
        });

        // Check local storage or default to en
        const savedLang = localStorage.getItem('selectedLang') || 'en';
        langSelect.value = savedLang;
        updateLanguage(savedLang);
    }
});
