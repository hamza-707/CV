import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          entry.target.classList.contains('skill-class-100')
        ) {
          entry.target.classList.remove('skill-class-100');
          entry.target.classList.add('skill-animate-100');
        } else if (
          entry.isIntersecting &&
          entry.target.classList.contains('skill-class-95')
        ) {
          entry.target.classList.remove('skill-class-95');
          entry.target.classList.add('skill-animate-95');
        } else if (
          entry.isIntersecting &&
          entry.target.classList.contains('skill-class-90')
        ) {
          entry.target.classList.remove('skill-class-90');
          entry.target.classList.add('skill-animate-90');
        } else if (
          entry.isIntersecting &&
          entry.target.classList.contains('skill-class-85')
        ) {
          entry.target.classList.remove('skill-class-85');
          entry.target.classList.add('skill-animate-85');
        } else if (
          entry.isIntersecting &&
          entry.target.classList.contains('skill-class-80')
        ) {
          entry.target.classList.remove('skill-class-80');
          entry.target.classList.add('skill-animate-80');
        }
      });
    });

    observer.observe(document.querySelector('.skill-class-100')!);
    observer.observe(document.querySelector('#first-skill')!);
    observer.observe(document.querySelector('#second-skill')!);
    observer.observe(document.querySelector('.skill-class-90')!);
    observer.observe(document.querySelector('.skill-class-85')!);
    observer.observe(document.querySelector('.skill-class-80')!);
  }
}
