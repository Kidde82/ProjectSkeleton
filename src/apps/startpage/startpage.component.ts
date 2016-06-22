import { Component, OnInit } from "@angular/core";
import { SampleService } from "../services/sample.service";
import { Router } from "@angular/router-deprecated";

@Component({
	selector: "startpage",
	templateUrl: "apps/startpage/startpage.component.html",
	styleUrls: ["apps/startpage/startpage.component.css"]
})
export class StartpageComponent implements OnInit {
	samples: any = [];

	constructor(
		private router: Router,
		private sampleService: SampleService
	) {}

	ngOnInit() {
		console.log("oninit");
		this.sampleService.getSome()
			.then(samples => this.samples = samples)
			.then(() => {
				console.log(this.samples);
			});
	}

	gotoDetail(sample: any) {
		let link = ["SampleDetail", { id: sample.id }];
		this.router.navigate(link);
	}
}