<script lang="ts">
  import { AUDIO_KEY_BINDINGS_DEFAULTS, audioKeyBindings } from "../storage";
</script>

<div class="container">
  <div class="key-bindings">
    <h3>Audio Key Bindings</h3>
    {#each $audioKeyBindings as item}
      <div class="binding-group">
        <span class="binding-name">{item.name}:</span>
        <input type="text" bind:value={item.key} />
      </div>
    {/each}
  </div>
  <button
    onclick={() => {
      $audioKeyBindings = AUDIO_KEY_BINDINGS_DEFAULTS;
    }}>Restore Defaults</button
  >
</div>

<style>
  .container {
    min-width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
  }

  .key-bindings {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }

  .key-bindings h3 {
    margin: 0 0 15px 0;
    font-size: 16px;
    color: #333;
  }

  .binding-group {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 15px;
    width: 100%;
  }

  .binding-group input {
    width: 30px;
    padding: 5px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 3px;
    background-color: #f9f9f9;
  }

  .binding-group input:focus {
    outline: none;
    border-color: #2ecc71;
    box-shadow: 0 0 0 2px rgba(46, 204, 113, 0.2);
  }

  button {
    border-radius: 4px;
    background-color: #2ecc71;
    color: white;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    font-size: 14px;
  }

  button:hover {
    background-color: #27ae60;
  }

  button:focus {
    outline: 2px solid #27ae60;
    outline-offset: 2px;
  }
</style>
