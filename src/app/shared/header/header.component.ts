import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public infoPage: InfoPageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  bucarItem(termino: string) {

    if( termino.length < 1){
      return;
    }

    this.router.navigate(['/buscar', termino]);

  }

}
