const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expenseList');

const fetchExpenses = async () => {
  const res = await fetch('/api/expenses');
  const expenses = await res.json();
  expenseList.innerHTML = '';
  expenses.forEach(expense => {
    const li = document.createElement('li');
    li.textContent = `${expense.category}:  ${expense.description} - RS ${expense.amount}`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = async () => {
      await fetch(`/api/expenses/${expense.id}`, { method: 'DELETE' });
      fetchExpenses();
    };
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => editExpense(expense);
    li.append(deleteButton, editButton);
    expenseList.appendChild(li);
  });
};

const editExpense = (expense) => {
  document.getElementById('description').value = expense.description;
  document.getElementById('amount').value = expense.amount;
  document.getElementById('category').value = expense.category;
  expenseForm.onsubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/expenses/${expense.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description: document.getElementById('description').value,
        amount: document.getElementById('amount').value,
        category: document.getElementById('category').value,
      }),
    });
    fetchExpenses();
    expenseForm.reset();
    expenseForm.onsubmit = handleAddExpense;
  };
};

const handleAddExpense = async (e) => {
  e.preventDefault();
  const description = document.getElementById('description').value;
  const amount = document.getElementById('amount').value;
  const category = document.getElementById('category').value;
  await fetch('/api/expenses', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description, amount, category }),
  });
  fetchExpenses();
  expenseForm.reset();
};

expenseForm.onsubmit = handleAddExpense;
fetchExpenses();
