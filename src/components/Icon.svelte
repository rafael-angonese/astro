<script lang="ts">
  export let icon: {
    title: string;
    slug: string;
    svg: string;
    path: string;
    source: string;
    hex: string;
  };
  let className = "";
  export { className as class };
</script>

<svg
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill={$$props.fill}
  class={$$props.class}
>
  <path d={icon.path} />
</svg>
