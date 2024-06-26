/**
 * Plataforma Canales Masivos - API Plan Mascotas - Corresponsales
 * Servicios disponibles para el API de Plan Mascotas
 *
 * OpenAPI spec version: 1.0.1
 * Contact: ticanales@suramericana.com.co
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ContenidoExpedicion } from './contenidoExpedicion';

export interface PolizaPlanMascota { 
    contenido: Array<ContenidoExpedicion>;
}

export interface PolizaPlanMascotaDBData { 
    contenido: Array<ContenidoExpedicion>;
    internalId : String,
    ccAviso: string,
    amountTotal: number,
    statusInsurance: String
}
