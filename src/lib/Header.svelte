<script lang="ts">
  import logo from '$lib/assets/svgs/logo.svg'
  type HeaderTypes = {
      title: string
      showLogin: boolean
  }

  let { title, showLogin=true }:HeaderTypes = $props()
</script>

<div class="flex justify-between items-center h-10 mb-10">
  <div class="flex items-center">
    <img src={logo} alt="NSTUDIOS Logo">
    <h2 class="px-2">{title}</h2>
  </div>
  {#if showLogin}
    <a href="login">Login</a>
  {/if}

</div>
