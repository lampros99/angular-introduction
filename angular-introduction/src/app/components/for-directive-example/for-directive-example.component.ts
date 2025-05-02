import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTabComponent } from '../person-tab/person-tab.component';

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTabComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
    name = 'Markos';
    // Step 1: One way binding of data
    users: Person[] = [
      {
        "givenName": "Barbi",
        "surName": "Carabet",
        "email": "bcarabet0@china.com.cn",
        "age": 1,
        "address": "15th Floor"
      }, {
        "givenName": "Sela",
        "surName": "Tym",
        "email": "stym1@phoca.cz",
        "age": 2,
        "address": "Apt 783"
      }, {
        "givenName": "Nathanil",
        "surName": "Mulqueen",
        "email": "nmulqueen2@list-manage.com",
        "age": 3,
        "address": "PO Box 42248"
      }, {
        "givenName": "Margarete",
        "surName": "Silliman",
        "email": "msilliman3@gov.uk",
        "age": 4,
        "address": "Suite 37"
      }, {
        "givenName": "Giselbert",
        "surName": "Syder",
        "email": "gsyder4@google.co.uk",
        "age": 5,
        "address": "10th Floor"
      }, {
        "givenName": "Rab",
        "surName": "Haw",
        "email": "rhaw5@t-online.de",
        "age": 6,
        "address": "PO Box 81469"
      }, {
        "givenName": "Jan",
        "surName": "Neeves",
        "email": "jneeves6@sitemeter.com",
        "age": 7,
        "address": "7th Floor"
      }, {
        "givenName": "Brandise",
        "surName": "Ferencowicz",
        "email": "bferencowicz7@ameblo.jp",
        "age": 8,
        "address": "Apt 311"
      }, {
        "givenName": "Julina",
        "surName": "Curnokk",
        "email": "jcurnokk8@reverbnation.com",
        "age": 9,
        "address": "Apt 1098"
      }, {
        "givenName": "Hank",
        "surName": "Cradock",
        "email": "hcradock9@hugedomains.com",
        "age": 10,
        "address": "Room 649"
      }, {
        "givenName": "Aurthur",
        "surName": "Johananov",
        "email": "ajohananova@desdev.cn",
        "age": 11,
        "address": "Suite 53"
      }, {
        "givenName": "Kaile",
        "surName": "Bolino",
        "email": "kbolinob@sciencedirect.com",
        "age": 12,
        "address": "20th Floor"
      }, {
        "givenName": "Rochelle",
        "surName": "Jochanany",
        "email": "rjochananyc@nyu.edu",
        "age": 13,
        "address": "Room 1290"
      }, {
        "givenName": "Franklin",
        "surName": "Inworth",
        "email": "finworthd@tripadvisor.com",
        "age": 14,
        "address": "Room 1357"
      }, {
        "givenName": "Lucille",
        "surName": "Sprasen",
        "email": "lsprasene@bbb.org",
        "age": 15,
        "address": "Suite 35"
      }, {
        "givenName": "Tamarra",
        "surName": "Panting",
        "email": "tpantingf@toplist.cz",
        "age": 16,
        "address": "Room 264"
      }, {
        "givenName": "Gustavus",
        "surName": "Stonehewer",
        "email": "gstonehewerg@mysql.com",
        "age": 17,
        "address": "PO Box 5958"
      }, {
        "givenName": "Reuben",
        "surName": "Purviss",
        "email": "rpurvissh@xinhuanet.com",
        "age": 18,
        "address": "10th Floor"
      }, {
        "givenName": "Danni",
        "surName": "Probets",
        "email": "dprobetsi@wunderground.com",
        "age": 19,
        "address": "Suite 40"
      }, {
        "givenName": "Allison",
        "surName": "Kingsnorth",
        "email": "akingsnorthj@amazonaws.com",
        "age": 20,
        "address": "Suite 34"
      }]
    
  }
  


   


