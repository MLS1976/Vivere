// Tabs
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const tab = button.dataset.tab;
    tabContents.forEach(content => {
      content.classList.remove('active');
      if (content.id === tab) content.classList.add('active');
    });
  });
});

// Planner Tab - To-Do List
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

addTodoBtn.addEventListener('click', () => {
  const text = todoInput.value.trim();
  if (text) {
    const li = document.createElement('li');
    li.innerHTML = `✅ ${text}`;
    todoList.appendChild(li);
    todoInput.value = '';
  }
});

// Meals Tab - Meal Idea and Grocery List
const fridgeInput = document.getElementById('fridge-input');
const getMealBtn = document.getElementById('get-meal');
const mealResult = document.getElementById('meal-result');
const generateListBtn = document.getElementById('generate-list');
const groceryList = document.getElementById('grocery-list');

const meals = ["Spaghetti", "Tacos", "Salad", "Omelette", "Stir Fry", "Chicken & Rice", "Smoothie Bowl"];

getMealBtn.addEventListener('click', () => {
  const meal = meals[Math.floor(Math.random() * meals.length)];
  mealResult.textContent = `💡 How about: ${meal}?`;
});

generateListBtn.addEventListener('click', () => {
  groceryList.innerHTML = '';
  const items = fridgeInput.value.split(',').map(i => i.trim()).filter(i => i);
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `🛒 ${item}`;
    groceryList.appendChild(li);
  });
});

// Reflection Tab - Daily Prompt + Journal
const prompts = [
  "What’s one thing you’re proud of today?",
  "What made you smile today?",
  "Name a small win you had today.",
  "Something you’re grateful for today."
];

const dailyPrompt = document.getElementById('daily-prompt');
const journalInput = document.getElementById('journal');
const saveJournalBtn = document.getElementById('save-journal');
const journalEntries = document.getElementById('journal-entries');

dailyPrompt.textContent = prompts[Math.floor(Math.random() * prompts.length)];

saveJournalBtn.addEventListener('click', () => {
  const entry = journalInput.value.trim();
  if (entry) {
    const li = document.createElement('li');
    li.textContent = `✏️ ${entry}`;
    journalEntries.appendChild(li);
    journalInput.value = '';
  }
});
