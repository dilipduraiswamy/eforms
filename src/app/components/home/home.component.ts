import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  primary_color:string='primary'

  formText:string='Untitled Form';
  formDescription:string='Form Description';

  canEditCode:boolean=false;
  isStarClicked:boolean=false;


  starIconText='star_border';

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.formText);
  }

  changeStarIcon() {
    if (this.isStarClicked) {
      this.isStarClicked=false;
      this.starIconText= 'star';
    } else {
      this.isStarClicked=true;
      this.starIconText= 'star_border';
    }
  }
  
  editFormTitleText(){
if(this.canEditCode){
  this.canEditCode=false;
}else{
  this.canEditCode=true;
}
  }
  
  onFormTitleTextFocusOut(event: any){
    this.canEditCode=false;
    this.titleService.setTitle(this.formText);
 }
  
  


}
