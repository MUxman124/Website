<template>
  <Navbar />

  <div class="jumbotron text-center mb-2">
    <h1 class="display-2">First Website</h1>
    <p>YOu will larn bla bla bla bla</p>
    <button class="btn btn-info rounded-0 text-white p-2">Get Started</button>
  </div>

  <div class="container fluid mt-5">
    <div class="row">
      <div class="col-md-8">
        <h3 class="mb-5">About Our Services</h3>
        <strong
          ><p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            repudiandae, eaque animi aperiam labore perspiciatis voluptas culpa
            perferendis dicta repellat ducimus a sint consequatur quibusdam
            quidem dolorem quod pariatur. Nemo?
          </p></strong
        >
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          voluptatibus repellat at suscipit laboriosam placeat illum? Maiores
          totam, blanditiis, nulla dignissimos doloremque est ea voluptatum quos
          in voluptatem quisquam dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, debitis
          fuga! Vitae unde magnam, harum quia dolorem repellendus, reprehenderit
          fugiat, dicta quas autem odit ex. Repellat vel repellendus iste
          facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, debitis
          fuga! Vitae unde magnam, harum quia dolorem repellendus, reprehenderit
          fugiat, dicta quas autem odit ex. Repellat vel repellendus iste
          facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, debitis
          fuga! Vitae unde magnam, harum quia dolorem repellendus, reprehenderit
          fugiat, dicta quas autem odit ex. Repellat vel repellendus iste
          facere.
        </p>
      </div>
      <div class="col-md-4">
        <img src="../assets/img1.jpg" class="img-fluid" alt="" />
      </div>
    </div>
    <router-link to="/about">
      <button class="btn btn-danger d-flex mx-auto mt-5 rounded-0 px-5 py-3">
        Learn More
      </button>
    </router-link>
  </div>

  <div class="container-fluid bg-light mt-5">
    <div class="row">
      <div class="col-md-4 mt-5 mx-auto d-flex justify-content-center">
        <img
          src="../assets/img2.jpg"
          class="img-fluid rounded-circle d-block"
          alt=""
        />
      </div>

      <div class="col-md-8">
        <h3 class="my-5">Our Values</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          aliquid aperiam cumque! Deleniti saepe laudantium quo sapiente quae
          suscipit similique odio quia. Distinctio, labore quis. Reprehenderit
          accusantium sequi doloribus maxime!
        </p>
        <br />
        <p class="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, debitis
          fuga! Vitae unde magnam, harum quia dolorem repellendus, reprehenderit
          fugiat, dicta quas autem odit ex. Repellat vel repellendus iste
          facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, debitis
          fuga! Vitae unde magnam, harum quia dolorem repellendus, reprehenderit
          fugiat, dicta quas autem odit ex. Repellat vel repellendus iste
          facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, debitis
          fuga! Vitae unde magnam, harum quia dolorem repellendus, reprehenderit
          fugiat, dicta quas autem odit ex. Repellat vel repellendus iste
          facere.
        </p>
      </div>
    </div>
  </div>

  <div class="container-fluid mt-5">
    <h2 class="my-5 text-center display-5">OUR SERVICES</h2>
    <h3 class="my-2 text-center">What we offer</h3>

    <div class="row">
      <div class="col-md-4 text-center justify-content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="purple"
          class="bi bi-bug-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956z"
          />
          <path
            d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"
          />
        </svg>
        <h4 class="my-4">BUG</h4>
        <p>lorem ipesum</p>
      </div>
      <div class="col-md-4 text-center justify-content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="purple"
          class="bi bi-lightbulb-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
          />
          <path
            d="M5.921 11.938a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
        <h4 class="my-4">LIGHT</h4>
        <p>lorem ipesum</p>
      </div>
      <div class="col-md-4 text-center justify-content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="purple"
          class="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
        <h4 class="my-4">PERSON</h4>
        <p>lorem ipesum</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 text-center justify-content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="purple"
          class="bi bi-car-front-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"
          />
        </svg>
        <h4 class="my-4">SPEED</h4>
        <p>lorem ipesum</p>
      </div>
      <div class="col-md-4 text-center justify-content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="purple"
          class="bi bi-display"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"
          />
        </svg>
        <h4 class="my-4">DISPLAY</h4>
        <p>lorem ipesum</p>
      </div>
      <div class="col-md-4 text-center justify-content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="purple"
          class="bi bi-plugin"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 1 2.898 5.673c-.167-.121-.216-.406-.002-.62l1.8-1.8a3.5 3.5 0 0 0 4.572-.328l1.414-1.415a.5.5 0 0 0 0-.707l-.707-.707 1.559-1.563a.5.5 0 1 0-.708-.706l-1.559 1.562-1.414-1.414 1.56-1.562a.5.5 0 1 0-.707-.706l-1.56 1.56-.707-.706a.5.5 0 0 0-.707 0L5.318 5.975a3.5 3.5 0 0 0-.328 4.571l-1.8 1.8c-.58.58-.62 1.6.121 2.137A8 8 0 1 0 0 8a.5.5 0 0 0 1 0Z"
          />
        </svg>
        <h4 class="my-4">CONECTION</h4>
        <p>lorem ipesum</p>
      </div>
    </div>

    <!-- portfolio -->
    <div class="container-fluid bg-light">
      <h2 class="my-5 text-center display-5">PORTFOLIO</h2>
      <h3 class="my-2 text-center">What we offer</h3>
      <div class="row">
        <div class="col-md-4">
          <Projects
            image="../assets/img2.jpg"
            title="Project # 6"
            description="Some quick example text to build on the card title and make up
                the bulk of the card's content."
          />
        </div>
        <div class="col-md-4 text-center justify-content-center">
          <div class="card">
            <img src="../assets/img2.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Project # 2</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 text-center justify-content-center">
          <div class="card">
            <img src="../assets/img3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Project # 3</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    <div class="text-center my-5">
      <h1 class="display-3">What Pepole Say</h1>
      <div class="text-carousel mt-5">
    <div class="text-carousel-content" :style="{ transform: 'translateX(' + transformValue + ')' }">
      <div class="text-carousel-item" v-for="(text, index) in texts" :key="index">
      <span class="display-6"> "{{ text }}" </span>
      <br>
      <span>{{ author[index] }}</span>
      </div>
    </div>
  </div>
