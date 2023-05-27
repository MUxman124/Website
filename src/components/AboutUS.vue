<template>
  <div class="container-fluid text-center align-items-center">
    <Navbar></Navbar>
    <h1 class="display-3 mt-5">About Us</h1>
  </div>
  <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h3 class="my-5"> About Our Company </h3>
                <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde assumenda iure laborum consequuntur nostrum similique exercitationem saepe voluptas dignissimos obcaecati commodi, ipsa quam quae ullam, mollitia cumque nesciunt cum animi.</h5>
                <br>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, minus voluptatem! Quae ipsa libero quaerat aliquam laudantium iure itaque consectetur minus maxime quibusdam eaque, est officiis animi? Eaque, dolorum est.</p>
                <br>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ab odit, dignissimos quod hic labore illo sed veniam repudiandae velit recusandae aut quidem temporibus pariatur tempore nulla incidunt vel? Voluptate.</p>
            </div>
            <div class="col-md-4">
                <img src="../assets/img1.jpg" class="img-fluid heading" alt="" />
            </div>

        </div>
    </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  components: {
    Navbar
  }
}
</script>
