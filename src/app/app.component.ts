import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faLinkedin,
  faGoogle,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faGoogle = faGoogle;
  selectedTab = 'Home';

  constructor(private router: Router) {}

  changeTab(tabName: string) {
    this.selectedTab = tabName;
    if (tabName === 'Home') {
      this.router.navigate(['']);
    } else if (tabName === 'About') {
      this.router.navigate(['about-me']);
    } else if (tabName === 'Portfolio') {
      this.router.navigate(['portfolio']);
    } else if (tabName === 'Services') {
      this.router.navigate(['services']);
    }
  }
}