</div>
  <div class="indicators">
      <span class="indicator" v-for="(item, index) in items" :key="index" :class="{ active: currentIndex === index }" @click="setCurrent(index)"></span>
    </div>

    <div class="container-fluid bg-light">
      <h2 class="my-5 text-center display-5 mt-5">PRICING</h2>
      <div class="row">
        <div class="col-md-4 text-center">
          <Price
            plan="BASIC"
            price="1"
            gb="10GB"
            email="10 Email Accounts"
            domain="Free Domain"
            bandwidth="100GB Bandwidth"
            support="Free Support"
            ssl="Free SSL"
          />
        </div>

        <div class="col-md-4 text-center">
          <Price
            plan="STANDARD"
            price="100"
            gb="100GB"
            email="100 Email Accounts"
            domain="Free Domain"
            bandwidth="100GB Bandwidth"
            support="Free Support"
            ssl="Free SSL"
          />
        </div>
        <div class="col-md-4 text-center">
          <!-- <Price
            plan="PREMIUM"
            price="200"
            gb="100GB"
            email="1000 Email Accounts"
            domain="Free Domain"
            bandwidth="100GB Bandwidth"
            support="Free Support"
            ssl="Free SSL"
          /> -->
          <div class="panel panel-default text-center">
            <div class="panel-heading">
              <h1>Premium</h1>
            </div>
            <div class="panel-body">
              <p><strong>100</strong> Lorem</p>
              <p><strong>50</strong> Ipsum</p>
              <p><strong>25</strong> Dolor</p>
              <p><strong>10</strong> Sit</p>
              <p><strong>Endless</strong> Amet</p>
            </div>
            <div class="panel-footer">
              <h3>$49</h3>
              <h4>per month</h4>
              <button class="btn btn-lg rounded-0">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid text-center bg-light">
    <h3 class="display-5 my-5">Contact Us</h3>
    <div class="row">
      <div class="col-md-5">
        <p>Contact us so that we can help you.</p>

        <div class="my-4">
          <i class="bi bi-envelope-at-fill"></i>
          <span> hello@someone.com</span>
        </div>
        <div class="my-4">
          <i class="bi bi-phone-vibrate"></i>
          <span> +92307 12846 34736</span>
        </div>
        <div class="my-4">
          <i class="bi bi-geo-alt"></i>
          <span> Pakistan, Punjab, Lahore</span>
        </div>
      </div>
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Phone" />
          </div>
          <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Email" />
          </div>
          <div class="row">
            <div class="col-md-12">
              <textarea
                class="form-control mt-5"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end my-5 mx-5">
      <button class="btn btn-outline-info rounded-0 ml-auto">Send</button>
    </div>
  </div>
