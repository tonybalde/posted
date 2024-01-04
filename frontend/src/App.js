import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="/" className="logo">DevBlog</a>
        <nav>
          <a href="/">Login</a>
          <a href="/">Register</a>
        </nav>
      </header>
        <div className="post">
            <div className="image">
              <img src="https://images.unsplash.com/photo-1683009427619-a1a11b799e05?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="texts">
              <h2>Fancy Title Article</h2>
              <p className="info">
                <a className="author">Some Guy</a>
                <time>04-01-2024 16:06</time>
              </p>
              <p className="summary">Non excepteur Lorem id officia dolore adipisicing est ipsum deserunt. Qui dolore labore tempor est duis tempor sint qui cillum amet enim dolore. Commodo officia mollit eiusmod irure. Ad do id do culpa ex duis eu culpa excepteur nulla exercitation pariatur. Sint velit consectetur id ex aute consequat enim officia id sunt.</p>
            </div>  
        </div>
        <div className="post">
            <div className="image">
              <img src="https://images.unsplash.com/photo-1683009427619-a1a11b799e05?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="texts">
              <h2>Fancy Title Article</h2>
              <p>Non excepteur Lorem id officia dolore adipisicing est ipsum deserunt. Qui dolore labore tempor est duis tempor sint qui cillum amet enim dolore. Commodo officia mollit eiusmod irure. Ad do id do culpa ex duis eu culpa excepteur nulla exercitation pariatur. Sint velit consectetur id ex aute consequat enim officia id sunt.</p>
            </div>  
        </div>

        <div className="post">
            <div className="image">
              <img src="https://images.unsplash.com/photo-1683009427619-a1a11b799e05?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="texts">
              <h2>Fancy Title Article</h2>
              <p>Non excepteur Lorem id officia dolore adipisicing est ipsum deserunt. Qui dolore labore tempor est duis tempor sint qui cillum amet enim dolore. Commodo officia mollit eiusmod irure. Ad do id do culpa ex duis eu culpa excepteur nulla exercitation pariatur. Sint velit consectetur id ex aute consequat enim officia id sunt.</p>
            </div>  
        </div>

    </main>
  );
}

export default App;
