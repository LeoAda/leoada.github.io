import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { Section } from "../../components/section/section";
@Component({
  selector: 'app-about',
  imports: [MatDividerModule, Section],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

}
