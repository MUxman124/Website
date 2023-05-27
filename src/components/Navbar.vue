<template>
    <nav class="navbar navbar-expand-lg navbar-light text-white navbar-right fixed-top ">
    <a class="navbar-brand" href="#">Logo</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Home <span class="sr-only"></span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
    <button class="btn btn-primary mx-2">Account</button>
  </nav>

</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style >
.navbar-right {
  margin-bottom: 0;
    background-color: #f4511e;
    z-index: 9999;
    border: 0;
    font-size: 20px !important;
    line-height: 1.42857143 !important;
    letter-spacing: 4px;
    border-radius: 0;
    font-family: Montserrat, sans-serif;
  
}

.navbar-light {
  background-color: #1b99f4; /* Replace #333 with the color you want */
}

.navbar-light .navbar-nav .nav-link:hover {
  background-color: #fff; /* Replace #fff with the color you want */
  color: #333; /* Replace #333 with the color you want */
}

</style>

