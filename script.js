function toGetTextToNumber(id) {
  const innerTextValue = document.getElementById(id).innerText;
  const valueConvertToNumber = parseInt(innerTextValue);
  return valueConvertToNumber;
}
function toSubtraction(id) {
  const balance = toGetTextToNumber("coin");
  if (balance < 20) {
    alert("Insufficient Balance! minimum 20 coin need to call");
    return false;
  }
  const callRate = balance - 20;
  document.getElementById(id).innerText = callRate;
  return true;
}

const historyData = [];

document
  .getElementById("national-emergency-call")
  .addEventListener("click", function () {
    const callRateBalance = toSubtraction("coin");

    if (callRateBalance != true) {
      return;
    }

    const data = {
      serviceName: "National Emergency Number",
      serviceNumber: 999,
      date: new Date().toLocaleTimeString(),
    };
    alert("calling" + " " + data.serviceName + " " + data.serviceNumber);

    historyData.push(data);
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerText = "";

    for (const data of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div
                class="flex justify-between items-center p-4 shadow-lg bg-[#FAFAFA] rounded-xl gap-y-2"
              >
                <div>
                  <h1 class="font-bold text-xs md:text-xl  lg:text-xl">${data.serviceName}</h1>
                  <p>${data.serviceNumber}</p>
                </div>
                <p>${data.date}</p>
              </div>
        
        `;

      historyContainer.appendChild(div);
    }
  });

document
  .getElementById("police-helpline-call")
  .addEventListener("click", function () {
    const callRateBalance = toSubtraction("coin");
    if (callRateBalance != true) {
      return;
    }

    const data = {
      serviceName: "Police Helpline Number",
      serviceNumber: 999,
      date: new Date().toLocaleTimeString(),
    };
    alert("calling" + " " + data.serviceName + " " + data.serviceNumber);

    historyData.push(data);
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerText = "";

    for (const data of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div
                class="flex justify-between items-center p-4 shadow-lg bg-[#FAFAFA] rounded-xl gap-y-2"
              >
                <div>
                  <h1 class="font-bold text-xs md:text-xl  lg:text-xl">${data.serviceName}</h1>
                  <p>${data.serviceNumber}</p>
                </div>
                <p>${data.date}</p>
              </div>
        
        `;

      historyContainer.appendChild(div);
    }
  });

document
  .getElementById("fire-service-btn")
  .addEventListener("click", function () {
    const callRateBalance = toSubtraction("coin");
    if (callRateBalance != true) {
      return;
    }

    const data = {
      serviceName: "Fire Service Number",
      serviceNumber: 999,
      date: new Date().toLocaleTimeString(),
    };
    alert("calling" + " " + data.serviceName + " " + data.serviceNumber);

    historyData.push(data);
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerText = "";

    for (const data of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div
                class="flex justify-between items-center p-4 shadow-lg bg-[#FAFAFA] rounded-xl gap-y-2"
              >
                <div>
                  <h1 class="font-bold text-xs md:text-xl  lg:text-xl">${data.serviceName}</h1>
                  <p>${data.serviceNumber}</p>
                </div>
                <p>${data.date}</p>
              </div>
        
        `;

      historyContainer.appendChild(div);
    }
  });

document
  .getElementById("ambulance-service-btn")
  .addEventListener("click", function () {
    const callRateBalance = toSubtraction("coin");
    if (callRateBalance != true) {
      return;
    }

    const data = {
      serviceName: "Ambulance Service",
      serviceNumber: 1994999999,
      date: new Date().toLocaleTimeString(),
    };
    alert("calling" + " " + data.serviceName + " " + data.serviceNumber);
    historyData.push(data);
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerText = "";

    for (const data of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div
                class="flex justify-between items-center p-4 shadow-lg bg-[#FAFAFA] rounded-xl gap-y-2"
              >
                <div>
                  <h1 class="font-bold text-xs md:text-xl  lg:text-xl">${data.serviceName}</h1>
                  <p>${data.serviceNumber}</p>
                </div>
                <p>${data.date}</p>
              </div>
        
        `;

      historyContainer.appendChild(div);
    }
  });

