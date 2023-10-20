import { Injectable } from '@angular/core';
import axios from 'axios';
import { Infobip, AuthType } from '@infobip-api/sdk';
@Injectable({
  providedIn: 'root'
})

export class SmsService {
  sm ="Le code de validation de Bon de Livraison est #Code: ";
   infobip = new Infobip({
    baseUrl: "https://j33e34.api.infobip.com",
    apiKey: "8b3b1a14fb0b6eb0518810c18d16c815-1f71f61b-40f7-4fa6-8947-a9ec5d92d6ae",
    authType: AuthType.ApiKey,
  });
  constructor() { }

public async sendMessage(message: number, phoneNumber:string): Promise<void> {

  // let respon = await this.infobip.channels.sms.send({
  //   type: "text",
  //   from: "SMS Validation De Bon",
  //   to: phoneNumber,
  //   content: {
  //     text: this.sm,
  //   },
  // });
  // let conso = await console.log(this.sm+message);

  const response = await axios.post(
    'https://j33e34.api.infobip.com/sms/2/text/advanced',

    {
      'messages': [
        {
          'destinations': [
            {
              'to': phoneNumber
            }
          ],
          'from': 'SMS De Validation De Bon',
          'text': this.sm+message
        }
      ]
    },
    {
      headers: {
        'Authorization': 'App 8b3b1a14fb0b6eb0518810c18d16c815-1f71f61b-40f7-4fa6-8947-a9ec5d92d6ae',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  );
}
}
