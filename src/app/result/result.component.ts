import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SocialShare } from '@nativescript/social-share'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  analysis: any = {
    birthChart: '',
    decadeFortune: '',
    favorableUnfavorable: '',
    careerDevelopment: '',
    loveLife: ''
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['analysis']) {
        this.analysis = JSON.parse(params['analysis'])
      }
    })
  }

  shareResult() {
    const shareText = `我的八字分析结果:\n\n命盘: ${this.analysis.birthChart}\n大运: ${this.analysis.decadeFortune}\n喜忌: ${this.analysis.favorableUnfavorable}\n事业: ${this.analysis.careerDevelopment}\n感情: ${this.analysis.loveLife}`
    
    SocialShare.shareText(shareText, "我的八字分析")
  }
}