<script>
  export let postList;
  export let input;

  function pluralizeWord(word, count) {
    if (count === 1) {
      return `1 ${word}`;
    } else {
      return `${count} ${word}s`;
    }
  }
</script>

{#if postList.length > 0}
  <div class="message__results">
    <h2>
      {pluralizeWord("resultado", postList.length)}
      <span> "{input}" </span>
    </h2>
  </div>
{:else}
  <div class="message__results">
    <h2>No se encotraron resultados con: <span> "{input}" </span></h2>
  </div>
{/if}

<style>
  span {
    color: var(--color-tertiary);
  }
</style>
