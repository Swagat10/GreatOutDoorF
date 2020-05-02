import { Component, OnInit } from '@angular/core';
import { Retailer } from '../retailer';
import {RetailerService} from '../retailer.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';  


@Component({
  selector: 'app-add-retailer',
  templateUrl: './add-retailer.component.html',
  styleUrls: ['./add-retailer.component.css']
})
export class AddRetailerComponent implements OnInit {

  constructor() {}

  retailer : Retailer = new Retailer();
  submitted = false;

  ngOnInit(): void {
    this.submitted=false;
  }

  retailersaveform=new FormGroup({  
    retailer_Name:new FormControl('' , [Validators.required , Validators.maxLength(10) ]),
    retailer_Id:new FormControl('' , [Validators.required , Validators.minLength(5) ]),
    buidingNo:new FormControl(),
    city:new FormControl(),
    state:new FormControl(),
    field:new FormControl(),
    zip:new FormControl()
  });  
  
  saveRetailer(saveRetailer){  
    this.retailer=new Retailer();     
    this.retailer.retailer_Name=this.RetailerName.value;  
    this.retailer.retailer_Id=this.RetailerId.value;
    this.retailer.buidingNo=this.BuildingNo.value;
    this.retailer.city=this.City.value;
    this.retailer.state=this.State.value;
    this.retailer.field=this.Field.value;
    this.retailer.zip=this.Zip.value;

    this.submitted = true;  
    this.save();

  }

  save() {  
    this.retailerservice.addRetailer(this.retailer)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.retailer = new Retailer();
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

  addRetailerForm(){  
    this.submitted=false;  
    this.retailersaveform.reset();  
  }  

}