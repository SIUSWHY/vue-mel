<template>
  <div>
    <input
      v-model.trim="$v.name.$model"
      id="name"
      class="g-input__input"
      type="text"
    />
    <input
      v-model.trim="$v.name.$model"
      id="name"
      class="g-input__input"
      type="text"
    />
  </div>
</template>

<script>
export default {
  name: "login",

}
</script>

<style scoped>
</style>