<template>
  <component
    :is="blok.is_inline ? 'span' : 'p'"
    v-editable="blok"
    :class="blok.paragraph_style.join(' ')"
  >
    <a
      :href="blok.link.cached_url"
      class="button-standard"
      :class="blok.style.join(' ')"
      target="_blank"
    >
      {{ blok.text }}
    </a>
  </component>
</template>

<script>
export default {
  props: { blok: { required: true, type: Object } }
};
</script>
