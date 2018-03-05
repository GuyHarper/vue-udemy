new Vue({
  el: '#app',
  data: {
    value: ''
  },
  methods: {
    clickedButton: function(message, event) {
      console.log(message, event);
    },
    pressedEnterOrSpace: function() {
      console.log('you pressed the enter or space key');
    },
    pressedShiftAndEnter: function() {
      console.log('you pressed shift+enter');
    },
    clickedWhilstHoldingShift: function() {
      console.log('clicked while holding shift');
    },
    updateValue: function(e) {
      this.value = e.target.value;
    }

  }
});
