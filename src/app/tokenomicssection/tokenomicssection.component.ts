import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tokenomicssection',
  templateUrl: './tokenomicssection.component.html',
  styleUrls: ['./tokenomicssection.component.scss']
})
export class TokenomicssectionComponent  {

  chartOptions = {
	animation: true,
    theme:"dark2",
	title:{
		verticalAlign: "center",
        horizontalAlign: "center",
		fontFamily: "Montserrat",
        fontWeight: "normal",
		fontSize: "20",
		text:"10,000,000,000 Tokens"	
	},
	  data: [{
		type: "doughnut",
		indexLabelLineColor: "white",
		indexLabelFontColor: "white",
		yValueFormatString: "#,###.##'%'",
        innerRadius: "80%", 
		indexLabel: "{name}",
		dataPoints: [
		  { y: 50,color:"#f8b200", name: "IDO" },
		  { y: 25,color:"#ba840c", name: "Exchange listings" },
		  { y: 15,color:"#9d6d0d", name: "Refferal and Staking" },
		  { y: 15,color:"#5e450d", name: "Private Sales" }
		]
	  }]
	}	
    
  }
 
