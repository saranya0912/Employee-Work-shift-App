import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.page.html',
  styleUrls: ['./nextpage.page.scss'],
})
export class NextpagePage implements OnInit {
  public technologies : Array<{ shift: string, shiftpattern: string, shiftline: string }> = [
    { 
       shift : 'SS-1', 
       shiftpattern : 'EEDDM',
       shiftline: 'X3176MX'
    },
    { 
      shift : 'SS-2', 
      shiftpattern : 'EEDDM',
      shiftline: 'X3176MX'
   },
   { 
    shift : 'SS-3', 
    shiftpattern : 'EEDDM',
    shiftline: 'X3176MX'
 },
 { 
  shift : 'SS-4', 
  shiftpattern : 'EEDDM',
  shiftline: 'X3376X'
},
{ 
  shift : 'SS-5', 
  shiftpattern : 'EEDDM',
  shiftline: 'X333176X'
},
{ 
  shift : 'SS-6', 
  shiftpattern : 'EEDDM',
  shiftline: 'X31766X'
},
{ 
  shift : 'SS-7', 
  shiftpattern : 'EEDDM',
  shiftline: 'X33333X'
},
{ 
  shift : 'SM-1', 
  shiftpattern : 'EEDDM',
  shiftline: 'XX3176M'
},
{ 
  shift : 'SS-2', 
  shiftpattern : 'EEDDM',
  shiftline: 'XX3176M'
},
  ];
  

  constructor() {
    console.log("redirected to nextpage");
   }

  ngOnInit() {
  }

}


