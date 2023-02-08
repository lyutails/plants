export function citySelect() {
  const cityButton = document.querySelector(".circle_city");
  const arrowDropDownLeft = document.querySelector(".arrow_dropdown_city.left");
  const arrowDropDownRight = document.querySelector(".arrow_dropdown_city.right");
  const cityChoice = document.querySelector('.city_choice');
  const cities = document.querySelector('.cities');
  const pickCity = document.querySelector('.pick_city');
  const citiesInfo = document.querySelector('.cities_info');

  const cityCanandaigua = document.createElement('div');
  cityCanandaigua.classList.add('city_canandaigua');
  cityCanandaigua.textContent = 'Canandaigua, NY';
  const cityNewYork = document.createElement('div');
  cityNewYork.classList.add('city_newyork');
  cityNewYork.textContent = 'New York City';
  const cityYonkers = document.createElement('div');
  cityYonkers.classList.add('city_yonkers');
  cityYonkers.textContent = 'Yonkers, NY';
  const citySherrill = document.createElement('div');
  citySherrill.classList.add('city_sherrill');
  citySherrill.textContent = 'Sherrill, NY';

  const cityInfo = document.createElement('div');
  cityInfo.classList.add('city_info');
  citiesInfo.appendChild(cityInfo);

  const cityBlock = document.createElement('div');
  cityBlock.classList.add('city_block');
  cityInfo.appendChild(cityBlock);
  const city = document.createElement('span');
  city.classList.add('city');
  city.textContent = 'City:';
  cityBlock.appendChild(city);
  const cityName = document.createElement('span');
  cityName.classList.add('city_name');
  cityBlock.appendChild(cityName);
  cityName.textContent = 'Canandaigua, NY';

  const phoneBlock = document.createElement('div');
  phoneBlock.classList.add('phone_block');
  cityInfo.appendChild(phoneBlock);
  const phone = document.createElement('span');
  phone.classList.add('phone');
  phone.textContent = 'Phone:';
  phoneBlock.appendChild(phone);
  const phoneName = document.createElement('span');
  phoneName.classList.add('phone_name');
  phoneBlock.appendChild(phoneName);
  phoneName.textContent = '+1	585	393 0001';

  const addressBlock = document.createElement('div');
  addressBlock.classList.add('address_block');
  cityInfo.appendChild(addressBlock);
  const address = document.createElement('span');
  address.classList.add('address');
  address.textContent = 'Address:';
  addressBlock.appendChild(address);
  const addressName = document.createElement('span');
  addressName.classList.add('address_name');
  addressBlock.appendChild(addressName);
  addressName.textContent = '151 Charlotte Street';

  const callUsButton = document.createElement('div');
  callUsButton.classList.add('call_button');
  cityInfo.appendChild(callUsButton);
  callUsButton.textContent = 'Call us';

  cityButton.addEventListener('click', () => {
    cityButton.classList.toggle('active');
    arrowDropDownLeft.classList.toggle("opened");
    arrowDropDownRight.classList.toggle("opened");
    cityChoice.classList.add('active');
    cities.classList.toggle("active");
    cities.appendChild(cityCanandaigua);
    cities.appendChild(cityNewYork);
    cities.appendChild(cityYonkers);
    cities.appendChild(citySherrill);
    cityCanandaigua.classList.toggle('active');
    cityNewYork.classList.toggle('active');
    cityYonkers.classList.toggle('active');
    citySherrill.classList.toggle('active');
  })

  const currentCity = document.querySelector('.city');
  cityCanandaigua.addEventListener('click', () => {
    currentCity.textContent = 'Canandaigua, NY';
    cityButton.classList.remove('active');
    arrowDropDownLeft.classList.remove("opened");
    arrowDropDownRight.classList.remove("opened");
    cities.classList.remove("active");
    cityCanandaigua.classList.remove('active');
    cityNewYork.classList.remove('active');
    cityYonkers.classList.remove('active');
    citySherrill.classList.remove('active');
    cityInfo.classList.add('active');
    cityName.textContent = 'Canandaigua, NY';
    phoneName.textContent = '+1	585	393 0001';
    addressName.textContent = '151 Charlotte Street';

    callUsButton.addEventListener('click', () => {
        window.open('tel:+1	585	393 0001');
        //window.location = "tel:+1	585	393 0001"
    })
  })

  cityNewYork.addEventListener('click', () => {
    currentCity.textContent = 'New York City';
    cityButton.classList.remove('active');
    arrowDropDownLeft.classList.remove("opened");
    arrowDropDownRight.classList.remove("opened");
    cities.classList.remove("active");
    cityNewYork.classList.remove('active');
    cityCanandaigua.classList.remove('active');
    cityYonkers.classList.remove('active');
    citySherrill.classList.remove('active');
    cityInfo.classList.add('active');
    cityName.textContent = 'New York City';
    phoneName.textContent = '+1	212	456 0002';
    addressName.textContent = '9 East 91st Street';

    callUsButton.addEventListener('click', () => {
        window.open('tel:+1	212	456 0002');
        //window.location = "tel:+1	212	456 0002"
    })
  })

  cityYonkers.addEventListener('click', () => {
    currentCity.textContent = 'Yonkers, NY';
    cityButton.classList.remove('active');
    arrowDropDownLeft.classList.remove("opened");
    arrowDropDownRight.classList.remove("opened");
    cities.classList.remove("active");
    cityNewYork.classList.remove('active');
    cityCanandaigua.classList.remove('active');
    cityYonkers.classList.remove('active');
    citySherrill.classList.remove('active');
    cityInfo.classList.add('active');
    cityName.textContent = 'Yonkers, NY';
    phoneName.textContent = '+1	914	678 0003';
    addressName.textContent = '511 Warburton Ave';

    callUsButton.addEventListener('click', () => {
        window.open('tel:+1	914	678 0003');
        //window.location = "tel:+1	914	678 0003"
    })
  })

  citySherrill.addEventListener('click', () => {
    currentCity.textContent = 'Yonkers, NY';
    cityButton.classList.remove('active');
    arrowDropDownLeft.classList.remove("opened");
    arrowDropDownRight.classList.remove("opened");
    cities.classList.remove("active");
    cityNewYork.classList.remove('active');
    cityCanandaigua.classList.remove('active');
    cityYonkers.classList.remove('active');
    citySherrill.classList.remove('active');
    cityInfo.classList.add('active');
    cityName.textContent = 'Sherrill, NY';
    phoneName.textContent = '+1	315	908 0004';
    addressName.textContent = '14 WEST Noyes BLVD';

    callUsButton.addEventListener('click', () => {
        window.open('tel:+1	315	908 0004');
        //window.location = "tel:+1	315	908 0004"
    })
  })
}
