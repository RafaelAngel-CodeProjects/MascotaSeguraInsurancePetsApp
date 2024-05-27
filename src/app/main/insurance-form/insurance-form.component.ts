import { AfterViewInit, Component, ViewChild,PLATFORM_ID, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule,isPlatformBrowser } from '@angular/common';
import { Observable, BehaviorSubject, Subscription, OperatorFunction, Subject, debounceTime, distinctUntilChanged, filter, map, merge } from 'rxjs';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { InsuranceService } from '../shared/services/insurance.service';
import { Catalogo } from '../shared/dtos/model/catalogo';
import { RespuestaCatalogo } from '../shared/dtos/model/respuestaCatalogo';
import { PolizaPlanMascota, PolizaPlanMascotaDBData } from '../shared/dtos/model/polizaPlanMascota';
import { RequestSession } from '../shared/dtos/model/requestSession';
import { RequestConsulta } from '../shared/dtos/model/requestConsulta';
import { v4 as uuidv4 } from 'uuid';
declare var anime: any;       

@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrl: './insurance-form.component.css'
})
export class InsuranceFormComponent implements AfterViewInit {
  
  applyForm: FormGroup;
  bgImage: string = "";
  petbreeds: string[] = []
  pets: string[] = [];
  dogBreeds: string[] = [];
  catBreeds: string[] = [];
  cities: string[] = [];
  errorResponse: any[] = [];

  constructor(private insuranceService: InsuranceService, @Inject(PLATFORM_ID) private platformId: Object) {

    this.applyForm = new FormGroup({
      tipoMascota: new FormControl(''),
      nombreMascota: new FormControl(''),
      petBreed: new FormControl(''),
      fechaNacimientoMascota: new FormControl(''),
      generoMascota: new FormControl(''),
      tipoDocumentoAsegurado: new FormControl(''),
      numeroDocumentoAsegurado: new FormControl(''),
      genero: new FormControl(''),
      primerNombreAsegurado: new FormControl(''),
      primerApellidoAsegurado: new FormControl(''),
      correoAsegurado: new FormControl(''),
      celularAsegurado: new FormControl(''),
      telefonoAsegurado: new FormControl(''),
      fechaNacimientoAsegurado: new FormControl(''),
      ciudadAsegurado: new FormControl(''),
      autorizaEnvioSMS: new FormControl(''),
      autorizaEnvioCorreo: new FormControl(''),
      autorizaTratamientoDatos: new FormControl(''),
      direccionAsegurado: new FormControl(''),
      tipoDocumentoCuentahabiente: new FormControl(''),
      numeroDocumentoCuentahabiente: new FormControl(''),
      primerNombreCuentahabiente: new FormControl(''),
      segundoNombreCuentahabiente: new FormControl(''),
      primerApellidoCuentahabiente: new FormControl(''),
      segundoApellidoCuentahabiente: new FormControl(''),
      formaPago: new FormControl(''),
      medioPago: new FormControl(''),
      banco: new FormControl(''),
      tipoCuenta: new FormControl(''),
      numeroCuenta: new FormControl(''),
      numeroCuentaConfirmacion: new FormControl(''),
      codigoVendedor: new FormControl(''),
      codigoVendedorConfirmacionr: new FormControl(''),
      fechaInicioVigencia: new FormControl(''),
      planMascota: new FormControl(''),
    });
  }


  // ngAfterViewInit(): void {
   
  //   // Wrap every letter in a span
  //   let textWrapper;
  //   if (document) {
  //     textWrapper = document.querySelector('.an-1');
  //   }
  //   if (textWrapper && textWrapper.textContent) {
  //     textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  //   }

  //   anime.timeline({ loop: true })
  //     .add({
  //       targets: '.an-1 .letter',
  //       scale: [1, 1],
  //       opacity: [0, 1],
  //       translateZ: 0,
  //       easing: "easeInQuad",
  //       duration: 950,
  //       delay: (el: any, i: number) => 70 * i
  //     }).add({
  //       targets: '.an-1',
  //       opacity: 0,
  //       duration: 1000,
  //       easing: "easeInQuad",
  //       delay: 1000
  //     });


