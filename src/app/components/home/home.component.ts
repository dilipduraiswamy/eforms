import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';



import { DndDropEvent,DropEffect} from 'ngx-drag-drop';

import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { value, field } from 'src/app/global.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
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
  
 show:any;
 value:value={
   label:"",
   value:""
 };
 success = false;

 fieldModels:Array<field>=[
   {
     "type": "text",
     "icon": "font_download",
     "label": "Text",
     "description": "Enter your name",
     "placeholder": "Enter your name",
     "className": "form-control",
     "subtype": "text",
     "regex" : '',
     "handle":true
   },
   {
     "type": "email",
     "icon": "email",
     "required": true,
     "label": "Email",
     "description": "Enter your email",
     "placeholder": "Enter your email",
     "className": "form-control",
     "subtype": "text",
     "regex" : "^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$",
     "errorText": "Please enter a valid email",
     "handle":true
   },
   {
     "type": "phone",
     "icon": "phone",
     "label": "Phone",
     "description": "Enter your phone",
     "placeholder": "Enter your phone",
     "className": "form-control",
     "subtype": "text",
     "regex" : "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
     "errorText": "Please enter a valid phone number",
     "handle":true
   },
   {
     "type": "number",
     "label": "Number",
     "icon": "format_list_numbered",
     "description": "Age",
     "placeholder": "Enter your age",
     "className": "form-control",
     "value": "20",
     "min": 12,
     "max": 90
   },
   {
     "type": "date",
     "icon":"calendar_today",
     "label": "Date",
     "placeholder": "Date",
     "className": "form-control"
   },
   {
     "type": "datetime-local",
     "icon":"date_range",
     "label": "DateTime",
     "placeholder": "Date Time",
     "className": "form-control"
   },
   {
     "type": "textarea",
     "icon":"text_fields",
     "label": "Textarea" 
   },
   {
     "type": "paragraph",
     "icon": "format_indent_increase",
     "label": "Paragraph",
     "placeholder": "Type your text to display here only" 
   },
   {
     "type": "checkbox",
     "required": true,
     "label": "Checkbox",
     "icon":"check_box",
     "description": "Checkbox",
     "inline": true,
     "values": [
       {
         "label": "Option 1",
         "value": "option-1"
       },
       {
         "label": "Option 2",
         "value": "option-2"
       }
     ]
   },
   {
     "type": "radio",
     "icon":"radio_button_checked",
     "label": "Radio",
     "description": "Radio boxes",
     "values": [
       {
         "label": "Option 1",
         "value": "option-1"
       },
       {
         "label": "Option 2",
         "value": "option-2"
       }
     ]
   },
   {
     "type": "autocomplete",
     "icon":"menu",
     "label": "Select",
     "description": "Select",
     "placeholder": "Select",
     "className": "form-control",
     "values": [
       {
         "label": "Option 1",
         "value": "option-1"
       },
       {
         "label": "Option 2",
         "value": "option-2"
       },
       {
         "label": "Option 3",
         "value": "option-3"
       }
     ]
   },
   {
     "type": "file",
     "icon":"attach_file",
     "label": "File Upload",
     "className": "form-control",
     "subtype": "file"
   },
   {
     "type": "button",
     "icon":"send",
     "subtype": "submit",
     "label": "Submit"
   }
 ];

 modelFields:Array<field>=[];
 model:any = {
   name:'App name...',
   description:'App Description...',
   theme:{
     bgColor:"ffffff",
     textColor:"555555",
     bannerImage:""
   },
   attributes:this.modelFields
 };

 report = false;
 reports:any = [];

 

 

 onDragStart(event:DragEvent) {
   console.log("drag started", JSON.stringify(event, null, 2));
 }
 
 onDragEnd(event:DragEvent) {
   console.log("drag ended", JSON.stringify(event, null, 2));
 }
 
 onDraggableCopied(event:DragEvent) {
   console.log("draggable copied", JSON.stringify(event, null, 2));
 }
 
 onDraggableLinked(event:DragEvent) {
   console.log("draggable linked", JSON.stringify(event, null, 2));
 }
   
  onDragged( item:any, list:any[], effect:DropEffect ) {
   if( effect === "move" ) {
     const index = list.indexOf( item );
     list.splice( index, 1 );
   }
 }
     
 onDragCanceled(event:DragEvent) {
   console.log("drag cancelled", JSON.stringify(event, null, 2));
 }
 
 onDragover(event:DragEvent) {
   console.log("dragover", JSON.stringify(event, null, 2));
 }
 
 onDrop( event:DndDropEvent, list?:any[] ) {
   if( list && (event.dropEffect === "copy" || event.dropEffect === "move") ) {
     
     if(event.dropEffect === "copy")
     event.data.name = event.data.type+'-'+new Date().getTime();
     let index = event.index;
     if( typeof index === "undefined" ) {
       index = list.length;
     }
     list.splice( index, 0, event.data );
   }
 }

 addValue(values: value[]){
   values.push(this.value);
   this.value={label:"",value:""};
 }

 removeField(i: any){
   swal({
     title: 'Are you sure?',
     text: "Do you want to remove this field?",
     type: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#00B96F',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Yes, remove!'
   }).then((result) => {
     if (result.value) {
       this.model.attributes.splice(i,1);
     }
   });

 }

 updateForm(){
   let input = new FormData;
   input.append('id',this.model._id);
   input.append('name',this.model.name);
   input.append('description',this.model.description);
   input.append('bannerImage',this.model.theme.bannerImage);
   input.append('bgColor',this.model.theme.bgColor);
   input.append('textColor',this.model.theme.textColor);
   input.append('attributes',JSON.stringify(this.model.attributes));

   // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
   //   console.log(r);
   //   swal('Success','App updated successfully','success');
   // });
 }


 initReport(){
   this.report = true; 
   let input = {
     id:this.model._id
   }
   // this.us.getDataApi('/admin/allFilledForms',input).subscribe(r=>{
   //   this.reports = r.data;
   //   console.log('reports',this.reports);
   //   this.reports.map(records=>{
   //     return records.attributes.map(record=>{
   //       if(record.type=='checkbox'){
   //         record.value = record.values.filter(r=>r.selected).map(i=>i.value).join(',');
   //       }
   //     })
   //   });
   // });
 }



 toggleValue(item: { selected: boolean; }){
   item.selected = !item.selected;
 }

 submit(){
   let valid = true;
   let validationArray = JSON.parse(JSON.stringify(this.model.attributes));
   // validationArray.reverse().forEach((field: { label: string; required: string; value: string; type: string; regex: string | RegExp; errorText: string | undefined; values: { filter: (arg0: (r: any) => any) => { (): any; new(): any; length: number; }; }; }) => {
   //   console.log(field.label+'=>'+field.required+"=>"+field.value);
   //   if(field.required && !field.value && field.type != 'checkbox'){
   //     swal('Error','Please enter '+field.label,'error');
   //     valid = false;
   //     return false;
   //   }
   //   if(field.required && field.regex){
   //     let regex = new RegExp(field.regex);
   //     if(regex.test(field.value) == false){
   //       swal('Error',field.errorText,'error');
   //       valid = false;
   //       return false;
   //     }
   //   }
   //   if(field.required && field.type == 'checkbox'){
   //     if(field.values.filter((r: { selected: any; })=>r.selected).length == 0){
   //       swal('Error','Please enterrr '+field.label,'error');
   //       valid = false;
   //       return false;
   //     }

   //   }
   // });
   // if(!valid){
   //   return false;
   // }
   console.log('Save',this.model);
   let input = new FormData;
   input.append('formId',this.model._id);
   input.append('attributes',JSON.stringify(this.model.attributes))
   // this.us.postDataApi('/user/formFill',input).subscribe(r=>{
   //   console.log(r);
   //   swal('Success','You have contact sucessfully','success');
   //   this.success = true;
   // },error=>{
   //   swal('Error',error.message,'error');
   // });
 }

 test(){
   
 }
  


}
