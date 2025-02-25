document.addEventListener('DOMContentLoaded', () => {
    const homePage = document.getElementById('homePage');
    const gamesPage = document.getElementById('gamesPage');
    const appsPage = document.getElementById('appsPage');
    const creditsModal = document.getElementById('creditsModal');
    const closeModal = document.querySelector('.close');

    document.getElementById('home').addEventListener('click', () => {
        showPage(homePage);
    });

    document.getElementById('games').addEventListener('click', () => {
        showPage(gamesPage);
    });

    document.getElementById('apps').addEventListener('click', () => {
        showPage(appsPage);
    });

    document.getElementById('credits').addEventListener('click', () => {
        creditsModal.style.display = 'flex'; // Show modal
    });

    closeModal.addEventListener('click', () => {
        creditsModal.style.display = 'none'; // Hide modal when close button is clicked
    });

    function showPage(page) {
        homePage.classList.add('hidden');
        gamesPage.classList.add('hidden');
        appsPage.classList.add('hidden');
        creditsModal.style.display = 'none'; // Ensure credits modal is closed
        page.classList.remove('hidden');
    }

    // Make game buttons open links
    document.querySelectorAll('#gamesPage .game button').forEach((button, index) => {
        const gameLinks = [
            "https://flappybird.io/",
            "https://play.google.com/store/apps/details?id=com.archery.game",
            "https://stackgame.io/",
            "https://zombiehordegame.com/",
            "https://ponggame.io/",
            "https://rollthedice.online/"
        ];
        button.addEventListener('click', () => {
            window.open(gameLinks[index], "_blank");
        });
    });

    // Make the app button open a link
    document.querySelector('#appsPage .game button').addEventListener('click', () => {
        window.open("https://your-app-link.com", "_blank");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.querySelector(".typing-effect");
    const texts = ["Richie's Hub", "Richie's Portal", "Richie's Toolbox", "Richie's Lair", "Richie's Domain", "Richie's Network"];
    let index = 0;
    let textIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];
        
        if (!isDeleting) {
            titleElement.innerHTML = currentText.substring(0, index) + `<span class="cursor">|</span>`;
            index++;
            if (index > currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1200); // Pause before deleting
                return;
            }
        } else {
            titleElement.innerHTML = currentText.substring(0, index) + `<span class="cursor">|</span>`;
            index--;
            if (index === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length; // Cycle through names
                setTimeout(typeEffect, 500); // Pause before retyping
                return;
            }
        }
        setTimeout(typeEffect, isDeleting ? 100 : 150); // Typing & deleting speed
    }

    typeEffect();
});
