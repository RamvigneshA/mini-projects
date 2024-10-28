import './secret.css';
function Secret() {
  const press = [];
  const scode = ['ArrowRight', 'ArrowUp', 'ArrowDown', 'Backspace'];
  const heads = document.querySelectorAll('h3');

  function secret(e) {
    press.push(e.key);
   
    const newarr = press.slice(-scode.length);
    if (JSON.stringify(scode) === JSON.stringify(newarr)) {
      const header = [...heads];
      header.map((heed) => {
        heed.innerText = 'hacked!';
      });
    }
  }

  function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }

  const debouncedKeyUp = debounce(secret, 100);

  window.addEventListener('keyup', debouncedKeyUp);
  return (
    <section>
      <div className="div">
        <h3>Website</h3>
        <h3>Domain</h3>
        <h3>Name</h3>
        <h3>Search</h3>
        <h3>Engine</h3>
        <h3>Browser</h3>
        <h3>Server</h3>
        <h3>Things</h3>
        <h3>Cloud</h3>
        <h3>Internet</h3>
        <h3>Computing</h3>
        <h3 className="secret">
          type the secret code [&rarr;&uarr;&darr;backspace]
        </h3>
        <h3>Application</h3>
        <h3>Firewall</h3>
        <h3>Database</h3>
        <h3>Network</h3>
        <h3>Language</h3>
        <h3>Algorithm</h3>
        <h3>Programming</h3>
      </div>
    </section>
  );
}

export default Secret;
