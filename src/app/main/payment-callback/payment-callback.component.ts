import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestConsulta } from '../shared/dtos/model/requestConsulta';
import { InsuranceService } from '../shared/services/insurance.service';
import { PolizaPlanMascota, PolizaPlanMascotaDBData } from '../shared/dtos/model/polizaPlanMascota';

@Component({
  selector: 'app-payment-callback',
  templateUrl: './payment-callback.component.html',
  styleUrls: ['./payment-callback.component.css'],
})

export class PaymentCallbackComponent implements OnInit {
  errorResponse: any;
  constructor(private route: ActivatedRoute,
    private insuranceService: InsuranceService) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe((params) => {
      const transactionId = params['transaction_id'];
      let insuranceData: PolizaPlanMascotaDBData;
      insuranceData = {
        contenido: [],
        internalId: "",
        ccAviso: "",
        amountTotal: 0,
        statusInsurance: ""
      };

      this.insuranceService.getInsuranceData(transactionId).subscribe({
        next: (data: PolizaPlanMascotaDBData) => {
          insuranceData = data;
        },
        error: (errorResult) => {
          this.errorResponse = errorResult.error?.errores?.map((x: { error: any; }) => x.error) || ['Unknown error'];
        },
      });

      const requestConsulta: RequestConsulta = {
        headRequest: {
          "sociedad": "1000",
          "cdFuente": "PRUEBA2",
          "refExterna": "",
          "cdFlujo": "CONPASARELA",
          "authRdSura": {
            "usuarioFuente": "o95lJqB7B8jZa3kjU90wyr",
            "passFuente": "WFtv4zz2FkQS"
          }
        },
        avsid: insuranceData.ccAviso,
        cdFuente: "PRUEBA2",
        fechaIni: "0000-00-00",
        fechaFin: "0000-00-00",
        estado: "",
        nmDocumento: "",
        formaPago: ""
      };

   
      
      let polizaPlanMascota: PolizaPlanMascota; 
      polizaPlanMascota = {
        contenido: insuranceData.contenido        
      };
      polizaPlanMascota.contenido = insuranceData.contenido;

      this.insuranceService.checkInsurance(requestConsulta).subscribe({
        next: (result) => {
          console.log(result);
          this.insuranceService.createInsurance(polizaPlanMascota).subscribe({
            next: (result) => {
              console.log(result);
            },
            error: (errorResult) => {
              this.errorResponse = errorResult.error.errores.map((x: { error: any; }) => x.error);
            },
            complete: () => {
            }
          });
        },
        error: (errorResult) => {
          this.errorResponse = errorResult.error.errores.map((x: { error: any; }) => x.error);
        },
        complete: () => {
        }
      });
      console.log('Payment callback received:');
      console.log('Transaction ID:', transactionId);
    });
  }
}
