const fs = require('fs');
const path = require('path');

const template = (title) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EduPlay 365 - ${title}</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <nav class="sidebar">
        <div class="sidebar-header">
            <div class="logo">
                <i class="fas fa-gamepad"></i>
                <span>EduPlay 365</span>
            </div>
            <ul class="nav-links">
                <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
                <li><a href="login.html"><i class="fas fa-sign-in-alt"></i> Login</a></li>
                <li><a href="settings.html"><i class="fas fa-cog"></i> Settings</a></li>
                <li><a href="help.html"><i class="fas fa-question-circle"></i> Help</a></li>
            </ul>
        </div>
    </nav>

    <main class="main-content">
        <header>
            <div class="menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
            <div class="page-title">
                <h1>${title}</h1>
            </div>
        </header>
        <div style="text-align: center; margin-top: 5rem; color: var(--text-muted);">
            <i class="fas fa-tools" style="font-size: 3rem; margin-bottom: 1rem;"></i>
            <p>This page is under construction.</p>
        </div>
    </main>
    <script src="script.js"></script>
</body>
</html>`;

const pages = [
    { file: 'settings.html', title: 'Settings' },
    { file: 'help.html', title: 'Help Center' },
    { file: 'game-1.html', title: 'Math Blaster' },
    { file: 'game-2.html', title: 'Science Lab' },
    { file: 'game-3.html', title: 'Geography Quiz' },
    { file: 'game-4.html', title: 'Literature Quest' },
    { file: 'game-5.html', title: 'Logic Puzzles' }
];

pages.forEach(page => {
    fs.writeFileSync(path.join(process.cwd(), page.file), template(page.title));
    console.log(`Created ${page.file}`);
});
