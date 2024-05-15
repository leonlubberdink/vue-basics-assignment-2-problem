const app = Vue.createApp({
  data() {
    return {
      alert: "This is an alert!",
      name: "",
      name2: "",
      confirmedName2: "",
    };
  },
  methods: {
    showAlert() {
      alert(this.alert);
    },
    setName(e) {
      this.name = e.target.value;
    },
    setName2(e) {
      this.name2 = e.target.value;
    },
    confirmName2() {
      this.confirmedName2 = this.name2;
    },
  },
});

app.mount("#assignment");
