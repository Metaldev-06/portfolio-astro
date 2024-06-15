<script>
  export let placeholder = "";
  let searcher = "";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searcher.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searcher.trim())}`;
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input name="searcher" id="searcher" {placeholder} bind:value={searcher} />
</form>

<style>
  form {
    width: 100%;
    max-width: 400px;
    height: 32px;
  }

  input {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    padding-left: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.09);
    outline: none;
    background-color: transparent;
    color: #ddd;

    &::placeholder {
      font-size: 0.9rem;
    }
  }
</style>
