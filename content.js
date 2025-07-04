// ===== content.js =====
// Injects an overlay with rotating focus quotes and a math challenge on Instagram pages
(function() {
  // Disable background scrolling
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  // Quotes to rotate
  const quotes = [
    "Discipline is choosing between what you want now and what you want most.",
    "Focus on being productive instead of busy.",
    "Success is the sum of small efforts repeated daily.",
    "Don’t let distractions derail your purpose.",
    "Your future is created by what you do today, not tomorrow."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Generate equation
  function generateEquation() {
    const nums = Array.from({ length: 4 }, () => Math.floor(Math.random() * 990) + 10);
    const ops = Array.from({ length: 3 }, () => (Math.random() < 0.5 ? '+' : '-'));
    let equation = `${nums[0]}`;
    ops.forEach((op, i) => {
      equation += ` ${op} ${nums[i + 1]}`;
    });
    // Compute answer manually
    const tokens = equation.split(' ');
    let answer = parseInt(tokens[0], 10);
    for (let i = 1; i < tokens.length; i += 2) {
      const op = tokens[i], val = parseInt(tokens[i+1], 10);
      answer = op === '+' ? answer + val : answer - val;
    }
    return { equation, answer };
  }

  const { equation, answer } = generateEquation();

  // Create & style the full-screen overlay
  const overlay = document.createElement('div');
  overlay.id = 'insta-blocker-overlay';
  Object.assign(overlay.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '2147483647',
    pointerEvents: 'auto'
  });

  // Build challenge UI container
  const container = document.createElement('div');
  Object.assign(container.style, {
    backgroundColor: '#222',
    color: '#fff',
    padding: '32px',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0,0,0,0.7)',
    maxWidth: '360px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  });

  // Quote element
  const quoteEl = document.createElement('p');
  quoteEl.textContent = randomQuote;
  Object.assign(quoteEl.style, {
    fontStyle: 'italic',
    marginBottom: '20px',
    fontSize: '16px',
    lineHeight: '1.4'
  });

  // Prompt text
  const promptEl = document.createElement('p');
  promptEl.textContent = `Solve to unlock:\n${equation}`;
  Object.assign(promptEl.style, {
    margin: '0 0 16px',
    fontSize: '18px',
    fontWeight: 'bold'
  });

  // Input
  const input = document.createElement('input');
  input.type = 'number';
  Object.assign(input.style, {
    width: '100%',
    padding: '10px',
    marginBottom: '16px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #444'
  });

  // Button
  const btn = document.createElement('button');
  btn.textContent = 'Submit';
  Object.assign(btn.style, {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#0073e6',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  });

  // Feedback
  const feedback = document.createElement('div');
  Object.assign(feedback.style, { marginTop: '12px', height: '18px', color: '#f66' });

  btn.addEventListener('click', () => {
    if (parseInt(input.value, 10) === answer) {
      // restore scrolling
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      overlay.remove();
    } else {
      feedback.textContent = 'Incorrect, try again.';
    }
  });

  container.append(quoteEl, promptEl, input, btn, feedback);
  overlay.appendChild(container);
  document.body.appendChild(overlay);
})();
