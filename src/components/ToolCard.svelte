<script lang="ts">
  import Icon from "./Icon.svelte";

  export let icon: {
    title: string;
    slug: string;
    svg: string;
    path: string;
    source: string;
    hex: string;
  };
</script>

<div
  class="text-center self-stretch flex flex-col gap-4 items-center justify-start py-4 px-6 border border-base-content rounded-md"
>
  <Icon fill="#ffffff" {icon} class="h-16 w-16" />
  <span class="text-white">{icon.title}</span>
</div>
