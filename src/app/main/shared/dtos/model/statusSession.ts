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

export interface StatusSession { 
    /**
     * Respuesta del servicio
     */
    status?: string;
    reason?: string;
    /**
     * Descripción del mensaje
     */
    message?: string;
    /**
     * Fecha y hora en que se procesó la solicitud
     */
    date?: string;
}