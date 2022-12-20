class PubSub {
  constructor() {
    this.subscribers = {};
  }
  //Registrar quem irá ser notificado por tal evento
  subscribe(event, callback) {
    if (
      Array.isArray(this.subscribers[event]) &&
      this.subscribers[event].length
    ) {
      this.subscribers[event] = [...this.subscribers[event], callback];
    } else {
      this.subscribers[event] = [callback];
    }

    return () => this.unsubscribe(event, callback);
  }
  //Cancelar o registro de quem está esperando tal evento
  unsubscribe(event, callback) {
    this.subscribers[event] = this.subscribers[event].filter((sub) => {
      return sub !== callback;
    });
  }
  //Notificar todo mundo
  publish(event, message) {
    if (Array.isArray(this.subscribers[event])) {
      console.log(
        `🫡 - Notificando para todos os ${this.subscribers[event].length} assinantes...`
      );
      this.subscribers[event].forEach((sub) => {
        sub(message);
      });
      console.log("✅ - Todos os assinantes foram notificados com sucesso ");
      return true;
    }

    console.log(
      "❌ - Não irá ser notificado para ninguém pois não tem inscritos"
    );
    alert(
      `❌ - Evento ${event} Não irá notificar para ninguém pois não tem inscritos`
    );
    return false;
  }
}

export { PubSub };
