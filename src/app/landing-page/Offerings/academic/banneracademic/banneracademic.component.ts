import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-banneracademic',
  templateUrl: './banneracademic.component.html',
  styleUrls: ['./banneracademic.component.css']
})
export class BanneracademicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