document
  .getElementById("women-child-btn")
  .addEventListener("click", function () {
    const callRateBalance = toSubtraction("coin");
    if (callRateBalance != true) {
      return;
    }

    const data = {
      serviceName: "Women & Child Helpline",
      serviceNumber: 109,
      date: new Date().toLocaleTimeString(),
    };
    alert("calling" + " " + data.serviceName + " " + data.serviceNumber);

    historyData.push(data);
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerText = "";

    for (const data of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div
                class="flex justify-between items-center p-4 shadow-lg bg-[#FAFAFA] rounded-xl gap-y-2"
              >
                <div>
                  <h1 class="font-bold text-xs md:text-xl  lg:text-xl">${data.serviceName}</h1>
                  <p>${data.serviceNumber}</p>
                </div>
                <p>${data.date}</p>
              </div>
        
        `;

      historyContainer.appendChild(div);
    }
  });


document
  .getElementById("anti-corruption-btn")
  .addEventListener("click", function () {
    const callRateBalance = toSubtraction("coin");
    if (callRateBalance != true) {
      return;
    }

    const data = {
      serviceName: "Anti-Corruption Helpline",
      serviceNumber: 106,
      date: new Date().toLocaleTimeString(),
    };
    alert("calling" + " " + data.serviceName + " " + data.serviceNumber);

    historyData.push(data);
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerText = "";

    for (const data of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div
                class="flex justify-between items-center p-4 shadow-lg bg-[#FAFAFA] rounded-xl gap-y-2"
              >
                <div>
                  <h1 class="font-bold text-xs md:text-xl  lg:text-xl">${data.serviceName}</h1>
                  <p>${data.serviceNumber}</p>
                </div>
                <p>${data.date}</p>
              </div>
        
        `;

      historyContainer.appendChild(div);
    }
  });


document
  .getElementById("electricity-btn")
  .addEventListener("click", function () {
    const callRateBalance = toSubtraction("coin");
    if (callRateBalance != true) {
      return;
    }

    const data = {
      serviceName: "Electricity Helpline",
      serviceNumber: 16216,
      date: new Date().toLocaleTimeString(),
    };
    alert("calling" + " " + data.serviceName + " " + data.serviceNumber);
    historyData.push(data);
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerText = "";

    for (const data of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div
                class="flex justify-between items-center p-4 shadow-lg bg-[#FAFAFA] rounded-xl gap-y-2"
              >
                <div>
                  <h1 class="font-bold text-xs md:text-xl  lg:text-xl">${data.serviceName}</h1>
                  <p>${data.serviceNumber}</p>
                </div>
                <p>${data.date}</p>
              </div>
        
        `;

      historyContainer.appendChild(div);
    }
  });



document.getElementById("brac-btn").addEventListener("click", function () {
  const callRateBalance = toSubtraction("coin");
  if (callRateBalance != true) {
    return;
  }

  const data = {
    serviceName: "Brac Helpline",
    serviceNumber: 16445,
    date: new Date().toLocaleTimeString(),
  };
  alert("calling" + " " + data.serviceName + " " + data.serviceNumber);
  historyData.push(data);
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerText = "";

  for (const data of historyData) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div
                class="flex justify-between items-center p-4 shadow-lg bg-[#FAFAFA] rounded-xl gap-y-2"
              >
                <div>
                  <h1 class="font-bold text-xs md:text-xl  lg:text-xl">${data.serviceName}</h1>
                  <p>${data.serviceNumber}</p>
                </div>
                <p>${data.date}</p>
              </div>
        
        `;

    historyContainer.appendChild(div);
  }
});

document.getElementById("railway-btn").addEventListener("click", function () {
  const callRateBalance = toSubtraction("coin");
  if (callRateBalance != true) {
    return;
  }

  const data = {
    serviceName: "Bangladesh Railway Helpline",
    serviceNumber: 163,
    date: new Date().toLocaleTimeString(),
  };
  alert("calling" + " " + data.serviceName + " " + data.serviceNumber);

  historyData.push(data);
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerText = "";

  for (const data of historyData) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div
                class="flex justify-between items-center p-4 shadow-lg bg-[#FAFAFA] rounded-xl gap-y-2"
              >
                <div>
                  <h1 class="font-bold text-xs md:text-xl  lg:text-xl">${data.serviceName}</h1>
                  <p>${data.serviceNumber}</p>
                </div>
                <p>${data.date}</p>
              </div>
        
        `;
historyContainer.appendChild(div);
  }
});

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-container").style.display = "none";
});

document;
const likeBtns = document.getElementsByClassName("like-btn");
for (const likeBtn of likeBtns) {
  likeBtn.addEventListener("click", function () {
    const likeCount = toGetTextToNumber("like-count");
    const newLikeCount = likeCount + 1;
    document.getElementById("like-count").innerText = newLikeCount;
  });
}

document;
const copyBtns = document.getElementsByClassName("copy-btn");

for (const copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function () {
    const title = copyBtn.parentElement.parentElement;
    const childInnerText = title.children[3].innerText;

    alert("The number has been copied" + " " + childInnerText);
    navigator.clipboard.writeText(childInnerText);

    const copyCount = toGetTextToNumber("copy-count");
    const newCopyCount = copyCount + 1;
    document.getElementById("copy-count").innerText = newCopyCount;
  });
}
