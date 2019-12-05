import { Component } from '@angular/core';
const log = console.log

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-charts';
  data = [{
              label: "Gbenga",
              value: 6,
              style: "rgba(255, 0, 0, 0.5)"
          }, {
              label: "Chinedu",
              value: 7,
              style: "#800000"
          }, {
              label: "Diddy",
              value: 5,
              style: "#808000"
          }, {
              label: "Ukachukwu",
              value: 9,
              style: "#800080"
          }, {
              label: "Okoye",
              value: 5,
              style: "#008080"
          }/*, {
              label: "Nnamdi",
              value: 6,
              style: "#000000"
          }*/];

    addData() {
        this.data = this.data.concat({
              label: "Nnamdi",
              value: 6,
              style: "#000000"
        })
        log(this.data)
    }
}
