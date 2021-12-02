/* eslint-disable prettier/prettier */
import { Subject } from 'rxjs';

const subject = new Subject();

export const SideBarService = {
	sendMessagecheck: (message) => subject.next({ text: message }),
	clearMessagescheck: () => subject.next(),
	getMessagecheck: () => subject.asObservable(),
};
