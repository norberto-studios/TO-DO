<script>
    import Header from "$lib/Header.svelte";
</script>


<div>
  <form
      onsubmit={() => console.log("testing")}
      class="flex flex-col items-center"
  >
    <a href="/">
      <Header title="NStudios" showLogin={false}/>
    </a>

    <div class="flex flex-col items-center w-72">
    <h1 class="mb-4 text-2xl">Log In</h1>
      <input class="w-full mb-4 rounded-2xl py-3 px-4 bg-[#454463] border-0 outline-[#2D2C41]"
           placeholder="Username" type="text"/>
      <input class="w-full mb-4 rounded-2xl py-3 px-4 bg-[#454463] border-0 outline-[#2D2C41]"
           placeholder="Password" type="password"/>
      <button type="submit" class="h-10 w-full mb-4 rounded-xl bg-[#454463] cursor-pointer">Log in</button>
      <div class="flex gap-2">
        <h4>Don't have an account?</h4>
        <a class="text-[#179F43]" href="signup">Sign Up</a>
      </div>
    </div>
  </form>
</div>
