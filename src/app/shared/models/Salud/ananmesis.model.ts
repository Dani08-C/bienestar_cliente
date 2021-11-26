import { HistoriaClinica } from "./historiaClinica.model";

export interface Anamnesis {
    Id?: number,
    HistoriaClinicaId?: HistoriaClinica | number,
    Alergias?: string,
    AntecedenteFamiliar?: string,
    Cardiopatias?: string,
    Cepillado?: number,
    Chicle?: string,
    Diabetes?: string,
    Dulces?: string,
    EnfermedadRespiratoria?: string,
    Enjuague?: number,
    FiebreReumatica?: string,
    Fuma?: string,
    Hemorragias?: string,
    Hepatitis?: string,
    Hipertension?: string,
    Irradiaciones?: string,
    Medicamentos?: string,
    Otros?: string,
    Seda?: number,
    Sinusitis?: string,
    Tratamiento?: string,
    UltimaVisita?: Date
}