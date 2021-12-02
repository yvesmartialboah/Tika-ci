/* eslint-disable prettier/prettier */
import { Subject } from 'rxjs';

const subject = new Subject();

export const PickupService = {
	sendMessagecheck: (message) => subject.next({ text: message }),
	sendMessage: (message) => subject.next({ text: message }),
	clearMessagescheck: () => subject.next(),
	getMessagecheck: () => subject.asObservable(),
};

// Modal.js