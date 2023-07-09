interface Event {
  send(message: string): void
}


export class SendEmailEvent implements Event {

  public send(message: string): void {
    console.log('Currently sending message', message);
  }
}


export class LogEventDecorator implements Event {

  constructor(private event: Event) { }

  public send(message: string): void {
    console.log('Before sending the event', message);
    this.event.send(message);
    console.log('After sending the event', message);
  }
}

const sendEmail: Event = new SendEmailEvent();
const logSendEmailDecorated = new LogEventDecorator(sendEmail);

logSendEmailDecorated.send('hi');
