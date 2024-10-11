import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BaziService {
  private apiUrl = 'https://api.example.com/bazi' // Replace with actual API URL

  constructor(private http: HttpClient) {}

  analyzeBazi(birthDateTime: string, birthCity: string, gender: string): Observable<any> {
    // For demo purposes, we'll return mock data
    // In a real app, you'd use this.http.post(this.apiUrl, payload)
    return of({
      birthChart: "🌞天干: 甲 地支: 子 五行: 木水相生 ✨",
      decadeFortune: "🌟 2023-2033: 事业上升期 📈\n2033-2043: 感情稳定期 💖\n2043-2053: 财运旺盛期 💰",
      favorableUnfavorable: "🔺喜用神: 火 木\n🔻忌神: 金 土\n⚖️ 五行平衡: 需要补充火元素",
      careerDevelopment: "💼 优势: 创新能力强，领导才能突出\n🚀 挑战: 需要提高耐心和细节把控\n⭐ 适合行业: 科技、教育、创意产业",
      loveLife: "❤️ 感情特质: 浪漫多情，渴望稳定\n💫 桃花运: 2024年、2026年桃花旺盛\n💑 理想伴侣: 性格温和，善解人意",
      elementBalance: {
        wood: 7,
        fire: 4,
        earth: 5,
        metal: 3,
        water: 6
      },
      futureFortune: {
        2023: { overall: 7, wealth: 6, health: 8, love: 5 },
        2024: { overall: 8, wealth: 7, health: 7, love: 8 },
        2025: { overall: 6, wealth: 8, health: 6, love: 7 }
      },
      fortuneHeatmap: {
        2023: { 1: 5, 2: 6, 3: 7, 4: 8, 5: 7, 6: 6, 7: 5, 8: 6, 9: 7, 10: 8, 11: 7, 12: 6 },
        2024: { 1: 6, 2: 7, 3: 8, 4: 7, 5: 6, 6: 7, 7: 8, 8: 7, 9: 6, 10: 7, 11: 8, 12: 7 },
        2025: { 1: 7, 2: 6, 3: 5, 4: 6, 5: 7, 6: 8, 7: 7, 8: 6, 9: 5, 10: 6, 11: 7, 12: 8 }
      },
      luckyElements: {
        favorable: 60,
        unfavorable: 40
      },
      directionColor: {
        east: { color: '#4CAF50', meaning: '代表生机与成长，有助于新项目的开展' },
        south: { color: '#F44336', meaning: '象征热情与活力，有利于人际交往和事业发展' },
        west: { color: '#FFC107', meaning: '暗示稳重与收获，适合总结经验和稳固基础' },
        center: { color: '#9C27B0', meaning: '代表平衡与和谐，有助于调节身心、提升整体运势' }
      }
    }).pipe(delay(1000)) // Simulate network delay
  }
}