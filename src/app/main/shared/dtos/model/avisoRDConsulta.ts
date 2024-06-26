/**
 * API Recaudos y Desembolsos Sura - Colombia
 * Esta API ofrece operaciones para realizar recaudo, consulta de recaudo, creación de aviso (legalización) y registro de cartera. Sura - Colombia.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: sopinfo@sura.com.co
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Amount } from './amount';
import { BuyerConsulta } from './buyerConsulta';
import { DetailPaymentConsulta } from './detailPaymentConsulta';

export interface AvisoRDConsulta { 
    /**
     * Lista de avisos de recaudos
     */
    avsid?: string;
    /**
     * Lista de avisos de recaudos, es entregada al aliado y es diferente para ambiente de laboratorio y producción
     */
    cdFuente?: string;
    /**
     * Fecha de aviso
     */
    fecha?: string;
    /**
     * Hora de aviso
     */
    hora?: string;
    /**
     *  Lista de avisos de recaudos, es entregada al aliado y es diferente para ambiente de laboratorio y producción
     */
    usuario?: string;
    /**
     * Estado de la transacción en Sura
     */
    estado?: string;
    /**
     * Forma de pago del Aviso
     */
    formaPago?: string;
    /**
     * Respuesta del pago, los codigos se intepretan de la siguiente manera: 00 - Peticion Aprobada, PC - Peticion Activa, PT = Peticion Pendiente, PE = Petición Pendiente
     */
    cdResp?: string;
    /**
     * Descripción de respuesta de pago
     */
    dsResp?: string;
    /**
     * Identificador o número de aprobación del pago
     */
    semilla?: string;
    transaccion?: string;
    referencia3?: string;
    /**
     * Compañía de la Solución a recaudar; 1000 = Seguros Generales o 2000 =  Seguros de Vida
     */
    sociedad?: string;
    /**
     * Fecha de pago o fecha inicio de vigencia de la poliza
     */
    feBase?: string;
    /**
     * Estado de la transacción en Sura
     */
    estadoTx?: string;
    /**
     * Banco del recaudo ejemplo: VISA, PSE
     */
    banco?: string;
    /**
     * Consecutivo Único que del aviso
     */
    refExterna?: string;
    /**
     * Consecutivo único del pago en la pasarela
     */
    requestId?: string;
    amount?: Amount;
    buyer?: BuyerConsulta;
    detailPayment?: Array<DetailPaymentConsulta>;
}