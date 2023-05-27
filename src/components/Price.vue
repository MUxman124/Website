<script setup>
const props = defineProps({
    plan: String,
    price: String,
    gb: String,
    email: String,
    domain: String,
    bandwidth: String,
    support: String,
    ssl: String
});
</script>
<template>
    <div class="card border-2" >
            <div
              class="card-header"
             
            >
              <h3>{{ plan }}</h3>
              <h1>$ {{ price }}</h1>
            </div>
            <div class="card-body">
              <ul class="list-group ">
                <li class="list-group-item">{{ gb }}</li>
                <li class="list-group-item">{{ email }}</li>
                <li class="list-group-item">{{ domain }}</li>
                <li class="list-group-item">{{ bandwidth }}</li>
                <li class="list-group-item">{{ support }}</li>
                <li class="list-group-item">{{ ssl }}</li>
              </ul>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">Sign Up</a>
            </div>
          </div>
</template>