import { Component, OnInit } from '@angular/core';
import {
  faCode,
  faLaptopCode,
  faCubesStacked,
  faFileCode,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  faCode = faCode;
  faLaptop = faLaptopCode;
  faCubes = faCubesStacked;
  faFile = faFileCode;
}
