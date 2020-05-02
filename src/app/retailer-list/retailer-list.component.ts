import { Component, OnInit } from '@angular/core';
import { RetailerService } from '../retailer.service';
import { Retailer } from '../retailer';
import { Observable,Subject } from "rxjs";  
import {FormControl,FormGroup} from '@angular/forms';  

@Component({
  selector: 'app-retailer-list',
  templateUrl: './retailer-list.component.html',
  styleUrls: ['./retailer-list.component.css']
})
export class RetailerListComponent implements OnInit {

  constructor(private retailerservice:RetailerService) { }
  retailersArray: any[] = [];  
  
  retailers: Observable<Retailer[]>;  
  retailer : Retailer=new Retailer();  
  deleteMessage=false;  
  retailerlist:any;  
  isupdated = false;      

  ngOnInit(): void {
    this.isupdated=false;  
       
    this.retailerservice.getRetailerList().subscribe(data =>{  
    this.retailers =data;  
    }) 
  }


  removeRetailer(id: String {  
    this.retailerservice.removeRetailer(id).subscribe(data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.retailerservice.getRetailerList().subscribe(data =>{  
            this.retailers =data  
            })  
        },  
        error => console.log(error));  
  }  




  updateRetailer(id: String){  
    this.retailerservice.getRetailer(id).subscribe(data => {  
          this.retailerlist=data             
        },  
        error => console.log(error));  
  }  
  
  retailerupdateform=new FormGroup({  
    retailer_Name:new FormControl(),
    retailer_Id:new FormControl(),
    buidingNo:new FormControl(),
    city:new FormControl(),
    state:new FormControl(),
    field:new FormControl(),
    zip:new FormControl()
  });  
  
  updateRet(updret){  
   this.retailer=new Retailer();   
   this.retailer.retailer_Name=this.RetailerName.value;  
   this.retailer.retailer_Id=this.RetailerId.value;  
   this.retailer.buidingNo=this.BuildingNo.value;  
   this.retailer.city=this.City.value;
   this.retailer.state=this.State.value; 
   this.retailer.field=this.Field.value; 
   this.retailer.zip=this.Zip.value; 
   
   //console.log(this.StudentBranch.value);  
     
  
   this.retailerservice.updateRetailer(this.retailer.retailer_Id,this.retailer).subscribe(  
    data => {       
      this.isupdated=true;  
      this.retailerservice.getRetailerList().subscribe(data =>{  
        this.retailers =data  
        })  
    },  
    error => console.log(error));  
  }  
  
  get RetailerName(){  
    return this.retailersaveform.get('retailer_name');  
  }  
  get RetailerId(){  
    return this.retailersaveform.get('retailer_id');  
  }  
  get BuildingNo(){  
    return this.retailersaveform.get('buildNo');  
  }  
  get City(){  
    return this.retailersaveform.get('city');  
  }  
  get State(){  
    return this.retailersaveform.get('state');  
  }  
  get Field(){  
    return this.retailersaveform.get('field');  
  }  
  get Zip(){  
    return this.retailersaveform.get('zip');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}  
