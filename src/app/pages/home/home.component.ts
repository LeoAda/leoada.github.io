import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  onError($event: string | Error) {
    console.log($event)
  }
  onLoad($event: string) {
    console.log($event)
  }

}