</template>

<script>
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./Navbar.vue";
import Projects from "./Projects.vue";
import Price from "./Price.vue";
export default {
  components: {
    Navbar,
    Projects,
    Price,
  },
  data() {
    return {
      
    texts: [" I am so happy with the result!", "One Word .... Wowwww", "Could I... BE any more happy with this company?", "What a Company ......"],
    author: ["Michael Roe, Vice President, Comment Box", "John Doe, Salesman, Rep Inc", "Jane Doe, Salesman, Rep Inc", "James Doe, Salesman, Rep Inc"],
    currentIndex: 0,
    transformValue: "0px",
    interval: null,
    intervalTime: 3000
    };
  },
  mounted() {
    this.startInterval();
  },
  methods: {
    setCurrent(index) {
      this.currentIndex = index;
    },
    startInterval() {
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
        this.transformValue = `-${this.currentIndex * 100}%`;
        console.log(this.currentIndex)
        console.log(this.transformValue)
      }, this.intervalTime);
    },
    stopInterval() {
      clearInterval(this.interval);
    }
  },
  beforeDestroy() {
    this.stopInterval();
  }
};
</script>


<style  >
.jumbotron {
  background-color: purple;
  background-image: linear-gradient(
    to right,
    #9719e0 0%,
    #b532c6 50%,
    #5c0cdb 100%
  );
  color: #fff;
  padding: 200px 45px;
  font-family: Montserrat, sans-serif;
}

.card {
  transition: all 0.3s ease-in-out;
  border: 1px solid #f4511e;
  border-radius: 0 !important;
  width: 75%;
  
}

.card:hover {
  transform: scale(1.01);
  z-index: 1;
  box-shadow: 0 2px 30px rgba(65, 230, 238, 0.481);
  cursor: pointer;
  background-color: purple;
  color: #fff;
}
.panel {
  border: 1px solid #f4511e;
  border-radius: 0 !important;
  transition: box-shadow 0.5s;
}
.panel:hover {
  box-shadow: 5px 0px 40px rgba(0, 0, 0, 0.2);
}
.panel-footer .btn:hover {
  border: 1px solid #f4511e;
  background-color: #fff !important;
  color: #f4511e;
}
.panel-heading {
  color: #fff !important;
  background-color: #f4511e !important;
  padding: 25px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.panel-footer {
  background-color: white !important;
}
.panel-footer h3 {
  font-size: 32px;
}
.panel-footer h4 {
  color: #aaa;
  font-size: 14px;
}
.panel-footer .btn {
  margin: 15px 0;
  background-color: #f4511e;
  color: #fff;
}
.text-carousel {
  overflow: hidden;
}

.text-carousel-content {
  display: flex;
  transition: transform 1s ease;
}

.text-carousel-item {
  flex: 1 0 100%;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
}
.indicators {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.indicator {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #b30e0e;
  margin: 0 5px;
  cursor: pointer;
}

.indicator.active {
  background-color: #333;
}

.controls {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.carousel-item.active {
  left: 0;
}

</style>