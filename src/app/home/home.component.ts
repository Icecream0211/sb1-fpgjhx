import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { BaziService } from '../services/bazi.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  birthDateTime: string = ''
  birthCity: string = ''
  gender: string = 'male'

  constructor(
    private routerExtensions: RouterExtensions,
    private baziService: BaziService
  ) {}

  onSubmit() {
    this.baziService.analyzeBazi(this.birthDateTime, this.birthCity, this.gender)
      .subscribe(
        (result) => {
          this.routerExtensions.navigate(['/result'], {
            queryParams: { analysis: JSON.stringify(result) }
          })
        },
        (error) => {
          alert('解析失败，请检查输入内容并重试')
        }
      )
  }
}