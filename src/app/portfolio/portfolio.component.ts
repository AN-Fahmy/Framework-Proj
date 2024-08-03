import {Component } from '@angular/core';
interface IPortfolio{
  srcImage:string;
}
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  products:IPortfolio[] = [
    {
      srcImage: "./assets/image/poert1.png"
    },
    {
      srcImage: "./assets/image/port2.png"
    },
    {
      srcImage: "./assets/image/port3.png"
    },
    {
      srcImage: "./assets/image/poert1.png"
    },
    {
      srcImage: "./assets/image/port2.png"
    },
    {
      srcImage: "./assets/image/port3.png"
    },
  ]

  showLayout:boolean = false;

  imgSrc:any;
  modelImg(event:any):void{
    this.showLayout = true
    this.imgSrc = event.target.attributes.src.value
  }

  closeLayout():void{
    this.showLayout = false
  }
}
