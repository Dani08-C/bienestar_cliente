import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HojaHistoria } from '../models/Salud/hojaHistoria.model';
import { ConsultaFisioterapia } from '../models/Salud/consultaFisioterapia.model';
import { Examen } from '../models/Salud/examen.model';
import { Diagnostico } from '../models/Salud/diagnostico.model';
import { TipoAntecedente } from '../models/Salud/tipoAntecedente.model';
import { Sistemas } from '../models/Salud/sistemas.model';
import { HistoriaClinica } from '../models/Salud/historiaClinica.model';
import { TipoExamen } from '../models/Salud/tipoExamen.model';
import { Antecedente } from '../models/Salud/antecedente.model';
import { ComposicionFamiliar } from '../models/Salud/composicionFamiliar.model';
import { Limites } from '../models/Salud/limites.model';
import { AntecedentePsicologia } from '../models/Salud/antecedentePsicologia.model';
import { ValoracionInterpersonal } from '../models/Salud/valoracionInterpersonal.model';
import { ComportamientoConsulta } from '../models/Salud/comportamientoConsulta.model';
import { DiagnosticoPsicologia } from '../models/Salud/DiagnosticoPsicologia.model';

@Injectable({
  providedIn: 'root'
})
export class SaludService {
  url = environment.SALUD;
  url2 = environment.PSICOLOGIA;
  query = '?query=';
  paciente = '';
  IdPersona: number | string;
  IdHistoria: number;
  constructor(private httpClient: HttpClient) { }

  getExamen(IdHistoriaClinica): Observable<Examen> {
    return this.httpClient.get<Examen>(this.url + 'Medicina/Examen' + this.query + 'HistoriaClinica.Id:' + `${IdHistoriaClinica}` + '&limit=-1');
  }
  getDiagnostico(IdHistoriaClinica): Observable<Diagnostico> {
    return this.httpClient.get<Diagnostico>(this.url + 'Medicina/Diagnostico' + this.query + 'HistoriaClinica.Id:' + `${IdHistoriaClinica}`);
  }
  getTipoAntecedente(): Observable<TipoAntecedente> {
    return this.httpClient.get<TipoAntecedente>(this.url + 'Medicina/TipoAntecedente');
  }
  getSistema(IdHistoriaClinica): Observable<Sistemas> {
    return this.httpClient.get<Sistemas>(this.url + 'Medicina/Sistema' + this.query + 'HistoriaClinica.Id:' + `${IdHistoriaClinica}` + '&limit=-1');
  }
  getTipoSistema(): Observable<Sistemas> {
    return this.httpClient.get<Sistemas>(this.url + 'Medicina/TipoSistema');
  }
  getHojaHistoria(IdPersona): Observable<HojaHistoria> {
    return this.httpClient.get<HojaHistoria>(this.url + 'Medicina/HojaHistoria/' + this.query + 'Persona:' + `${IdPersona}`);
  }
  getHistoriaClinica(): Observable<HistoriaClinica> {
    return this.httpClient.get<HistoriaClinica>(this.url + 'Medicina/HistoriaClinica');
  }
  getTipoExamen(): Observable<TipoExamen> {
    return this.httpClient.get<TipoExamen>(this.url + 'Medicina/TipoExamen');
  }
  getAntecedente(IdHistoriaClinica): Observable<Antecedente> {
    return this.httpClient.get<any>(this.url + 'Medicina/Antecedente/' + this.query + 'HistoriaClinica.Id:' + `${IdHistoriaClinica}` + '&limit=-1');
  }
  // Fisioterapia
  getConsultaFisioterapia(IdHistoriaClinica): Observable<ConsultaFisioterapia> {
    return this.httpClient.get<ConsultaFisioterapia>(this.url + 'Medicina/ConsultaFisioterapia/' + this.query + 'HistoriaClinica.Id:' + `${IdHistoriaClinica}`);
  }
  //Psicología
  getComposicionFamiliar(IdHistoriaClinica): Observable<ComposicionFamiliar> {
    return this.httpClient.get<ComposicionFamiliar>(this.url2 + 'Psicologia/ComposicionFamiliar/' + this.query + 'HistoriaClinicaId:' + `${IdHistoriaClinica}`);
  }
  getLimites(IdHistoriaClinica): Observable<Limites> {
    return this.httpClient.get<Limites>(this.url2 + 'Psicologia/Limites/' + this.query + 'HistoriaClinicaId:' + `${IdHistoriaClinica}`);
  }
  getAntecedentesPsicologicos(IdHistoriaClinica): Observable<AntecedentePsicologia> {
    return this.httpClient.get<AntecedentePsicologia>(this.url2 + 'Psicologia/Antecedente/' + this.query + 'HistoriaClinicaId:' + `${IdHistoriaClinica}`);
  }
  getValoracionInterpersonal(IdHistoriaClinica): Observable<ValoracionInterpersonal> {
    return this.httpClient.get<ValoracionInterpersonal>(this.url2 + 'Psicologia/ValoracionInterpersonal/' + this.query + 'HistoriaClinicaId:' + `${IdHistoriaClinica}`);
  }
  getComportamientoConslta(IdHistoriaClinica): Observable<ComportamientoConsulta> {
    return this.httpClient.get<ComportamientoConsulta>(this.url2 + 'Psicologia/ComportamientoConsulta/' + this.query + 'HistoriaClinicaId:' + `${IdHistoriaClinica}`);
  }
  getDiagnosticoPsicologia(IdHistoriaClinica): Observable<DiagnosticoPsicologia> {
    return this.httpClient.get<DiagnosticoPsicologia>(this.url2 + 'Psicologia/Diagnostico/' + this.query + 'HistoriaClinicaId:' + `${IdHistoriaClinica}`);
  }

  //Guardar y actualizar
  postFisioterapia(consultaFisioterapia: ConsultaFisioterapia): Observable<ConsultaFisioterapia> {
    return this.httpClient.post<ConsultaFisioterapia>(this.url + 'Medicina/ConsultaFisioterapia', consultaFisioterapia);
  }
  putFisioterapia(IdHojaHistoria: number, consultaFisioterapia: ConsultaFisioterapia): Observable<ConsultaFisioterapia> {
    console.log(this.url + `Medicina/ConsultaFisioterapia/${IdHojaHistoria}`, consultaFisioterapia);
    return this.httpClient.put<ConsultaFisioterapia>(this.url + `Medicina/ConsultaFisioterapia/${IdHojaHistoria}`, consultaFisioterapia);
  }
}
