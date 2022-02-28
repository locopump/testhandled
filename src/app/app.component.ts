import {
  Component, Inject,
  OnInit,
} from '@angular/core';
import {ServerService} from "./server.service";

@Component({
  selector: 'thp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  actress: Array<any> = [];
  mainUrl: string = 'https://www.pinkvilla.com/';
  myCurrentPage: number = 1;

  constructor (
    private server: ServerService
  ) {
    this.mainUrl = 'https://www.pinkvilla.com/';
  }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.server.getPhotos(this.myCurrentPage).subscribe((response) => {
      response.nodes.map((item: any) => {
        this.actress.push(item.node);
      });
      this.myCurrentPage++;
    });
  }
}
