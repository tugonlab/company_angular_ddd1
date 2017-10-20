import { Language } from './Language';
import { Resume } from './Resume';

export class About {

	// properties
	description: string;
	id;
	language: Language;
	languageId;
	resume: Resume;
	resumeId;
	title: string;
	//////////////

	constructor(){
		this.language = new Language();
		this.resume = new Resume();
	}
}
