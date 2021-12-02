/* eslint-disable prettier/prettier */
import { Subject } from 'rxjs';

const subject = new Subject();

export const statusService = {
	sendMessage: (message) => subject.next({ text: message }),
	clearMessages: () => subject.next(),
	getMessage: () => subject.asObservable()
};
