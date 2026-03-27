import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Lead {
    zip?: string;
    name: string;
    email?: string;
    timestamp: Time;
    details: string;
    phone: string;
    requestType: string;
    serviceNeeded: string;
}
export type Time = bigint;
export interface backendInterface {
    getLeadById(id: string): Promise<Lead>;
    getLeads(): Promise<Array<Lead>>;
    submitLead(name: string, phone: string, email: string | null, zip: string | null, serviceNeeded: string, details: string, requestType: string): Promise<void>;
}
