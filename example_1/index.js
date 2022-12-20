import { PubSub } from "./pubSub.js";

console.log("kkk");
const notificationService = new PubSub();

const firstNotificationInput = document.getElementById("first-input");
const firstNotificationBtn = document.getElementById("first-notification-btn");

firstNotificationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Enviando notificação 1");
  console.log("Mensagem 1 = ", firstNotificationInput.value);

  notificationService.publish("firstEvent", firstNotificationInput.value);
});

const secondNotificationInput = document.getElementById("second-input");
const secondNotificationBtn = document.getElementById(
  "second-notification-btn"
);

secondNotificationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Enviando notificação 2");
  console.log("Mensagem 2 = ", secondNotificationInput.value);

  notificationService.publish("secondEvent", secondNotificationInput.value);
});

const firstEventResponse = document.getElementById("first-subscriber");
const addNotificationDataToFirstEvent = (notification) =>
  (firstEventResponse.innerHTML = notification);

const secondEventResponse = document.getElementById("second-subscriber");
const addNotificationDataToSecondEvent = (notification) =>
  (secondEventResponse.innerHTML = notification);

const subscribeFirstEventBtn = document.getElementById("first-subscriber-btn");
subscribeFirstEventBtn.addEventListener("click", (e) => {
  e.preventDefault();

  notificationService.subscribe("firstEvent", addNotificationDataToFirstEvent);
});
const unsubscribeFirstEventBtn = document.getElementById(
  "first-un-subscriber-btn"
);
unsubscribeFirstEventBtn.addEventListener("click", (e) => {
  e.preventDefault();

  notificationService.unsubscribe(
    "firstEvent",
    addNotificationDataToFirstEvent
  );
});

const subscribeSecondEventBtn = document.getElementById(
  "second-subscriber-btn"
);
subscribeSecondEventBtn.addEventListener("click", (e) => {
  e.preventDefault();

  notificationService.subscribe(
    "secondEvent",
    addNotificationDataToSecondEvent
  );
});
const unsubscribeSecondEventBtn = document.getElementById(
  "second-un-subscriber-btn"
);
unsubscribeSecondEventBtn.addEventListener("click", (e) => {
  e.preventDefault();

  notificationService.unsubscribe(
    "secondEvent",
    addNotificationDataToSecondEvent
  );
});
