const prayerPoints = {
    career: [
        "Ask for wisdom to excel in your job",
        "Ask for integrity in all your dealingsPray for divine opportunities for promotion",
        "Pray for a positive attitude at work",
        "Ask for creativity and innovation in your tasks",
        "Pray for good relationships with colleagues",
        "Ask for God’s guidance in career decisions"
        ],

    family: [
        "Pray for unity and love in your family.",
        "Ask for God's protection over your family.",
        "Pray for peace and harmony in your home.",
        "Ask for wisdom in raising your children.",
        "Pray for healing in any broken relationships within your family."
    ],
    relationships: [
        "Pray for healthy and God-centered relationships.",
        "Ask for wisdom in choosing the right friends.",
        "Pray for reconciliation in strained relationships.",
        "Ask for patience and understanding in your relationships.",
        "Pray for God's guidance in your friendships."
    ],
    church: [
        "Pray for your pastor and church leaders.",
        "Ask for growth and expansion in your church.",
        "Pray for unity among church members.",
        "Ask for God's anointing on your ministry.",
        "Pray for souls to be saved in your community."
    ],
    parents: [
        "Pray for your parents' health and well-being.",
        "Ask for wisdom and strength for your parents.",
        "Pray for God's provision in your parents' lives.",
        "Ask for a deeper relationship with your parents.",
        "Pray for God's protection over your parents."
    ],
    siblings: [
        "Pray for your siblings' success and happiness.",
        "Ask for God's guidance in your siblings' lives.",
        "Pray for unity and love among your siblings.",
        "Ask for healing in any conflicts with your siblings.",
        "Pray for God's protection over your siblings."
    ],
    "extended-family": [
        "Pray for your extended family's well-being.",
        "Ask for unity and love among your extended family.",
        "Pray for God's provision in their lives.",
        "Ask for healing in any broken relationships.",
        "Pray for God's protection over your extended family."
    ]
};

const prayerPointElement = document.getElementById('prayer-point');
const newPrayerButton = document.getElementById('new-prayer');
const categorySelect = document.getElementById('category');

function getRandomPrayerPoint(category) {
    const points = prayerPoints[category];
    const randomIndex = Math.floor(Math.random() * points.length);
    return points[randomIndex];
}

function displayPrayerPoint() {
    const selectedCategory = categorySelect.value;
    prayerPointElement.textContent = getRandomPrayerPoint(selectedCategory);
}

// Display a prayer point when the page loads
displayPrayerPoint();

// Add event listener to the button to display a new prayer point
newPrayerButton.addEventListener('click', displayPrayerPoint);