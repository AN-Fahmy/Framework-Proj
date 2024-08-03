import { Component } from '@angular/core';
interface IInputs{
  id:string;
  type:string;
}
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  dataInputs:IInputs[] = [
    {
      id:"userName",
      type:"text",
    },
    {
      id:"userAge",
      type:"number",
    },
    {
      id:"userEmail",
      type:"email",
    },
    {
      id:"userPassword",
      type:"password",
    },
  ]
}

