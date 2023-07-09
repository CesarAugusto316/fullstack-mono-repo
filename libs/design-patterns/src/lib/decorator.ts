/* eslint-disable @typescript-eslint/ban-ts-comment */
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



// Modern implementation

function LogCall() {
  return function (
    target: object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {

    const caller = (descriptor.value as CallableFunction);
    descriptor.value = (message: string) => {
      console.log('Before sending the event', message);
      // @ts-ignore
      caller.apply(this, [message]);
      console.log('After sending the event', message);

      return caller;
    };

    return descriptor;
  };
}


class EventService {

  @LogCall()
  createEvent(message: string) {
    console.log("Currently sending event message", message);
  }
}

new EventService().createEvent('hello world');
