function round_number(num) {
  //first, move the decimal two places
  num = num * 100;

  //then, round the number to the nearest integer
  num = Math.round(num);

  //then move the decimal back two places
  num = num / 100;

  // handle trailing zeroes
  num = num.toFixed(2);

  return num;
}

const inputs = document.querySelectorAll("[name='qty']");

inputs.forEach(function (input) {
  input.addEventListener("change", function (e) {
    const this_input = e.target;
    const input_value = parseFloat(this_input.value);
    const this_row = this_input.closest(".row");

    const amazon = this_row.querySelector(".amazon");
    const amazon_price = parseFloat(amazon.dataset.price);
    const amazon_cost = input_value * amazon_price;
    const amazon_span = amazon.querySelector("span");
    amazon_span.innerHTML = round_number(amazon_cost);

    const freshdirect = this_row.querySelector(".freshdirect");
    const freshdirect_price = parseFloat(freshdirect.dataset.price);
    const freshdirect_cost = input_value * freshdirect_price;
    const freshdirect_span = freshdirect.querySelector("span");
    freshdirect_span.innerHTML = round_number(freshdirect_cost);

    const peapod = this_row.querySelector(".peapod");
    const peapod_price = parseFloat(peapod.dataset.price);
    const peapod_cost = input_value * peapod_price;
    const peapod_span = peapod.querySelector("span");
    peapod_span.innerHTML = round_number(peapod_cost);

    amazon.classList.add("active");
    freshdirect.classList.add("active");
    peapod.classList.add("active");

    let cheapest = amazon;

    if (freshdirect_cost < amazon_cost && freshdirect_cost < peapod_cost) {
      cheapest = freshdirect;
    }

    if (peapod_cost < amazon_cost && peapod_cost < freshdirect_cost) {
      cheapest = peapod;
    }

    cheapest.classList.add("cheap");
  });
});
