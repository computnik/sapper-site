<script context="module">
  import path from 'path';
  export async function preload(page) {
    // the `slug` parameter is available because this file
    // is called [slug].svelte
    const { slug } = page.params;

    // `this.fetch` is a wrapper around `fetch` that allows
    // you to make credentialled requests on both
    // server and client
    const filename = path.resolve(`./posts/${slug}.svx`);
    const Post = await require(filename);

    return { Post };
  }
</script>

<script>
  export let Post;
</script>

<Post />
