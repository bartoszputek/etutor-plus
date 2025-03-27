<script lang="ts">
  export let word: string;
  const CAMBRIDGE_DICT_BASE_URL = "https://dictionary.cambridge.org/dictionary/english/";
</script>

<a
  href="{CAMBRIDGE_DICT_BASE_URL}{encodeURIComponent(word)}"
  target="_blank"
  rel="noopener noreferrer"
  class="cambridge-dict-link"
  title="Look up '{word}' in Cambridge Dictionary"
>
  📚
</a>

<style>
  .cambridge-dict-link {
    text-decoration: none;
    cursor: pointer;
    margin-left: 4px;
    font-size: 16px;
  }
</style>