  // }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Only execute this code in the browser context
      const textWrapper = document.querySelector('.an-1');
      if (textWrapper && textWrapper.textContent) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      }

      anime.timeline({ loop: true })
        .add({
          targets: '.an-1 .letter',
          scale: [1, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeInQuad",
          duration: 950,
          delay: (el: any, i: number) => 70 * i
        }).add({
          targets: '.an-1',
          opacity: 0,
          duration: 1000,
          easing: "easeInQuad",
          delay: 1000
        });
    }
  }
  
  getData(requestBody: Catalogo, data: string[]) {
    this.insuranceService.getData(requestBody).subscribe(bpet => {
      switch (requestBody.campo) {
        case 'razaPerro':
          this.dogBreeds = Object.assign([], bpet.sort());
          break;
        case 'razaGato':
          this.catBreeds = Object.assign([], bpet.sort());
          break;
        case 'ciudadAsegurado':
          this.cities = Object.assign([], bpet.sort());
          break;
        default:
          data = Object.assign([], bpet.sort());
          break;
      }
    });
  }

  changePet(value: boolean) {
    this.pets = value ? this.dogBreeds : this.catBreeds;
  }

  ngOnInit(): void {
    let requestBody: Catalogo = { campo: 'razaPerro' };
    this.getData(requestBody, this.dogBreeds);

    requestBody = { campo: 'razaGato' };
    this.getData(requestBody, this.catBreeds);

    requestBody = { campo: 'ciudadAsegurado' };
    this.getData(requestBody, this.cities);


    this.applyForm.get('tipoMascota')?.valueChanges.subscribe(value => {
      value = value == undefined ? false : value;
      this.changePet(value);
    });
    console.log(this.dogBreeds);
  }

  currentStep: number = 1;

  @ViewChild('instanceRaza', { static: true })
  instanceRaza!: NgbTypeahead;
  @ViewChild('instanceEdad', { static: true })
  instanceEdad!: NgbTypeahead;
  @ViewChild('instanceCity', { static: true })
  instanceCity!: NgbTypeahead;
  focusRaza$ = new Subject<string>();
  clickRaza$ = new Subject<string>();
  focusCity$ = new Subject<string>();
  clickCity$ = new Subject<string>();

  searchPetBreed: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.clickRaza$.pipe(filter(() => !this.instanceRaza.isPopupOpen()));
    const inputFocus$ = this.focusRaza$;
    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) =>
        (term === '' ? this.pets : this.pets.filter((v) => v?.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10),
      ),
    );
  };

  searchCity: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.clickCity$.pipe(filter(() => !this.instanceCity.isPopupOpen()));
    const inputFocus$ = this.focusCity$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) =>
        (term === '' ? this.cities : this.cities.filter((v) => v?.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10),
      ),
    );
  };

  setCurrentStep(step: number): void {
    this.currentStep = step;
  }

  submitFormPets() {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10);
    const dynamicId = uuidv4();

    const PolizaPlanMascotaDBData: PolizaPlanMascotaDBData = {
      contenido: [{
        tipoDocumentoAsegurado: this.applyForm.get('tipoDocumentoAsegurado')?.value,
        numeroDocumentoAsegurado: this.applyForm.get('numeroDocumentoAsegurado')?.value,
        primerNombreAsegurado: this.applyForm.get('primerNombreAsegurado')?.value,
        primerApellidoAsegurado: this.applyForm.get('primerApellidoAsegurado')?.value,
        fechaNacimientoAsegurado: this.applyForm.get('fechaNacimientoAsegurado')?.value.replace(/-/g, ''),
        genero: this.applyForm.get('genero')?.value,
        fechaInicioVigencia: formattedDate,
        //fechaInicioVigencia: this.applyForm.get('fechaInicioVigencia')?.value.replace(/-/g,''),
        // fechaInicioVigencia: this.applyForm.get('fechaInicioVigencia')?.value.replace(/-/g,''),
        formaPago: this.applyForm.get('formaPago')?.value,
        medioPago: this.applyForm.get('medioPago')?.value,
        banco: this.applyForm.get('banco')?.value,
        tipoCuenta: this.applyForm.get('tipoCuenta')?.value,
        numeroCuenta: this.applyForm.get('numeroCuenta')?.value,
        numeroCuentaConfirmacion: this.applyForm.get('numeroCuentaConfirmacion')?.value,
        tipoDocumentoCuentahabiente: this.applyForm.get('tipoDocumentoCuentahabiente')?.value,
        numeroDocumentoCuentahabiente: this.applyForm.get('numeroDocumentoCuentahabiente')?.value,
        primerNombreCuentahabiente: this.applyForm.get('primerNombreCuentahabiente')?.value,
        segundoNombreCuentahabiente: this.applyForm.get('segundoNombreCuentahabiente')?.value,
        primerApellidoCuentahabiente: this.applyForm.get('primerApellidoCuentahabiente')?.value,
        segundoApellidoCuentahabiente: this.applyForm.get('segundoApellidoCuentahabiente')?.value,
        nombreMascota: this.applyForm.get('nombreMascota')?.value,
        tipoMascota: this.applyForm.get('tipoMascota')?.value == false ? "Gato" : "Perro",
        razaPerro: this.applyForm.get('tipoMascota')?.value ? this.applyForm.get('petBreed')?.value : '',
        razaGato: !this.applyForm.get('tipoMascota')?.value ? this.applyForm.get('petBreed')?.value : '',
        generoMascota: this.applyForm.get('generoMascota')?.value,
        fechaNacimientoMascota: this.applyForm.get('fechaNacimientoMascota')?.value.replace(/-/g, ''),
        codigoVendedor: this.applyForm.get('codigoVendedor')?.value,
        codigoVendedorConfirmacion: this.applyForm.get('codigoVendedorConfirmacionr')?.value,
        ciudadAsegurado: this.applyForm.get('ciudadAsegurado')?.value,
        direccionAsegurado: this.applyForm.get('direccionAsegurado')?.value,
        correoAsegurado: this.applyForm.get('correoAsegurado')?.value,
        telefonoAsegurado: this.applyForm.get('telefonoAsegurado')?.value,
        celularAsegurado: this.applyForm.get('celularAsegurado')?.value,
        autorizaTratamientoDatos: this.applyForm.get('autorizaTratamientoDatos')?.value ? 'Si' : 'No',
        autorizaEnvioSMS: this.applyForm.get('autorizaEnvioSMS')?.value ? 'Si' : 'No',
        autorizaEnvioCorreo: this.applyForm.get('autorizaEnvioCorreo')?.value ? 'Si' : 'No',
        plan: this.applyForm.get('planMascota')?.value
      }],
      internalId: dynamicId,
      ccAviso: '',
      amountTotal: 4500,
      statusInsurance: "Pendiente"
    };
    debugger;
    this.insuranceService.saveInsuranceData(PolizaPlanMascotaDBData).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (errorResult) => {
        this.errorResponse = errorResult.error?.errores?.map((x: { error: any; }) => x.error) || ['Unknown error'];
      },
      complete: () => {
      }
    })
    debugger;
    const requestSession: RequestSession = {
      headRequest: {
        sociedad: "1000",
        cdFuente: "PRUEBA",
        refExterna: "123456789",
        cdFlujo: "CONPASARELA",
        authRdSura: {
          usuarioFuente: "RyebAe0qN0f4",
          passFuente: "99ZzqA7iYuEK44I1t3ylHR"
        }
      },
      redirectRequest: {
        buyer: {
          document: "1018421045",
          documentType: "CC",
          name: PolizaPlanMascotaDBData.contenido[0].primerNombreAsegurado, //"Andres"
          surname: PolizaPlanMascotaDBData.contenido[0].primerApellidoAsegurado,//"Reyna"
          mobile: PolizaPlanMascotaDBData.contenido[0].telefonoAsegurado //"3008543285"
        },
        payment: {
          description: "ty",
          amount: {
            currency: "COP",
            total: 4500.00
          }
        },
        paymentMethod: "",
        expiration: "2024-07-19T12:10-0500",
        ipAddress: "127.0.0.1",
        returnUrl: "http://localhost:4200/payment-callback?transaction_id=" + dynamicId,
        userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.62 Safari/537.36"
      }
    }

      this.insuranceService.authInsurance(requestSession).subscribe({
        next: (result) => {
          if (result.processUrl) {
            debugger;
              PolizaPlanMascotaDBData.ccAviso = result.cdAviso?? "";
              this.insuranceService.updateInsuranceData(PolizaPlanMascotaDBData).subscribe({
                next: (updatedData) =>{
                  if(result.processUrl)
                    window.location.href = result.processUrl;
                },
                error: (errorResult) => {
                  this.errorResponse = errorResult.error?.errores?.map((x: { error: any; }) => x.error) || ['Unknown error'];
                },
              });
          } else {
            console.error('Process URL is undefined');
          }
        },
        error: (errorResult) => {
          this.errorResponse = errorResult.error?.errores?.map((x: { error: any; }) => x.error) || ['Unknown error'];
        },
        complete: () => {      
        }
      });
  }

  //Animation Section
  


}
