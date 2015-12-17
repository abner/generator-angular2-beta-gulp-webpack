import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
  selector: "app",
  template: `{{message}}`
})
export class AppComponent {
  message: string;

  constructor() {
    var that = this;
    that.message = "Hello World";
  }
}

bootstrap(AppComponent);
