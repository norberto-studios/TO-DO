<script lang="ts">
  import logo from '$lib/assets/svgs/logo.svg'
  export let title: string;
</script>

<div class="flex justify-between items-center h-10 mb-10">
  <div class="flex items-center">
    <img src={logo} alt="NSTUDIOS Logo">
    <h2 class="px-2">{title}</h2>
  </div>
<!--  <h4>Login</h4>-->
</div>
