<style>
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #cbd5e0;
  }
  ::-webkit-scrollbar-thumb {
    background: #2d3748;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #718096;
  }
</style>

<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<Nav segment="segment" />

<main>
  <slot />
</main>
