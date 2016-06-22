import { Injectable } from "@angular/core";

@Injectable()
export class SampleService {
	getSome() {
		return Promise.resolve([{id: 1, name: "Adam"}, {id: 2, name: "Bertil"}]);
	}
}