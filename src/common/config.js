import RestController from "../controller/RestController";
import { URL } from "./constants"

export const controller = new RestController(URL);

export const policies = [
    { id: 1, policyNumber: '900557201', productNumber: '340', insuredId: '40499944', insuredFirstName: 'Avi', insuredLastName: 'Cohen' },
    { id: 2, policyNumber: '900557339', productNumber: '550', insuredId: '40499944', insuredFirstName: 'Avi', insuredLastName: 'Cohen' },
    { id: 3, policyNumber: '900557423', productNumber: '457', insuredId: '40499944', insuredFirstName: 'Avi', insuredLastName: 'Cohen' },

];